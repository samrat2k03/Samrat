import React from "react";
import { SkillsList } from "../Constants/index";

function Skills() {
  return (
    <div className="bg-gray-100 pt-[3rem] pb-[5rem]">
      <h3 className="font-[ZohoPuviSemibold] text-[2.4rem] mb-[20px] font-bold text-center">
        Skills
      </h3>
      <div className="bg-white px-8 py-10 rounded-3xl ml-5 mr-5 shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px]">
        <section className="grid md:grid-cols-6 md:gap-3 gap-2 grid-cols-3 sm:grid-cols-3 xl:grid-cols-8">
          {SkillsList.map((skill) => (
            <div key={skill.name} className="flex flex-col items-center">
              <img
                src={skill.skillImage}
                alt={skill.name}
                className="h-[100px] w-[100px] max-md:h-16 max-md:w-16 transform transition-transform duration-300 ease-in-out hover:scale-105"
              />
              <h1 className="hover:text-red-500 font-[ZohoPuviRegular] text-center font-bold py-2 cursor-pointer">
                {skill.name}
              </h1>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
}

export default Skills;
