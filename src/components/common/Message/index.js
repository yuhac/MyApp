import React, { useState } from 'react'
import {
  View, Text, TouchableOpacity
} from 'react-native'
import colors from '../../../assets/theme/colors'
import styles from './styles'

const Message = ({ message, retry, retryFn, secondary, primary, danger, onClose }) => {
  const [closeState, setCloseState] = useState(false)

  const getBgColor = () => {
    return (
      secondary && colors.secondary ||
      primary && colors.primary ||
      danger && colors.danger ||
      colors.grey
    )
  }

  return (
    <>
      {
        closeState || !message ? null : <TouchableOpacity style={[styles.wrapper, { backgroundColor: getBgColor() }]}>
          <View style={styles.message}>
            <Text style={{ color: colors.white }}>{message} {
              // retry && <Text onPress={retryFn} style={styles.retry}>重试</Text>
            }</Text>
            {/* <TouchableOpacity onPress={() => {
              setCloseState(true)
              onClose && onClose()
            }}>
              <Text style={{ color: colors.white }}>X</Text>
            </TouchableOpacity> */}
          </View>
        </TouchableOpacity>
      }
    </>
  )
}

export default Message
