import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, exhaustMap, tap } from 'rxjs/operators';

import { FoodService } from '../../../shared/services/food.service';

import { GET_FOOD, ADD_FOOD, AddFood, SetFood } from './food.actions';
import { WebSocketService } from '../../../shared/services/websocket.service';

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

  @Effect({dispatch: false}) add$: Observable<Action> = this.actions$.pipe(
    ofType(ADD_FOOD),
    exhaustMap((action: AddFood) =>
      this.foodService.create(action.food).pipe(
        map(data => new AddFood(data)),
    ))
  );

  constructor(
    private foodService: FoodService,
    private actions$: Actions,
    private wsService: WebSocketService,
  ) {}
}
