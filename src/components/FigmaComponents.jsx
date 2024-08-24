import PropTypes from 'prop-types'
const FigmaComponents = ({text, projectImage, count, description, icon, link}) => {
  return (
    <div className='flex flex-col p-3 relative space-y-4 justify-center items-center space-x-2 shadow-md rounded-lg w-fit'>
        <p className='text-xs absolute top-1 left-1'>{count}</p>
        <p className='text-lg'>{icon}</p>
        <p className='text-base'>{text}</p>
        <p className='text-sm'>{description}</p>
        <div className='h-56 w-72 flex items-center justify-center rounded-lg overflow-clip'>
            <img src={projectImage} alt="Project Image" className='object-cover w-[100%] h-[100%] rounded-lg' />
        </div>
        <a  target='_blank' href={link} className='text-xs p-3 px-4 rounded-sm hover:rounded-full bg-card text-white cursor-pointer'>View Prototype</a>
    </div>
  )
}

FigmaComponents.propTypes={
    text: PropTypes.string,
    description: PropTypes.string,
    icon: PropTypes.element,
    link: PropTypes.string,
    count: PropTypes.number,
    projectImage: PropTypes.string

}

export default FigmaComponents
