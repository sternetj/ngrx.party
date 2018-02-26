import { Supply } from './../../../shared/models/supply';
import { Action } from '@ngrx/store';

export const ADD_SUPPLY = '[Supplies] Add Supply';

export class AddSupply implements Action {
  public type = ADD_SUPPLY;

  constructor (public supply: Supply) { }
}

export type Actions = AddSupply;
