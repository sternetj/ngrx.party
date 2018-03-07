import { Food } from './../../../shared/models/food';
import { Action } from '@ngrx/store';

export const GET_FOOD = '[Food] Get Food';
export const SET_FOOD = '[Food] Set Food';
export const ADD_FOOD = '[Food] Add Food';

export class GetFood implements Action {
  readonly type = GET_FOOD;
}

export class AddFood implements Action {
  readonly type = ADD_FOOD;

  constructor (public food: Food) { }
}

export class SetFood implements Action {
  readonly type = SET_FOOD;

  constructor (public food: Food[]) { }
}

export type Actions = SetFood | GetFood | AddFood;
