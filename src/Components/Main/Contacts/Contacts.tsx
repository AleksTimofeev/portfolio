import React, {ChangeEvent, DetailedHTMLProps, TextareaHTMLAttributes, useEffect, useState} from 'react';
import styles from './Contacts.module.scss'
import Button from "../../Elements/Button";
import {sendMessage} from "../../../api/SendMessage";

export type DataMessageType = {
  name: string
  message: string
  email: string
  phone: string
  telegram: string
  linkedin: string
}

const Contacts = () => {

  const [res, setRes] = useState(null)
  const [error, setError] = useState(null)
  const [sendIsLoading, setSendIsLoading] = useState(false)
  const [data, setData] = useState<DataMessageType>({
    name: '',
    message: '',
    email: '',
    phone: '',
    telegram: '',
    linkedin: ''
  })

  const handleSend = () => {
    setSendIsLoading(true)
    sendMessage(data)
      .then(data => {
        setRes(data)
        setData({
          name: '',
          message: '',
          email: '',
          phone: '',
          telegram: '',
          linkedin: ''
        })
      })
      .catch(error => setError(error))
      setSendIsLoading(true)
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const inputName = e.currentTarget.name
    const value = e.currentTarget.value
    setData({...data, [inputName]: value})
  }
  const handleChangeMessage = (e: ChangeEvent<HTMLTextAreaElement>) => {
      setData({...data, message: e.currentTarget.value})
  }

  useEffect(() => {
  },[])

  return (
    <>
      <h2 className={styles.title}>Contacts</h2>
      <form className={styles.form}>
        <input onChange={handleChange} type={'text'} name={'name'} value={data.name} placeholder={'name...'} />
        <input onChange={handleChange} type={'email'} name={'email'} value={data.email} placeholder={'email...'} />
        <input onChange={handleChange} type={'phone'} name={'phone'} value={data.phone} placeholder={'phone...'} />
        {/*<input onChange={handleChange} type={'text'} name={'telegram'} value={data.telegram} placeholder={'telegram...'} />*/}
        {/*<input onChange={handleChange} type={'text'} name={'linkedin'} value={data.linkedin} placeholder={'linkedin...'} />*/}
        <textarea onChange={handleChangeMessage} value={data.message} placeholder={'your message...'}/>
      </form>
      <Button title={'Send'} onClick={handleSend} disabled={sendIsLoading} className={styles.button} />
    </>
  );
};

export default Contacts;