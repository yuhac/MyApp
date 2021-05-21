import { useNavigation } from '@react-navigation/native'
import React, { useState, useContext } from 'react'
import { GlobalContext } from '../../context/Provider'
import { createContact } from '../../context/actions/contacts'

import ContactCreateComponent from '../../components/ContactCreate'
import { CONTACT_LIST } from '../../constants/routeName'

const ContactCreate = () => {
  const { navigate } = useNavigation()
  const [form, setForm] = useState({})
  const [errors, setErrors] = useState({})
  const { contactsState: {
    contactCreate: {
      loading
    }
  }, contactsDispatch } = useContext(GlobalContext)

  const onChange = ({ name, value }) => {
    setForm({ ...form, [name]: value })
    if (value) {
      setErrors(prev => ({ ...prev, [name]: null }))
    }
  }

  const onSubmit = () => {
    if (!form.name) {
      setErrors(prev => ({ ...prev, name: '请输入姓名' }))
    }
    if (!form.phone) {
      setErrors(prev => ({ ...prev, phone: '请输入手机' }))
    }
    if (form.name && form.phone) {
      createContact(form)(contactsDispatch)(() => {
        navigate(CONTACT_LIST)
      })
    }
  }

  return (
    <ContactCreateComponent
      form={form}
      errors={errors}
      loading={loading}
      onChange={onChange}
      onSubmit={onSubmit}
    />
  );
}

export default ContactCreate
