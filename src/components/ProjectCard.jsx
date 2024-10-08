/* eslint-disable no-unused-vars */
import React from 'react'
import PropTypes from 'prop-types'

const ProjectCard = ({image,text,description,link,languages,actualWidth,height}) => {
  return (
    <div id='projectCard' className={`w-[320px] rounded-lg flex flex-col space-y-5`}>
      <a href={link} target='_blank'><img src={image} alt="Image" className='w-full shadow h-[250px] rounded-lg object-cover ' /></a>
      <div className="flex flex-col items-start justify-start space-y-3">
        <div className='text-orange font-medium text-base '>{text}</div>
        <div className='text-card text-sm font-normal'>{languages}</div>
        <div className='text-text font-light text-base '>{description}</div>
      </div>
      <a href={link} className='text-xs text-center mx-auto'>View Live application</a>
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
    link: PropTypes.string
}

export default ProjectCard
