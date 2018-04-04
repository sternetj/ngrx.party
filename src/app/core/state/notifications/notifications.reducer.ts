import { Notification } from '../../../shared/models/notification';
import * as actions from './notifications.actions';
import { isArray } from 'util';

export interface State {
  notifications: Notification[];
}

const defaultState: State = {
  notifications: [],
};

export function reducer (state: State = defaultState, action: actions.Actions) {
  switch (action.type) {
    case actions.ADD_NOTIFICATION: {
      return {
        ...state,
        notifications: [...state.notifications, action.notification],
      };
    }
    case actions.CLEAR_NOTIFICATIONS: {
        return {
          ...state,
          notifications: [],
        };
      }
    default: {
      return state;
    }
  }
}
