import {
  SET_TASKS
} from '../actions/actionTypes';

const initialState = {
  active: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_TASKS:
      return {
        ...state,
        available: action.payload
      };
    default:
      return state;
  }
}
