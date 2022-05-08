import React from 'react';
import styles from './Contacts.module.css'

const Contacts = () => {
  return (
    <>
      <h2 className={styles.title}>Contacts</h2>
      <form className={styles.form}>
        <input type={'text'} placeholder={'placeholder'} />
        <input type={'text'} placeholder={'placeholder'} />
        <textarea />
      </form>
    </>
  );
};

export default Contacts;