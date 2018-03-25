import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { AppState, foodSelectors, selectSongs } from '../core/state';

import { Store } from '@ngrx/store';
import { OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit, OnDestroy {
  @Output() public startParty = new EventEmitter();

  public foodCount;
  public songCount;

  public counts = {
    bringing: 0,
    total: 0,
    songs: 0
  };

  public countPercentage = 0;

  constructor(private store: Store<AppState>) { }

  public ngOnInit() {
    this.foodCount = this.store.select(foodSelectors.counts)
    .subscribe((counts) => {
      this.counts = {...this.counts, ...counts};
      this.countPercentage = counts.bringing / counts.total * 100;
    });

    this.songCount = this.store.select(selectSongs).pipe(map((songs) => songs.addedSongs)).subscribe((songs) => {
      this.counts.songs = songs.length;
    });
  }

  public ngOnDestroy() {
    this.foodCount.unsubscribe();
    this.songCount.unsubscribe();
  }
}
