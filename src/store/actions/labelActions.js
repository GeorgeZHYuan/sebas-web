import {
  GET_LABELS,
  SET_ACTIVE_LABELS
} from './actionTypes'

import api from 'utils/api'

// Get all Labels
export const getLabels = () => async dispatch => {
  try {
    const res = await api.get('/labelGroups')
    dispatch({
      type: GET_LABELS,
      payload: res.data
    })
  } catch (e) {
    alert(e)
  }
}

export const setActiveLabels = (id) => (dispatch, getState) => {
  const activeLabels = getState().labels.active
  const index = activeLabels.indexOf(id)

  // Add id if not in arr otherwise remove it
  if (index > -1) {
    activeLabels.splice(index, 1)
    dispatch({
      type: SET_ACTIVE_LABELS,
      payload: activeLabels
    })
  } else {
    dispatch({
      type: SET_ACTIVE_LABELS,
      payload: [...activeLabels, id]
    })

  }
}
