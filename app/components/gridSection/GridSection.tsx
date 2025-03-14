'use client';

import React, { useState } from 'react';
import styles from './GridSection.module.scss';
import { motion } from 'framer-motion';

const sections = [
  { id: 1, title: 'ZMEŇ SVOJ ŽIVOT ', title2:'V SPOLOČENSKOM POSTAVENÍ' },
  { id: 2, title: 'ZMEŇ SVOJ ŽIVOT ', title2:'VO SVOJEJ KARIÉRE' },
  { id: 3, title: 'ZMEŇ SVOJ ŽIVOT ', title2:'VO VZDELÁVANÍ' },
  { id: 4, title: 'ZMEŇ SVOJ ŽIVOT ', title2:'S FINANčNOU NEZÁVISLOSŤOU' },
];

const GridSection = () => {
  const [hoveredSection, setHoveredSection] = useState<number | null>(null);

  return (
    <div className={styles.grid}>
      {sections.map((section) => (
        <motion.div
          key={section.id}
          className={`${styles.section} ${styles[`section${section.id}`]}`}
          onHoverStart={() => setHoveredSection(section.id)}
          onHoverEnd={() => setHoveredSection(null)}
        >
          <motion.div
            className={styles.overlay}
            initial={{ scaleX: 0, originX: 0.5 }}
            animate={{
              scaleX: hoveredSection === section.id ? 1 : 0,
              originX: 0.5,
            }}
            transition={{ duration: 0.6, ease: 'easeInOut' }}
          >
            <motion.h2
              className={`${styles.title} text-xs md:text-2xl`}
              initial={{ opacity: 0.5 }}
              animate={{ opacity: hoveredSection === section.id ? 1 : 0.5 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
            >
              {section.title} <strong>{section.title2}</strong>
            </motion.h2>
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
};

export default GridSection;
