import {
  GET_TASKS,
  SET_ACTIVE_TASKS
} from '../actions/actionTypes';

const initialState = {
  active: [],
  available: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_TASKS:
      return {
        ...state,
        available: action.payload
      };
    case SET_ACTIVE_TASKS:
      return {
        ...state,
        active: action.payload
      };
    default:
      return state;
  }
}
