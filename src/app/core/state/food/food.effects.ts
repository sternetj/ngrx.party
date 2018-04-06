import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, exhaustMap, tap } from 'rxjs/operators';

import { FoodService } from '../../../shared/services/food.service';

import { ADD_FOOD, UPDATE_FOOD, AddFood, CreateFood, UpdateFood, CREATE_FOOD } from './food.actions';

@Injectable()
export class FoodEffects {

  // Get All Food

// food-effect-add

// food-effect-update

  constructor(
    private foodService: FoodService,
    private actions$: Actions,
  ) {}
}
