import React from 'react';
import './Home.css'; // Import CSS for styling
import Resume from '../../Files/VenkataNarendra.pdf';
import { Bio } from '../../Data';

const Home = () => {
  const handleDownload = () => {
    const anchor = document.createElement('a');
    anchor.href = Resume;
    anchor.download = 'VenkataNarendra.pdf';
    anchor.click();
  };

  const handleEmail = () => {
    const emailAddress = Bio?.Email;
    window.location.href = `mailto:${emailAddress}`;
  };

  return (
    <section className="header-section" id="home">
      <div className="H_container">
        <div className="intro-text">
          <h1 className="heading">{Bio.Name}</h1>
          <p className="sub-heading">{Bio?.Bio}</p>
          <div className="buttons">
            <button className="btn1 btn-primary" onClick={handleDownload}>
              Download Resume
            </button>
            <button className="btn1 btn-secondary" onClick={handleEmail}>
              Contact Me
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
