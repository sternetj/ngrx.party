import { Supply } from '../../../shared/models/supply';
import { environment } from '../../../../environments/environment';
import * as supplies from './supplies.actions';

export interface State {
  food: Supply[];
}

const defaultState: State = {
  food: [...environment.food]
};

export const reducer = (state = defaultState, action: supplies.Actions) => {
  switch (action.type) {
    case supplies.ADD_SUPPLY: {
      return {
        ...state,
        food: [...state.food, action.supply],
      };
    }
    default: {
      return state;
    }
  }
};
