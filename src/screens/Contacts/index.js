import React, { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'

import {
  Text,
  TouchableOpacity,
} from 'react-native'
import Container from '../../components/common/Container'

const Contacts = () => {
  const { setOptions, toggleDrawer } = useNavigation()

  useEffect(() => {
    setOptions({
      headerLeft: () => {
        <TouchableOpacity onPress={() => { toggleDrawer() }}>
          <Text></Text>
        </TouchableOpacity>
      }
    })
  }, [])

  return (
    <Container>
      <Text>home</Text>
    </Container>
  );
}

export default Contacts
