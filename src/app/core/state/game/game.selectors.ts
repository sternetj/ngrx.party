import { AppState } from '../index';

import { createSelector } from '@ngrx/store';

const selectAppState = (state: AppState) => state;

export const gameSelectors = {
    counts: createSelector(selectAppState, (state: AppState) => (state.game && state.game.games.length) || 0),
};
