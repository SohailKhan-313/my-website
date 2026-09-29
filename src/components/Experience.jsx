import React from 'react';
import { Icon } from './Icons';

export const Experience = ({ experience }) => {
  return (
    <section id="experience" className="section" style={{ background: 'rgba(255,255,255,0.01)' }}>
      <div className="container">
        <div className="section-header">
          <div className="section-badge">
            <Icon name="briefcase" size={14} />
            <span>Career Path</span>
          </div>
          <h2 className="section-title">
            Work <span className="gradient-text">Experience & Impact</span>
          </h2>
          <p className="section-subtitle">
            A chronological timeline of roles where I designed systems, led engineering initiatives, and shipped production value.
          </p>
        </div>

        <div className="timeline">
          {experience.map((item, idx) => (
            <div key={idx} className="glass-card timeline-card">
              <div className="timeline-dot" />

              <div className="timeline-header">
                <div>
                  <h3 className="timeline-role">{item.role}</h3>
                  <div className="timeline-company">
                    {item.company} • <span style={{ color: 'var(--text-muted)' }}>{item.location}</span>
                  </div>
                </div>

                <div className="timeline-period">
                  {item.period}
                </div>
              </div>

              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', margin: '0.75rem 0' }}>
                {item.description}
              </p>

              <ul className="timeline-achievements">
                {item.achievements.map((ach, achIdx) => (
                  <li key={achIdx}>{ach}</li>
                ))}
              </ul>

              <div className="project-tags" style={{ marginTop: '1rem' }}>
                {item.technologies.map((tech, techIdx) => (
                  <span key={techIdx} className="tech-tag">{tech}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
