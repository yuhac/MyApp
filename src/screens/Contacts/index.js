import React, { useState, useContext, useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'

import {
  TouchableOpacity,
} from 'react-native'
import { GlobalContext } from '../../context/Provider'
import { getContactList } from '../../context/actions/contacts'

import ContactsComponent from '../../components/Contacts'
import Icon from '../../components/common/Icon'

const Contacts = () => {
  const { setOptions, toggleDrawer } = useNavigation()
  const { contactsState: {
    getContacts: { data, loading }
  }, contactsDispatch } = useContext(GlobalContext)


  const [modalVisible, setModalVisible] = useState(false)

  useEffect(() => {
    setOptions({
      headerLeft: () => <TouchableOpacity onPress={() => { toggleDrawer() }}>
        <Icon type='material' size={24} style={{ padding: 10 }} name='menu' />
      </TouchableOpacity>
    })
    getContactList()(contactsDispatch)
  }, [])

  return <ContactsComponent
    data={data}
    loading={loading}
    modalVisible={modalVisible}
    setModalVisible={setModalVisible}
  />
}

export default Contacts
