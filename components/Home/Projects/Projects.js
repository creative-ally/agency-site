import Image from "next/image";
import React from "react";
import "./projects.css";

const Projects = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="mb-8 mt-14  bg-red-500 px-5 md:px-0">
        <div className="my-10">
          <p className="text-lg text-warning uppercase">our portfolio</p>
          <h2 className="text-5xl uppercase font-bold flex flex-col">
            our recent <span className="text-dark-secondary">projects.</span>
          </h2>
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex gap-5 flex-col md:flex-row md:h-[29rem]">
            <div className="h-full w-full project-animate rounded-none">
              <img
                src={"/images/projects/1.png"}
                alt="project"
                className="w-full h-full rounded-none"
              />
              <div className="absolute animate-after bottom-0 w-full text-[#fff] pl-10 pb-8">
                <h2 className="uppercase text-4xl font-bold ">
                  Mobile ui design
                </h2>
                <p className="text-md capitalize">Social media marketting</p>
              </div>
            </div>
            <div className="h-full w-full project-animate">
              <img
                src={"/images/projects/2.png"}
                alt="project"
                className="w-full h-full"
              />{" "}
              <div className="absolute animate-after bottom-0 w-full text-[#fff] pl-10 pb-8">
                <h2 className="uppercase text-4xl font-bold ">
                  product screen design
                </h2>
                <p className="text-md capitalize">Social media marketting</p>
              </div>
            </div>
          </div>
          <div className="flex gap-5 flex-col md:flex-row md:h-[29rem] w-full">
            <div className="h-full md:w-[60%] project-animate">
              <img
                src={"/images/projects/3.png"}
                alt="project"
                className="w-full h-full"
              />{" "}
              <div className="absolute animate-after bottom-0 w-full text-[#fff] pl-10 pb-8">
                <h2 className="uppercase text-4xl font-bold ">
                  wordpress website
                </h2>
                <p className="text-md capitalize">Social media marketting</p>
              </div>
            </div>

            <div className="h-full md:w-[40%] relative animate-last">
              <img
                src={"/images/projects/4.png"}
                alt="project"
                className="w-full h-full"
              />
              <div className="absolute z-50 flex justify-center items-center flex-col top-0 w-full h-full text-[#fff] pl-10 pb-8">
                <p className="">17+</p>
                <p className="capitalize text-xl">Photoshots</p>
                <button className="uppercase border-2 border-[#fff] rounded-full px-3 py-4 font-bold text-xl mt-4">
                  view all samples
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
