/* eslint-disable no-unused-vars */
import React from 'react'
import PropTypes from 'prop-types'

const AwardCard = ({institution,award,time,course}) => {
  return (
    <div className='flex flex-col space-y-2'>
      <div className='font-bold text-base text-orange'>{institution}</div>
      <div className='font-normal text-base text-text'>{award}</div>
      <div className='font-light text-base text-card'>{course}</div>
      <div className='font-mono text-sm text-orange'>{time}</div>
    </div>
  )
}

AwardCard.propTypes = {
    institution: PropTypes.string,
    award: PropTypes.string,
    time: PropTypes.string,
    course: PropTypes.string
}

export default AwardCard
