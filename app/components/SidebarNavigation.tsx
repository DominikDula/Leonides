'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import styles from './SidebarNavigation.module.scss';

interface MenuItem {
  image: string;
  number: string;
  title: string;
}

const menuItems: MenuItem[] = [
  { image: '/assets/menu/menu-01.jpg', number: '01', title: 'O SPOLOČNOSTI' },
  { image: '/assets/menu/menu-02.jpg', number: '02', title: 'ČO PONÚKA LEONIDES?' },
  { image: '/assets/menu/menu-03.jpg', number: '03', title: 'POTREBY ĽUDÍ' },
  { image: '/assets/menu/menu-04.jpg', number: '04', title: 'ZMEŇ SVOJ ŽIVOT' },
  { image: '/assets/menu/menu-05.jpg', number: '05', title: 'PARTNERI' },
  { image: '/assets/menu/menu-06.jpg', number: '06', title: 'KONTAKT' },
];

const SidebarNavigation= () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const sidebarVariants = {
    open: { x: 0, opacity: 1 },
    closed: { x: '-100%', opacity: 0 },
  };

  const buttonVariants = {
    open: { y: -100 },
    closed: { y: 0 },
  };

  return (
    <div className="relative flex justify-center">
      <motion.button
        className="fixed top-4 p-2 z-50"
        onClick={() => setIsOpen(true)}
        animate={isOpen ? 'open' : 'closed'}
        variants={buttonVariants}
        transition={{ type: 'tween', ease: 'easeInOut', duration: 0.5 }}
      >
        <Image
          src="/images/menu.svg"
          width={50}
          height={50}
          alt="Logo"
          className="ml-2"
        />
      </motion.button>
      <motion.div
        className={`${styles['sidebar__background']} fixed top-0 left-0 w-full lg:w-1/2 h-full text-white`}
        initial="closed"
        animate={isOpen ? 'open' : 'closed'}
        variants={sidebarVariants}
        transition={{ type: 'tween', ease: 'easeInOut', duration: 0.5 }}
      >
        <div className="flex justify-between">
          <h1 className="text-main p-4">MENU</h1>
          <button className="p-2 text-white" onClick={() => setIsOpen(false)}>
            <Image
              src="/images/menu-rot.svg"
              width={50}
              height={50}
              alt="Logo"
              className="ml-2"
            />
          </button>
        </div>
        <nav className="p-4 flex justify-center items-center text-black h-full w-full">
          <ul className="grid grid-cols-3 gap-4 w-full">
            {menuItems.map((item, index) => (
              <div key={index} className={`${styles['menu__circle']} flex flex-col`}>
                <div className={styles['menu__circle-image']}>
                  <div className={styles['menu__circle-animation']}></div>
                  <Image
                    src={item.image}
                    width={50}
                    height={50}
                    alt="Menu Item"
                    className="ml-2"
                  />
                </div>
                <div className={`${styles['menu__circle-number']} flex justify-end w-full`}>
                  {item.number}
                </div>
                <div className={styles['menu__circle-divider']} />
                <div className={`${styles['menu__circle-description']} text-main text-left`}>
                  {item.title}
                </div>
              </div>
            ))}
          </ul>
        </nav>
      </motion.div>
    </div>
  );
};

export default SidebarNavigation;
