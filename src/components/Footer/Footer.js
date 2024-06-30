// Footer.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h5>Contact Me</h5>
            <p>Email: dev.gvnarendra@gmail.com.com</p>
            <p>Phone: +91-9573371381</p>
          </div>
          <div className="col-md-6">
            <h5>Follow Me</h5>
            <div className="social-icons">
              <a href="https://github.com/GVenkat-136" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faGithub} size="2x" />
              </a>
              <a href="www.linkedin.com/in/gv-narendra" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faLinkedin} size="2x" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
