import React from 'react';
import './Experiences.css'; // Import the CSS file for specific styles

const Experiences = () => {
  const experienceList = [
    {
      title: "Software Engineer",
      role:'MERN-STACK DEVELOPER',
      company: "Onpassive Technologies Private Limited",
      duration: "May 2023 - Present",
      points: [
        "Developed a real-time video conferencing application using React and Node.js. Implemented features like live video streaming and chat functionalities, ensuring a responsive and engaging user experience.",
        "Enhanced user experience by implementing instant data updates through Socket.IO, enabling real-time synchronization of video feeds, chat messages, and application state across multiple devices.",
        "Utilized Redux for robust state management in the React frontend, ensuring efficient and predictable data flow. Centralized application state facilitated seamless interaction between components and maintained consistency.",
        "Implemented serverless components with AWS Lambda for authentication and notification services, enhancing scalability and reducing operational overhead. Leveraged AWS API Gateway to manage endpoints and ensure secure data transmission.",
        "Integrated Redis as an in-memory data store to optimize response times and minimize database load. Utilized Redis for caching frequently accessed data, improving application performance and scalability under high traffic.",
        "Deployed static assets securely and scalably on AWS S3, ensuring reliable storage and efficient content delivery. Configured AWS CloudFront for global content distribution, reducing latency and improving user experience."
      ],
      icon: "fas fa-laptop-code",
    },
    {
      title: "Software Engineer",
      role:'MERN-STACK DEVELOPER',
      company: "Tutorials Point India Private Limited",
      duration: "Feb 2023 - May 2023",
      points: [
        "Developed a web application using React, emphasizing a user-friendly interface and smooth user experience. Implemented intuitive navigation and responsive layouts to enhance usability across desktop and mobile devices.",
        
        "Ensured compatibility across devices with responsive design techniques using CSS media queries and React's responsive features. This approach facilitated optimal viewing and interaction experiences on various screen sizes.",
        
        "Managed state efficiently with Redux, ensuring consistent application behavior and simplifying the management of complex data flows. Centralized state management improved debugging and scalability.",
        
        "Created reusable React components to streamline development and maintain clean code. By encapsulating UI elements and logic, reusable components enhanced code maintainability and accelerated feature implementation.",
        
        "Integrated RESTful APIs to dynamically fetch and display data, enhancing interactivity and real-time updates. Implemented efficient data fetching strategies to optimize performance and responsiveness of the application.",
        
        "Implemented client-side form validation using libraries like Formik and Yup, ensuring data integrity and providing immediate feedback to users during input."
      ],
      icon: "fas fa-code",
    }
  ];

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
