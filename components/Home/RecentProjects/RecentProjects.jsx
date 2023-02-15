'use client';

import React from 'react';
import './RecentProjects.css';
import projectImage from '../../../assets/images/projects/1.png'
import projectImage2 from '../../../assets/images/projects/2.png'
import projectImage3 from '../../../assets/images/projects/3.png'
import projectImage4 from '../../../assets/images/projects/4.png'
import Image from 'next/image';

const RecentProjects = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="mb-8 mt-14 px-5 md:px-0">
        <div className="my-10">
          <p className="text-lg text-warning uppercase">our portfolio</p>
          <h2 className="text-5xl uppercase font-bold flex flex-col">
            our recent <span className="text-dark-secondary">projects.</span>
          </h2>
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex gap-5 flex-col md:flex-row md:h-[29rem]">
            <div className="h-full w-full project-animate rounded-none">
              <Image
                src={projectImage}
                alt="project"
                className="w-full h-full rounded-none"
              />
            </div>
            <div className="h-full w-full">
              <Image
                src={projectImage2}
                alt="project"
                className="w-full h-full"
              />
            </div>
          </div>
          <div className="flex gap-5 flex-col md:flex-row md:h-[29rem] w-full">
            <div className="h-full md:w-[60%]">
              <Image
                src={projectImage3}
                alt="project"
                className="w-full h-full"
              />
            </div>
            <div className="h-full md:w-[40%]">
              <Image
                src={projectImage4}
                alt="project"
                className="w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentProjects;
