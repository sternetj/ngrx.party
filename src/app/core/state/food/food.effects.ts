import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, exhaustMap, tap } from 'rxjs/operators';

import { FoodService } from '../../../shared/services/food.service';

import { GET_FOOD, ADD_FOOD, UPDATE_FOOD, AddFood, CreateFood, SetFood, UpdateFood, CREATE_FOOD } from './food.actions';
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

  @Effect() add$: Observable<Action> = this.actions$.pipe(
    ofType(CREATE_FOOD),
    exhaustMap((action: CreateFood) =>
      this.foodService.create(action.food, this.wsService.id).pipe(
        map(data => new AddFood(data)),
    ))
  );

  @Effect() update$: Observable<Action> = this.actions$.pipe(
    ofType(UPDATE_FOOD),
    exhaustMap((action: UpdateFood) =>
      this.foodService.update(action.food).pipe(
        map(data => new UpdateFood(data)),
    ))
  );

  constructor(
    private foodService: FoodService,
    private actions$: Actions,
    private wsService: WebSocketService,
  ) {}
}
