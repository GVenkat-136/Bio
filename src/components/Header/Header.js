// HeaderNav.js
import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import './Header.css';

const Header = () => {
  return (
    <Navbar variant="dark" expand="lg" fixed="top" className="header-nav">
      <div className="container">
        <Navbar.Brand href="#home" className="brand-logo">VenkataNarendra</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="#home" className="nav-link">Home</Nav.Link>
            <Nav.Link href="#skills_Section" className="nav-link">Skills</Nav.Link>
            <Nav.Link href="#projects" className="nav-link">Projects</Nav.Link>
            <Nav.Link href="#E_Section" className="nav-link">Experience</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
};

export default Header;
