import React, { createContext, useReducer } from 'react'

import authReducer from './reducers/auth'
import authInitialsState from './initialsStates/auth'

import contactsReducer from './reducers/contacts'
import contactsInitialState from './initialsStates/contacts'

export const GlobalContext = createContext({})

const GlobalProvider = ({ children }) => {
  const [authState, authDispatch] = useReducer(authReducer, authInitialsState)
  const [contactsState, contactsDispatch] = useReducer(contactsReducer, contactsInitialState)

  return (
    <GlobalContext.Provider value={{
      authState,
      authDispatch,
      contactsState,
      contactsDispatch
    }}>
      {children}
    </GlobalContext.Provider>
  )
}

export default GlobalProvider