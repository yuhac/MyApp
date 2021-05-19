import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import {
  View, Text, Image, TouchableOpacity
} from 'react-native'
import Container from '../common/Container'
import Input from '../common/Input'
import Button from '../common/Button'
import styles from './styles'
import { LOGIN } from '../../constants/routeName'

const Register = ({ form, errors, onChange, onSubmit, loading, error }) => {
  const { navigate } = useNavigation()

  const [secureTextEntry, setSecureTextEntry] = useState(true)

  return (
    <Container>
      <View>
        <Text style={styles.title}></Text>
        <Text style={styles.subTitle}>Create a free account</Text>
      </View>
      <View style={styles.form}>
        <Input
          label="账号"
          placeholder="请填入账号"
          onChangeText={(value) => onChange({ name: "userName", value })}
          error={errors.userName}
        />
        <Input
          label="邮箱"
          placeholder="请填入邮箱"
          onChangeText={(value) => onChange({ name: "email", value })}
          error={errors.email}
        />
        <Input
          label="密码"
          placeholder="请填入密码"
          secureTextEntry={secureTextEntry}
          onChangeText={(value) => onChange({ name: "password", value })}
          icon={<Text onPress={() => setSecureTextEntry(!secureTextEntry)}>{secureTextEntry ? "show" : "hide"}</Text>}
          iconPosition="right"
          error={errors.password}
        />
        <Button title="注册" onPress={onSubmit} disabled={loading} loading={loading} primary />
        <View style={styles.createSection}>
          <Text>创建新账户？</Text>
          <TouchableOpacity onPress={() => { navigate(LOGIN) }}>
            <Text style={styles.linkBtn}>登录</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Container>
  )
}

export default Register
