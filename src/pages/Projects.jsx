/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import ProjectCard from "../components/ProjectCard";
// import Button from '../components/Button'

const Projects = () => {
  const [showMore, setMore] = useState(false);
  return (
    <div
      id="projects"
      className="flex flex-col mx-auto mt-20 bg-back space-y-20 justify-center items-center px-8"
    >
      <h1 className="text-3xl font-bold text-card">
        My <span className="text-orange">Projects</span>
      </h1>
      <div
        id="projectsWrapper"
        className="flex flex-row flex-wrap justify-evenly mt-20 gap-y-20 gap-x-10 items-center max-sm:gap-y-16 max-sm:gap-x-0"
      >
        <ProjectCard
          text="Mynikeshoe – A Modern E-Commerce Platform"
          description="Mynikeshoe is a sleek and responsive online store built with **React.js, TailwindCSS, and JavaScript**. Designed for an effortless shopping experience, it features a clean UI, smooth navigation, and dynamic product displays. Users can explore the latest Nike collections, add items to their cart, and shop with ease. 🚀👟"
          image="/nike.png"
          languages={["React.js, ", "TailwindCSS, ", "JavaScript, "]}
          link={"https://mynikeshop.vercel.app/"}
        />
        <ProjectCard
          text="MovieHub"
          description="A React.js application that implements The Movie Database (TMDB). Allows users to search for movies and even see trending movies. The app utilizes appwrite for `Backend as A service` functionality.🚀🎬"
          image="/movie.png"
          languages={["React.js, ", "TailwindCSS, ", "Typescript, ","appwrite, ","Flowbite"]}
          link={"https://moviehub-juqq.onrender.com/"}
        />
        <ProjectCard
          text="AI Driven Crop Diseases App"
          description="A web application that uses AI to help farmers quickly identify crop diseases through image recognition and provides tailored recommendations for treatment. The project aims to empower farmers with early disease detection to reduce crop losses and improve agricultural yield."
          image="/crop.png"
          languages={[
            "React.js, ",
            "TailwindCSS, ",
            "TypeScript, ",
            "Jest, ",
            "Cypress, ",
            "Python, ",
            "Flask, ",
            "CRON, ",
            "WebSockets",
          ]}
          link={"https://github.com/Stephen100Mwangi/CROP_DISEASES/"}
        />
        <ProjectCard
          text="Dynamic Weather Forecast"
          description="A web app that utilizes WeatherAPI to fetch and retrieve realtime weather conditions of different cities based on the search parameter"
          image="/weather_.png"
          languages={["HTML, ", "CSS, ", "JavaScript, ", "WeatherAPI"]}
          link={"https://weather-app-jade-kappa-50.vercel.app/"}
        />
        <ProjectCard
          text="Appointment Booking System"
          description="A web app that utilizes Socket.io, CRON to allow patients to place their appointments to doctors. Doctors can also communicate with the patients"
          image="/doctor.jpg"
          languages={["React.js, ", "JWT, ", "Redux, ", "CRON", "Socket.io"]}
          link={"https://doctorcare-client.onrender.com/"}
        />
        <ProjectCard
          text="E-Commerce website"
          description="A fullstack web app that performs E-commerce functions allowing users to add things to cart, empty the cart utilizes React Hooks such as useState,useEffect,useContext"
          image="/duka.jpg"
          languages={["ReactJS"]}
          link={"https://duka-smart.vercel.app/"}
        />
        <ProjectCard
          text="Hotel"
          description="A frontend User Interface showcasing a hotel different foods offered and different menus"
          image="/rich.jpg"
          languages={[
            "React.js",
            " TailwindCSS",
            " ShadCn",
            " HTML",
            " CSS",
            " JS",
          ]}
          link={"https://richhotel-steve-mwangis-projects-37a791df.vercel.app/"}
        ></ProjectCard>
        <ProjectCard
          text="Dynamic Book Store"
          description="A fullstack web app that employs MERN (MongoDB,ExpressJS,ReactJS,NodeJS) to facilitate creating, reading, updating and deleting of books in a library.Utilizes HTTP requests for data handling"
          image="/book.jpg"
          languages={["ReactJS", ", NodeJS", ", Express", ", TailwindCSS"]}
          link={"https://github.com/Stephen100Mwangi/mern-book-store"}
        />
        <ProjectCard
          text="Zeraki School Management"
          description="A fullstack web app that employs MERN (MongoDB,ExpressJS,ReactJS,NodeJS) to facilitate creating, reading, updating and deleting of books in a library.Utilizes HTTP requests for data handling"
          image="/Zeraki.png"
          languages={[
            "ReactJS",
            ", NodeJS",
            ", Express",
            ", TailwindCSS",
            ", JSON-server",
          ]}
          link={"https://zerakianalyticsclient.onrender.com"}
        />
        <ProjectCard
          text="Airbnb Recommender system"
          description="A fullstack web app that utilizes Voice interaction, Face Recognition and Machine Learning to recommend favorite airbnb to customers based on their preference and previous activities."
          image="/rooms.jpg"
          languages={["ReactJS, ", "Python, ", "Express, ", "Django, ", "KNN"]}
          link={"https://github.com/Stephen100Mwangi/BetterRooms"}
        />
        <ProjectCard
          text="Weather App"
          description="A simple web app built using Flask that allows users to view real-time weather conditions for cities across the world. The application leverages OpenWeatherMap API."
          image="/weather.jpg"
          languages={[
            "HTML, ",
            "Python, ",
            "Flask, ",
            "OpenWeatherMap API, ",
            "Bulma.css",
          ]}
          link={"https://github.com/Stephen100Mwangi/Weather_App-FLASK"}
        />
        <ProjectCard
          text="Customer Rating App"
          description="A web application built using Python, Flask, HTML and CSS. The application allows users to send their feed back and get an email for the same. The application employs heroku and mailtrap for deployment and storing the emails respectively. The data is stored inside Postgres."
          image="/lexus.jpg"
          languages={[
            "HTML, ",
            "Python, ",
            "Flask, ",
            "Heroku, ",
            "CSS",
            "MailTrap",
          ]}
          link={"https://github.com/Stephen100Mwangi/FLASK-LEXUS_FEEDBACK"}
        />
      </div>
    </div>
  );
};

export default Projects;
