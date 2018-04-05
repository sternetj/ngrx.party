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

  // Get All Food

  // Create Food

// food-effect-update

  constructor(
    private foodService: FoodService,
    private actions$: Actions,
    private wsService: WebSocketService,
  ) {}
}
