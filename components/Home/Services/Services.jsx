'use client';

import React from 'react';
import { BiBookContent } from 'react-icons/bi';
import { FaMobileAlt, FaDigitalOcean } from 'react-icons/fa';
import { CgWebsite } from 'react-icons/cg';
import { HiLightBulb } from 'react-icons/hi';
import { Icon } from '@rsuite/icons';
// import "rsuite/dist/rsuite.min.css";

const Services = () => {
  return (
    <div className="p-5 md:p-10 lg:p-32">
      <div>
        <p className="text-lg md:text-xl lg:text-2xl uppercase font-semibold text-primary dark:text-dark-primary">
          Our Best Service
        </p>
        <h3 className="text-2xl md:text-3xl lg:text-5xl uppercase font-semibold text-[#121212] dark:text-base-100 pt-3 lg:pt-5">
          WHAT Services WE’RE <br />{' '}
        </h3>
        <h3 className="text-2xl md:text-3xl lg:text-5xl uppercase font-semibold text-primary dark:text-dark-primary pt-2 lg:pt-5">
          OFFERING.
        </h3>
      </div>
      <div className="grid gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-8 lg:mt-20">
        {services.map((service) => {
          return (
            <div
              className="flex justify-between items-start group cursor-pointer"
              key={service.id}
            >
              <div className="mr-3 md:mr-5 lg:mr-8 border border-primary dark:border-dark-primary rounded-full p-8 group-hover:bg-gradient-to-r from-secondary to-primary dark:from-dark-accent dark:to-dark-primary transition-all ease-in-out duration-500 ">
                <FaDigitalOcean
                  className="text-primary dark:text-dark-primary group-hover:text-base-100"
                  size={30}
                />
              </div>
              <div>
                <h3 className="mb-3 text-lg md:text-xl lg:text-2xl uppercase font-semibold text-black dark:text-base-100 group-hover:text-primary dark:group-hover:text-dark-primary">
                  {service.title} <br /> {service.title2}
                </h3>
                <p className="text-black lg:text-lg dark:text-base-100 mt-3 md:mt-5 lg:mt-7">
                  {service.content}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Services;

const services = [
  {
    id: '01',
    image: 'HiLightBulb',
    title: 'Creative',
    title2: 'Branding Designs',
    content:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima, voluptate!',
  },
  {
    id: '02',
    image: 'FaDigitalOcean',
    title: 'Digital',
    title2: 'Marketing',
    content:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima, voluptate!',
  },
  {
    id: '03',
    image: 'CgWebsite',
    title: 'Web',
    title2: 'Design',
    content:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima, voluptate!',
  },
  {
    id: '04',
    image: 'CgWebsite',
    title: 'Web',
    title2: 'Development',
    content:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima, voluptate!',
  },
  {
    id: '05',
    image: 'FaMobileAlt',
    title: 'Mobile',
    title2: 'App development',
    content:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima, voluptate!',
  },
  {
    id: '06',
    image: 'BiBookContent',
    title: 'Creative',
    title2: 'Content writing',
    content:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima, voluptate!',
  },
];
