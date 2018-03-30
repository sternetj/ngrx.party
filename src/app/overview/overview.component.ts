import { Component, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';

import { AppState, foodSelectors, selectSongs, gameSelectors } from '../core/state';

import { Store } from '@ngrx/store';

import { combineLatest } from 'rxjs/observable/combineLatest';
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
  public countsSubscription;

    public counts = {
      food: {
        bringing: 0,
        total: 0,
      },
      games: 0,
      songs: 0,
  };

  public countPercentage = 0;

  constructor(private store: Store<AppState>) {}

  public ngOnInit() {
    this.countsSubscription = combineLatest(
      this.store.select(foodSelectors.counts),
      this.store.select(gameSelectors.counts),
      this.store.select(selectSongs).pipe(map((songs) => songs.addedSongs.length))
    ).subscribe(([foodCounts, gameCounts, songsCount]) => {
      this.counts.food.bringing = foodCounts.bringing;
      this.counts.food.total = foodCounts.total;
      this.countPercentage = foodCounts.bringing / foodCounts.total * 100;

      this.counts.games = gameCounts;
      this.counts.songs = songsCount;
    });
  }

  public ngOnDestroy() {
    this.countsSubscription.unsubscribe();
  }
}
