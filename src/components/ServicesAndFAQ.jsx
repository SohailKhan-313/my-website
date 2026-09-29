import React, { useState } from 'react';
import { Icon } from './Icons';

export const ServicesAndFAQ = ({ services, faqs }) => {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (idx) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  return (
    <section className="section">
      <div className="container">
        {/* Section 1: Services */}
        <div className="section-header">
          <div className="section-badge">
            <Icon name="zap" size={14} />
            <span>Specialties</span>
          </div>
          <h2 className="section-title">
            What I <span className="gradient-text">Offer</span>
          </h2>
          <p className="section-subtitle">
            Reliable full-stack web development services tailored to help businesses, clinics, and startups build modern applications.
          </p>
        </div>

        <div className="services-grid" style={{ marginBottom: '5rem' }}>
          {services.map((service, idx) => (
            <div key={idx} className="glass-card service-card">
              <div className="service-icon-box">
                <Icon name={service.icon} size={24} />
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-desc">{service.description}</p>
            </div>
          ))}
        </div>

        {/* Section 2: Interactive FAQs */}
        {faqs && faqs.length > 0 && (
          <div>
            <div className="section-header">
              <div className="section-badge">
                <Icon name="code" size={14} />
                <span>Common Inquiries</span>
              </div>
              <h2 className="section-title">
                Frequently Asked <span className="gradient-text">Questions</span>
              </h2>
            </div>

            <div className="faq-list">
              {faqs.map((faq, idx) => (
                <div key={idx} className="glass-card faq-item">
                  <button
                    className="faq-question-btn"
                    onClick={() => toggleFaq(idx)}
                    aria-expanded={openFaq === idx}
                  >
                    <span>{faq.question}</span>
                    <span className={`faq-chevron ${openFaq === idx ? 'open' : ''}`}>
                      <Icon name="chevronDown" size={20} />
                    </span>
                  </button>
                  {openFaq === idx && (
                    <div className="faq-answer">
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
