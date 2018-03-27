import { Component, OnInit, OnDestroy } from '@angular/core';

import { AppState, foodSelectors, gameSelectors } from '../core/state';

import { combineLatest } from 'rxjs/observable/combineLatest';

import { Store } from '@ngrx/store';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit, OnDestroy {
  public countsSubscription;

  public counts = {
    food: {
      bringing: 0,
      total: 0,
    },
    games: 0,
  };

  public countPercentage = 0;

  constructor(private store: Store<AppState>) {}

  public ngOnInit() {
    this.countsSubscription = combineLatest(
      this.store.select(foodSelectors.counts),
      this.store.select(gameSelectors.counts)
    ).subscribe(([foodCounts, gameCounts]) => {
      this.counts.food = foodCounts;
      this.countPercentage = this.counts.food.bringing / this.counts.food.total * 100;

      this.counts.games = gameCounts;
    });
  }

  public ngOnDestroy() {
    this.countsSubscription.unsubscribe();
  }
}
