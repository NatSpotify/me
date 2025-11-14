import React from 'react';
import './Education.css';

const Education = () => {
  const education = [
    {
      period: '2008-2014',
      institution: 'ECE Paris International Engineering School',
      location: 'France',
      degree: 'Master of Science',
      major: 'Computer Science and Network',
      link: 'https://www.ece.fr/ecole-ingenieur/'
    },
    {
      period: 'Fall 2010',
      institution: 'Beijing University of Technology',
      location: 'China',
      degree: 'Exchange Student',
      major: '',
      link: 'https://english.bjut.edu.cn/'
    },
    {
      period: 'Exchange Program',
      institution: 'Concordia University',
      location: 'Montreal, Canada',
      degree: 'Bachelors of Engineering',
      major: 'Computer Science',
      link: 'https://www.concordia.ca/'
    },
    {
      period: '1 Year Break - NFC Technologies',
      institution: 'NXP Semiconductor & Tagby',
      location: 'Multiple Locations',
      degree: 'Professional Experience',
      major: 'NFC Technologies Development',
      isBreak: true,
      stages: [
        {
          company: 'NXP Semiconductor',
          role: 'Demo App Writer',
          description: 'NFC Technologies',
          link: 'https://www.nxp.com/'
        },
        {
          company: 'Tagby',
          role: 'Social Marketing in Physical Place',
          description: 'NFC Technologies',
          link: 'https://www.tagby.com/fr/'
        }
      ]
    }
  ];

  return (
    <section id="education" className="education-section">
      <div className="container">
        <h2 className="section-title">Education</h2>
        <div className="education-grid">
          {education.map((edu, index) => (
            <div key={index} className={`education-card ${edu.isBreak ? 'break-card' : ''}`}>
              <div className="education-period">{edu.period}</div>
              <h3 className="education-institution">
                {edu.link ? (
                  <a href={edu.link} target="_blank" rel="noopener noreferrer">
                    {edu.institution}
                  </a>
                ) : (
                  edu.institution
                )}
              </h3>
              <div className="education-location">{edu.location}</div>
              <div className="education-degree">{edu.degree}</div>
              {edu.major && <div className="education-major">{edu.major}</div>}
              {edu.isBreak && edu.stages && (
                <div className="break-stages">
                  {edu.stages.map((stage, stageIndex) => (
                    <div key={stageIndex} className="break-stage">
                      <h4 className="stage-company">
                        {stage.link ? (
                          <a href={stage.link} target="_blank" rel="noopener noreferrer" className="stage-link">
                            {stage.company}
                          </a>
                        ) : (
                          stage.company
                        )}
                      </h4>
                      <div className="stage-role">{stage.role}</div>
                      <div className="stage-description">{stage.description}</div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;

