import { ActionReducerMap, createSelector } from '@ngrx/store';

import * as user from './user/user.reducer';
import * as food from './food/food.reducer';

export interface AppState {
  user: user.State;
  food: food.State;
}

export const reducers: ActionReducerMap<any> = {
  user: user.reducer,
  food: food.reducer
};

export const selectAppState = (state: AppState) => state;
export const selectUser = createSelector(selectAppState, (state: AppState) => state.user);
export const selectSupplies = createSelector(selectAppState, (state: AppState) => state.food);
export const selectFood = createSelector(selectSupplies, (state: food.State) => state.food);
