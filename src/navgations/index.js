import React, { useContext, useState, useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import DrawerNavigator from './DrawerNavigator'
import AuthNavigator from './AuthNavigator'
import { GlobalContext } from '../context/Provider'
// import AsyncStorage from '@react-native-async-storage/async-storage'

const AppNavContainer = () => {
  const { authState: { loginState } } = useContext(GlobalContext)

  const getUser = async () => {
    try {
      // const user = await AsyncStorage.getItem('user')
      // if (user) {
      //   setAuthLoaded(true)

      // }
    } catch (error) {

    }
  }

  useEffect(() => {
    getUser()
  })

  return (
    <NavigationContainer>
      {loginState ? <DrawerNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
}

export default AppNavContainer
