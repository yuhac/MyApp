import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import HomeNavigator from './HomeNavigator'

const DrawerNavigator = () => {
  const Drawer = createDrawerNavigator()

  return (
    <Drawer.Navigator drawerType="slide">
      <Drawer.Screen name="Home" component={HomeNavigator} />
    </Drawer.Navigator>
  );
}

export default DrawerNavigator
