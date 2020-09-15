import { GET_LABELS } from './actionTypes'
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
