'use client';

import React, { JSX } from 'react';
import styles from './About.module.scss';

interface Section {
  title: string;
  content: string | string[];
  className: string;
}

interface AboutSectionProps {
  aboutData: {
    sections: Section[];
  };
}

const AboutSection = ({ aboutData }: AboutSectionProps) => {
  const formatText = (text: string): (string | JSX.Element)[] => {
    const parts = text.split(/(\*\*.*?\*\*)/g);
    return parts.map((part, idx) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return <span key={idx} className="text-main font-semibold">{part.slice(2, -2)}</span>;
      }
      return part;
    });
  };

  return (
    <section className="max-w-3xl mx-auto mt-8 p-4">
      {aboutData.sections.map((section, index) => (
        <div key={index} className={`mb-8 ${styles[section.className] || ''}`}>
          <h2 className="text-2xl text-main">{section.title}</h2>
          <div className={`${styles['about__card-divider']} my-2`}></div>
          {Array.isArray(section.content) ? (
            section.content.map((paragraph, idx) => (
              <p key={idx}>{formatText(paragraph)}</p>
            ))
          ) : (
            <p>{formatText(section.content)}</p>
          )}
        </div>
      ))}
    </section>
  );
};

export default AboutSection;
