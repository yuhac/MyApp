import React from 'react'
import { SafeAreaView, TouchableOpacity, Alert, View, Image, Text } from 'react-native'
import { SETTINGS } from '../../constants/routeName'
import { logout } from '../../context/actions/auth'

import Container from '../../components/common/Container'
import Icon from '../../components/common/Icon'

import styles from './styles'


const SlideMenu = ({ navigation, authDispatch }) => {
  const handleLogout = () => {
    navigation.toggleDrawer()
    Alert.alert('温馨提示', '退出账户', [
      {
        text: '取消',
        onPress: () => null
      },
      {
        text: '确定',
        onPress: () => {
          logout()(authDispatch)
        }
      }
    ])
  }

  const menuItems = [
    {
      icon: <Icon type='oct' name='settings' size={16} />,
      name: '设置',
      onPress: () => {
        navigation.navigate(SETTINGS)
      }
    },
    {
      icon: <Icon type='material' name='logout' size={16} />,
      name: '退出',
      onPress: handleLogout
    }
  ]


  return (
    <SafeAreaView>
      <Container>
        <Image style={styles.logoImage} />

        <View style={styles.menuItems}>
          {
            menuItems.map(({ icon, name, onPress }) => (
              <TouchableOpacity key={name} style={styles.menuItem} onPress={onPress}>
                <View>{icon}</View>
                <Text style={styles.itemText}>{name}</Text>
              </TouchableOpacity>
            ))
          }
        </View>
      </Container>
    </SafeAreaView>
  )
}

export default SlideMenu
