import React from 'react';
import styles from './Main.module.scss'
import Greeting from "./Greeting/Greeting";
import Skills from './Skills/Skills';
import Projects from "./Projects/Projects";
import Contacts from "./Contacts/Contacts";

const Main = () => {

  return (
    <div className={styles.wrapper}>
      <section id={'about'} className={`${styles.greeting} ${styles.section}`}>
        <div className={styles.container}>
          <div className={styles.inner}>
            <Greeting/>
          </div>
        </div>
      </section>
      <section id={'skills'} className={`${styles.section}`}>
        <div className={styles.container}>
          <div className={styles.inner}>
            <Skills/>
          </div>
        </div>
      </section>
      <section id={'projects'} className={`${styles.section}`}>
        <div className={styles.container}>
          <div className={styles.inner}>
            <Projects/>
          </div>
        </div>
      </section>
      <section id={'contacts'} className={`${styles.section}`}>
        <div className={styles.container}>
          <div className={styles.inner}>
            <Contacts/>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Main;