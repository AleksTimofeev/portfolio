import React from 'react';
import {SkillType} from "../Skills";

const Skill: React.FC<SkillType> = (props) => {
  const {title} = props
  return (
    <>
      <h3>{title}</h3>
    </>
  );
};

export default Skill;