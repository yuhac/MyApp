import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { FlatList, View, Text, TouchableOpacity, ActivityIndicator } from 'react-native'
import colors from '../../assets/theme/colors'

import Container from '../common/Container'
import Button from '../common/Button'
import Input from '../common/Input'
import Icon from '../common/Icon'
import styles from './styles'

const ContactCreate = ({ form, errors, onChange, onSubmit, loading }) => {

  return (
    <Container style={styles.container}>
      <View style={styles.avatar}>
        <Icon style={styles.avatarIcon} type='fontAwesome' name='user' />
      </View>
      <TouchableOpacity>
        <Text style={styles.chooseText}>更换头像</Text>
      </TouchableOpacity>
      <View style={styles.form}>
        <Input
          label='姓名'
          icon={<Icon type='simpleLine' name='user' style={styles.icon} />}
          placeholder='请输入姓名'
          onChangeText={(value) => onChange({ name: 'name', value })}
          error={errors?.name}
        />
        <Input
          label='邮箱'
          icon={<Icon type='fontisto' name='email' style={styles.icon} />}
          placeholder='请输入邮箱'
          onChangeText={(value) => onChange({ name: 'email', value })}
        />
        <Input
          label='手机'
          icon={<Icon type='simpleLine' name='screen-smartphone' style={styles.icon} />}
          placeholder='请输入手机'
          onChangeText={(value) => onChange({ name: 'phone', value })}
          error={errors?.phone}
        />
        <Button
          title='确定'
          loading={loading}
          disabled={loading}
          onPress={onSubmit}
        />
      </View>
    </Container>
  )
}

export default ContactCreate
