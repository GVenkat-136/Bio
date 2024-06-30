import React from 'react';
import './Skills.css'; // Import the CSS file for specific styles
import { skillList } from '../../Data';

const Skills = () => {
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
