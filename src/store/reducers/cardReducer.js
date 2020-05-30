import { GET_CARDS,  SET_ACTIVE_CARDS } '../actions/actionTypes';

const initialState = {
  active: [],
  available: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_CARDS:
      return {
        ...state,
        active: action.payload
      };
    case SET_ACTIVE_CARDS:
      return {
        ...state,
        available: action.payload
      };
    default:
      return state;
  }
}
