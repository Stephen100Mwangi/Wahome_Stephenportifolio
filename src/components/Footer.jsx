/* eslint-disable no-unused-vars */
import React from 'react'
import { FaGithub, FaLinkedinIn, FaTwitter } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { FaMedium } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <div id='contacts' className='px-8 py-12 bg-card flex flex-row justify-evenly items-start rounded-t-[48px] max-sm:flex-col max-sm:justify-center max-sm:items-center max-sm:space-y-10 max-sm:text-center'>
        <div className="quickLinks flex flex-col space-y-3 justify-start items-start text-white">
          <div className="text-orange text-lg pb-3 cursor-pointer hover:border-b-2 hover:border-orange transition-all">Quick Links</div>
            <a href='#home'>Home</a>
            <a href='#projects'>Projects</a>
            <a href='#blogs'>Blogs</a>
            <a href='#aboutMe'>About Me</a>
            <a href='#hireMe'>Hire Me</a>
            <a href='#contacts'>Contacts</a>
        </div>
        <div className="socials flex flex-col space-y-3 justify-start items-start text-white">
          <div className="text-orange text-lg pb-3 cursor-pointer hover:border-b-2 hover:border-orange transition-all">Social Links</div>
            <Link to='https://medium.com/@mwangiwahome70' target='_blank'><FaMedium /></Link>
            <Link to='https://github.com/Stephen100Mwangi' target='_blank'><FaGithub /></Link>
            <Link to='https://www.linkedin.com/in/stephen-wahome-a89440373/' target='_blank'><FaLinkedinIn /></Link>
            <Link to='https://wa.me/254758725032?text=Hello 👋.%20I%20came%20across%20your%20portfolio🚀🚀. And%20I%20would%20like%20to%20chat' target='_blank'  rel='noopener noreferrer'><FaWhatsapp /></Link>
        </div>
        <div className="contacts flex flex-col space-y-3 justify-start items-start text-white">
          <div className="text-orange text-lg pb-3 cursor-pointer hover:border-b-2 hover:border-orange transition-all">Contacts</div>
            <div><a href="tel:+254758725032" target='_blank'>+254758725032</a></div>
            <div><a href="mailto:mwangwahome70@gmail.com" target='_blank'>Send me an email</a></div>
        </div>
    </div>
  )
}

export default Footer
