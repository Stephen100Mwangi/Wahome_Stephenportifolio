/* eslint-disable no-unused-vars */
import React from 'react'
import PropTypes from 'prop-types'

const Button = ({text,bgColor,textColor,icon}) => {
  return (
    <button className={`text-${textColor} bg-${bgColor} text-lg hover:rounded-full px-10 p-3 w-fit  cursor-pointer flex items-center justify-center`}>
        <span className='flex justify-center items-center ml-4'>{text}</span>
        <span className='flex justify-center items-center ml-4'>{icon}</span>
    </button>
  )
}

Button.propTypes = {
    text: PropTypes.string,
    bgColor: PropTypes.string,
    textColor: PropTypes.string,
    icon: PropTypes.element
}

export default Button
