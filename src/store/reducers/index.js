import { combineReducers } from 'redux';
import labelReducer from './labelReducer';
import cardReducer from './cardReducer';

export default combineReducers({
  labels: labelReducer,
  cards: cardReducer
});
