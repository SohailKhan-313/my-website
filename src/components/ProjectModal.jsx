import React, { useEffect } from 'react';
import { Icon } from './Icons';

export const ProjectModal = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <div className="modal-backdrop" onClick={onClose} role="dialog" aria-modal="true" aria-labelledby="modal-title">
      <div className="modal-window" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
          <Icon name="close" size={20} />
        </button>

        <div className="modal-media">
          <img src={project.image} alt={project.title} />
        </div>

        <div className="modal-content">
          <div className="modal-header-meta">
            <span className="project-category-tag" style={{ position: 'static' }}>
              {project.category}
            </span>
          </div>

          <h2 id="modal-title" className="modal-title">{project.title}</h2>
          <p className="modal-subtitle">{project.subtitle}</p>

          {project.impact && (
            <div className="modal-impact-box">
              <strong>Impact & Results:</strong> {project.impact}
            </div>
          )}

          <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '1.5rem' }}>
            {project.description}
          </p>

          <h3 style={{ fontSize: '1.1rem', fontWeight: '700', marginBottom: '0.5rem' }}>
            Key Architecture & Features
          </h3>
          <ul className="modal-features-list">
            {project.features?.map((feature, idx) => (
              <li key={idx}>
                <Icon name="check" size={16} style={{ color: '#10b981', flexShrink: 0, marginTop: '3px' }} />
                <span>{feature}</span>
              </li>
            ))}
          </ul>

          <div style={{ marginTop: '1.5rem' }}>
            <h4 style={{ fontSize: '0.85rem', color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '0.6rem' }}>
              Tech Stack Used
            </h4>
            <div className="project-tags">
              {project.tags.map((tag, idx) => (
                <span key={idx} className="tech-tag">{tag}</span>
              ))}
            </div>
          </div>

          <div className="modal-footer-actions">
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              <Icon name="externalLink" size={18} />
              Visit Live App
            </a>
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
              <Icon name="github" size={18} />
              View Source Code
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
