import { Action } from '@ngrx/store';

export const SET_USER = '[User] Set User';

export class SetUser implements Action {
  readonly type = SET_USER;

  constructor(public name: string, public logo: string) {}
}

export type Actions = SetUser;
