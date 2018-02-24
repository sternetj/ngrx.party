import * as userActions from './user.actions';

export interface State {
  isSet: boolean;
  name: string;
  logo: string;
}

let defaultState: State = {
  isSet: false,
  name: '',
  logo: ''
};

const userInfo = window.localStorage.getItem('user-info');
if (userInfo) {
  defaultState = JSON.parse(userInfo);
}

export function reducer(state: State = defaultState, action: userActions.Actions) {
  switch (action.type) {
    case userActions.SET_USER:
      return {
        isSet: true,
        name: action.name,
        logo: action.logo
      };
    default:
      return state;
  }
}
