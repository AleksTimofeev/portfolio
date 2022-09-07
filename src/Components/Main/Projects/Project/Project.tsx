import React from 'react';
import {ProjectType} from "../Projects";
import styles from '../Projects.module.scss'
import Button from "../../../Elements/Button";

const Project: React.FC<ProjectType> = (props) => {
  const {title, description, projectUrl, imgUrl, projectGithubUrl} = props
  return (
    <>
      <div className={`${styles.imgContainer}`} style={{backgroundImage: `url(${imgUrl})`}}>
        <a href={projectUrl} target={"_blank"} rel={'noreferrer'}>
          <Button title={'Open project'}/>
        </a>
        <a href={projectGithubUrl} target={"_blank"} rel={'noreferrer'}>
          <Button title={'Git Hub'}/>
        </a>
      </div>
      <div className={styles.cardText}>
        <h3>{title}</h3>
        <h4>Technologies used: </h4>
        <p>{description}</p>
      </div>
    </>
  );
};

export default Project;