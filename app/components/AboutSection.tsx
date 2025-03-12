'use client';

import React, { JSX } from 'react';
import styles from './About.module.scss';
import aboutData from '../../public/aboutData.json';

interface Section {
  title: string;
  content: string | string[];
  className: string;
}

const AboutSection: React.FC = () => {
  const data: Section[] = aboutData.sections;

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
    <section className="max-w-5xl mx-auto mt-8 p-4">
      {data.map((section, index) => (
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
