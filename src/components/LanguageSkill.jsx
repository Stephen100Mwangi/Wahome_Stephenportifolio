import PropTypes from 'prop-types'

const LanguageSkill = ({text,icon}) => {
  return (
    <div className='flex flex-row space-x-1 items-center justify-start'>
      <div className='text-base font-light w-32'>{text}</div>
      <div className='text-base text-orange'>{icon}</div>
    </div>
  )
}

LanguageSkill.propTypes = {
    text: PropTypes.string,
    icon: PropTypes.element
}

export default LanguageSkill
