'use client';

import { motion } from 'framer-motion';
import styles from '@/styles';
import { fromTopVariants } from '@/utils/motion';
import Link from 'next/link';
import React from 'react';

const Header = () => {
  const menuItems = (
    <>
      <li>
        <Link href={'/'}>Home</Link>
      </li>
      <li>
        <Link href={'/about'}>About</Link>
      </li>
      <li>
        <Link href={'/projects'}>Projects</Link>
      </li>
      <li>
        <Link href={'/blogs'}>Blogs</Link>
      </li>
      <li>
        <Link href={'/sign-in'}>Sign In</Link>
      </li>
      <li>
        <Link href={'/sign-up'}>Sign Up</Link>
      </li>
    </>
  );
  return (
    <motion.div
      variants={fromTopVariants}
      initial="hidden"
      whileInView="show"
      className={`${styles.xPaddings} py-4 relative`}
    >
      <div className="navbar">
        <div className="navbar-start">
          <button className="btn btn-ghost normal-case text-xs sm:text-sm md:text-xl">
            <Link href={'/'}>
              <span className="text-primary">Agency</span>
            </Link>
          </button>
        </div>
        <div className="navbar-end">
          <div className="dropdown dropdown-end">
            <label tabIndex="0" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex="0"
              className="menu menu-compact dropdown-content mt-3 p-2 shadow rounded-box w-52"
            >
              {menuItems}
            </ul>
          </div>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal p-0">{menuItems}</ul>
        </div>
      </div>
    </motion.div>
  );
};

export default Header;