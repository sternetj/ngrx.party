import { Action } from '@ngrx/store';

export const SAVE_USER = '[User] Save User';
export const SET_USER = '[User] Set User';

export class SaveUser implements Action {
  readonly type = SAVE_USER;
}

export class SetUser implements Action {
  readonly type = SET_USER;

  constructor(public name: string, public logo: string) {}
}

export type Actions = SaveUser | SetUser;
