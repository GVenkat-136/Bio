import React from 'react';
import './Skills.css'; // Import the CSS file for specific styles

const Skills = () => {
  const skillList = [
    { name: "React", icon: "fab fa-react" },
    { name: "Node.js", icon: "fab fa-node-js" },
    { name: "Express.js", icon: "fas fa-server" },
    { name: "MongoDB", icon: "fas fa-database" },
    { name: "HTML", icon: "fab fa-html5" },
    { name: "CSS", icon: "fab fa-css3-alt" },
    { name: "JavaScript", icon: "fab fa-js" },
    { name: "Redux", icon: "fas fa-code" },
    { name: "Redis", icon: "fas fa-database" },
    { name: "AWS Lambda", icon: "fas fa-cloud" },
    { name: "Socket.IO", icon: "fas fa-plug" },
    { name: "MySQL", icon: "fas fa-database" },
    { name: "AWS S3", icon: "fas fa-cloud-upload-alt" },
    { name: "Serverless", icon: "fas fa-server" },
    { name: "Git", icon: "fab fa-git" }
  ];

  return (
    <div className="Skills_container mt-5" id="skills">
      <h2 className="section-title">Skills</h2>
      <div className="skills-container">
        {skillList.map((skill, index) => (
          <div className="skill" key={index}>
            <i className={`${skill.icon} fa-3x`}></i>
            <span>{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
