/* eslint-disable no-unused-vars */
import React from 'react'
import PropTypes from 'prop-types'

const AwardCard = ({institution,award,time,course,link}) => {
  return (
    <a href={link} className='flex flex-col space-y-2'>
      <div className='font-bold text-base text-orange'>{institution}</div>
      <div className='font-normal text-base text-text'>{award} <span className='font-thin text-base text-orange mx-5'>{course}</span></div>
      <div className='font-mono text-sm text-orange'>{time}</div>
    </a>
  )
}

AwardCard.propTypes = {
  institution: PropTypes.string,
  award: PropTypes.string,
  time: PropTypes.string,
  course: PropTypes.string,
  link: PropTypes.string
}

export default AwardCard
