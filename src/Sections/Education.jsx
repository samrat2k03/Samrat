import React from 'react'

function Education() {
  return (
    <div className='bg-gray-200 text-center pt-10'>
        <div className='bg-blue-900 ml-5 mr-5 rounded-xl'>
        <h1 className='font-[ZohoPuviSemibold] text-[2rem] py-5 text-white'>
          My Education 🏫
        </h1>
        <div className='flex flex-col justify-center items-center'>
        <h3 className='font-[ZohoPuviBold] lg:text-2xl pb-4 px-2 text-slate-200'>
            B.Tech Information Technology <span className='px-2'>2020 - 2024</span>
        </h3>
        <h3 className='font-[ZohoPuviBold] lg:text-xl pb-4 px-2 text-slate-200'>
          <span className='text-yellow-500'>
            CGPA : 
          </span> 8.3 / 10
        </h3>
        </div>
        <h4 className='font-[ZohoPuviRegular] lg:text-xl text-slate-300 pb-10'>
            @ Sri Ramanujar Engineering College, Chennai - 127
        </h4>
        </div>
    </div>
  )
}

export default Education