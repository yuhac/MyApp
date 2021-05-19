import axios from 'axios'
import { Alert } from 'react-native'
import env from '../config/env'


const instance = axios.create({
  baseURL: env.API_URL,
  timeout: 3000,
  headers: { 'X-Custom-Header': 'foobar' }
})


instance.interceptors.request.use(async (config) => {
  const token = ''
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }

  return config

}, error => {
  console.log(error, '---err--request-----')
  return Promise.reject(error)
})

instance.interceptors.response.use(response => {
  console.log(response, '-----res---response')

  return response
}, error => {
  Alert.alert("温馨提示",
    "网络繁忙",
    [
      {
        text: "确定",
        onPress: () => null,
        style: "cancel",
      },
    ]
  )
  console.log(error, '---err--response-----')
  return Promise.reject(error)
})

export default instance