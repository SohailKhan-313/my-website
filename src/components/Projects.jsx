import React, { useState } from 'react';
import { Icon } from './Icons';

export const Projects = ({ projects, categories, onSelectProject }) => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter(p => p.category.toLowerCase() === activeCategory.toLowerCase());

  return (
    <section id="projects" className="section">
      <div className="container">
        <div className="section-header">
          <div className="section-badge">
            <Icon name="layout" size={14} />
            <span>Portfolio</span>
          </div>
          <h2 className="section-title">
            Featured <span className="gradient-text">Projects & Case Studies</span>
          </h2>
          <p className="section-subtitle">
            A selection of production-grade systems, applications, and experiments engineered for performance and real-world scale.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="filter-bar" role="tablist" aria-label="Project categories">
          {categories.map((category) => (
            <button
              key={category}
              className={`filter-btn ${activeCategory === category ? 'active' : ''}`}
              onClick={() => setActiveCategory(category)}
              role="tab"
              aria-selected={activeCategory === category}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <article
              key={project.id}
              className="glass-card project-card"
              onClick={() => onSelectProject(project)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  onSelectProject(project);
                }
              }}
              aria-label={`View details for ${project.title}`}
            >
              <div className="project-image-box">
                <img
                  src={project.image}
                  alt={`${project.title} screenshot`}
                  className="project-img"
                  loading="lazy"
                />
                <span className="project-category-tag">{project.category}</span>
              </div>

              <div className="project-body">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.subtitle}</p>

                <div className="project-tags">
                  {project.tags.slice(0, 4).map((tag, idx) => (
                    <span key={idx} className="tech-tag">{tag}</span>
                  ))}
                  {project.tags.length > 4 && (
                    <span className="tech-tag">+{project.tags.length - 4}</span>
                  )}
                </div>

                <div className="project-footer">
                  <span className="view-details-link">
                    Case Study
                    <Icon name="arrowRight" size={16} />
                  </span>

                  <div className="project-action-icons" onClick={(e) => e.stopPropagation()}>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="icon-action-btn"
                      title="GitHub Repository"
                      aria-label="GitHub Repository"
                    >
                      <Icon name="github" size={16} />
                    </a>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="icon-action-btn"
                      title="Live Preview"
                      aria-label="Live Preview"
                    >
                      <Icon name="externalLink" size={16} />
                    </a>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
