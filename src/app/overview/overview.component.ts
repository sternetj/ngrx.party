import { Component, OnInit } from '@angular/core';

import { AppState, foodSelectors } from '../core/state';

import { Store } from '@ngrx/store';
import { OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit, OnDestroy {

  public foodCount;

  public counts = {
    bringing: 0,
    total: 0,
  };

  public countPercentage = 0;

  constructor(private store: Store<AppState>) { }

  public ngOnInit() {
    this.foodCount = this.store.select(foodSelectors.counts)
    .subscribe((counts) => {
      this.counts = counts;
      this.countPercentage = this.counts.bringing / this.counts.total * 100;
    });
  }

  public ngOnDestroy() {
    this.foodCount.unsubscribe();
  }
}
