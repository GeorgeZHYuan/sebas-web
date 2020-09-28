import { SET_TASKS } from './actionTypes'

import api from 'utils/api'

export const setTasks = (labels) => async dispatch => {
  try {
    const labelsIds = new Array(...labels.map(label => label._id))
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
