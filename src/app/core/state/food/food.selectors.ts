import { AppState } from '../index';

import { createSelector } from '@ngrx/store';

const selectAppState = (state: AppState) => state;

export const foodSelectors = {
    counts: createSelector(selectAppState, (state: AppState) => {
        let totalCount = 0;
        let bringingCount = 0;

        state.food.food.forEach((food) => {
            totalCount += food.count;
            bringingCount += food.users.length;
        });

        return {
         total: totalCount,
         bringing: bringingCount,
        };
    }),
};
