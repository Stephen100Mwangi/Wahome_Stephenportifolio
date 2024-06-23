/* eslint-disable no-unused-vars */
import React from 'react'
import hireImage from '/interview.svg'
import Button from '../components/Button'
import CountUp from 'react-countup';

const HireMe = () => {
  const projects = 56;
  const openSource = 5;
  const startDate = new Date("Dec 13, 2021 08:00:00").getFullYear();
  const stopDate = new Date().getFullYear();
  const years = stopDate - startDate
  return (
    <div id='hireMe' className='flex flex-row px-8 py-12 justify-between max-sm:flex-col max-sm:space-y-10'>
        <div className="w-1/2 flex flex-col space-y-20 justify-center items-center max-sm:w-full">
            <div className="text-3xl font-bold text-orange">Why <span className='text-card'>Hire</span> Me?</div>
            <div className='w-8/12'>
                <img src={hireImage} alt="" />
            </div>
        </div>
        <div className="w-1/2 flex flex-col space-y-10 justify-center items-center max-sm:w-full">
          <div className="flex flex-wrap gap-5 justify-center items-center">
            <div className="flex flex-col space-y-2 justify-center items-center w-40 max-sm:w-full">
              <div className="text-lg font-bold text-center">Projects completed</div>
              <div><CountUp end={projects} /></div>
            </div>
            <div className="flex flex-col space-y-2 justify-center items-center w-40 max-sm:w-full">
              <div className="text-lg font-bold text-center">Years of Experience</div>
              <div><CountUp end={years} /></div>
            </div>
            <div className="flex flex-col space-y-2 justify-center items-center w-40 max-sm:w-full">
              <div className="text-lg font-bold text-center">Open Source Contributions</div>
              <div><CountUp end={openSource} /></div>
            </div>
          </div>
          
          <Button text='Hire Me' bgColor='card' textColor='white'></Button>
        </div>
      
    </div>
  )
}

export default HireMe
