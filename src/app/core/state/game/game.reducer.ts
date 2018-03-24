import { Game } from '../../../shared/models/game';
import * as actions from './game.actions';
import { isArray } from 'util';

export interface State {
  games: Game[];
}

const defaultState: State = {
  games: [],
};

export function reducer (state: State = defaultState, action: actions.Actions) {
  switch (action.type) {
    case actions.SET_GAME: {
      return {
        ...state,
        games: action.games,
      };
    }
    case actions.ADD_GAME: {
      return {
        ...state,
        game: [...state.games, action.game],
      };
    }
    default: {
      return state;
    }
  }
}
