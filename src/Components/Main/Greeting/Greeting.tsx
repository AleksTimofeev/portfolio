import React from 'react';
import styles from './Greeting.module.css'
import avatar from '../../../Assets/Image/avatar.png'

const Greeting = () => {
  return (
    <>
      <div className={styles.text}>
        <h1>Hello.<br />My name is <span>Aleksandr Timofeev.</span></h1>
        <p>I am fronted-developer</p>
      </div>
      <div className={styles.photoContainer}>
        <img src={avatar} alt={'My photo'}/>
      </div>
    </>
  );
};

export default Greeting;