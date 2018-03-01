import { Food } from './../../../shared/models/food';
import { Action } from '@ngrx/store';

export const GET_FOOD = '[Food] Get Food';
export const SET_FOOD = '[Food] Set Food';

export class GetFood implements Action {
  public type = GET_FOOD;
}

export class SetFood implements Action {
  public type = SET_FOOD;

  constructor (public food: Food | Food[]) { }
}

// Why can't I export GetFood?
export type Actions = SetFood;
