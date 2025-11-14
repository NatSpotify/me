import React from 'react';
import './Certifications.css';

const Certifications = () => {
  const certifications = [
    'React Native, React, Typescript Certification, Docker and Kubernetes, Ai Agents and others on udemy',
    'React, Typescript, automation and tests on front end master',
    'Certified System Administrator for service now implementation',
    'ITIL Foundation v3 by Axelos, service management speciflist'
  ];

  return (
    <section id="certifications" className="certifications-section">
      <div className="container">
        <h2 className="section-title">Licenses & Certifications</h2>
        <div className="certifications-list">
          {certifications.map((cert, index) => (
            <div key={index} className="certification-item">
              <div className="certification-icon">✓</div>
              <div className="certification-text">{cert}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;

