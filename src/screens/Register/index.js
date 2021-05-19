import React, { useState, useContext } from 'react'
import RegisterComponent from '../../components/Register';
import { register } from '../../context/actions/auth'
import { GlobalContext } from '../../context/Provider';


const Register = () => {
  const [form, setForm] = useState({})
  const [errors, setErrors] = useState({})
  const { authDispatch, authState: { loading, error } } = useContext(GlobalContext)
  const onChange = ({ name, value }) => {
    setForm({ ...form, [name]: value })
    if (value) {
      setErrors(prev => ({ ...prev, [name]: null }))
    }
  }
  const onSubmit = () => {
    if (!form.userName) {
      setErrors(prev => ({ ...prev, userName: "请输入用户名" }))
    }
    if (!form.email) {
      setErrors(prev => ({ ...prev, email: "请输入邮箱" }))
    }
    if (!form.password) {
      setErrors(prev => ({ ...prev, password: "请输入密码" }))
    }

    if (Object.keys(form).length === 3 && Object.values(form).every(item => item.trim().length > 0) && Object.values(errors).every(item => !item)) {
      register(form)(authDispatch)
    }
  }

  return (
    <RegisterComponent
      form={form}
      errors={errors}
      onChange={onChange}
      onSubmit={onSubmit}
      loading={loading}
      error={error}
    />
  );
}

export default Register
