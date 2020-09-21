import {
  GET_LABEL_GROUPS,
  SET_ACTIVE_LABELS
} from '../actions/actionTypes';

const initialState = {
  active: {},
  groups: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_LABEL_GROUPS:
      return {
        ...state,
        groups: action.payload
      }
    case SET_ACTIVE_LABELS:
      return {
        ...state,
        active: action.payload
      };
    default:
      return state;
  }
}
