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
            <a href={'https://github.com/AleksTimofeev'} target={'_blank'} rel={'noreferrer'}>
              <img height={'50px'} src={gitLogo} alt={'git logo'}/>
            </a>
          </div>
          <div className={styles.listItem}>
            <a href={
              'https://www.linkedin.com/in/aleksandr-timofeev-531062244/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3Bwc1Aw%2F90RJu0cU6TvNuSlw%3D%3D'
            } target={'_blank'} rel={'noreferrer'}>
              <img height={'50px'} src={linkedinLogo} alt={'linkedin logo'}/>
            </a>
          </div>
          <div className={styles.listItem}>
            <a href={'https://t.me/TimofeevAleks'}>
              <img height={'50px'} src={telegramLogo} alt={'telegram logo'}/>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;