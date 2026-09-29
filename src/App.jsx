import React, { useState, useEffect } from 'react';
import { portfolioData } from './data/portfolioData';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { ProjectModal } from './components/ProjectModal';
import { Experience } from './components/Experience';
import { ServicesAndFAQ } from './components/ServicesAndFAQ';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Toast } from './components/Toast';

export function App() {
  const [theme, setTheme] = useState('dark');
  const [selectedProject, setSelectedProject] = useState(null);
  const [toastMessage, setToastMessage] = useState('');

  // Initialize theme from system or stored preference
  useEffect(() => {
    const savedTheme = localStorage.getItem('portfolio-theme') || 'dark';
    setTheme(savedTheme);
    document.documentElement.setAttribute('data-theme', savedTheme);
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(nextTheme);
    document.documentElement.setAttribute('data-theme', nextTheme);
    localStorage.setItem('portfolio-theme', nextTheme);
  };

  const handleShowToast = (msg) => {
    setToastMessage(msg);
  };

  return (
    <div className="portfolio-app">
      {/* Top Fixed Navigation */}
      <Navbar
        personal={portfolioData.personal}
        theme={theme}
        toggleTheme={toggleTheme}
      />

      <main>
        {/* Hero Section & Stats */}
        <Hero
          personal={portfolioData.personal}
          socialLinks={portfolioData.socialLinks}
          stats={portfolioData.stats}
        />

        {/* About Section */}
        <About
          personal={portfolioData.personal}
        />

        {/* Skills Section */}
        <Skills
          skills={portfolioData.skills}
        />

        {/* Featured Projects with Category Filter */}
        <Projects
          projects={portfolioData.projects}
          categories={portfolioData.projectCategories}
          onSelectProject={(project) => setSelectedProject(project)}
        />

        {/* Experience Timeline */}
        <Experience
          experience={portfolioData.experience}
        />

        {/* Services & FAQs */}
        <ServicesAndFAQ
          services={portfolioData.services}
          faqs={portfolioData.faqs}
        />

        {/* Contact Form & Icon Redirection Information */}
        <Contact
          personal={portfolioData.personal}
          socialLinks={portfolioData.socialLinks}
          onShowToast={handleShowToast}
        />
      </main>

      {/* Footer */}
      <Footer
        personal={portfolioData.personal}
        socialLinks={portfolioData.socialLinks}
      />

      {/* Case Study Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}

      {/* Instant Notification Toast */}
      {toastMessage && (
        <Toast
          message={toastMessage}
          onClose={() => setToastMessage('')}
        />
      )}
    </div>
  );
}

export default App;
