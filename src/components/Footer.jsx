import React from 'react';
import { Icon } from './Icons';

export const Footer = ({ personal, socialLinks }) => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div>
            <h3 style={{ fontSize: '1.2rem', fontWeight: '800', marginBottom: '0.25rem' }}>
              {personal.name}
            </h3>
            <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
              {personal.role}
            </p>
          </div>

          <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
            <div className="hero-socials" style={{ margin: 0 }}>
              {socialLinks.map(link => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon-btn"
                  title={link.name}
                  aria-label={link.name}
                  style={{ width: '36px', height: '36px' }}
                >
                  <Icon name={link.icon} size={16} />
                </a>
              ))}
            </div>

            <button
              onClick={scrollToTop}
              className="btn btn-outline"
              style={{ padding: '0.5rem 1rem', fontSize: '0.82rem' }}
              aria-label="Scroll back to top"
            >
              Top ↑
            </button>
          </div>
        </div>

        <div className="footer-copy">
          <p>© {currentYear} {personal.name}. All rights reserved. Crafted with React & clean modern CSS.</p>
        </div>
      </div>
    </footer>
  );
};
