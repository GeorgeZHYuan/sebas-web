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

export const setActiveLabels = (label) => async (dispatch, getState) => {
  const activeLabels = new Array(...getState().labels.active)
  const index = getActiveLabelIndex(label, activeLabels)

  if (index >= 0) {
    activeLabels.splice(index, 1)
  } else {
    activeLabels.push(label)
  }

  dispatch({
    type: SET_ACTIVE_LABELS,
    payload: activeLabels
  })
}

// return index of active labels and -1 if not active
const getActiveLabelIndex = (label, labels) => {
  for (var i = 0; i < labels.length; i++) {
    if (labels[i]._id === label._id) {
      return i
    }
  }
  return -1
}
