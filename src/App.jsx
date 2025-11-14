import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Clients from './components/Clients';
import Story from './components/Story';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import Certifications from './components/Certifications';
import HireMe from './components/HireMe';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Clients />
      <Story />
      <Skills />
      <Experience />
      <Education />
      <Certifications />
      <HireMe />
    </div>
  );
}

export default App;
