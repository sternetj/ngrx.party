import { ActionReducerMap, createSelector } from '@ngrx/store';

import * as user from './user/user.reducer';
import * as food from './food/food.reducer';
import * as game from './game/game.reducer';
import * as songs from './songs/songs.reducer';
import * as notifications from './notifications/notifications.reducer';

import { FoodEffects } from './food/food.effects';
import { GameEffects } from './game/game.effects';
import { SongsEffects } from './songs/songs.effects';

export interface AppState {
  user: user.State;
  food: food.State;
  game: game.State;
  songs: songs.State;
  notifications: notifications.State;
}

export const reducers: ActionReducerMap<any> = {
  user: user.reducer,
  food: food.reducer,
  game: game.reducer,
  songs: songs.reducer,
  notifications: notifications.reducer,
};

export const effects = [
  FoodEffects,
  GameEffects,
  SongsEffects,
];

export { foodSelectors } from './food/food.selectors';
export { gameSelectors } from './game/game.selectors';
export { notificationSelectors } from './notifications/notifciations.selectors';

export const selectAppState = (state: AppState) => state;
export const selectUser = createSelector(selectAppState, (state: AppState) => state.user);
export const selectSupplies = createSelector(selectAppState, (state: AppState) => state.food);
export const selectFood = createSelector(selectSupplies, (state: food.State) => state.food);
export const selectGames = createSelector(selectAppState, (state: AppState) => state.game && state.game.games);
export const selectSongs = createSelector(selectAppState, (state: AppState) => state.songs);
