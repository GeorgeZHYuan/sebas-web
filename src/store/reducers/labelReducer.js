import {
  GET_LABELS,
  GET_LABEL_GROUPS,
  SET_ACTIVE_LABELS
} from '../actions/actionTypes';

const initialState = {
  active: [],
  labels: [],
  groups: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_LABELS:
      return {
        ...state,
        labels: action.payload
      };
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
