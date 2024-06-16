import React from 'react'

export default function Navbar() {
   return (
      <>
         <p className='mt-1'>Welcome to the Education Hub</p>
         <p className='text-6xl font-semibold mt-2'>ADMIN TABLE</p>
         <p className="mt-4">One Destination for complete Web Development</p>
         <div className="w-[700px] bg-gray-200 flex flex-row justify-between mt-4 p-6 rounded-lg">
            <p className='text-lg font-medium cursor-pointer text-gray-500'>HOME</p>
            <p className='text-lg font-medium cursor-pointer text-gray-500'>ABOUT</p>
            <p className='text-lg font-medium cursor-pointer text-gray-500'>PROJECTS</p>
            <p className='text-lg font-medium cursor-pointer text-gray-500'>CODE</p>
            <p className='text-lg font-medium cursor-pointer text-gray-500'>CONTACT</p>
         </div>
      </>
   )
}
