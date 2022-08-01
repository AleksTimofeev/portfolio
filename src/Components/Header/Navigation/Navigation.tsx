import React from 'react';
import styles from './Navigation.module.scss'

const Navigation = () => {
  return (
    <nav className={styles.wrapper}>
      <a href={'#about'}>About</a>
      <a href={'#skills'}>Skills</a>
      <a href={'#projects'}>Projects</a>
      <a href={'#contacts'}>Contacts</a>
    </nav>
  );
};

export default Navigation;