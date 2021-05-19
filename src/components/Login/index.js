import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import {
  View, Text, Image, TouchableOpacity
} from 'react-native'
import Container from '../common/Container'
import Input from '../common/Input'
import Button from '../common/Button'
import styles from './styles'
import { REGISTER } from '../../constants/routeName'

const Login = () => {
  const { navigate } = useNavigation()

  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')
  const [secureTextEntry, setSecureTextEntry] = useState(true)

  return (
    <Container>
      <Image style={styles.logoImage} />
      <View>
        <Text style={styles.title}></Text>
        <Text style={styles.subTitle}>please login here</Text>
      </View>
      <View style={styles.form}>
        <Input
          label="账号"
          value={userName}
          placeholder="请填入账号"
          onChangeText={(text) => setUserName(text)}
        // error={"请填入账号"}
        />
        <Input
          label="密码"
          value={password}
          placeholder="请填入密码"
          secureTextEntry={secureTextEntry}
          onChangeText={(text) => setPassword(text)}
          icon={<Text onPress={() => setSecureTextEntry(!secureTextEntry)}>{secureTextEntry ? "show" : "hide"}</Text>}
          iconPosition="right"
        // error={"请填入密码"}
        />
        <Button title="登录" primary />
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
