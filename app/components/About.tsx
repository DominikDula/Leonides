'use client';

import React from 'react';
import styles from './About.module.scss';
import Image from 'next/image';
import { motion } from 'framer-motion';
import AboutSection from '@/app/components/AboutSection';

interface CardData {
  title: string;
  title2: string;
  imageSrc: string;
  altText: string;
}

const cardData: CardData[] = [
  {
    title: 'INŠPIROVANÝ',
    title2: 'HISTÓRIOU',
    imageSrc: '/assets/menu/menu-about-1.jpg',
    altText: 'About Item 1',
  },
  {
    title: 'VÍZIA A',
    title2: 'POSLANIE',
    imageSrc: '/assets/menu/menu-about-2.jpg',
    altText: 'About Item 2',
  },
  {
    title: 'HODNOTY',
    title2: 'LEONIDES',
    imageSrc: '/assets/menu/menu-about-3.jpg',
    altText: 'About Item 3',
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 300 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: i * 0.2,
      ease: 'easeInOut',
    },
  }),
};

const About: React.FC = () => {
  return (
    <div className={`${styles['about']} flex justify-center flex-col w-full p-8 pb-[15rem]`}>
      <div className={`${styles['about__info']} flex flex-col items-center justify-center max-w-full md:max-w-md mx-auto w-full py-[5rem] md:p-[5rem] mt-[15rem]`}>
        <h1 className="text-4xl font-bold">O SPOLOČNOSTI</h1>
        <p className="tracking-widest">LEONIDES</p>
        <div className="logo mt-4">
          <Image
            src="/images/ornament.svg"
            width={150}
            height={150}
            alt="ornament"
            className="ml-2"
          />
        </div>
      </div>

      <section className={`${styles['about__cards']} max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8`}>
        {cardData.map((card, index) => (
          <motion.div
            key={index}
            className={`${styles['about__card']} flex flex-col items-center`}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={index}
            variants={cardVariants}
          >
            <h1 className={`${styles['about__card-title']} text-main text-xl font-bold flex justify-center text-center`}>
              {card.title} <br /> {card.title2}
            </h1>
            <div className={`${styles['about__card-divider']} flex justify-center my-2`}></div>
            <div className={`${styles['about__card-image']} mt-[5rem]`}>
              <Image
                src={card.imageSrc}
                width={200}
                height={300}
                alt={card.altText}
                className="ml-2"
              />
            </div>
          </motion.div>
        ))}
      </section>
      <AboutSection />
    </div>
  );
};

export default About;
