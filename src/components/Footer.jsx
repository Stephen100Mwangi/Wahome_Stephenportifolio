/* eslint-disable no-unused-vars */
import React from 'react'
import { FaGithub, FaLinkedinIn, FaTwitter } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { FaMedium } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='px-8 py-12 bg-card flex flex-row justify-evenly items-start rounded-t-[48px] max-sm:flex-col max-sm:justify-center max-sm:items-center max-sm:space-y-10 max-sm:text-center'>
        <div className="quickLinks flex flex-col space-y-3 justify-start items-start text-white">
          <div className="text-orange text-lg pb-3 cursor-pointer hover:border-b-2 hover:border-orange transition-all">Quick Links</div>
            <Link>Home</Link>
            <Link>Projects</Link>
            <Link>About Me</Link>
            <Link>References</Link>
            <Link>Contacts</Link>
        </div>
        <div className="socials flex flex-col space-y-3 justify-start items-start text-white">
          <div className="text-orange text-lg pb-3 cursor-pointer hover:border-b-2 hover:border-orange transition-all">Social Links</div>
            <Link to='https://medium.com/@mwangiwahome70'><FaMedium /></Link>
            <Link to='https://x.com/Mwangi99084926?t=XdTg-MQw8xpaDrGkcUSPtw&s=09'><FaTwitter /></Link>
            <Link to='https://github.com/Stephen100Mwangi'><FaGithub /></Link>
            <Link to='https://github.com/Stephen100Mwangi'><FaLinkedinIn /></Link>
            <Link to='tel:+254758725032'><FaWhatsapp /></Link>
        </div>
        <div className="contacts flex flex-col space-y-3 justify-start items-start text-white">
          <div className="text-orange text-lg pb-3 cursor-pointer hover:border-b-2 hover:border-orange transition-all">Contacts</div>
            <div><a href="tel:+254758725032">+254758725032</a></div>
            <div><a href="mailto:mwangwahome70@gmail.com">Send me an email</a></div>
        </div>
    </div>
  )
}

export default Footer
