import { CONTACT_CREATE, CONTACT_INFO, CONTACT_LIST } from "../../constants/routeName"

const contacts = (state, { type, payload }) => {
  switch (type) {
    case CONTACT_LIST:
      return { ...state, payload }
    case CONTACT_INFO:
      return state
    case CONTACT_CREATE:
      return state
    default:
      return state
  }
}

export default contacts