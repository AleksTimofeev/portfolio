import React from 'react';
import styles from './Contacts.module.scss'

const Contacts = () => {
  return (
    <>
      <h2 className={styles.title}>Contacts</h2>
      <form className={styles.form}>
        <input type={'text'} placeholder={'your name...'} />
        <input type={'email'} placeholder={'your email...'} />
        <textarea placeholder={'your message...'}/>
      </form>
    </>
  );
};

export default Contacts;