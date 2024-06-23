/* eslint-disable no-unused-vars */
import React from 'react'
import { MdWavingHand } from "react-icons/md";
import Button from '../components/Button';

const Home = () => {
  return (
    <div id='home' className={`h-[85vh] relative w-full flex justify-center items-start bg-[url('/image333.png')] bg-cover bg-center`}>
        <div className="absolute h-[100%] w-[100%] inset-0 bg-black opacity-80"></div>
        <div className="relative flex flex-col space-y-10 justify-start items-start py-8 px-5">
          <div className='text-white flex justify-center items-center space-x-3 text-2xl max-sm:text-base'>
              <p>Hello</p>
              <div><MdWavingHand /></div>
          </div>
          <p className='font-bold text-4xl text-white max-sm:text-3xl'>I am <span>Stephen Mwangi</span> a <span className='text-orange'>Web Developer</span></p>
          <Button text='View Portfolio' textColor='white' bgColor='orange'></Button>
        </div>
     
    </div>
  )
}

export default Home
