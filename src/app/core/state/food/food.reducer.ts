import { Food } from '../../../shared/models/food';
import * as actions from './food.actions';
import { isArray } from 'util';

export interface State {
  food: Food[];
}

const defaultState: State = {
  food: [],
};

export function reducer (state: State = defaultState, action: actions.Actions) {
  switch (action.type) {
    case actions.SET_FOOD: {
      return {
        ...state,
        food: action.food,
      };
    }
    case actions.ADD_FOOD: {
      return {
        ...state,
        food: [...state.food, action.food],
      };
    }
    default: {
      return state;
    }
  }
}
