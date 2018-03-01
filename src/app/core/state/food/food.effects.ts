import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, exhaustMap } from 'rxjs/operators';

import { FoodService } from '../../../shared/services/food.service';

import { GET_FOOD, SetFood } from './food.actions';

@Injectable()
export class FoodEffects {

  @Effect() fetch$: Observable<Action> = this.actions$.pipe(
    ofType(GET_FOOD),
    exhaustMap(action =>
      this.foodService.getAll().pipe(
        map(data => new SetFood(data)),
      )
    )
  );


  constructor(
    private foodService: FoodService,
    private actions$: Actions
  ) {}
}