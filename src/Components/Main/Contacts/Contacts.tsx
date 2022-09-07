import React from 'react';
import styles from './Contacts.module.scss'
import Button from "../../Elements/Button";

const Contacts = () => {

  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    alert('the message has been sent')
  }

  return (
    <>
      <h2 className={styles.title}>Contacts</h2>
      <form className={styles.form}>
        <input type={'text'} placeholder={'your name...'} />
        <input type={'email'} placeholder={'your email...'} />
        <textarea placeholder={'your message...'}/>
      </form>
      <Button title={'Send'} onClick={handleClick} className={styles.button}/>
    </>
  );
};

export default Contacts;