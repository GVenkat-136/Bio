import React from 'react';
import './Experiences.css'; // Import the CSS file for specific styles
import { experienceList } from '../../Data';

const Experiences = () => {
  return (
    <div className='Section_bg'>
      <div className="E_container mt-5" id="experiences">
        <h2 className="section-title">Experiences</h2>
        <div className="timeline">
          {experienceList.map((experience, index) => (
            <div className={`timeline-item ${index === 0 ? 'first' : index === experienceList.length - 1 ? 'last' : ''}`} key={index}>
              <div className="timeline-content">
                <h3 className="experience-title">{experience.title}</h3>
                <h4 className="experience-title">{experience.role}</h4>
                <h4 className="company-name">{experience.company}</h4>
                <h4 className="duration">{experience.duration}</h4>
                <ul className="description">
                  {experience.points.map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experiences;
