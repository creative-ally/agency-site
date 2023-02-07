'use client';

import React from 'react';
import styles from '@/styles';
import { motion } from 'framer-motion';
import { fromBottomVariants } from '@/utils/motion';

const Footer = () => {
  const year = new Date()?.getFullYear();

  return (
    <motion.div
      variants={fromBottomVariants}
      initial="hidden"
      whileInView="show"
      className={`${styles.xPaddings} pt-6 mt-auto relative`}
    >
      <div className="footer footer-center p-4 " >
        <div className='min-h-screen'>
          <p className='text-center text-neutral dark:text-dark-base-100'>
            Copyright &copy; {year} - All right reserved by{' '}
            <span className="text-xs text-primary dark:text-dark-primary font-extrabold sm:text-sm md:text-xl">
              {' '}
              Agency{' '}
            </span>
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default Footer;
