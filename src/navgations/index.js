import React, { useContext, useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import DrawerNavigator from './DrawerNavigator'
import AuthNavigator from './AuthNavigator'
import { GlobalContext } from '../context/Provider'

const AppNavContainer = () => {
  const { authState: { loginState } } = useContext(GlobalContext)

  useEffect(() => {
    console.log(loginState, '--loginSta1te---------')
  }, [loginState])

  return (
    <NavigationContainer>
      {loginState ? <DrawerNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
}

export default AppNavContainer
