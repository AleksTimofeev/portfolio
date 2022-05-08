import React from 'react';
import styles from './Main.module.css'
import Greeting from "./Greeting/Greeting";
import Skills from './Skills/Skills';
import Projects from "./Projects/Projects";
import Contacts from "./Contacts/Contacts";

const Main = () => {
  const data = {
    skills: [
      {icon: '#', title: 'JavaScript', text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'},
      {icon: '#', title: 'React', text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'},
      {icon: '#', title: 'HTML', text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'},
      {icon: '#', title: 'CSS', text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'},
    ],
  }
  return (
    <div className={styles.wrapper}>
      <section className={`${styles.greeting}`}>
        <div className={styles.container}>
          <div className={styles.inner}>
            <Greeting/>
          </div>
        </div>
      </section>
      <section className={`${styles.skills} ${styles.section}`}>
        <div className={styles.container}>
          <div className={styles.inner}>
            <Skills/>
          </div>
        </div>
      </section>
      <section className={`${styles.projects} ${styles.section}`}>
        <div className={styles.container}>
          <div className={styles.inner}>
            <Projects/>
          </div>
        </div>
      </section>
      <section className={`${styles.remoteWork} ${styles.section}`}>
        <div className={styles.container}>
          <div className={styles.inner}>
            <h2 className={styles.sectionTitle}>Ready to work remotely</h2>
            <button>Hire me</button>
          </div>
        </div>
      </section>
      <section className={`${styles.contacts} ${styles.section}`}>
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