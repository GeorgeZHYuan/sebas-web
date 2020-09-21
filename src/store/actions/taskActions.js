import { SET_TASKS } from './actionTypes'

import api from 'utils/api'

export const setTasks = () => async (dispatch, getState) => {
  try {
    const activeLabels = getState().labels.active
    const labelsIds = activeLabels.map(label => label._id)
    const url = `tasks?labels=${labelsIds.join("+")}`
    const res = await api.get(url)

    dispatch({
      type: SET_TASKS,
      payload: res.data
    })
  } catch (e) {
    alert(e)
  }
}
