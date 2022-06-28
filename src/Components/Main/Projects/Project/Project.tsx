import React from 'react';
import {ProjectType} from "../Projects";
import styles from '../Projects.module.scss'
import Button from "../../../Elements/Button";

const Project: React.FC<ProjectType> = (props) => {
  const {title, description, projectUrl, imgUrl} = props
  return (
    <>
      <div className={`${styles.imgContainer}`} style={{backgroundImage: `url(${imgUrl})`}}>
        <Button title={'Open project'}/>
      </div>
      <div className={styles.cardText}>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </>
  );
};

export default Project;