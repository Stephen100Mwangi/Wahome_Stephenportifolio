/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import Button from '../components/Button'
import { motion } from 'framer-motion'
import { backInOut } from 'framer-motion/dom'

const AboutMe = () => {

    const [seeMore,setMore] = useState(false)
  return (
    <div id='aboutMe' className='flex flex-row w-full h-fit px-8 py-12 max-h-screen bg-back max-sm:overflow-clip max-sm:flex-col'>
        <div className="left flex flex-col justify-center items-center w-1/2 h-fit p-8 max-sm:flex-col max-sm:w-full">
            <div className='text-card text-3xl font-bold z-50'>
                About <span className='text-orange'>Me</span>?
            </div>
            <motion.div 
                className='-mt-28 z-10 max-sm:hidden'
                initial={{
                    // rotate: "0deg",
                    scale: 0.1
                }}
                animate={{
                    // rotate: "360deg",
                    scale: [.25,.75,.6,1]
                }}
                transition={{
                    duration:3,
                    ease: backInOut,
                    times: [0,0.4,0.7,1]
                }}
                exit={{
                    rotate: "0deg",
                    scale: "1"
                }}
                // transition={={{
                //     duration:1
                // }}}
                >
                <img src="/aboutMe.svg" alt="" className='object-cover scale-90'/>
            </motion.div>
        </div>

        <div className="right flex flex-col space-y-10 w-1/2 max-sm:w-full max-sm:justify-center max-sm:items-center h-fit">
            <p className='text-base font-light leading-loose'>I am a skilled Full Stack Web Developer with proficiency in the MERN stack (MongoDB, Express.js, ReactJS, Node.js). My expertise spans HTML, CSS, SCSS, JavaScript, and TypeScript, allowing me to create dynamic and responsive web applications. With a strong foundation in both front-end and back-end development, I am adept at building seamless user experiences and efficient, scalable solutions.</p>
            {
                seeMore && (
                    <p className='text-base text-text font-light leading-loose'>I have a passion for developing innovative web solutions that improve the user experience and drive business growth. My approach to development is user-centric, ensuring that applications are not only functional but also intuitive and visually appealing. I am committed to continuous learning and staying updated with the latest industry trends and technologies.</p>
                )
            }
            <div className='my-20' onClick={()=>setMore(!seeMore)} >
               <Button text={seeMore? 'See Less' : 'See More'} bgColor='orange' textColor='white' className='hover:shadow-sm  bg-orange'></Button>
            </div>

        </div>
      
    </div>
  )
}

export default AboutMe
