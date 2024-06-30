import React from 'react';

const Projects = () => {
  const projectList = [
    {
      title: "OCONNECT",
      description: "Video conference platform with real-time communication",
      points: [
        'Created a responsive UI with React and Redux. Developed an intuitive user interface and managed state efficiently.',
        'Enabled real-time communication with Socket.IO. Added instant messaging features.',
        'Used AWS Lambda and Redis for scalability: Implemented serverless functions and managed real-time sessions.',
        'Implemented secure authentication with JWT and MongoDB. Ensured secure logins and data storage.'
      ],
      technologies: ["React", "Node", "Lambda", "Redis", "Redux", "Express", "Socket.io"],
      link: "https://oconnect.ai"
    },
    {
      title: "Project Two",
      description: "This is a description for project two. It involves working with Node.js and Express.",
      points: [
        "Server-side rendering with Express.",
        "API development.",
        "Deployed on Heroku."
      ],
      technologies: ["Node.js", "Express", "Heroku"],
      link: "#"
    },
    {
      title: "Project Three",
      description: "Another project description.",
      points: [
        "Point 1 for Project Three",
        "Point 2 for Project Three",
        "Point 3 for Project Three"
      ],
      technologies: ["Technology A", "Technology B", "Technology C"],
      link: "#"
    }
  ];

  return (
    <div className="container mt-5" id="projects">
      <h2 className="section-title">Projects</h2>
      <div className="projects-container">
        {projectList.map((project, index) => (
          <div className="project-card-wrapper" key={index}>
            <div className="card project-card mb-4">
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
                <a href={project.link} className="btn btn-primary mt-3">View Project</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
