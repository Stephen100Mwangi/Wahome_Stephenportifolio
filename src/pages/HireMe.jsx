/* eslint-disable no-unused-vars */
import React, { useEffect, useRef, useState } from 'react'
import hireImage from '/interview.svg'
import Button from '../components/Button'
// import CountUp from 'react-countup';

const HireMe = () => {
  const projects = 86;
  const openSource = 5;
  const startDate = new Date("Dec 13, 2021 08:00:00").getFullYear();
  const stopDate = new Date().getFullYear();
  const years = stopDate - startDate;

  const[activated,setActivated] = useState(false);
  const hireMeRef = useRef(null);
  const [counts,setCounts] = useState({projectCount:0,years:0,openSource:0});

  useEffect(()=>{
    const handleScroll = ()=>{
      const container = hireMeRef.current;
      if(container){
        const{offsetTop, offsetHeight} = container
        if(window.pageYOffset > offsetTop - offsetHeight - 200 && !activated){
          startCounting();
          setActivated(true);
        }else if(window.pageYOffset < offsetTop - offsetHeight - 500 && activated){
          resetCounts();
          setActivated(false);
        }
      }
    };

    const startCounting = ()=>{
      const updateCount = (target, key) => {
        let count = 0;
        const step = () => {
          if (count < target) {
            count++;
            setCounts((prev) => ({ ...prev, [key]: count }));
            setTimeout(step, 10);
          } else {
            setCounts((prev) => ({ ...prev, [key]: target }));
          }
        };
        step();
      };

      updateCount(projects, 'projects');
      updateCount(years, 'years');
      updateCount(openSource, 'openSource');

    }
    const resetCounts = () => {
      setCounts({ projects: 0, years: 0, openSource: 0 });
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  },[activated, projects, years, openSource])



 
  return (
    <div id='hireMe' ref={hireMeRef} className='flex flex-row px-8 py-12 justify-between max-sm:flex-col max-sm:space-y-10'>
        <div className="w-1/2 flex flex-col space-y-20 justify-center items-center max-sm:w-full">
            <div className="text-3xl font-bold text-orange">Why <span className='text-card'>Hire</span> Me?</div>
            <div className='w-8/12'>
                <img src={hireImage} alt="" />
            </div>
        </div>
        <div className="w-1/2 bg-card flex flex-col space-y-10 justify-center items-center max-sm:w-full">
          <div className="flex flex-wrap gap-x-5 justify-start items-start my-10">
            <div className="flex flex-col space-y-7 justify-center items-center w-40 max-sm:w-full">
              <div data-count={projects} className='text-3xl flex items-center justify-center font-medium text-white'><span className='my_Counter'>0</span><span className='text-xl mx-1'>+</span></div>
              <div className="text-base font-light text-white text-center">Projects completed</div>
            </div>
            <div className="flex flex-col space-y-7 justify-center items-center w-40 max-sm:w-full">
              <div data-count={years} className='text-3xl flex items-center justify-center font-medium text-white'><span className='my_Counter'>0</span><span className='text-xl mx-1'>+</span></div>
              <div className="text-base font-light text-white text-center">Years of Experience</div>
            </div>
            <div className="flex flex-col space-y-7 justify-center items-center w-40 max-sm:w-full">
              <div data-count={openSource} className='text-3xl flex items-center justify-center font-medium text-white'><span className='my_Counter'>0</span><span className='text-xl mx-1'>+</span></div>
              <div className="text-base font-light text-white text-center">Open Source Contributions</div>
            </div>
          </div>
          
          {/* <Button text='Hire Me' bgColor='card' textColor='white'></Button> */}
        </div>
      
    </div>
  )
}

export default HireMe
