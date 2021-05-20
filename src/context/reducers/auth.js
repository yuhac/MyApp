import {
  CLEAR_AUTH_STATE,
  REGISTER_FAIL,
  REGISTER_LOADING,
  REGISTER_SUCCESS,
  LOGIN_LOADING,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT_USER,
} from '../../constants/actionTypes'

const auth = (state, { type, payload }) => {
  switch (type) {
    case REGISTER_LOADING:
    case LOGIN_LOADING:
      return { ...state, loading: true }

    case REGISTER_SUCCESS:
      return { ...state, data: payload, loading: false }

    case LOGIN_SUCCESS:
      console.log('userinfo:--------', payload, type)
      return { ...state, userInfo: payload, loginState: true, loading: false }
    case REGISTER_FAIL:
    case LOGIN_FAIL:
      return { ...state, loading: false, error: payload }

    case CLEAR_AUTH_STATE:
      return {
        ...state, data: null, loading: false, error: null
      }
    case LOGOUT_USER:
      return {
        ...state, data: null, loading: false, error: null, loginState: null, userInfo: null
      }
    default:
      return state
  }
}

export default auth