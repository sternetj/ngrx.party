import { ActionReducerMap, createSelector } from '@ngrx/store';

import * as user from './user/user.reducer';

export interface AppState {
  user: user.State;
}

export const reducers: ActionReducerMap<any> = {
  user: user.reducer,
};

export const selectAppState = (state: AppState) => state;
export const selectUser = createSelector(selectAppState, (state: AppState) => state.user);
