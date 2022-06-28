import React from 'react';
import styles from './Projects.module.scss'
import Project from "./Project/Project";

export type ProjectType = {
  title: string
  description: string
  imgUrl: string
  projectUrl: string
}

const Projects = () => {
  const dataProjects: Array<ProjectType> = [
    {
      title: 'Project 001',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
      imgUrl: 'https://www.rd.com/wp-content/uploads/2018/12/50-Funny-Animal-Pictures-That-You-Need-In-Your-Life-2.jpg?fit=700,467',
      projectUrl: '#',
    },
    {
      title: 'Project 002',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
      imgUrl: 'https://media.istockphoto.com/photos/photo-depicting-the-person-who-focuses-on-the-target-' +
        'picture-id1249041775?b=1&k=20&m=1249041775&s=170667a&w=0&h=Pt6ltIPqpMrceX3FCtAEg69BjzrRJv4ZWh0n5rr3Uqs=',
      projectUrl: '#',
    }
  ]
  return (
    <>
      <h2 className={styles.title}>My projects</h2>
      <div className={styles.projectsList}>
        {dataProjects.map((item, i) => (
          <div key={i} className={styles.projectsItem}>
            <Project title={item.title} description={item.description} projectUrl={item.projectUrl} imgUrl={item.imgUrl}/>
          </div>
        ))}
      </div>
    </>
  );
};

export default Projects;