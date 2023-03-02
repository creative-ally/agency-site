'use client';

import Globalbtn from '@/components/Shared/globalbtn';
import Image from 'next/image';
import React from 'react';
// import bgImage from '../../../assets/images/2.jpg'

import './banner.css';

const Banner = () => {
  return (
    <div className="bgImage">
      <div className="">
        <div className="flex justify-between items-center py-10 md:py-16 lg:py-20 px-5 md:px-10 lg:px-32">
          <div className="">
            <p className="text-lg md:text-xl lg:text-2xl uppercase font-semibold text-base-100">
              Business Solution
            </p>
            <h2 className="text-3xl md:text-6xl lg:text-8xl uppercase font-semibold">
              We Are Digital <br />{' '}
              <span className="text-primary dark:text-dark-primary">
                Agency.
              </span>{' '}
            </h2>
            <p className="text-sm md:text-base lg:text-lg py-3 md:py-6 lg:py-10 text-base-100">
              There are many variations of passages of Lorem Ipsum available,
              the <br /> majority have suffered alteration in some form by
              injected humour.
            </p>
            <Globalbtn>Discover More</Globalbtn>
          </div>
          {/* <div>
            <Image className=''
              width={1000}
              height={1000}
              src="/images/6.png"
              alt="" />
          </div> */}
        </div>
        {/* <div className="flex justify-between items-start pb-5 mt-[-100px] md:mt-[-200px] lg:mt-[-450px]">
          <div className="w-1/12">
            <Image
              className="leftImage"
              width={150}
              height={100}
              src="/images/shape.png"
              alt=""
            />
          </div>
          <div className="md:w-9/12"></div>
          <div className="w-1/12 md:w-2/12 overflow-x-hidden">
            <Image
              className="rightImage"
              width={300}
              height={300}
              src="/images/shape-2.png"
              alt=""
            />
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Banner;
