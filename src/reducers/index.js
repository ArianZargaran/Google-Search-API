import { combineReducers } from 'redux';
import ResultsReducer from './reducer_results';
import HeaderColorsReducer from './reducer_headerColors';

const rootReducer = combineReducers({
  results: ResultsReducer,
  color: HeaderColorsReducer,
});

export default rootReducer;