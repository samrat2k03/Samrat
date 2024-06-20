import React from "react";
import { certificates } from "../Constants";

function Achievements() {
  return (
    <div className="bg-gray-200 pt-10">
      <h1 className="font-[ZohoPuviSemibold] text-center text-[2rem] py-3">
        Certificates 🎓
      </h1>
      <section className="items-center">
        <div className="px-5 py-3">
          {certificates.map((awards) => (
            <div key={awards.name} className="flex flex-row p-2 lg:px-[15rem]">
              <h3 className="font-[ZohoPuviRegular] font-bold lg:text-[20px] text-[10px]">
                {awards.name}
                <a
                  href={awards.links}
                  target="_blank"
                  className="px-2 text-red-500"
                >
                  View
                </a>
              </h3>
            </div>
          ))}
        </div>
      </section>
      <section className="p-4">
        <div className="grid lg:grid-cols-2 lg:gap-20 gap-10 lg:px-10">
          {certificates.map((certificate) => (
            <div key={certificate.name} className="relative group">
              <img
                src={certificate.certificate}
                alt={certificate.name}
                className="rounded-xl transform transition-transform duration-300 hover:scale-105 group-hover:scale-105 shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)]"
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Achievements;
