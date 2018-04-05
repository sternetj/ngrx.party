import { Food } from './../../../shared/models/food';
import { Action } from '@ngrx/store';

export const ADD_FOOD = '[Food] Add Food';
export const CREATE_FOOD = '[Food] Create Food';
export const UPDATE_FOOD = '[Food] Update Food';
// food-action-get-set-types

export class AddFood implements Action {
  readonly type = ADD_FOOD;

  constructor (public food: Food) { }
}

export class CreateFood implements Action {
  readonly type = CREATE_FOOD;

  constructor (public food: Food) { }
}

export class UpdateFood implements Action {
  readonly type = UPDATE_FOOD;

  constructor (public food: Food) { }
}

// food-action-get-set-actions

export type Actions = AddFood | UpdateFood | CreateFood;
