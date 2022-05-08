import React from 'react';
import {ProjectType} from "../Projects";
import styles from '../Projects.module.css'

const Project: React.FC<ProjectType> = (props) => {
  const {title, description, projectUrl, imgUrl} = props
  return (
    <>
      <div className={`${styles.imgContainer}`} style={{backgroundImage: `url(${imgUrl})`}}>
        <button>Open project</button>
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
    </>
  );
};

export default Project;