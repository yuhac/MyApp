import React, { useState, useEffect } from 'react'
import {
  View, Text, TouchableOpacity, ActivityIndicator
} from 'react-native'
import colors from '../../../assets/theme/colors'
import styles from './styles'

const Button = ({ title, secondary, primary, danger, loading, disabled, onPress }) => {
  const getBgColor = () => {
    return (
      secondary && colors.secondary ||
      primary && colors.primary ||
      danger && colors.danger ||
      disabled && colors.grey ||
      colors.white
    )
  }

  return (
    <TouchableOpacity disabled={disabled} onPress={onPress} style={[styles.wrapper, { backgroundColor: getBgColor() }]}>
      <View style={styles.loaderSection}>
        {loading && <ActivityIndicator color={loading && colors.white} />}
        {title && <Text style={{ color: colors.white, paddingLeft: loading ? 6 : 0 }}>{title}</Text>}
      </View>
    </TouchableOpacity>
  )
}

export default Button
