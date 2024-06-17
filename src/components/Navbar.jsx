/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { IoCloseCircle } from "react-icons/io5";
import { HiOutlineMenuAlt3 } from "react-icons/hi";

const Navbar = () => {
  const [mobile,setMobile] = useState(true);

  return (
    <div className="flex flex-row justify-end space-x-8 items-center px-8 py-4 bg-back h-fit">
      <div className="flex flex-row items-center justify-center space-x-12 shadow-sm shadow-card outline-1 outline-card p-4 py-2 rounded-full max-sm:hidden">
        <div className='flex hover:bg-orange px-6 p-2 text-card hover:text-white rounded-full items-center justify-center cursor-pointer hover:text-button font-bold openSans'>Home</div>
        <div className='flex hover:bg-orange px-6 p-2 text-card hover:text-white rounded-full items-center justify-center cursor-pointer hover:text-button font-bold openSans'>About Me</div>
        <Link to='/#projects' className='flex hover:bg-orange px-6 p-2 text-card hover:text-white rounded-full items-center justify-center cursor-pointer hover:text-button font-bold openSans'>Projects</Link>
        <div className='flex hover:bg-orange px-6 p-2 text-card hover:text-white rounded-full items-center justify-center cursor-pointer hover:text-button font-bold openSans'>Blogs</div>
        <div className='flex hover:bg-orange px-6 p-2 text-card hover:text-white rounded-full items-center justify-center cursor-pointer hover:text-button font-bold openSans'>Contacts</div>
      </div>

      {
        !mobile && ( <div className="text-2xl animate-bounce sm:hidden"onClick={()=>setMobile(!mobile)}><HiOutlineMenuAlt3 /></div>)
      }

      {
        mobile && (
          <div className="flex flex-col items-start justify-start space-y-3 shadow-sm shadow-card outline-1 outline-card p-2 w-fit rounded-sm sm:hidden">
            <div className='text-orange w-full text-2xl flex justify-end items-center' onClick={()=>setMobile(!mobile)}><IoCloseCircle /></div>
            <div className='flex hover:bg-orange px-6 p-2 text-card hover:text-white rounded-full items-center justify-center cursor-pointer hover:text-button font-bold openSans'>Home</div>
            <div className='flex hover:bg-orange px-6 p-2 text-card hover:text-white rounded-full items-center justify-center cursor-pointer hover:text-button font-bold openSans'>About Me</div>
            <div className='flex hover:bg-orange px-6 p-2 text-card hover:text-white rounded-full items-center justify-center cursor-pointer hover:text-button font-bold openSans'>Projects</div>
            <div className='flex hover:bg-orange px-6 p-2 text-card hover:text-white rounded-full items-center justify-center cursor-pointer hover:text-button font-bold openSans'>Blogs</div>
            <div className='flex hover:bg-orange px-6 p-2 text-card hover:text-white rounded-full items-center justify-center cursor-pointer hover:text-button font-bold openSans'>Contacts</div>
          </div>
        )
      }
     
    </div>
  )
}

export default Navbar
