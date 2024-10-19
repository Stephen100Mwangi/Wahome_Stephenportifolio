import BlogCard from '../components/BlogCard'
import Button from '../components/Button'
import { Link } from 'react-router-dom'
import git from '/git.svg'
import string from '/strings.svg'

const Blogs = () => {
  return (
    <div id='blogs' className='flex justify-center items-center flex-col space-y-20 px-8 py-12 mx-auto'>
      <div className="text-center font-bold text-3xl text-orange">My <span className='text-card'>Blogs</span></div>
      <div className="grid grid-cols-3 gap-20 max-sm:flex max-sm:flex-col max-sm:spacey-10">
        <Link to='https://medium.com/@mwangiwahome70/javascript-string-manipulation-b19a3c398730' target='_blank'>
          <BlogCard image={string} text='JavaScript String Manipulations' description='Strings in JavaScript are as common as they can be challenging to use.Have a broad understanding of JavaScript String operations such as slice,trim..Make your code clean'/>
        </Link>
        <Link to='https://medium.com/@mwangiwahome70/dissecting-git-and-github-1d4215064711' target='_blank'>
          <BlogCard image={git} text='Git & Github Essentials' description='Git and Github are common in programming.However navigating these concepts is not just a cup of tea.Git your self rolling with all Git and Github concepts'/>
        </Link>
        <Link 
          className='flex justify-center items-center'
          to='https://medium.com/@mwangiwahome70'
          target='_blank'
          animate={{
            scale: [.5,.75]
          }}
          exit={{

          }}
        >
          <div className='flex justify-center items-center'><Button text='See More Blogs' bgColor='orange' textColor='white' className='hover:shadow-sm  bg-orange'></Button></div>
        </Link>
      </div>
    </div>
  )
}

export default Blogs
