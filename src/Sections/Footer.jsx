import React from 'react'

function Footer() {
  return (
    <footer className='bg-black text-white'>
      <div className='flex justify-center items-center py-2 text-gray-400'>
        <p className='font-[ZohoPuviRegular] max-sm:text-[10px]'>&copy; {new Date().getFullYear()} Samrat - All Rights Reserved.</p>
      </div>
    </footer>
  )
}

export default Footer