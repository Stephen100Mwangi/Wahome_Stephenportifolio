/* eslint-disable no-unused-vars */
import React from 'react'
import ProjectCard from '../components/ProjectCard'
import Button from '../components/Button'
import { BiPlus, BiPlusCircle } from 'react-icons/bi'
import blogImage from '/blog.svg'
import { Link } from 'react-router-dom'
import { FaCirclePlus } from 'react-icons/fa6'
import git from '/git.svg'
import string from '/strings.svg'

const Blogs = () => {
  return (
    <div className='flex flex-col space-y-20 px-8 py-12'>
      <div className="text-center font-bold text-3xl text-orange">My <span className='text-card'>Blogs</span></div>
      <div className="grid grid-cols-3 gap-20 max-sm:flex max-sm:flex-col max-sm:spacey-10">
        <Link to='https://medium.com/@mwangiwahome70/javascript-string-manipulation-b19a3c398730' target='_blank'>
          <ProjectCard image={string} text='JavaScript String Manipulations' description='Strings in JavaScript are as common as they can be challenging to use.Have a broad understanding of JavaScript String operations such as slice,trim..Make your code clean'/>
        </Link>
        <Link to='https://medium.com/@mwangiwahome70/dissecting-git-and-github-1d4215064711' target='_blank'>
          <ProjectCard image={git} text='Git & Github Essentials' description='Git and Github are common in programming.However navigating these concepts is not just a cup of tea.Git your self rolling with all Git and Github concepts'/>
        </Link>
        <Link to='https://medium.com/@mwangiwahome70' target='_blank'>
          <ProjectCard image={blogImage} text={<FaCirclePlus />}></ProjectCard>
        </Link>
      </div>
    </div>
  )
}

export default Blogs
