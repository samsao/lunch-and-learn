import { combineReducers } from 'redux';
import AuthenticationReducer from '@mobile/reducers/auth';
import TalksReducer from '@mobile/reducers/talk_fetch';
import TalkSelectionReducer from '@mobile/reducers/talk_selection';

export default combineReducers({
  auth: AuthenticationReducer,
  talks: TalksReducer,
  selectedTalk: TalkSelectionReducer,
});
