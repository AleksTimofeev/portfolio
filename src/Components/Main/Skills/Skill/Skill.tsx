import React from 'react';
import {SkillType} from "../Skills";

const Skill: React.FC<SkillType> = (props) => {
  const {icon, title, text} = props
  return (
    <>
      <h3>{title}</h3>
    </>
  );
};

export default Skill;