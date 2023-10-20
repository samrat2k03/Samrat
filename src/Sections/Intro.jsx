import React from 'react'
import './styles.css'
import samrat from "../Assets/myself/samrat4.png"

function Intro() {
  return (
    <div className="bg-black p-5">
    <div id="background" className='h-auto lg:h-[calc(100vh-40px)] flex lg:flex-row flex-col-reverse  px-5 py-5 rounded-xl'>
      {/* leftSideContent */}
      <div className='lg:w-1/2 flex flex-col justify-center'>
        <h2 className='font-[ZohoPuviSemibold] lg:text-[70px] text-[2rem] text-center text-[#f0f0f0]'>
          Hi, I'm Samrat 👋
        </h2>
        <h3 className='font-[ZohoPuviMedium] text-center mb-3 lg:text-[30px] text-[15px] text-gray-200'>
          Full Stack Developer | AI & ML Enthusiast
        </h3>
        <p className='px-4 lg:px-9 text-lg lg:text-2xl text-gray-100 max-md:text-center'>
          I'm on a mission to build a better future through technology.<br />
          I create full-stack applications to solve real-world problems and explore the exciting world of AI and Machine Learning. Also contributing open source projects 🚀 has a hobby.  
        </p>
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