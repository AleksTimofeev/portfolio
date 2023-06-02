import React from 'react';
import styles from './Projects.module.scss'
import Project from "./Project/Project";

export type ProjectType = {
  title: string
  description: string
  imgUrl: string
  projectUrl: string
  projectGithubUrl: string
}

const Projects = () => {
  const dataProjects: Array<ProjectType> = [
    {
      title: 'Cards project',
      description: 'React, Redux, TypeScript, Redux-Thunk, React-Router-Dom, Jest, Axios.',
      imgUrl: 'https://github.com/Bogagree/cards_project/raw/master/src/assets/img/app.jpg',
      projectUrl: 'https://bogagree.github.io/cards_project/',
      projectGithubUrl: 'https://github.com/Bogagree/cards_project',
    },
    {
      title: 'Todolist',
      description: 'React, Redux, TypeScript, Redux-Thunk, React-Router-Dom, Jest, Axios, Material UI.',
      imgUrl: 'https://github.com/AleksTimofeev/portfolio/blob/main/src/Assets/Image/todolistscreen.png?raw=true',
      projectUrl: 'https://alekstimofeev.github.io/todolist',
      projectGithubUrl: 'https://github.com/AleksTimofeev/todolist',
    }
  ]
  return (
    <>
      <h2 className={styles.title}>My projects</h2>
      <div className={styles.projectsList}>
        {dataProjects.map((item, i) => (
          <div key={i} className={styles.projectsItem}>
            <Project
              title={item.title}
              description={item.description}
              projectUrl={item.projectUrl}
              imgUrl={item.imgUrl}
              projectGithubUrl={item.projectGithubUrl}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default Projects;