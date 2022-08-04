import React from 'react';
import styles from './Footer.module.scss'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <h2 className={styles.title}>Aleksandr Timofeev</h2>
        <div className={styles.list}>
          <div className={styles.listItem}>001</div>
          <div className={styles.listItem}>002</div>
          <div className={styles.listItem}>003</div>
          <div className={styles.listItem}>004</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;