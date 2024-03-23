import React from "react";
import { projects } from "../Constants";
import { Button } from "../Components/Button";
import { LiveButton } from "../Components/Button";

function Projects() {
  return (
    <div className="bg-gray-100 mb-5">
      <h2 className="font-[ZohoPuviSemibold] text-2xl text-center py-5">
        My Latest Projects
      </h2>
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4 md:px-8 lg:px-12 mt-8">
        {projects.map((project) => (
          <div key={project.name} className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <img
              src={project.coverPhoto}
              alt={project.name}
              className="w-full h-52 "
            />
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-2 text-center">{project.name}</h3>
              <p className="text-sm text-gray-700 mb-4">
                <span className="text-red-500">Tech Stack: </span>
                {project.technology}
              </p>
              <p className="text-base text-gray-800 mb-4">{project.description}</p>
              <div className="flex justify-center space-x-4">
                <Button url={project.github} />
                <LiveButton url={project.live} />
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}

export default Projects;


