import { SET_TASKS } from './actionTypes'

import api from 'utils/api'

export const setTasks = () => async (dispatch, getState) => {
  console.log("Trying to Set Tasks")
  try {
    const ids = getState().labels.active.keys()

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
