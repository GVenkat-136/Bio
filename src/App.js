import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Home from './components/Home/Home';
import Projects from './components/Projects/Projects';
import Experiences from './components/Experiences/Experiences';
import Skills from './components/Skills/Skills';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';

const App = () => {
  return (
    <>
      <Header />
      <Home />
      <Skills />
      <Experiences />
      <Projects />
      <Footer />
    </>
  );
};

export default App;
