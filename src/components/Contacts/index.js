import React from 'react'
import { View, Text } from 'react-native'
import Modal from '../common/Modal'

const Contacts = ({ modalVisible, setModalVisible }) => {
  return (
    <View>
      <Modal modalVisible={modalVisible} setModalVisible={setModalVisible} />
    </View>
  )
}

export default Contacts
