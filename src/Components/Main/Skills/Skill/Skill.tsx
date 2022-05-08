import React from 'react';
import {SkillType} from "../Skills";

const Skill: React.FC<SkillType> = (props) => {
  const {icon, title, text} = props
  return (
    <>
      <span>icon</span>
      <h3>{title}</h3>
      <p>{text}</p>
    </>
  );
};

export default Skill;