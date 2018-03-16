import { ActionReducerMap, createSelector } from '@ngrx/store';

import * as user from './user/user.reducer';
import * as food from './food/food.reducer';
import * as songs from './songs/songs.reducer';

import { FoodEffects } from './food/food.effects';
import { SongsEffects } from './songs/songs.effects';

export interface AppState {
  user: user.State;
  food: food.State;
  songs: songs.State;
}

export const reducers: ActionReducerMap<any> = {
  user: user.reducer,
  food: food.reducer,
  songs: songs.reducer,
};

export const effects = [
  FoodEffects,
  SongsEffects,
];

export { foodSelectors } from './food/food.selectors';

export const selectAppState = (state: AppState) => state;
export const selectUser = createSelector(selectAppState, (state: AppState) => state.user);
export const selectSupplies = createSelector(selectAppState, (state: AppState) => state.food);
export const selectFood = createSelector(selectSupplies, (state: food.State) => state.food);
export const selectSongs = createSelector(selectAppState, (state: AppState) => state.songs);
