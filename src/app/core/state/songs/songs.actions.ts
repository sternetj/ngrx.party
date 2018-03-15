import { Action } from '@ngrx/store';
import { Song } from '../../../shared/models/song';

export const UPDATE_SEARCH = '[Songs] Update Search';
export const CLEAR_SEARCH = '[Songs] Clear Search';
export const SET_SEARCH_RESULTS = '[Songs] Set Search Results';
export const SET_ADDED_SONGS = '[Songs] Set Added Songs';
export const ADD_SONG = '[Songs] Add Songs';
export const GET_ALL_SONGS = '[Songs] Get All Songs';

export class UpdateSearch implements Action {
  readonly type = UPDATE_SEARCH;

  constructor(public search: string) {}
}

export class ClearSearch implements Action {
  readonly type = CLEAR_SEARCH;
}

export class GetAllSongs implements Action {
  readonly type = GET_ALL_SONGS;
}

export class SetSearchResults implements Action {
  readonly type = SET_SEARCH_RESULTS;

  constructor(public songs: Song[]) {}
}

export class SetAddedSongs implements Action {
  readonly type = SET_ADDED_SONGS;

  constructor(public songs: Song[]) {}
}

export class AddSong implements Action {
  readonly type = ADD_SONG;

  constructor(public song: Song) {}
}

export type Actions = UpdateSearch | ClearSearch | SetSearchResults | SetAddedSongs | AddSong | GetAllSongs;
