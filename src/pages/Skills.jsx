/* eslint-disable no-unused-vars */
import React from 'react'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import SkillCard from '../components/SkillCard';
import LanguageSkill from '../components/LanguageSkill';
import { FaReact } from "react-icons/fa6";
import { SiTailwindcss } from "react-icons/si";
import { IoLogoCss3 } from "react-icons/io";
import { FaHtml5 } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";
import { FaGithub } from "react-icons/fa";
import { FaGit } from "react-icons/fa6";
import { RiNodejsFill } from "react-icons/ri";
import { SiExpress } from "react-icons/si";
import { SiNuxtdotjs } from "react-icons/si";
import { FiFigma } from 'react-icons/fi';
import imgSVG from '/achievement.svg'


const Skills = () => {
  const web = 85;
  const ui = 90;
  const back = 80;
  return (
    <div id='skills' className='flex flex-col space-y-24 px-8 py-12 max-sm:spacey-10'>
      <div className="text-3xl font-bold text-orange w-full text-center">My <span className='text-card'>Skills</span></div>

      <div className="flex flex-row flex-wrap gap-10 justify-evenly max-sm:flex-col">
        <SkillCard text='4+ years experience' skill='UI/UX Design' skill_progress={<CircularProgressbar className='max-lg:scale-75 flex justify-center items-center' value={ui} text={`${ui}%`} styles={buildStyles({pathColor:'#FF7F3E',textColor:"#FF7F3E"})}/>} ></SkillCard>
        <SkillCard text='3+ years experience' skill='Frontend Web Development' skill_progress={<CircularProgressbar className='max-lg:scale-75 flex justify-center items-center' value={web} text={`${web}%`} styles={buildStyles({pathColor:'#0F1035',textColor:"#0F1035"})}/>} ></SkillCard>
        <SkillCard text='2 years experience' skill='Backend Development' skill_progress={<CircularProgressbar className='max-lg:scale-75 flex justify-center items-center' value={back} text={`${back}%`} styles={buildStyles({pathColor:'#000000', pathTransitionDuration: 0.5,rotation: 0.25,textColor:"#000000"})}/>} ></SkillCard>
      </div>

      <div className="flex flex-row justify-between items-start max-sm:flex-col-reverse max-sm:-space-y-80">
        <div className="w-1/2 h-96 overflow-scroll p-2 shadow-2xl flex flex-col space-y-3 pl-10 no-scrollbar max-sm:w-full">
          <LanguageSkill text='ReactJS' icon={<FaReact />}/>
          <LanguageSkill text='TailwindCSS' icon={<SiTailwindcss />} />
          <LanguageSkill text='CSS' icon={<IoLogoCss3 />} />
          <LanguageSkill text='HTML' icon={<FaHtml5 />}/>
          <LanguageSkill text='Mongoose DB' icon={<SiMongodb />} />
          <LanguageSkill text='ExpressJS' icon={<SiExpress />}/>
          <LanguageSkill text='NodeJS' icon={<RiNodejsFill />}/>
          <LanguageSkill text='Typescript' icon={<SiTypescript />}/>
          <LanguageSkill text='NuxtJS' icon={<SiNuxtdotjs />}/>
          <LanguageSkill text='NextJS' icon={<RiNextjsFill />}/>
          <LanguageSkill text='Github' icon={<FaGithub />}/>
          <LanguageSkill text='Git' icon={<FaGit />}/>
          <LanguageSkill text='Figma' icon={<FiFigma />}/>
        </div>
        <div className="w-1/2 flex justify-center h-fit items-start max-sm:w-full max-sm:hidden">
          <img src={imgSVG} alt=""  className='h-80 max-sm:scale-50'/>
        </div>
      </div>
    </div>
  )
}

export default Skills
