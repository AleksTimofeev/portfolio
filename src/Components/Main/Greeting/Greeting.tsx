import React from 'react';
import styles from './Greeting.module.scss'
import photo from '../../../Assets/Image/photo.jpg'

const Greeting = () => {
  return (
    <>
      <div className={styles.text}>
        <h3>Hello</h3>
        <h1 className={styles.title}> I am <br/><span>Aleksandr Timofeev</span></h1>
        <p>a fronted-developer</p>
      </div>
      <div className={styles.photoContainer}>
        <img src={photo} alt={'My photo'}/>
        <span className={styles.imgBorder}></span>
      </div>
    </>
  );
};

export default Greeting;