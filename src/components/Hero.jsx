import React from 'react';
import './Hero.css';

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="hero-section">
      <div className="container">
        <div className="hero-content">
          <h1 className="hero-title">Full Stack Developer</h1>
          <p className="hero-subtitle">
            Building scalable web applications, mobile apps, and cloud solutions
          </p>
          <p className="hero-description">
            Experienced developer specializing in React, Node.js, Python, and cloud infrastructure.
            Passionate about creating efficient, maintainable code and leading technical teams.
          </p>
          <p className="hero-availability">
            Available to transform your vision into reality—from MVP to full production. Bring your idea, and let's build something exceptional together.
          </p>
          <div className="hero-buttons">
            <button 
              className="btn btn-primary"
              onClick={() => scrollToSection('experience')}
            >
              View My Work
            </button>
            <button 
              className="btn btn-secondary"
              onClick={() => scrollToSection('hire-me')}
            >
              Hire Me
            </button>
          </div>
        </div>
      </div>
      <div className="hero-scroll-indicator">
        <span>Scroll to explore</span>
        <div className="scroll-arrow">↓</div>
      </div>
    </section>
  );
};

export default Hero;

