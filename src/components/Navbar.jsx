/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { IoCloseCircle } from "react-icons/io5";
import { HiOutlineMenuAlt3 } from "react-icons/hi";

const Navbar = () => {
  const [mobile,setMobile] = useState(true);

  return (
    <div className="flex flex-row justify-end space-x-8 items-center px-8 py-4 bg-back h-fit">
      <div className="flex flex-row items-center justify-center space-x-3 shadow-sm shadow-card outline-1 outline-card p-4 py-2 rounded-full max-sm:hidden">
        <a className='flex hover:bg-orange px-6 p-2 text-card hover:text-white rounded-full items-center justify-center cursor-pointer hover:text-button font-bold openSans' href='#home'>Home</a>
        <a className='flex hover:bg-orange px-6 p-2 text-card hover:text-white rounded-full items-center justify-center cursor-pointer hover:text-button font-bold openSans' href='#projects'>Projects</a>
        <a className='flex hover:bg-orange px-6 p-2 text-card hover:text-white rounded-full items-center justify-center cursor-pointer hover:text-button font-bold openSans' href='#projects'>Blogs</a>
        <a className='flex hover:bg-orange px-6 p-2 text-card hover:text-white rounded-full items-center justify-center cursor-pointer hover:text-button font-bold openSans' href='#aboutMe'>About Me</a>
        <a className='flex hover:bg-orange px-6 p-2 text-card hover:text-white rounded-full items-center justify-center cursor-pointer hover:text-button font-bold openSans' href='#hireMe'>Hire Me</a>
        <a className='flex hover:bg-orange px-6 p-2 text-card hover:text-white rounded-full items-center justify-center cursor-pointer hover:text-button font-bold openSans' href='#contacts'>Contacts</a>
      </div>

      {
        !mobile && ( <div className="text-2xl animate-bounce sm:hidden"onClick={()=>setMobile(!mobile)}><HiOutlineMenuAlt3 /></div>)
      }

      {
        mobile && (
          <div className="flex flex-col items-start justify-start space-y-3 shadow-sm shadow-card outline-1 outline-card p-2 w-fit rounded-sm sm:hidden">
            <div onClick={()=>setMobile(!mobile)} className='w-full flex text-2xl justify-end items-end'><IoCloseCircle className='text-orange'/></div>
            <a className='flex hover:bg-orange px-6 p-2 text-card hover:text-white rounded-full items-center justify-center cursor-pointer hover:text-button font-bold openSans' href='#home'>Home</a>
            <a className='flex hover:bg-orange px-6 p-2 text-card hover:text-white rounded-full items-center justify-center cursor-pointer hover:text-button font-bold openSans' href='#projects'>Projects</a>
            <a className='flex hover:bg-orange px-6 p-2 text-card hover:text-white rounded-full items-center justify-center cursor-pointer hover:text-button font-bold openSans' href='#projects'>Blogs</a>
            <a className='flex hover:bg-orange px-6 p-2 text-card hover:text-white rounded-full items-center justify-center cursor-pointer hover:text-button font-bold openSans' href='#aboutMe'>About Me</a>
            <a className='flex hover:bg-orange px-6 p-2 text-card hover:text-white rounded-full items-center justify-center cursor-pointer hover:text-button font-bold openSans' href='#hireMe'>Hire Me</a>
            <a className='flex hover:bg-orange px-6 p-2 text-card hover:text-white rounded-full items-center justify-center cursor-pointer hover:text-button font-bold openSans' href='#contacts'>Contacts</a>
          </div>
        )
      }
     
    </div>
  )
}

export default Navbar
