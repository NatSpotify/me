import React from 'react';
import './Story.css';

const Story = () => {
  return (
    <section id="story" className="story-section">
      <div className="container">
        <h2 className="section-title">The Story</h2>
        <p className="story-subtitle">
          From idea to rocket ship: Your journey from concept to scalable production system
        </p>
        
        <div className="flow-container">
          {/* Step 1: Idea */}
          <div className="flow-step step-1">
            <div className="step-icon">
              <div className="icon-circle idea-icon">💡</div>
            </div>
            <div className="step-content">
              <h3 className="step-title">You Have an Idea</h3>
              <p className="step-description">
                A brilliant concept that could change the game. You're excited and ready to bring it to life.
              </p>
            </div>
          </div>

          {/* Arrow */}
          <div className="story-arrow">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="arrowGradient1" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#667eea" />
                  <stop offset="100%" stopColor="#764ba2" />
                </linearGradient>
              </defs>
              <path d="M12 5V19M12 19L19 12M12 19L5 12" stroke="url(#arrowGradient1)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>

          {/* Step 2: AI Agent Attempts */}
          <div className="flow-step step-2">
            <div className="step-icon">
              <div className="icon-circle lovable-icon">⚡</div>
            </div>
            <div className="step-content">
              <h3 className="step-title">Quick Attempt with AI Agents</h3>
              <p className="step-description">
                You try Lovable, base44, or other AI agents. Fast to start, but the path gets rocky. You face limitations, scalability issues, and technical debt that slows you down.
              </p>
              <div className="step-problems">
                <span className="problem-tag">Not Scalable</span>
                <span className="problem-tag">Painful Process</span>
                <span className="problem-tag">Technical Debt</span>
              </div>
              <div className="ai-agents-list">
                <span className="ai-agent-tag">Lovable</span>
                <span className="ai-agent-tag">base44</span>
                <span className="ai-agent-tag">Others...</span>
              </div>
            </div>
          </div>

          {/* Arrow */}
          <div className="story-arrow">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="arrowGradient2" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#667eea" />
                  <stop offset="100%" stopColor="#764ba2" />
                </linearGradient>
              </defs>
              <path d="M12 5V19M12 19L19 12M12 19L5 12" stroke="url(#arrowGradient2)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>

          {/* Step 3: Come to Me */}
          <div className="flow-step step-3">
            <div className="step-icon">
              <div className="icon-circle handshake-icon">🤝</div>
            </div>
            <div className="step-content">
              <h3 className="step-title">You Bring It to Me</h3>
              <p className="step-description">
                You realize you need a professional solution. You come with your idea, and I understand your vision completely.
              </p>
            </div>
          </div>

          {/* Arrow */}
          <div className="story-arrow">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="arrowGradient3" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#667eea" />
                  <stop offset="100%" stopColor="#764ba2" />
                </linearGradient>
              </defs>
              <path d="M12 5V19M12 19L19 12M12 19L5 12" stroke="url(#arrowGradient3)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>

          {/* Step 4: Transformation */}
          <div className="flow-step step-4">
            <div className="step-icon">
              <div className="icon-circle rocket-icon">🚀</div>
            </div>
            <div className="step-content">
              <h3 className="step-title">I Transform It Into a Rocket</h3>
              <p className="step-description">
                Your idea becomes a scalable, production-ready system. Built with best practices, clean architecture, and ready to grow.
              </p>
              <div className="step-benefits">
                <span className="benefit-tag">Scalable</span>
                <span className="benefit-tag">Production-Ready</span>
                <span className="benefit-tag">Maintainable</span>
              </div>
            </div>
          </div>
        </div>

        <div className="story-cta">
          <p className="cta-text">
            Ready to transform your idea? Let's build something exceptional together.
          </p>
          <button 
            className="cta-button"
            onClick={() => {
              const element = document.getElementById('hire-me');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            Start Your Journey
          </button>
        </div>
      </div>
    </section>
  );
};

export default Story;

