/* eslint-disable filenames/match-exported */
import _ from 'lodash';
import * as Action from '@mobile/constants/actions/talk';
import Talk from '@mobile/models/talk';
import talks from '@mobile/mock/talks.json';

export type TalkState = {
  isLoading: boolean,
  data: Talk[],
  failed: boolean
};
const initialState: TalkState = {
  isLoading: false,
  data: [],
  failed: false,
};

export default function createReducer(
  state: TalkState = initialState,
  action: { type: string, data: any }
) {
  switch (action.type) {
    case Action.FETCH_TALKS:
      return _.assign({}, state, { isLoading: true, failed: false });
    case Action.FETCH_TALKS_FAILED:
      return _.assign({}, state, { isLoading: false, failed: true });
    case Action.RECEIVED_TALKS:
      return _.assign({}, state, { isLoading: false, data: action.data });
    default:
      return state;
  }
}

export function fetchTalks() {
  return (dispatch: any) => {
    dispatch({ type: Action.FETCH_TALKS });
    return dispatch({ type: Action.RECEIVED_TALKS, data: talks });
  };
}
