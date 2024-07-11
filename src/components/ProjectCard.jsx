/* eslint-disable no-unused-vars */
import React from 'react'
import PropTypes from 'prop-types'

const ProjectCard = ({image,text,description,languages,actualWidth,height}) => {
  return (
    <div id='projectCard' className={`w-[320px] rounded-lg flex flex-col space-y-5`}>
      <div><img src={image} alt="Image" className='w-full shadow h-[250px] rounded-lg object-cover ' /></div>
      <div className="flex flex-col items-start justify-start space-y-3">
        <div className='text-orange font-medium text-base '>{text}</div>
        <div className='text-card text-sm font-normal'>{languages}</div>
        <div className='text-text font-light text-base '>{description}</div>
      </div>
    </div>
  )
}

ProjectCard.propTypes = {
    image: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    languages: PropTypes.arrayOf(PropTypes.string),
    actualWidth: PropTypes.string.isRequired,
    height: PropTypes.string.isRequired,
}

export default ProjectCard
