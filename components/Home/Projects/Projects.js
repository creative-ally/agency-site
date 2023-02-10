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
            </div>
            <div className="h-full w-full">
              <img
                src={"/images/projects/2.png"}
                alt="project"
                className="w-full h-full"
              />
            </div>
          </div>
          <div className="flex gap-5 flex-col md:flex-row md:h-[29rem] w-full">
            <div className="h-full md:w-[60%]">
              <img
                src={"/images/projects/3.png"}
                alt="project"
                className="w-full h-full"
              />
            </div>
            <div className="h-full md:w-[40%]">
              <img
                src={"/images/projects/4.png"}
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

export default Projects;
