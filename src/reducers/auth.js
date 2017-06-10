/* eslint-disable filenames/match-exported */
import _ from 'lodash';
// import User from '../models/user'
import * as AuthAPI from '@mobile/api/auth';
import * as Action from '@mobile/constants/actions/session';

const initialState = {
  authenticated: false,
  isLoading: false,
  // userId: undefined,
  loginFailed: false,
};

const authenticatedState = {
  authenticated: true,
  isLoading: false,
  // userId: action.data.id
};

type State = {
  authenticated: boolean,
  isLoading: boolean,
  loginFailed: boolean
};

export default function createReducer(
  state: State = initialState,
  action: { type: string }
) {
  switch (action.type) {
    case Action.LOGIN:
      return _.assign({}, state, { loginFailed: false, isLoading: true });
    case Action.LOGIN_FAILED:
      return _.assign({}, state, { loginFailed: true, isLoading: false });
    case Action.LOGIN_SUCCEEDED:
      return _.assign({}, state, authenticatedState);
    default:
      return state;
  }
}

function onLoginSucceeded(dispatch) {
  return dispatch({ type: Action.LOGIN_SUCCEEDED });
}

function onLoginFailed(dispatch) {
  return dispatch({ type: Action.LOGIN_FAILED });
}

export function emailLogin(email: string, password: string) {
  return (dispatch: any) => {
    dispatch({ type: Action.LOGIN });
    return AuthAPI.emailLogin(email, password)
      .then(onLoginSucceeded(dispatch))
      .catch(onLoginFailed(dispatch));
  };
}

export function socialLogin(token: string) {
  return (dispatch: any) => {
    dispatch({ type: Action.LOGIN });
    return AuthAPI.socialLogin(token)
      .then(dispatch({ type: Action.LOGIN_SUCCEEDED }))
      .catch(dispatch({ type: Action.LOGIN_FAILED }));
  };
}
