'use client';

import React from 'react';
import styles from '@/styles';
import { motion } from 'framer-motion';
import { fromBottomVariants } from '@/utils/motion';
import { SocialIcon } from 'react-social-icons';

const Footer = () => {
  const year = new Date()?.getFullYear();

  return (
    <motion.div
      variants={fromBottomVariants}
      initial="hidden"
      whileInView="show"
      className={`${styles.xPaddings} pt-6 mt-auto relative bg-base-100 dark:bg-dark-neutral`}
    >
      <div className="footer footer-center p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 md:grid-rows-2 lg:grid-cols-4 lg:grid-rows-1 p-10">
          <div className="p-1 mr-3">
            <div className="flex flex-col justify-start items-start">
              <p className="text-3xl text-primary dark:text-dark-base-100 font-bold mb-2">
                Agency
              </p>
              <p className="text-lg text-secondary dark:text-white font-semibold text-justify">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour
              </p>
              <div>
                <SocialIcon
                  url="https://www.facebook.com/"
                  fgColor="#015249"
                  bgColor="transparent"
                  className=""
                />{' '}
                <SocialIcon
                  url="https://www.instagram.com/"
                  fgColor="#015249"
                  bgColor="transparent"
                  className=""
                />{' '}
                <SocialIcon
                  url="https://twitter.com/"
                  fgColor="#015249"
                  bgColor="transparent"
                  className=""
                />{' '}
                <SocialIcon
                  url="https://www.linkedin.com/"
                  fgColor="#015249"
                  bgColor="transparent"
                  className=""
                />{' '}
                <SocialIcon
                  url="https://github.com/"
                  fgColor="#015249"
                  bgColor="transparent"
                  className=""
                />
              </div>
            </div>
          </div>
          <div className="p-4 ml-4">
            <p className="text-xl text-primary dark:text-dark-base-100 font-bold mb-2">
              About
            </p>
            <p className="text-md text-secondary dark:text-white font-semibold link link-hover">
              About Us
            </p>
            <p className="text-md text-secondary dark:text-white font-semibold link link-hover">
              Terms & Conditions
            </p>
            <p className="text-md text-secondary dark:text-white font-semibold link link-hover">
              Privacy Policy
            </p>
            <p className="text-md text-secondary dark:text-white font-semibold link link-hover">
              Affiliates
            </p>
            <p className="text-md text-secondary dark:text-white font-semibold link link-hover">
              Return Policy
            </p>
            <p className="text-md text-secondary dark:text-white font-semibold link link-hover">
              Web Development
            </p>
          </div>

          <div className="p-4 ml-4">
            <p className="text-xl text-primary dark:text-dark-base-100 font-bold mb-2">
              Our Company
            </p>
            <p className="text-md text-secondary dark:text-white font-semibold link link-hover">
              Order History
            </p>
            <p className="text-md text-secondary dark:text-white font-semibold link link-hover">
              Returns
            </p>
            <p className="text-md text-secondary dark:text-white font-semibold link link-hover">
              Wishlist
            </p>
            <p className="text-md text-secondary dark:text-white font-semibold link link-hover">
              Newsletter
            </p>
            <p className="text-md text-secondary dark:text-white font-semibold link link-hover">
              Marketing
            </p>
            <p className="text-md text-secondary dark:text-white font-semibold link link-hover">
              Customer Success
            </p>
          </div>

          <div className="p-1 mr-3">
            <p className="text-xl text-primary dark:text-dark-base-100 font-bold mb-2">
              Newsletter
            </p>
            <div className="flex flex-col justify-start items-start">
              <p className="text-md text-secondary dark:text-white font-semibold">
                To connect with us please subscribe to our newsletter.
              </p>
              <div className="my-4">
                <div className="flex">
                  <input
                    type="text"
                    placeholder="example@mail.com"
                    className="p-2 w-2/4 sm:w-auto border-solid border-2border-primary"
                  />
                  <button className="btn btn-square bg-primary hover:bg-secondary text-white p-2 w-1/2 sm:w-auto">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t-2 border-primary p-3">
          <p className="text-center text-secondary dark:text-white font-semibold">
            Copyright &copy; {year} - All right reserved by{' '}
            <span className="text-xl text-primary dark:text-dark-base-100 font-extrabold">
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
