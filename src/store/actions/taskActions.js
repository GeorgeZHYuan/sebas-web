import { SET_TASKS } from './actionTypes'

import api from 'utils/api'

export const setTasks = (ids) => async dispatch => {
  try {
    const query = ids.join("+")
    const res = await api.get(`tasks/${query}`)

    const tasks = {}
    res.data.forEach((task) => {
      tasks[`${task._id}`] = task
    })

    dispatch({
      type: SET_TASKS,
      payload: tasks
    })
  } catch (e) {
    alert(e)
  }
}
