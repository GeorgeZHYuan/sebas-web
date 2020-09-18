import { combineReducers } from 'redux';
import labelReducer from './labelReducer';
import taskReducer from './taskReducer';

export default combineReducers({
  labels: labelReducer,
  tasks: taskReducer
});
