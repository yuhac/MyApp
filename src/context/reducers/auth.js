import { REGISTER_USER, REQ_FAIL, REQ_LOADING, REQ_SUCCESS } from "../../constants/actionTypes"

const auth = (state, { type, payload }) => {
  switch (type) {
    case REQ_LOADING:
      return { ...state, loading: true }
    case REQ_SUCCESS:
      return { ...state, loading: false }
    case REQ_FAIL:
      return { ...state, loading: false, error: payload }
    case REGISTER_USER:
      return { ...state, data: payload }
    default:
      return state
  }
}

export default auth