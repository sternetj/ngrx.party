import * as actions from './songs.actions';
import { Song } from '../../../shared/models/song';

export interface State {
  search: string;
  searching: boolean;
  searchResults: Song[];
  addedSongs: Song[];
}

const defaultState: State = {
  search: undefined,
  searching: false,
  searchResults: [],
  addedSongs: [],
};

export function reducer(state = defaultState, action: actions.Actions) {
  switch (action.type) {
    case actions.UPDATE_SEARCH: {
      return {
        ...state,
        searching: true,
        search: action.search,
      };
    }
    case actions.CLEAR_SEARCH: {
      return {
        ...state,
        searching: false,
        search: undefined,
        searchResults: [],
      };
    }
    case actions.SET_SEARCH_RESULTS: {
      return {
        ...state,
        searching: false,
        searchResults: action.songs,
      };
    }
    case actions.SET_ADDED_SONGS: {
      return {
        ...state,
        addedSongs: [...action.songs],
      };
    }
    case actions.ADD_SONG: {
      return {
        ...state,
        addedSongs: [...state.addedSongs, action.song],
        searchResults: [],
        searching: false,
        search: undefined,
      };
    }
    default: {
      return state;
    }
  }
}
