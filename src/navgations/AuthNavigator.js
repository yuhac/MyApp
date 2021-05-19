import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { LOGIN, REGISTER } from '../constants/routeName'

import Login from '../screens/Login'
import Register from '../screens/Register'

const HomeNavigator = () => {
  const AuthStack = createStackNavigator()

  return (
    <AuthStack.Navigator screenOptions={{ headerShown: false }}>
      <AuthStack.Screen name={LOGIN} component={Login} />
      <AuthStack.Screen name={REGISTER} component={Register} />
    </AuthStack.Navigator>
  );
}

export default HomeNavigator
