/* eslint-disable no-unused-vars */
import React from 'react'
import PropTypes from 'prop-types'

const LanguageSkill = ({text,skill,icon}) => {
  return (
    <div className='flex flex-row space-x-8 items-start justify-start'>
      <div className='text-lg font-bold w-32'>{text}</div>
      <div className='flex flex-row space-x-3 items-center justify-center'>
        <div className='text-base text-orange'>{icon}</div>
        <div className='font-mono text-base'>{skill}</div>
      </div>
    </div>
  )
}

LanguageSkill.propTypes = {
    text: PropTypes.string,
    skill: PropTypes.number,
    icon: PropTypes.element
}

export default LanguageSkill
