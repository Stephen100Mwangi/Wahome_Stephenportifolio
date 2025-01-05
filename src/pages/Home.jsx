import { useState } from "react";
import { MdWavingHand } from "react-icons/md";
import { FaMedium } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import Button from "../components/Button";

const Home = () => {
  const options = ["Full-stack Web Developer", "UI/UX Designer"];
  const randomRole = options[0];
  const randomRole2 = options[1];

  const [role, setRole] = useState(randomRole);
  setTimeout(() => {
    if (role === randomRole) {
      setRole(randomRole2);
    } else {
      setRole(randomRole);
    }
  }, 5000);
  return (
    <div
      id="home"
      className={`h-[100vh] relative w-full flex justify-center items-start bg-[url('/image333-min.png')] bg-cover bg-center`}
    >
      <div className="absolute h-[100%] w-[100%] inset-0 bg-black opacity-90"></div>
      <div className="relative flex flex-col h-[100%] justify-center items-center space-y-10 py-8 px-5">
        <div className="text-white flex justify-center items-center space-x-3 text-2xl max-sm:text-base">
          <p>Hello</p>
          <div>
            <MdWavingHand />
          </div>
        </div>
        <p className="font-bold text-4xl text-white max-sm:text-3xl">
          I am <span>Stephen Mwangi</span> a{" "}
          <span className="text-orange">{role}</span>
        </p>
        <a href="#projects">
          <Button
            text="View Portfolio"
            textColor="white"
            bgColor="orange"
          ></Button>
        </a>
      </div>

      <div className="absolute fixMe top-20 z-50 flex flex-col space-y-4">
        <div className="bg-orange hover:text-orange hover:bg-white  hover:shadow-2xl w-44 text-white p-2 text-[16px] px-8 rounded-full flex items-center justify-between">
          <a href="https://medium.com/@mwangiwahome70" target="_blank">
            Medium
          </a>
          <FaMedium></FaMedium>
        </div>
        <div className="bg-orange hover:text-orange hover:bg-white  hover:shadow-2xl w-44 text-white p-2 text-[16px] px-8 rounded-full flex items-center justify-between">
          <a href="https://github.com/Stephen100Mwangi" target="_blank">
            GitHub
          </a>
          <FaGithub></FaGithub>
        </div>
        <div className="bg-orange hover:text-orange hover:bg-white  hover:shadow-2xl w-44 text-white p-2 text-[16px] px-8 rounded-full flex items-center justify-between">
          <a
            href="https://www.linkedin.com/in/wahome-stephen-mwangi-786690268/"
            target="_blank"
          >
            LinkedIn
          </a>
          <FaLinkedinIn></FaLinkedinIn>
        </div>
        <div className="bg-orange hover:text-orange hover:bg-white  hover:shadow-2xl w-44 text-white p-2 text-[16px] px-8 rounded-full flex items-center justify-between">
          <a
            href="https://x.com/Mwangi99084926?t=go59eBtlpAO0z1wR8XN_dQ&s=09"
            target="_blank"
          >
            Twitter
          </a>
          <FaXTwitter></FaXTwitter>
        </div>
        <div className="bg-orange hover:text-orange hover:bg-white  hover:shadow-2xl w-44 text-white p-2 text-[16px] px-8 rounded-full flex items-center justify-center">
          <a href="tel:+254758725032" target="_blank">
            +254758725032
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
