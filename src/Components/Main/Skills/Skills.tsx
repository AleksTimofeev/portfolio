import React from 'react';
import styles from './Skills.module.scss'
import Skill from "./Skill/Skill";
export type SkillType = {
  icon: string
  title: string
  text: string
}
const Skills = () => {
  const dataSkills:Array<SkillType> = [
    {icon: '#', title: 'JavaScript', text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'},
    {icon: '#', title: 'TypeScript', text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'},
    {icon: '#', title: 'React', text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'},
    {icon: '#', title: 'Redux', text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'},
    {icon: '#', title: 'Redux-Toolkit', text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'},
    {icon: '#', title: 'React-Router-Dom', text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'},
    {icon: '#', title: 'Formik', text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'},
    {icon: '#', title: 'Axios', text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'},
    {icon: '#', title: 'HTTP / HTTPS', text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'},
    {icon: '#', title: 'Jest', text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'},
    {icon: '#', title: 'Postman', text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'},
    {icon: '#', title: 'Material UI', text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'},
    {icon: '#', title: 'Styled Components', text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'},
    {icon: '#', title: 'HTML', text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'},
    {icon: '#', title: 'CSS / SASS', text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'},
    {icon: '#', title: 'Git', text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'},
  ]
  return (
    <>
      <h2 className={styles.title}>My skills</h2>
      <div className={styles.skillsList}>
        {dataSkills.map((item, i) => (
          <div key={i} className={styles.skillsItem}>
            <Skill icon={item.icon} title={item.title} text={item.text}/>
          </div>
        ))}
      </div>
    </>
  );
};

export default Skills;