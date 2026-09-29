import React from 'react';
import { Icon } from './Icons';

export const Skills = ({ skills }) => {
  return (
    <section id="skills" className="section" style={{ background: 'rgba(255,255,255,0.01)' }}>
      <div className="container">
        <div className="section-header">
          <div className="section-badge">
            <Icon name="cpu" size={14} />
            <span>Technical Stack</span>
          </div>
          <h2 className="section-title">
            Skills & <span className="gradient-text">Technologies</span>
          </h2>
          <p className="section-subtitle">
            A comprehensive overview of my technical toolset honed through building real-world enterprise products.
          </p>
        </div>

        <div className="skills-grid">
          {skills.map((category, catIdx) => (
            <div key={catIdx} className="glass-card skill-category-card">
              <div className="category-header">
                <h3 className="category-title">{category.category}</h3>
                <p className="category-desc">{category.description}</p>
              </div>

              <div className="skill-bars-list">
                {category.items.map((skill, skillIdx) => (
                  <div key={skillIdx} className="skill-bar-item">
                    <div className="skill-info">
                      <span>{skill.name}</span>
                      <span className="skill-percentage">{skill.level}%</span>
                    </div>
                    <div className="skill-progress-track">
                      <div
                        className="skill-progress-fill"
                        style={{ width: `${skill.level}%` }}
                        role="progressbar"
                        aria-valuenow={skill.level}
                        aria-valuemin="0"
                        aria-valuemax="100"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
