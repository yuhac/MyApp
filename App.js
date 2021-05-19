import 'react-native-gesture-handler'
import React from 'react'

import GlobalProvider from './src/context/Provider'
import AppNavContainer from './src/navgations'

const App = () => {
  return (
    <GlobalProvider>
      <AppNavContainer />
    </GlobalProvider>
  )
}

export default App
