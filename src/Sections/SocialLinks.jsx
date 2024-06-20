import React from "react";
import { socialMedia } from "../Constants";
import email from "../Assets/social/email.png"

function SocialLinks() {
  return (
    <div id="social" className="flex flex-col items-center p-8">
      <div className="items-center">
        <h1 className="font-[ZohoPuviSemibold] text-[2rem] pb-1 text-center">
          Let's Connect
        </h1>
        <p className="font-[ZohoPuviMedium] pb-2 lg text-center">
          Connect with me via social media
        </p>
      </div>
      <div className="flex flex-row gap-2 py-5">
        <img src={email} alt="email" height={30} width={30} />
        <a href="mailto:samratapr40@gmail.com">
          <p className="font-[ZohoPuviRegular] font-semi-bold hover:text-red-500 text-[18px] cursor-pointer">
            samratapr40@gmail.com
          </p>
        </a>
      </div>
      <section className="flex flex-row justify-center gap-8 bg-opacity-20 backdrop-blur-md rounded-lg shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px]">
        {socialMedia.map((social, index) => (
          <div
            key={social.name}
            className={`py-5 ${
              index === 0
                ? "pl-10"
                : index === socialMedia.length - 1
                ? "pr-10"
                : ""
            }`}
          >
            <a href={social.link} target="_blank">
              <img 
                src={social.logo} 
                alt={social.name} 
                width={40} 
                height={40}
                className="max-w-40 h-auto" />
            </a>
          </div>
        ))}
      </section>
    </div>
  );
}

export default SocialLinks;
