import React, { useContext } from 'react'
import { FlatList, View, Text } from 'react-native'
import { GlobalContext } from '../../context/Provider'
import Modal from '../common/Modal'

const Contacts = ({ modalVisible, setModalVisible }) => {
  const { contactsState: {
    getContacts: { data, loading }
  }, contactsDispatch } = useContext(GlobalContext)

  const renderItem = () => {

  }

  return (
    <View>
      <Modal
        title='title'
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        modalBody={
          <View>
            <Text>body</Text>
          </View>
        }
      />
      {
        <FlatList renderItem={renderItem} />
      }
    </View>
  )
}

export default Contacts
