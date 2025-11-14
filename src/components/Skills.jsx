import React from 'react';
import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Languages & Frameworks',
      items: ['JavaScript / TypeScript', 'Node.js, React, React Native', 'Python']
    },
    {
      title: 'Mobile Development',
      items: ['Android and iOS Native dev', 'Cross-platform Development', 'NFC']
    },
    {
      title: 'Back end & Databases',
      items: [
        'Node.js: Express.js, Nest.js, Fastify',
        'Python: FastAPI, Django, Flask',
        'MongoDB, SQL',
        'Micro services Architecture'
      ]
    },
    {
      title: 'DevOps & Cloud',
      items: ['AWS (Lambda, EC2, S3, DynamoDB)', 'Docker, Kubernetes, Terraform', 'CI/CD Pipelines, Kafka, Rmq']
    },
    {
      title: 'Tools & Platforms',
      items: ['Git / GitHub / GitLab', 'AI Tools & Frameworks', 'AI Integration', 'Model Training & Evaluation']
    },
    {
      title: 'Soft Skills & Methodologies',
      items: ['Agile / Scrum / Sprints', 'Mentoring & Code Review', 'Problem Solving & Critical Thinking']
    },
    {
      title: 'Languages',
      items: ['French (Fluent)', 'English (Fluent)', 'Hebrew (Fluent)', 'Chinese (Basic)', 'Spanish (Basic)']
    }
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <h2 className="section-title">Skills</h2>
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-category">
              <h3 className="category-title">{category.title}</h3>
              <ul className="skill-list">
                {category.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="skill-item">{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

