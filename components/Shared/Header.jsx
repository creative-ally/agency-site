'use client';

import React from 'react';
import { motion } from 'framer-motion';
import styles from '@/styles';
import { fromTopVariants } from '@/utils/motion';
import Link from 'next/link';
import { useState, useEffect } from "react";

import { styled } from '@mui/material/styles';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';

const MaterialUISwitch = styled(Switch)(({ theme }) => ({
  width: 62,
  height: 34,
  padding: 7,
  '& .MuiSwitch-switchBase': {
    margin: 1,
    padding: 0,
    transform: 'translateX(6px)',
    '&.Mui-checked': {
      color: '#fff',
      transform: 'translateX(22px)',
      '& .MuiSwitch-thumb:before': {
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
          '#fff',
        )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
      },
      '& + .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
      },
    },
  },
  '& .MuiSwitch-thumb': {
    backgroundColor: theme.palette.mode === 'dark' ? '#003892' : '#001e3c',
    width: 32,
    height: 32,
    '&:before': {
      content: "''",
      position: 'absolute',
      width: '100%',
      height: '100%',
      left: 0,
      top: 0,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
        '#fff',
      )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
    },
  },
  '& .MuiSwitch-track': {
    opacity: 1,
    backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
    borderRadius: 20 / 2,
  },
}));

const Header = ({theme, setTheme}) => {


  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const menuItems = (
    <>
      <li className='md:px-5 py-2'>
        <Link href={'/'}>Home</Link>
      </li>
      <li className='md:px-5 py-2'>
        <Link href={'/about'}>About</Link>
      </li>
      <li className='md:px-5 py-2'>
        <Link href={'/projects'}>Projects</Link>
      </li>
      <li className='md:px-5 py-2'>
        <Link href={'/blogs'}>Blogs</Link>
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
      <div className='flex justify-between items-center py-4'>
        <div>
          <Link href='/' className='text-5xl font-bold text-primary dark:text-dark-base-100'>Brand</Link>
        </div>
        <div>
          <ul className='md:flex items-center justify-center text-2xl text-primary dark:text-dark-base-100'>
            {menuItems}
          </ul>
        </div>
        <div>
          <ul className='md:flex items-center justify-center text-2xl text-primary dark:text-dark-base-100'>
            <li className='md:px-5 py-2'>
              <FormGroup>
                <FormControlLabel
                  control={<MaterialUISwitch onClick={handleThemeSwitch} defaultChecked />}
                />
              </FormGroup>
            </li>
            <li className='md:px-5 py-2'>
              <Link href={'#'}>Login</Link>
            </li>
          </ul>
        </div>
      </div>

    </motion.div>
  );
};

export default Header;
