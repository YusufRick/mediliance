// src/components/Section.jsx
import React from 'react';

const Section = ({ title, subtitle, imageUrl }) => (
  <section className="section" id="shareholders">
    <div className="section-content">
      <h2>{title}</h2>
      <p>{subtitle}</p>
    </div>
    <img src={imageUrl} alt={title} />
  </section>
);

export default Section;
