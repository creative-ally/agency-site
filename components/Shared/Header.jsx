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
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { AiOutlineMenu } from 'react-icons/ai'

const MaterialUISwitch = styled(Switch)(({ theme }) => ({
  width: 61,
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

const Header = ({ theme, setTheme }) => {
  const [openMenu, setOpenMenu] = useState(false)

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const user = ''

  const [openProfile, setOpenProfile] = React.useState(null);
  const open = Boolean(openProfile);
  const handleClick = (event) => {
    setOpenProfile(event.currentTarget);
  };
  const handleClose = () => {
    setOpenProfile(null);
  };

  const menuItems = (
    <>
      <li onClick={() => setOpenMenu(!openMenu)} className='md:px-2 lg:px-5 py-2'>
        <Link href={'/'}>Home</Link>
      </li>
      <li onClick={() => setOpenMenu(!openMenu)} className='md:px-2 lg:px-5 py-2'>
        <Link href={'/about'}>About</Link>
      </li>
      <li onClick={() => setOpenMenu(!openMenu)} className='md:px-2 lg:px-5 py-2'>
        <Link href={'/projects'}>Projects</Link>
      </li>
      <li onClick={() => setOpenMenu(!openMenu)} className='md:px-2 lg:px-5 py-2'>
        <Link href={'/blogs'}>Blogs</Link>
      </li>
    </>
  );
  return (
    <motion.div
      variants={fromTopVariants}
      initial="hidden"
      whileInView="show"
      className={`${styles.xPaddings} px-5 md:px-10 lg:px-24 sticky top-0 z-10 bg-base-100 dark:bg-dark-neutral`}
    >
      <div className='md:flex justify-between items-center py-4 relative'>
        <div className='flex justify-between items-center container'>
          <Link href='/' className='text-5xl font-bold text-primary dark:text-dark-base-100'>Brand</Link>
          <div className='cursor-pointer md:hidden' onClick={() => setOpenMenu(!openMenu)}><AiOutlineMenu size={35} className='text-primary dark:text-dark-base-100' /> </div>
        </div>
        <div className={`w-5/6 md:flex justify-between items-center transition-all ease-in-out duration-500 md:top-5 ${!openMenu ? 'top-[-400px]' : 'top-0'} absolute z-10 md:ml-36 lg:ml-64 bg-accent md:bg-opacity-0 p-5 md:p-0`}>
          <div>
            <ul className={`md:flex items-center justify-center text-lg md:text-xl lg:text-2xl text-primary dark:text-dark-base-100 `}>
              {menuItems}
            </ul>
          </div>
          <div>
            <ul className='md:flex items-center justify-center md:flex-row-reverse text-lg md:text-xl lg:text-2xl text-primary dark:text-dark-base-100'>
              <li className='md:px-2 lg:px-5 py-2 '>
                {
                  !user ? <Link onClick={() => setOpenMenu(!openMenu)} href={'#'}>Login</Link> :
                    <div>
                      <Link
                        href='#'
                        id="basic-button"
                        aria-controls={open ? 'basic-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        onClick={handleClick}
                      >
                        Dashboard
                      </Link>
                      <Menu
                        id="basic-menu"
                        anchorEl={openProfile}
                        open={open}
                        onClose={handleClose}
                        MenuListProps={{
                          'aria-labelledby': 'basic-button',
                        }}
                      >
                        <div className='py-3 pl-3 pr-10'>
                          <MenuItem onClick={handleClose}>Profile</MenuItem>
                          <MenuItem onClick={handleClose}>My account</MenuItem>
                          <MenuItem onClick={handleClose}>Logout</MenuItem>
                        </div>
                      </Menu>
                    </div>
                }
              </li>
              <li className='md:px-2 lg:px-5 py-2'>
                <FormGroup>
                  <FormControlLabel
                    control={<MaterialUISwitch onClick={handleThemeSwitch} defaultChecked />}
                  />
                </FormGroup>
              </li>
            </ul>
          </div>
        </div>
      </div>

    </motion.div>
  );
};

export default Header;
