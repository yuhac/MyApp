import React from 'react'

import ZocialIcon from 'react-native-vector-icons/Zocial'
import OcticonIcon from 'react-native-vector-icons/Octicons'
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons'
import Ionicon from 'react-native-vector-icons/Ionicons'
import FoundationIcon from 'react-native-vector-icons/Foundation'
import EvilIcon from 'react-native-vector-icons/EvilIcons'
import EntypoIcon from 'react-native-vector-icons/Entypo'
import FAIcon from 'react-native-vector-icons/FontAwesome'
import FAIcon5 from 'react-native-vector-icons/FontAwesome5'
import FAIcon5Pro from 'react-native-vector-icons/FontAwesome5Pro'
import SimpleLineIcon from 'react-native-vector-icons/SimpleLineIcons'
import AntDesignIcon from 'react-native-vector-icons/AntDesign'
import FeatherIcon from 'react-native-vector-icons/Feather'
import FontistoIcon from 'react-native-vector-icons/Fontisto'

const getIconFont = type => {
  switch (type) {
    case 'zocial':
      return ZocialIcon
    case 'oct':
      return OcticonIcon
    case 'material':
      return MaterialIcon
    case 'materialCommunity':
      return MaterialCommunityIcon
    case 'ion':
      return Ionicon
    case 'foundation':
      return FoundationIcon
    case 'evil':
      return EvilIcon
    case 'entypo':
      return EntypoIcon
    case 'fontAwesome':
      return FAIcon
    case 'fontAwesome5':
      return FAIcon5
    case 'fontAwesome5Pro':
      return FAIcon5Pro
    case 'simpleLine':
      return SimpleLineIcon
    case 'ant':
      return AntDesignIcon
    case 'feather':
      return FeatherIcon
    case 'fontisto':
      return FontistoIcon
    default:
      return MaterialIcon
  }

}

const Icon = ({ type, ...props }) => {
  const FontIcon = getIconFont(type)
  return (
    <FontIcon {...props} />
  )
}

export default Icon
