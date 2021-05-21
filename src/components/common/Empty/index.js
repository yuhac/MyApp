import React from 'react'
import { View, Text } from 'react-native'
import styles from './styles'

const Empty = ({ text, icon }) => {
  return (
    <View style={styles.wrapper}>
      <View>{icon && icon}</View>
      <Text style={styles.text}>{text}</Text>
    </View>
  )
}

export default Empty
