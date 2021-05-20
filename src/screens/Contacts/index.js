import React, { useState, useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'

import {
  TouchableOpacity,
} from 'react-native'

import ContactsComponent from '../../components/Contacts'
import Icon from '../../components/common/Icon'

const Contacts = () => {
  const { setOptions, toggleDrawer } = useNavigation()
  const [modalVisible, setModalVisible] = useState(false)

  useEffect(() => {
    setOptions({
      headerLeft: () => <TouchableOpacity onPress={() => { toggleDrawer() }}>
        <Icon type='material' size={24} style={{ padding: 10 }} name='menu' />
      </TouchableOpacity>
    })
  }, [])

  return <ContactsComponent modalVisible={modalVisible} setModalVisible={setModalVisible} />;
}

export default Contacts
