import React, { useState } from 'react';
import './HireMe.css';

const HireMe = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    // Create mailto link with form data
    // Replace with your actual email address
    const emailAddress = import.meta.env.VITE_CONTACT_EMAIL || 'your-email@example.com';
    const subject = encodeURIComponent(`Hire Request from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    const mailtoLink = `mailto:${emailAddress}?subject=${subject}&body=${body}`;

    // Open email client
    window.location.href = mailtoLink;

    // Simulate submission (you can replace this with actual API call)
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
      
      // Reset status message after 3 seconds
      setTimeout(() => setSubmitStatus(null), 3000);
    }, 500);
  };

  return (
    <section id="hire-me" className="hire-me-section">
      <div className="container">
        <h2 className="section-title">Let's Work Together</h2>
        <p className="section-subtitle">
          I'm always open to discussing new opportunities and interesting projects.
        </p>
        <form className="hire-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Your name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="your.email@example.com"
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="6"
              placeholder="Tell me about your project or opportunity..."
            />
          </div>
          <button 
            type="submit" 
            className="hire-button"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Sending...' : 'Hire Me'}
          </button>
          {submitStatus === 'success' && (
            <div className="submit-success">
              ✓ Email client opened! Please send the email to complete your request.
            </div>
          )}
        </form>
      </div>
    </section>
  );
};

export default HireMe;

