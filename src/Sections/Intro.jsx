import React from 'react'
import './styles.css'
import samrat from "../Assets/myself/samrat4.png"
import { ReachMe } from '../Components/ReachMe.jsx'

function Intro() {
  return (
    <div className="bg-black p-5 min-h-screen">
    <div id="background" className='h-auto lg:h-[calc(100vh-40px)] flex lg:flex-row flex-col-reverse  px-5 py-5 rounded-xl'>
      {/* leftSideContent */}
      <div className='lg:w-1/2 flex flex-col justify-center'>
        <h2 className='font-[ZohoPuviSemibold] lg:text-[70px] text-[2rem] text-center text-[#f0f0f0]'>
          Hi, I'm Samrat
        </h2>
        <h3 className='font-[ZohoPuviMedium] text-center mb-3 lg:text-[28px] text-[15px] text-gray-200'>
          Software Developer | Full Stack Developer 
        </h3>
        <p className='font-[ZohoPuviRegular] px-4 lg:px-9 text-sm lg:text-2xl text-gray-300 max-md:text-center'>
          {/* Developing Secure and Scalable Applications and also I specialize in turning ideas into sleek, efficient applications. */}
          Specializing in developing secure and scalable applications. Turning ideas into sleek, efficient solutions. 
        </p>
        <div className='pt-10 pl-10 flex '>
        <ReachMe />
        </div>
      </div>
      {/* rightSideContent */}
      <div className='lg:w-1/2 flex justify-center'>
        <img src={samrat} alt="samrat profile photo" className=' py-10'/>
      </div>
    </div>
    </div>
  )
}

export default Intro