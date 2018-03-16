import { Component, OnInit } from '@angular/core';

import { AppState, foodSelectors } from '../core/state';

import { Store } from '@ngrx/store';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {

  public foodCount$;
  public foodTotal$;

  public counts = {
    bringing: 0,
    total: 0,
  };

  constructor(private store: Store<AppState>) { }

  public ngOnInit() {
    this.foodCount$ = this.store.select(foodSelectors.counts)
    .subscribe((counts) => this.counts = counts);
  }

  public getFoodProgress() {
    return this.counts.bringing / this.counts.total * 100;
  }
}
