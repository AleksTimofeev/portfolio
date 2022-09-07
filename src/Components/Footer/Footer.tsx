import React from 'react';
import styles from './Footer.module.scss'
import linkedinLogo from './../../Assets/Image/linkedin-logo.png'
import telegramLogo from './../../Assets/Image/telegram-logo.png'
import gitLogo from './../../Assets/Image/git-logo.png'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <h2 className={styles.title}>Aleksandr Timofeev</h2>
        <div className={styles.list}>
          <div className={styles.listItem}>
            <img height={'50px'} src={gitLogo} alt={'git logo'}/>
          </div>
          <div className={styles.listItem}>
            <img height={'50px'} src={linkedinLogo} alt={'linkedin logo'}/>
          </div>
          <div className={styles.listItem}>
            <img height={'50px'} src={telegramLogo} alt={'telegram logo'} />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;