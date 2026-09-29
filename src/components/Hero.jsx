import React from 'react';
import { Icon } from './Icons';

export const Hero = ({ personal, socialLinks, stats }) => {
  return (
    <section id="home" className="hero-section">
      <div className="container">
        <div className="hero-grid">
          {/* Left Column: Introduction & CTAs */}
          <div className="hero-content">
            {personal.isAvailable && (
              <div>
                <div className="status-pill">
                  <span className="status-dot"></span>
                  <span>{personal.availability}</span>
                </div>
              </div>
            )}

            <h1 className="hero-title">
              Hi, I'm <span className="gradient-text">{personal.name}</span>
              <br />
              {personal.role}
            </h1>

            <p className="hero-description">
              {personal.tagline}
            </p>

            {/* CTAs */}
            <div className="hero-cta-group">
              <a href="#projects" className="btn btn-primary">
                View My Projects
                <Icon name="arrowRight" size={18} />
              </a>

              <a
                href={personal.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
                style={{ borderColor: 'rgba(37, 211, 102, 0.4)' }}
              >
                <Icon name="whatsapp" size={18} style={{ color: '#25d366' }} />
                Chat on WhatsApp
              </a>
            </div>

            {/* Social & Contact Redirection Channels */}
            <div className="hero-socials">
              {socialLinks.map(link => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon-btn"
                  title={link.name}
                  aria-label={link.name}
                >
                  <Icon name={link.icon} size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Right Column: Sohail Khan's Portrait with Tech Badges */}
          <div className="hero-visual-wrapper">
            <div className="hero-avatar-frame">
              <img
                src={personal.avatar}
                alt={`${personal.name} - Full Stack Developer`}
                className="hero-avatar-img"
                loading="eager"
              />
            </div>

            {/* Floating Tech Badges */}
            <div className="floating-badge badge-top">
              <Icon name="server" size={18} style={{ color: 'var(--accent-primary)' }} />
              <span>Laravel & PHP</span>
            </div>

            <div className="floating-badge badge-bottom">
              <Icon name="code" size={18} style={{ color: '#10b981' }} />
              <span>MERN Stack • React</span>
            </div>
          </div>
        </div>

        {/* Impact & Experience Highlights Banner */}
        <div style={{ marginTop: '4.5rem' }}>
          <div className="stats-grid">
            {stats.map((stat, idx) => (
              <div key={idx} className="stat-item">
                <span className="stat-value">{stat.value}</span>
                <span className="stat-label">{stat.label}</span>
                <span className="stat-desc">{stat.description}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
