import React from 'react';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      company: 'General Motors',
      location: 'Herzliah',
      period: 'December 2020 – May 2025',
      roles: [
        {
          title: 'Tech Lead, Tools Group',
          period: '2025',
          responsibilities: [
            'Led a cross-functional team meetings and projects of 8 engineers',
            'Mentored junior developers on implementations best practices for iterative implementations',
            'Analyzed debugging patterns to recommend architectural changes',
            'Implementation of an SDK for external developers in the group'
          ]
        },
        {
          title: 'Senior Full stack, Tools Group',
          period: '2022/2024',
          responsibilities: [
            'Built responsive web applications using React/TypeScript serving daily active users',
            'Implemented modern UI/UX designs with optimized performance, developed reusable component library',
            'Configurations to deploy dedicated Kubernetes infrastructure for each services',
            'Designed and built scalable REST APIs and micro services using Node.js/Python',
            'Designed and optimized database schema (PostgreSQL/MongoDB) supporting complex business logic and hardware',
            'Collaborated with product managers and designers to deliver 20+ major features on time and within scope',
            'Led technical discussions and code reviews'
          ]
        },
        {
          title: 'Senior Full stack, Energy Assist Group',
          period: '2021',
          responsibilities: [
            'Developed iOS And Android native mobile applications integrating with Chevolet, Cadillac infotainment systems',
            'Built vehicle connectivity features enabling real-time data sync between mobile apps',
            'Creating single page application from with internal framework, using Webview integration and custom native features',
            'Implemented React Native applications supporting both iOS and Android'
          ]
        }
      ]
    },
    {
      company: 'Cynamics',
      companyLink: 'https://www.cynamics.ai/',
      location: 'Tel Aviv',
      period: 'December 2024 – May 2025',
      roles: [
        {
          title: 'Full stack, Cyber Tech',
          period: '',
          responsibilities: [
            'Developed end-to-end web applications using React, Node.js, and PostgreSQL',
            'Built RESTful APIs and micro services architecture supporting complex business logic',
            'Implemented responsive front-end interfaces and mobile-optimized designs',
            'Collaborated effectively in agile teams of 3-5 developers',
            'Contributed to sprint planning and technical decision',
            'Established coding standards and documentation practices adopted across development teams',
            'Worked closely with UI/UX designers to implement pixel-perfect interfaces while ensuring optimal user experience',
            'Optimized application performance through database query optimization and front-end bundle optimization',
            'Integrated third-party services and APIs (payment gateways, authentication providers)',
            'Consistently delivered features on schedule within agile sprints',
            'Provided technical input during project estimation and scope definition, improving project planning accuracy'
          ]
        }
      ]
    },
    {
      company: 'GrowizIT',
      location: 'Tel Aviv',
      period: 'December 2020 – May 2025',
      roles: [
        {
          title: 'CEO Founder, Developer, Entrepreneur',
          period: '',
          responsibilities: [
            'Led cross-functional teams of 3-5 developers, designers, and specialists across 20+ projects',
            'Ensuring seamless collaboration and on-time delivery',
            'Coordinated remote development teams using Agile methodologies',
            'Established clear communication protocols and project management workflows',
            'Conducted regular client, teams check-ins and progress reviews',
            'Developed compelling project proposals and technical presentations that won contracts',
            'Implemented client feedback loops involving entire development team to improving final deliverable quality',
            'Developed case studies and success stories from team projects',
            <>
              Implemented{' '}
              <a 
                href="https://www.reasolve.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="experience-link"
              >
                Reasolve.com
              </a>
              {' '}- intelligent debt recovery management platform for real estate, featuring real-time cash flow visualization, AI-powered payment behavior analysis, and automated collaboration workflows with third-party legal professionals (bailiffs, lawyers)
            </>
          ]
        }
      ]
    }
  ];

  return (
    <section id="experience" className="experience-section">
      <div className="container">
        <h2 className="section-title">Experience</h2>
        <div className="experience-timeline">
          {experiences.map((exp, expIndex) => (
            <div key={expIndex} className="experience-item">
              <div className="experience-header">
                <h3 className="company-name">
                  {exp.companyLink ? (
                    <a 
                      href={exp.companyLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="company-link"
                    >
                      {exp.company}
                    </a>
                  ) : (
                    exp.company
                  )}
                </h3>
                <span className="company-location">{exp.location}</span>
                <span className="experience-period">{exp.period}</span>
              </div>
              {exp.roles.map((role, roleIndex) => (
                <div key={roleIndex} className="role-item">
                  <div className="role-header">
                    <h4 className="role-title">{role.title}</h4>
                    {role.period && <span className="role-period">{role.period}</span>}
                  </div>
                  <ul className="responsibilities-list">
                    {role.responsibilities.map((responsibility, respIndex) => (
                      <li key={respIndex} className="responsibility-item">
                        {typeof responsibility === 'string' ? responsibility : responsibility}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;

