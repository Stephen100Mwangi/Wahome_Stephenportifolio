/* eslint-disable no-unused-vars */
import React from 'react'
import PropTypes from 'prop-types'
import { motion } from 'framer-motion'

const Button = ({text,bgColor,textColor,icon}) => {
  return (
    <motion.button 
      className={`text-${textColor} bg-${bgColor} text-lg rounded-sm hover:rounded-full px-10 p-3 w-fit ease-in-out cursor-pointer flex items-center justify-center`}
      whileHover={{
        scale: 1
      }}
      whileTap={{
        scale: 0.95,
      }}
      transition={{
        duration:.3
      }}
      >
        <span className='flex justify-center text-base items-center ml-4'>{text}</span>
        <span className='flex justify-center items-center ml-4'>{icon}</span>
    </motion.button>
  )
}

Button.propTypes = {
    text: PropTypes.string,
    bgColor: PropTypes.string,
    textColor: PropTypes.string,
    icon: PropTypes.element
}

export default Button
