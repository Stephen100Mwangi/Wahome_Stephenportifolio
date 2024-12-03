import "react-circular-progressbar/dist/styles.css";
import SkillCard from "../components/SkillCard";
import LanguageSkill from "../components/LanguageSkill";
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
import { FiFigma } from "react-icons/fi";
import imgSVG from "/achievement.svg";
import { FaDocker } from "react-icons/fa6";
import { SiRender } from "react-icons/si";
import { CgVercel } from "react-icons/cg";
import { FaAws } from "react-icons/fa6";
import { SiCypress } from "react-icons/si";
import { SiJest } from "react-icons/si";
import { useState, useRef, useEffect } from "react";

const Skills = () => {
  const [front, setFront] = useState(0);
  const [back, setBack] = useState(0);
  const [ui, setUI] = useState(0);

  const skillRef = useRef();

  // Actual target values
  const targetFront = 5;
  const targetBack = 3;
  const targetUI = 3;

  // Animate options
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    };

    const animateCounter = (setter, target) => {
      let currentCount = 0;
      const duration = 2000;
      const increment = target / (duration / 16);

      // Update the counter

      const updateCounter = () => {
        currentCount += increment;
        if (currentCount < target) {
          setter(Math.floor(currentCount));
          requestAnimationFrame(updateCounter);
        } else {
          setter(target);
        }
      };
      updateCounter();
    };

    const observer = new IntersectionObserver((entries) => {
      const [entry] = entries;

      if (entry.isIntersecting) {
        animateCounter(setBack, targetBack);
        animateCounter(setFront, targetFront);
        animateCounter(setUI, targetUI);

        observer.disconnect();
      }
    }, observerOptions);

    return () => {
      if (skillRef.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observer.observe(skillRef.current);
      }
    };
  }, []);

  return (
    <div
      id="skills"
      ref={skillRef}
      className="flex flex-col space-y-24 px-8 py-12 max-sm:spacey-10"
    >
      <div className="text-3xl font-bold text-orange w-full text-center">
        My <span className="text-card">Skills</span>
      </div>

      <div className="w-full overflow-hidden bg-slate-300 rounded-md p-4">
        <div className="flex space-x-10 w-full items-center animate-marquee">
          <LanguageSkill text="ReactJS" icon={<FaReact />} />
          <LanguageSkill text="TailwindCSS" icon={<SiTailwindcss />} />
          <LanguageSkill text="CSS" icon={<IoLogoCss3 />} />
          <LanguageSkill text="HTML" icon={<FaHtml5 />} />
          <LanguageSkill text="Mongoose DB" icon={<SiMongodb />} />
          <LanguageSkill text="ExpressJS" icon={<SiExpress />} />
          <LanguageSkill text="NodeJS" icon={<RiNodejsFill />} />
          <LanguageSkill text="Typescript" icon={<SiTypescript />} />
          <LanguageSkill text="NuxtJS" icon={<SiNuxtdotjs />} />
          <LanguageSkill text="NextJS" icon={<RiNextjsFill />} />
          <LanguageSkill text="Github" icon={<FaGithub />} />
          <LanguageSkill text="Git" icon={<FaGit />} />
          <LanguageSkill text="Docker" icon={<FaDocker />} />
          <LanguageSkill text="Cypress" icon={<SiCypress />} />
          <LanguageSkill text="Jest" icon={<SiJest />} />
          <LanguageSkill text="AWS" icon={<FaAws />} />
          <LanguageSkill text="Vercel" icon={<CgVercel />} />
          <LanguageSkill text="Render" icon={<SiRender />} />
          <LanguageSkill text="Figma" icon={<FiFigma />} />
        </div>
      </div>

      <div className="flex flex-row flex-wrap gap-10 justify-evenly max-sm:flex-col">
        <SkillCard
          text={`${ui}+ years experience`}
          skill="UI/UX Design"
          skill_progress={<img src="/ui_ux.svg" className="size-64"></img>}
        ></SkillCard>
        <SkillCard
          text={`${front}+ years experience`}
          skill="Frontend Web Development"
          skill_progress={<img src="/frontend.svg" className="size-64"></img>}
        ></SkillCard>
        <SkillCard
          text={`${back}+ years experience`}
          skill="Backend Development"
          skill_progress={<img src="/server.svg" className="size-64"></img>}
        ></SkillCard>
      </div>

      <div className="flex flex-row justify-between items-start max-sm:flex-col-reverse max-sm:-space-y-80">
        <div className="w-1/2 h-96 overflow-scroll p-2 py-5 shadow-2xl flex flex-wrap gap-5 gap-x-12 no-scrollbar max-sm:w-full">
          <LanguageSkill text="ReactJS" icon={<FaReact />} />
          <LanguageSkill text="TailwindCSS" icon={<SiTailwindcss />} />
          <LanguageSkill text="CSS" icon={<IoLogoCss3 />} />
          <LanguageSkill text="HTML" icon={<FaHtml5 />} />
          <LanguageSkill text="Mongoose DB" icon={<SiMongodb />} />
          <LanguageSkill text="ExpressJS" icon={<SiExpress />} />
          <LanguageSkill text="NodeJS" icon={<RiNodejsFill />} />
          <LanguageSkill text="Typescript" icon={<SiTypescript />} />
          <LanguageSkill text="NuxtJS" icon={<SiNuxtdotjs />} />
          <LanguageSkill text="NextJS" icon={<RiNextjsFill />} />
          <LanguageSkill text="Github" icon={<FaGithub />} />
          <LanguageSkill text="Git" icon={<FaGit />} />
          <LanguageSkill text="Docker" icon={<FaDocker />} />
          <LanguageSkill text="Cypress" icon={<SiCypress />} />
          <LanguageSkill text="Jest" icon={<SiJest />} />
          <LanguageSkill text="AWS" icon={<FaAws />} />
          <LanguageSkill text="Vercel" icon={<CgVercel />} />
          <LanguageSkill text="Render" icon={<SiRender />} />
          <LanguageSkill text="Figma" icon={<FiFigma />} />
        </div>
        <div className="w-1/2 flex justify-center h-fit items-start max-sm:w-full max-sm:hidden">
          <img src={imgSVG} alt="" className="h-80 max-sm:scale-50" />
        </div>
      </div>
    </div>
  );
};

export default Skills;
