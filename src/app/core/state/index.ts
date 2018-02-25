import { ActionReducerMap, createSelector } from '@ngrx/store';

import * as user from './user/user.reducer';
import * as supplies from './supplies/supplies.reducer';

export interface AppState {
  user: user.State;
  supplies: supplies.State;
}

export const reducers: ActionReducerMap<any> = {
  user: user.reducer,
  supplies: supplies.reducer
};

export const selectAppState = (state: AppState) => state;
export const selectUser = createSelector(selectAppState, (state: AppState) => state.user);
export const selectSupplies = createSelector(selectAppState, (state: AppState) => state.supplies);
export const selectFood = createSelector(selectSupplies, (state: supplies.State) => state.food);
