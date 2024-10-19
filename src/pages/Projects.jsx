/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import ProjectCard from '../components/ProjectCard'
// import Button from '../components/Button'

const Projects = () => {
  const [showMore,setMore] = useState(false);
  return (
    <div id='projects' className='flex flex-col mx-auto bg-back space-y-20 justify-center items-center px-8'>
        <h1 className='text-3xl font-bold text-card'>My <span className='text-orange'>Projects</span></h1>
        <div id='projectsWrapper' className='flex flex-row flex-wrap justify-start mt-20 gap-y-20 gap-x-10 items-center max-sm:gap-y-16 max-sm:gap-x-0'>
          <ProjectCard text='Dynamic Weather Forecast' link={"https://weather-app-jade-kappa-50.vercel.app/"} description='A web app that utilizes WeatherAPI to fetch and retrieve realtime weather conditions of different cities based on the search parameter' image="/weather_.png" languages={['HTML, ','CSS, ','JavaScript, ','WeatherAPI']} />
          <ProjectCard text='Dynamic Book Store' description='A fullstack web app that employs MERN (MongoDB,ExpressJS,ReactJS,NodeJS) to facilitate creating, reading, updating and deleting of books in a library.Utilizes HTTP requests for data handling' image="/book.jpg" languages={['ReactJS',', NodeJS',', Express',', TailwindCSS']}/>
          <ProjectCard text='Airbnb Recommender system' description='A fullstack web app that utilizes Voice interaction, Face Recognition and Machine Learning to recommend favorite airbnb to customers based on their preference and previous activities.' image="/rooms.jpg"  languages={['ReactJS, ','Python ','Express ','Django ','KNN']}/>           
          <ProjectCard link={"https://doctorcare-client.onrender.com/"} text='Appointment Booking System' description='A web app that utilizes Socket.io, CRON to allow patients to place their appointments to doctors. Doctors can also communicate with the patients' image="/doctor.jpg" languages={['React.js, ','JWT, ','Redux, ','CRON','Socket.io']} />
          <ProjectCard text='Zeraki School Management' description='A fullstack web app that employs MERN (MongoDB,ExpressJS,ReactJS,NodeJS) to facilitate creating, reading, updating and deleting of books in a library.Utilizes HTTP requests for data handling' image="/book.jpg" languages={['ReactJS',', NodeJS',', Express',', TailwindCSS']}/>
          <ProjectCard text='E-Commerce website' link={"https://duka-smart.vercel.app/"} description='A fullstack web app that performs E-commerce functions allowing users to add things to cart, empty the cart utilizes React Hooks such as useState,useEffect,useContext' image="/duka.jpg"  languages={['ReactJS']}/>           
          <ProjectCard text='Hotel' link={"https://richhotel-steve-mwangis-projects-37a791df.vercel.app/"} description='A frontend User Interface showcasing a hotel different foods offered and different menus' image='/rich.jpg' languages={['React.js',' TailwindCSS',' ShadCn',' HTML',' CSS',' JS']}></ProjectCard>
        </div>
        
        {/* <div onClick={()=>setMore(!showMore)}>
          <Button text={showMore?"Show Less":"Show More"} textColor='white' bgColor='card'></Button>
        </div> */}
    </div>
  )
}

export default Projects
