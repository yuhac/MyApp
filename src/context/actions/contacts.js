import {
  GET_CONTACT_LIST_LOADING,
  GET_CONTACT_LIST_SUCCESS,
  CREATE_CONTACT_LOADING,
  CREATE_CONTACT_SUCCESS,
  CREATE_CONTACT_FAIL
} from '../../constants/actionTypes'
import axios from '../../helpers/axios'

export const getContactList = () => async dispatch => {
  dispatch({ type: GET_CONTACT_LIST_LOADING })
  try {
    const res = await axios.get('users')
    dispatch({
      type: GET_CONTACT_LIST_SUCCESS,
      payload: []
    })
  } catch (error) {
    dispatch({
      type: GET_CONTACT_LIST_FAIL,
      payload: error.response ? error.response.data : {
        error: '网络繁忙'
      }
    })
  }
}

export const createContact = (data) => dispatch => async onSuccess => {
  dispatch({ type: CREATE_CONTACT_LOADING })
  try {
    const res = await axios.get('users')
    dispatch({
      type: CREATE_CONTACT_SUCCESS,
      payload: { ...data, id: new Date().getTime() }
    })
    onSuccess()
  } catch (error) {
    dispatch({
      type: CREATE_CONTACT_FAIL,
      payload: error.response ? error.response.data : {
        error: '网络繁忙'
      }
    })
  }
}