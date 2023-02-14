'use client';

import React from 'react';
import Banner from './Banner/banner';
import Blogs from './RecentBlogs/RecentBlogs';
import Projects from './RecentProjects/RecentProjects';
import Services from './Services/Services';

const HomeSection = () => {
  return (
    <div className="my-4">
      <Banner />
      <Services />
      <Projects />
      <Blogs />
    </div>
  );
};

export default HomeSection;
