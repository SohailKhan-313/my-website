import React, { useState } from 'react';
import { Icon } from './Icons';

export const Contact = ({ personal, socialLinks, onShowToast }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      onShowToast('Please fill in all required fields.');
      return;
    }

    setIsSubmitting(true);
    // Instant feedback simulation
    setTimeout(() => {
      setIsSubmitting(false);
      onShowToast('Thank you! Your message has been sent successfully.');
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 700);
  };

  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="section-header">
          <div className="section-badge">
            <Icon name="mail" size={14} />
            <span>Get in Touch</span>
          </div>
          <h2 className="section-title">
            Let's Discuss <span className="gradient-text">Your Next Project</span>
          </h2>
          <p className="section-subtitle">
            Need a full-stack Laravel or MERN application? Click any icon below to connect with me directly on WhatsApp, Email, or LinkedIn.
          </p>
        </div>

        <div className="contact-grid">
          {/* Left Column: Direct Icon-Only Redirection Channels */}
          <div className="contact-info-panel">
            <div className="glass-card" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div>
                <h3 style={{ fontSize: '1.2rem', fontWeight: '700', marginBottom: '0.4rem' }}>
                  Quick Connect
                </h3>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                  Click an icon below to open a direct chat, email, or profile:
                </p>
              </div>

              {/* Icon-Only Interactive Redirection Buttons */}
              <div className="contact-icon-redirect-grid">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-redirect-card"
                    title={link.label}
                    aria-label={link.label}
                  >
                    <div className="contact-redirect-icon-box">
                      <Icon name={link.icon} size={24} />
                    </div>
                    <div className="contact-redirect-text">
                      <span className="contact-redirect-name">{link.name}</span>
                      <span className="contact-redirect-action">
                        Connect <Icon name="arrowRight" size={14} />
                      </span>
                    </div>
                  </a>
                ))}
              </div>

              {/* Location Badge */}
              <div className="location-pill-badge">
                <Icon name="mapPin" size={16} style={{ color: 'var(--accent-primary)' }} />
                <span>{personal.location} (Available Worldwide)</span>
              </div>
            </div>
          </div>

          {/* Right Column: Direct Message Form */}
          <div className="glass-card contact-form">
            <h3 style={{ fontSize: '1.3rem', fontWeight: '700', marginBottom: '0.25rem' }}>
              Send a Message
            </h3>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '1.25rem' }}>
              Leave your inquiry and I will get back to you promptly.
            </p>

            <form onSubmit={handleSubmit} noValidate>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                <div className="form-group">
                  <label htmlFor="name" className="form-label">Your Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. John Doe"
                    required
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email" className="form-label">Your Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="e.g. john@example.com"
                    required
                    className="form-input"
                  />
                </div>
              </div>

              <div className="form-group" style={{ marginBottom: '1rem' }}>
                <label htmlFor="subject" className="form-label">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="e.g. Hospital Management System / Web App"
                  className="form-input"
                />
              </div>

              <div className="form-group" style={{ marginBottom: '1.5rem' }}>
                <label htmlFor="message" className="form-label">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Describe your project, timeline, or requirements..."
                  required
                  className="form-textarea"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="btn btn-primary"
                style={{ width: '100%' }}
              >
                <Icon name="send" size={18} />
                {isSubmitting ? 'Sending Message...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
