import { Alert } from 'react-native'
// import AsyncStorage from '@react-native-async-storage/async-storage'
import axios from '../../helpers/axios'
import {
  REGISTER_LOADING,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  CLEAR_AUTH_STATE,
  LOGIN_LOADING,
  LOGIN_SUCCESS,
  LOGIN_FAIL
} from '../../constants/actionTypes'


export const register = ({ userName }) => async dispatch => {
  dispatch({ type: REGISTER_LOADING })

  try {
    const res = await axios.get('/users', data)
    dispatch({ type: REGISTER_SUCCESS, payload: res.data[0] })
    AsyncStorage.setItem("user", res.data[0])
  } catch (err) {
    dispatch({
      type: REGISTER_FAIL, payload: err.response ? err.response.data : {
        error: '网络繁忙'
      }
    })
    Alert.alert("温馨提示",
      "网络繁忙",
      [
        {
          text: "确定",
          onPress: () => null,
          style: "cancel",
        },
      ]
    )

  }
}

export const clearAuthState = () => dispatch => {
  dispatch({ type: CLEAR_AUTH_STATE })
}

export const login = ({ userName, password }) => async dispatch => {
  dispatch({ type: LOGIN_LOADING })

  if (userName === 'admin' && password === 'admin') {
    try {
      const res = await axios.get('/users')
      dispatch({ type: LOGIN_SUCCESS, payload: res.data[0] })
    } catch (err) {
      dispatch({
        type: LOGIN_FAIL, payload: err.response ? err.response.data : {
          error: '网络繁忙'
        }
      })

    }
  } else {
    dispatch({
      type: LOGIN_FAIL, payload: {
        error: '用户名或密码错误'
      }
    })
  }

}