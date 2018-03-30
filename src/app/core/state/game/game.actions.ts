import { Game } from './../../../shared/models/game';
import { Action } from '@ngrx/store';

export const GET_GAME = '[Game] Get Game';
export const CREATE_GAME = '[Game] Create Game';
export const ADD_GAME = '[Game] Add Game';
export const SET_GAME = '[Game] Set Game';

export class GetGame implements Action {
  readonly type = GET_GAME;
}

export class SetGame implements Action {
  readonly type = SET_GAME;

  constructor (public games: Game[]) { }
}

export class AddGame implements Action {
  readonly type = ADD_GAME;

  constructor (public game: Game) { }
}

export class CreateGame implements Action {
  readonly type = CREATE_GAME;

  constructor (public game: Game) { }
}


export type Actions = GetGame | SetGame | AddGame | CreateGame;
