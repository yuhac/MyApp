import React, { useState, useEffect, useContext } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import LoginComponent from '../../components/Login'
import { login } from '../../context/actions/auth'
import { GlobalContext } from '../../context/Provider'

const Login = () => {
  const { params } = useRoute()
  const [form, setForm] = useState({})
  const [errors, setErrors] = useState({})

  const { authDispatch, authState: { loading, error, userInfo } } = useContext(GlobalContext)

  useEffect(() => {
    if (params?.data) {
      setForm({ ...form, userName: params.data.userName })
    }
  }, [params])

  const onSubmit = () => {
    if (!form.userName) {
      setErrors(prev => ({ ...prev, userName: '请输入账号' }))
    }
    if (!form.password) {
      setErrors(prev => ({ ...prev, password: '请输入密码' }))
    }
    if (form.userName && form.password) {
      login(form)(authDispatch)
    }
  }
  const onChange = ({ name, value }) => {
    setForm({ ...form, [name]: value })
    if (value) {
      setErrors(prev => ({ ...prev, [name]: null }))
    }
  }

  return (
    <LoginComponent
      form={form}
      loading={loading}
      errors={errors}
      error={error}
      onChange={onChange}
      onSubmit={onSubmit}
    />
  );
}

export default Login
