import React, { useState, useEffect } from 'react'
import {
  View, TextInput, Text
} from 'react-native'
import colors from '../../../assets/theme/colors'
import styles from './styles'

const Input = ({ style, onChangeText, value, label, icon, iconPosition, error, ...props }) => {
  const [focused, setFocused] = useState(false)

  const getFlexDirection = () => {
    return icon && iconPosition === 'right' ? 'row-reverse' : 'row'
  }

  const getBorderColor = () => {
    if (error) return colors.danger
    return focused ? colors.primary : colors.grey
  }

  return (
    <View style={styles.inputContainer}>
      {label && <Text>{label}</Text>}

      <View style={[
        styles.wrapper,
        {
          flexDirection: getFlexDirection(),
          borderColor: getBorderColor()
        }
      ]}>
        <View>{icon && icon}</View>

        <TextInput
          style={[styles.textInput, style]}
          onChangeText={onChangeText}
          value={value}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          {...props}
        />
      </View>
      {error && <Text style={styles.error}>{error}</Text>}
    </View>
  )
}

export default Input
