import { combineReducers } from 'redux';

import HeaderColorsReducer from './reducer_headerColors';
import SearchQueryReducer from './reducer_searchQuery';
import ResultsReducer from './reducer_results';

const rootReducer = combineReducers({
  color: HeaderColorsReducer,
  query: SearchQueryReducer,
  results: ResultsReducer,
});

export default rootReducer;