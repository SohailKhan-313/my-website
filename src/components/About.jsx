import React from 'react';
import { Icon } from './Icons';

export const About = ({ personal }) => {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="section-header">
          <div className="section-badge">
            <Icon name="code" size={14} />
            <span>About Me</span>
          </div>
          <h2 className="section-title">
            Passionate <span className="gradient-text">Full-Stack Developer</span>
          </h2>
          <p className="section-subtitle">
            Building reliable web solutions, automated workflows, and database-driven software with Laravel and modern JavaScript.
          </p>
        </div>

        <div className="about-grid">
          {/* Left Column: Bio & Core Highlights */}
          <div className="about-bio-column">
            <div className="about-bio-text">
              {personal.bio.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            <div className="highlight-box">
              <h3 style={{ fontSize: '1.1rem', marginBottom: '0.75rem', fontWeight: '700' }}>
                Key Technical Strengths
              </h3>
              <ul>
                {personal.headlineHighlights.map((highlight, index) => (
                  <li key={index}>
                    <Icon name="check" size={18} style={{ color: '#10b981', flexShrink: 0 }} />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column: Fast Facts Cards */}
          <div className="about-card-stack">
            <div className="glass-card info-card">
              <div className="info-card-icon">
                <Icon name="mapPin" size={22} />
              </div>
              <div className="info-card-content">
                <h4>Location</h4>
                <p>{personal.location}</p>
              </div>
            </div>

            <div className="glass-card info-card">
              <div className="info-card-icon">
                <Icon name="briefcase" size={22} />
              </div>
              <div className="info-card-content">
                <h4>Experience</h4>
                <p>Almost {personal.yearsOfExperience} Years building & deploying full-stack web applications</p>
              </div>
            </div>

            <div className="glass-card info-card">
              <div className="info-card-icon">
                <Icon name="server" size={22} />
              </div>
              <div className="info-card-content">
                <h4>Core Specialties</h4>
                <p>Laravel (PHP), MySQL, REST APIs, and MERN Stack (React, Node, Express, MongoDB)</p>
              </div>
            </div>

            <div className="glass-card info-card">
              <div className="info-card-icon">
                <Icon name="zap" size={22} />
              </div>
              <div className="info-card-content">
                <h4>Availability</h4>
                <p>{personal.availability}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
