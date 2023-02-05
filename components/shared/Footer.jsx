'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { fromBottomVariants } from '@/utils/motion';
import styles from '@/styles';

const Footer = () => {
  const year = new Date()?.getFullYear();
  return (
    <motion.div
      variants={fromBottomVariants}
      initial="hidden"
      whileInView="show"
      className={`${styles.xPaddings} pt-6 mt-auto relative`}
    >
      <div className="footer footer-center p-4">
        <div>
          <p>
            Copyright &copy; {year} - All right reserved by{' '}
            <span className="text-xs text-primary font-extrabold sm:text-sm md:text-xl">
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
