import React from 'react';
import styles from './Navigation.module.css'

const Navigation = () => {
  return (
    <nav className={styles.wrapper}>
      <a href={'#'}>About</a>
      <a href={'#'}>Skills</a>
      <a href={'#'}>Projects</a>
      <a href={'#'}>Contacts</a>
    </nav>
  );
};

export default Navigation;