import React from 'react';
import './Clients.css';

const Clients = () => {
  const clients = [
    {
      name: 'General Motors',
      description: 'Tech Lead & Senior Full Stack'
    },
    {
      name: 'Cynamics',
      description: 'Full Stack Developer',
      link: 'https://www.cynamics.ai/'
    },
    {
      name: 'Clevaligner',
      description: 'Platform Development',
      link: 'https://clevaligner.fr/'
    },
    {
      name: 'Reasolve',
      description: 'Platform Implementation',
      link: 'https://www.reasolve.com/'
    },
    {
      name: 'Siemens',
      description: 'Enterprise Solutions'
    },
    {
      name: 'Raz-Lee',
      description: 'Cybersecurity Solutions',
      link: 'https://razlee.com/'
    },
    {
      name: 'NXP Semiconductor',
      description: 'NFC Technologies',
      link: 'https://www.nxp.com/'
    },
    {
      name: 'Tagby',
      description: 'NFC Event Solutions',
      link: 'https://www.tagby.com/fr/'
    }
  ];

  return (
    <section id="clients" className="clients-section">
      <div className="container">
        <h2 className="section-title">Trusted By</h2>
        <p className="clients-subtitle">
          Working with innovative companies to build scalable solutions
        </p>
        <div className="clients-grid">
          {clients.map((client, index) => (
            <div 
              key={index} 
              className="client-card"
              onClick={() => client.link && window.open(client.link, '_blank', 'noopener,noreferrer')}
              style={{ cursor: client.link ? 'pointer' : 'default' }}
            >
              <div className="client-logo-container">
                <div className="client-logo-fallback">
                  {client.name}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;

