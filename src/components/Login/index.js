import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import {
  View, Text, Image, TouchableOpacity
} from 'react-native'
import Container from '../common/Container'
import Input from '../common/Input'
import Button from '../common/Button'
import Message from '../common/Message'

import styles from './styles'
import { REGISTER } from '../../constants/routeName'

const Login = ({ loading, errors, error, onChange, onSubmit }) => {
  const { navigate } = useNavigation()

  const [secureTextEntry, setSecureTextEntry] = useState(true)

  return (
    <Container>
      <Image style={styles.logoImage} />
      <View>
        <Text style={styles.title}></Text>
        <Text style={styles.subTitle}>please login here</Text>
      </View>
      <View style={styles.form}>
        <Message danger retry retryFn={onSubmit} message={error?.error} />
        <Input
          label="账号"
          placeholder="请填入账号"
          onChangeText={(value) => onChange({ name: "userName", value })}
          error={errors?.userName}
        />
        <Input
          label="密码"
          placeholder="请填入密码"
          secureTextEntry={secureTextEntry}
          onChangeText={(value) => onChange({ name: "password", value })}
          icon={<Text onPress={() => setSecureTextEntry(!secureTextEntry)}>{secureTextEntry ? "show" : "hide"}</Text>}
          iconPosition="right"
          error={errors?.password}
        />
        <Button title="登录" onPress={onSubmit} disabled={loading} loading={loading} />
        <View style={styles.createSection}>
          <Text>创建新账户？</Text>
          <TouchableOpacity onPress={() => { navigate(REGISTER) }}>
            <Text style={styles.linkBtn}>注册</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Container>
  )
}

export default Login
