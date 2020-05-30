import { GET_LABELS,  SET_ACTIVE_LABELS} from '../actions/actionTypes';

const initialState = {
  active: [],
  available: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_LABELS:
      return {
        ...state,
        active: action.payload
      };
    case SET_ACTIVE_LABELS:
      return {
        ...state,
        available: action.payload
      };
    default:
      return state;
  }
}
