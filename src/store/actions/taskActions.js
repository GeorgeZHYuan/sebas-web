import {
  GET_TASKS,
  SET_ACTIVE_TASKS
} from './actionTypes'

import api from 'utils/api'

export const getTasks = (ids) => async dispatch => {
  try {
    const query = ids.join("+")
    const res = await api.get(`tasks/${query}`)

    const tasks = {}
    res.data.forEach((task) => {
      tasks[`${task._id}`] = task
    })

    dispatch({
      type: GET_TASKS,
      payload: tasks
    })
  } catch (e) {
    alert(e)
  }
}

export const setActiveTasks = (ids) => { dispatch, getState } => {
  const tasks = getState().tasks.available

  if (tasks.length == 0) {
    await getTasks(ids)
  }

  const activeTasks = []
  ids.forEach(id => {
    activeTasks.push(tasks[id])
  })

  dispatch({
    type: SET_ACTIVE_TASKS,
    payload: activeTasks
  })
}
