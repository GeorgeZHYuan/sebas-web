import {
  GET_LABEL_GROUPS,
  SET_ACTIVE_LABELS
} from './actionTypes'

import api from 'utils/api'

// Get all Labels Groups
export const getLabelGroups = () => async dispatch => {
  try {
    const res = await api.get('/labelGroups')
    dispatch({
      type: GET_LABEL_GROUPS,
      payload: res.data
    })
  } catch (e) {
    alert(e)
  }
}

export const setActiveLabels = (id) => async (dispatch, getState) => {
  const activeLabels = getState().labels.active

  if (id in activeLabels) {
    delete activeLabels[id]
  } else {
    try {
      const res = await api.get(`/labels/${id}`)
      activeLabels[id] = res.data
    } catch (e) {
      alert(e)
    }
  }

  dispatch({
    type: SET_ACTIVE_LABELS,
    payload: activeLabels
  })
}
