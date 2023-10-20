import React from "react";
import { projects } from "../Constants";
import { Button } from "../Components/Button";
import { LiveButton } from "../Components/Button";

function Projects() {
  return (
    <div className="bg-gray-200">
      <h2 className="font-[ZohoPuviSemibold] text-[2rem] text-center py-5">
        My Latest Projects
      </h2>
      {/* whole section */}
      <section className="flex flex-col">
        {projects.map((project, index) => (
          <div 
          key={project.name}
          className={`flex lg:flex-row flex-col-reverse lg:h-[30rem] h-auto lg:ml-[5rem] lg:mr-[5rem] lg:mb-[3rem] ml-[1rem] mr-[1rem] mb-[3rem] rounded-[2rem] bg-white ${
            index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
          } shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)]`}
          >
            {/* left side */}
            <div className="flex flex-col md:flex-1 lg:justify-center lg:px-3 px-2">
              <h3 className="font-[ZohoPuviRegular] font-bold lg:text-[30px] text-[15px] pt-5 text-center">
                {project.name}
              </h3>
              <p className="text-center font-[ZohoPuviRegular] font-semibold pt-3 lg:text-[15px] text-[10px]">
                <span className="text-red-500">Technology Used: </span>
                {project.technology}
              </p>
              <p className="text-center lg:text-[20px] text-[10px] py-3">{project.description}</p>
              <p className="text-center lg:text-[15px] text-[10px]">
                <span className="text-red-500">Category: </span>
                {project.category}
              </p>
              <div className="flex lg:gap-10 gap-2 justify-center py-5">
              <Button  url={project.github}/>
              <LiveButton url={project.live} />  
              </div>            
            </div>
            {/* right side */}
            <div className="flex flex-1 justify-center lg:p-11 p-2 ">
              <img
                src={project.coverPhoto}
                alt={project.name}
                height={project.height}
                width={project.width}
                className="rounded-xl lg:w-full lg:h-auto object-contain"
              />
            </div>
          </div>
        ))}
        <p className="text-center font-semibold text-black hover:text-red-500 cursor-pointer max-lg:text-sm px-10 mb-10">
          <q>I will be undertaking and releasing numerous projects in the coming days.</q>
        </p>
      </section>
    </div>
  );
}

export default Projects;
