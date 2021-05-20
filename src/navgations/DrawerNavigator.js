import React, { useContext } from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import HomeNavigator from './HomeNavigator'
import SlideMenu from './SlideMenu';

import { GlobalContext } from '../context/Provider'

const getDrawerContent = (navigation, authDispatch) => {
  return (
    <SlideMenu navigation={navigation} authDispatch={authDispatch} />
  )
}

const DrawerNavigator = () => {
  const Drawer = createDrawerNavigator()
  const { authDispatch } = useContext(GlobalContext)

  return (
    <Drawer.Navigator drawerType='slide'
      drawerContent={({ navigation }) => getDrawerContent(navigation, authDispatch)}>
      <Drawer.Screen name='Home' component={HomeNavigator} />
    </Drawer.Navigator>
  );
}

export default DrawerNavigator
