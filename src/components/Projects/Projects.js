import React from 'react';
import './Projects.css';
import { projectList } from '../../Data';

const Projects = () => {
  return (
    <div className="E_container mt-5" id="projects">
      <h2 className="section-title">Projects</h2>
      <div className="projects-container">
        {projectList.map((project, index) => (
          <div className="project-card-wrapper" key={index}>
            <div className="project-card mb-4">
              <div className="card-body">
                <div className="card-title-wrapper">
                  <h5 className="card-title">{project.title}</h5>
                </div>
                <p className="card-text">{project.description}</p>
                <ul className="card-points">
                  {project.points.map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
                </ul>
                <div className="technologies">
                  {project.technologies.map((tech, idx) => (
                    <span key={idx} className="badge bg-secondary me-1">{tech}</span>
                  ))}
                </div>
                <a href={project.link} className="btn btn-primary1 mt-3" target='blank'>View Project</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
