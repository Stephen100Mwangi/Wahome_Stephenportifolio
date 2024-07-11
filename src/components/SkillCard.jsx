/* eslint-disable no-unused-vars */
import React from 'react'
import PropTypes from 'prop-types'

const SkillCard = ({skill,text,skill_progress}) => {
  return (
    <div className='flex flex-col space-y-10 scale-90 justify-center items-center max-sm:scale-75'>
      <div className='font-bold text-2xl text-orange text-center'>{skill}</div>
      <div className='font-light text-xl text-card text-center'>{text}</div>
      <div>{skill_progress}</div>
    </div>
  )
}

SkillCard.propTypes = {
    skill: PropTypes.string,
    text: PropTypes.string,
    skill_progress: PropTypes.string
}

export default SkillCard
