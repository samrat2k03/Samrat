import React from "react";
import { competitions } from "../Constants";

function Competitions() {
  return (
    <div className="bg-black text-white">
      <h1 className="font-[ZohoPuviSemibold] text-center text-[2rem] pt-5 pb-3">
        Competitions 🚀
      </h1>
      {competitions.map((Competition) => (
        <div className="flex flex-col bg-transparent" key={Competition.name}>
          <div className="flex flex-row items-center justify-center mb-2">
            <h3 className="font-[ZohoPuviRegular] font-bold text-2xl text-center text-yellow-400">
              {Competition.name}
            </h3>
            <img
              src={Competition.logo}
              alt={Competition.name}
              height={50}
              width={50}
              className="rounded-sm"
            />
          </div>
          <p className="text-center text-white font-[ZohoPuviRegular] lg:px-20 px-16 lg:py-4 py-2">
            Successfully completed{" "}
            <span className="text-red-500">Hacktoberfest 2023</span> by
            contributing various
            <span className="text-blue-500"> open source </span> projects.{" "}
            <br />I contributed many projects, all of them merged by project
            maintainers. Achieved a total of{" "}
            <span className="text-yellow-500">7 successful </span> pull/merge
            requests ie... <span className="text-green-500">4+3/4 </span> PR/MR
          </p>
          <div className="object-contain flex items-center justify-center pb-10">
            <img
              src={Competition.certificates}
              alt={Competition.name}
              width={850}
              height={950}
              className="rounded-lg px-4"
            />
          </div>
        </div>
      ))}
    </div>
  );
}

export default Competitions;
