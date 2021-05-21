import {
  GET_CONTACT_LIST_LOADING,
  GET_CONTACT_LIST_SUCCESS,
  GET_CONTACT_LIST_FAIL,
  CREATE_CONTACT_LOADING,
  CREATE_CONTACT_SUCCESS,
  CREATE_CONTACT_FAIL
} from '../../constants/actionTypes'

const contacts = (state, { type, payload }) => {
  switch (type) {
    case GET_CONTACT_LIST_LOADING:
      return {
        ...state,
        getContacts: {
          ...state.getContacts,
          loading: true
        }
      }
    case GET_CONTACT_LIST_SUCCESS:
      return {
        ...state,
        getContacts: {
          ...state.getContacts,
          loading: false,
          data: payload
        }
      }

    case GET_CONTACT_LIST_FAIL:
      return {
        ...state,
        getContacts: {
          ...state.getContacts,
          loading: false,
          error: payload
        }
      }
    case CREATE_CONTACT_LOADING:
      return {
        ...state,
        contactCreate: {
          ...state.contactCreate,
          loading: true,
        }

      }
    case CREATE_CONTACT_SUCCESS:
      console.log(payload, '---payload----')
      return {
        ...state,
        contactCreate: {
          ...state.contactCreate,
          loading: false,
          data: payload
        },
        getContacts: {
          ...state.getContacts,
          data: [payload, ...state.getContacts.data]
        }
      }

    case CREATE_CONTACT_FAIL:
      return {
        ...state,
        contactCreate: {
          ...state.contactCreate,
          loading: false,
          error: payload
        }
      }
    default:
      return state
  }
}

export default contacts