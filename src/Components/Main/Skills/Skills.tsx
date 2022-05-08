import React from 'react';
import styles from './Skills.module.css'
import Skill from "./Skill/Skill";
export type SkillType = {
  icon: string
  title: string
  text: string
}
const Skills = () => {
  const dataSkills:Array<SkillType> = [
    {icon: '#', title: 'JavaScript', text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'},
    {icon: '#', title: 'React', text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'},
    {icon: '#', title: 'HTML', text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'},
    {icon: '#', title: 'CSS', text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'},
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