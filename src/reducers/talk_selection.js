/* eslint-disable filenames/match-exported */
import _ from 'lodash';
import * as Action from '@mobile/constants/actions/talk';

type State = {
  id: ?string
};
const initialState: State = {
  id: null,
};

export default function createReducer(
  state: State = initialState,
  action: { type: string, data: string }
) {
  switch (action.type) {
    case Action.SELECT_TALK:
      if (state.id === action.data) {
        return _.assign({}, state, { id: undefined });
      }
      return _.assign({}, state, { id: action.data });
    default:
      return state;
  }
}

export function selectTalk(id: string) {
  return (dispatch: any) => {
    dispatch({ type: Action.SELECT_TALK, data: id });
  };
}
