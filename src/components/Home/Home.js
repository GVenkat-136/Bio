import React from 'react';
import './Home.css'; // Import CSS for styling

const Home = () => {
  return (
    <section className="header-section" id="home">
      <div className="container">
        <div className="intro-text">
          <h1 className="heading">G.VENKATA NARENDRA</h1>
          <p className="sub-heading">Experienced developer with 2+ years of expertise in Node.js, React.js, and MongoDB. Known
for building scalable web apps and fixing bugs with ease. Committed to delivering top-quality
code and always learning.</p>
          <div className="buttons">
            <button className="btn btn-primary">
              Download Resume
            </button>
            <button className="btn btn-secondary">
              Contact Me
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
