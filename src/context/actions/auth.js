import axios from '../../helpers/axios'
import { REQ_LOADING, REQ_SUCCESS, REQ_FAIL, REGISTER_USER } from '../../constants/actionTypes'

export const register = (data) => async dispatch => {
  dispatch({ type: REQ_LOADING })
  try {
    const res = await axios.post('/auth/register', data)
    setTimeout(() => dispatch({ type: REQ_SUCCESS }), 3000)
    dispatch({ type: REGISTER_USER, payload: data })
  } catch (err) {

    dispatch({
      type: REQ_FAIL, payload: err.response ? err.response.data : {
        error: '网络繁忙'
      }
    })
  }
}