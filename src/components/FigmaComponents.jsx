import PropTypes from 'prop-types'
const FigmaComponents = ({text, projectImage, count, description, icon, link}) => {
  return (
    <div className='w-[360px] max-sm:w-[330px] relative min-h-[500px] items-center justify-center hover:shadow-2xl flex flex-col space-y-5 shadow-lg rounded-lg p-5 bg-cardColor'>
        <p className='text-xs top-10 left-5 absolute text-black'>{count}</p>
        <p className='text-lg'>{icon}</p>
        <p className='text-base'>{text}</p>
        <p className='text-sm'>{description}</p>
        <div className='h-56 w-72 flex items-center justify-center rounded-lg overflow-clip'>
            <img src={projectImage} alt="Project Image" className='object-cover w-[100%] h-[100%] rounded-lg' />
        </div>
        <a  target='_blank' href={link} className='text-xs text-center p-4 px-6 rounded-sm hover:rounded-full bg-card text-white cursor-pointer'>View Prototype</a>
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
