'use client';

import React from 'react';
import styles from './PeopleNeeds.module.scss';
import Image from 'next/image';
import { motion } from 'framer-motion';
import AboutSection from '@/app/components/about/AboutSection';

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
    imageSrc: '/assets/menu/menu-need-1.jpg',
    altText: 'PeopleNeeds Item 1',
  },
  {
    title: 'VÍZIA A',
    title2: 'POSLANIE',
    imageSrc: '/assets/menu/menu-need-2.jpg',
    altText: 'PeopleNeeds Item 2',
  },
  {
    title: 'HODNOTY',
    title2: 'LEONIDES',
    imageSrc: '/assets/menu/menu-need-3.jpg',
    altText: 'PeopleNeeds Item 3',
  },
  {
    title: 'NOVÁ POLOŽKA',
    title2: 'ŠTVRTÁ POLOŽKA',
    imageSrc: '/assets/menu/menu-need-4.jpg',
    altText: 'PeopleNeeds Item 4',
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

interface AboutProps {
  aboutData: {
    sections: {
      title: string;
      content: string | string[];
      className: string;
    }[];
  };
}

const PeopleNeeds = ({ aboutData }: AboutProps) => {
  return (
    <div className={`${styles['peopleneeds']} flex justify-center flex-col w-full p-8 pb-[15rem] mt-[25rem]`}>
      <div className={`${styles['peopleneeds__info']} flex flex-col items-center justify-center max-w-full md:max-w-md mx-auto w-full py-[5rem] md:p-[5rem] mt-[15rem]`}>
        <h1 className="text-4xl font-bold">Potreby ĽUDÍ</h1>
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

      <section className={`${styles['peopleneeds__cards']} max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-8`}>
        {cardData.map((card, index) => (
          <motion.div
            key={index}
            className={`${styles['peopleneeds__card']}`}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={index}
            variants={cardVariants}
          >
            <h1 className={`${styles['peopleneeds__card-title']} text-main text-xl font-bold flex justify-center text-center`}>
              {card.title} <br /> {card.title2}
            </h1>
            <div className={`${styles['peopleneeds__card-divider']} flex justify-center my-2`}></div>
            <div className={`${styles['peopleneeds__card-image']} mt-[5rem]`}>
              <div className={styles['peopleneeds__circle-animation']}></div>
              <Image
                src={card.imageSrc}
                width={100}
                height={100}
                alt={card.altText}
                className="ml-2"
              />
            </div>
          </motion.div>
        ))}
      </section>
      <AboutSection aboutData={aboutData} />
    </div>
  );
};

export default PeopleNeeds;
