import React from 'react'
import {
  View,
  Text,
} from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import { CONTACT_CREATE, CONTACT_INFO, CONTACT_LIST, SETTINGS } from '../constants/routeName'

import Contacts from '../screens/Contacts'
import ContactInfo from '../screens/ContactInfo'
import ContactCreate from '../screens/ContactCreate'
import Settings from '../screens/Settings'

const HomeNavigator = () => {
  const HomeStack = createStackNavigator()

  return (
    <HomeStack.Navigator initialRouteName={CONTACT_LIST}>
      <HomeStack.Screen name={CONTACT_LIST} component={Contacts} />
      <HomeStack.Screen name={CONTACT_INFO} component={ContactInfo} />
      <HomeStack.Screen name={CONTACT_CREATE} component={ContactCreate} />
      <HomeStack.Screen name={SETTINGS} component={Settings} />
    </HomeStack.Navigator>
  );
}

export default HomeNavigator
