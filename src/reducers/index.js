import { combineReducers } from 'redux';
import ResultsReducer from './reducer_resuls';

const rootReducer = combineReducers({
  result: ResultsReducer,
});

export default rootReducer;