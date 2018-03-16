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
    case actions.UPDATE_FOOD: {
      const updateFoodIndex = state.food.findIndex(f => f.id === action.food.id);

      const newFood = [...state.food];

      newFood[updateFoodIndex] = action.food;

      return {
        ...state,
        food: newFood,
      };
    }
    default: {
      return state;
    }
  }
}
