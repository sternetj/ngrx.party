import { AppState } from '../index';

import { createSelector } from '@ngrx/store';

const selectAppState = (state: AppState) => state;

export const notificationSelectors = {
    notifications: createSelector(selectAppState, (state: AppState) => {
        return state.notifications.notifications;
    }),
};
