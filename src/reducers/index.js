
import { combineReducers } from 'redux';

import songReducer from './songs/reducer';

const rootReducer = combineReducers({
  songReducer,
});

export default rootReducer;
