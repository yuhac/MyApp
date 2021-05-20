import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import {
  View, Text, Image, TouchableOpacity
} from 'react-native'
import Container from '../common/Container'
import Input from '../common/Input'
import Button from '../common/Button'
import Message from '../common/Message'
import Icon from '../common/Icon'

import styles from './styles'
import { REGISTER } from '../../constants/routeName'

const Login = ({ form, loading, errors, error, onChange, onSubmit }) => {
  const { navigate } = useNavigation()

  const [secureTextEntry, setSecureTextEntry] = useState(true)

  return (
    <Container>
      <Icon type='ion' name='logo-npm' size={50} style={styles.logoImage} />
      <View>
        <Text style={styles.title}></Text>
        <Text style={styles.subTitle}></Text>
      </View>
      <View style={styles.form}>
        <Message danger retry retryFn={onSubmit} message={error?.error} />
        <Input
          value={form.userName || null}
          label='账号'
          placeholder='请填入账号'
          onChangeText={(value) => onChange({ name: 'userName', value })}
          error={errors?.userName}
        />
        <Input
          label='密码'
          placeholder='请填入密码'
          secureTextEntry={secureTextEntry}
          onChangeText={(value) => onChange({ name: 'password', value })}
          icon={<TouchableOpacity onPress={() => setSecureTextEntry(!secureTextEntry)}>
            <Icon type='entypo' style={{ padding: 10 }} size={14} name={
              secureTextEntry ? 'eye' : 'eye-with-line'
            } />
          </TouchableOpacity>}
          iconPosition='right'
          error={errors?.password}
        />
        <Button title='登录' onPress={onSubmit} disabled={loading} loading={loading} />
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
