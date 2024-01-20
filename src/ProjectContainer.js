// ProjectContainer.js
import React from 'react';
import './style.css'

const ProjectContainer = ({ projects }) => {
  return (
    <div className="project-container">
      {projects.map((project, index) => (
        <div key={index} className="project-item">
          <img src={project.image} alt={project.title} />
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <h4>{project.technology}</h4>
          <p>{project.techDescription}</p>
          <h4>{project.hlink}</h4>
          <a href={project.link}>{project.title}</a>
        </div>
      ))}
    </div>
  );
};

export default ProjectContainer;
