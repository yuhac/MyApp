import React from 'react'
import { View, Text, TouchableOpacity, Modal, ScrollView } from 'react-native'
import Icon from '../Icon'
import styles from './styles'

const AppModal = ({ title, modalBody, modalFooter, modalVisible, setModalVisible, }) => {
  return (
    <Modal visible={modalVisible} transparent >
      <TouchableOpacity onPress={() => setModalVisible(false)} style={styles.wrapper}>
        <View style={styles.modalView}>
          <ScrollView>
            <View style={styles.header}>
              <Text style={styles.title}>{title || 'title'}</Text>
              <Icon type='ant' size={20} name='close' />
            </View>
            <View style={styles.body}>{modalBody}</View>
            {modalFooter ? modalFooter :
              <View style={styles.footer}>
                <Text style={styles.footerText}>Terms</Text>
                <View style={styles.termsView}></View>
                <Text style={styles.footerText}>Terms</Text>
              </View>}
          </ScrollView>
        </View>
      </TouchableOpacity>
    </Modal>
  )
}

export default AppModal
