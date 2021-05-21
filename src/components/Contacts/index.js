import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { FlatList, View, Text, TouchableOpacity, ActivityIndicator } from 'react-native'
import colors from '../../assets/theme/colors'


import Modal from '../common/Modal'
import Empty from '../common/Empty'
import Icon from '../common/Icon'
import styles from './styles'
import { CONTACT_CREATE } from '../../constants/routeName'

const Contacts = ({ data, loading, modalVisible, setModalVisible }) => {
  const { navigate } = useNavigation()

  const ListEmptyComponent = () => {
    return null
    // return <Empty text='暂无数据' />
  }

  const ListFooterComponent = () => {
    return null
    // return <Empty text='到底了' />
  }

  const renderItem = ({ item }) => {
    const { name, phone } = item
    return (
      <TouchableOpacity style={styles.itemContainer}>
        <View style={styles.item}>
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>{name[0]}</Text>
          </View>
          <View style={styles.info}>
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.phone}>{phone}</Text>
          </View>
        </View>
        <Icon style={styles.icon} type='ant' name='right' size={16} />
      </TouchableOpacity>
    );
  }

  return (
    <>
      <View style={styles.wrapper}>
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
        {loading && (
          <Empty icon={
            <ActivityIndicator color={colors.grey} />
          } />
        )}

        {!loading && (
          <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            ItemSeparatorComponent={() => (<View style={styles.itemSeparator}></View>)}
            ListEmptyComponent={ListEmptyComponent}
            ListFooterComponent={ListFooterComponent}
          />
        )}
      </View>
      <TouchableOpacity style={styles.floatingActionButton} onPress={() => {
        navigate(CONTACT_CREATE)
      }}>
        <Icon type='ant' name='plus' style={styles.actionIcon} />
      </TouchableOpacity>
    </>
  )
}

export default Contacts
