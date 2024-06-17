/* eslint-disable no-unused-vars */
import React from 'react'
import Button from '../components/Button'
import { RiSendPlaneFill } from "react-icons/ri";

const Testimonials = () => {
  return (
    <div className='flex justify-center items-start py-12 pt-10 min-h-screen px-8'>
      <form action="" className='flex flex-col space-y-8 p-6 shadow-lg justify-center items-center max-sm:w-[300px]'>
        <div className='text-orange text-center w-full text-3xl font-bold'>Contact <span className='text-card'>Me</span></div>
        <div className="flex flex-col space-y-2 w-[95%]">
            <label htmlFor="Subject" className='font-bold text-base'>Subject</label>
            <input type="text" placeholder='Type your subject here...' className='p-[10px] px-6 outline-none'/>
        </div>
        <div className="flex flex-col space-y-2 w-[95%]">
            <label htmlFor="Email" className='font-bold text-base'>Email</label>
            <input type="email" placeholder='Type your email here...' className='p-[10px] px-6 outline-none w-auto'/>
        </div>
        <div className="flex flex-col space-y-2 w-[95%]">
            <label htmlFor="Message" className='font-bold text-base'>Message</label>
            <textarea cols={30} rows={5} placeholder='Type your subject here...' className='p-2 px-6 outline-none'/>
        </div>
        <div className="w-full flex justify-center items-center">
            <Button text='Send Message' bgColor='card' textColor='white' icon={<RiSendPlaneFill />}></Button>
        </div>
      </form>
    </div>
  )
}

export default Testimonials
