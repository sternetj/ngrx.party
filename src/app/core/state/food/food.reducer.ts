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

      let newFood = [];

      if (isArray(action.food)) {
        newFood = [...state.food, ...(action.food as Food[])];
      } else {
        newFood = [...state.food, action.food]
      }

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
