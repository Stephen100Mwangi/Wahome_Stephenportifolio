import {motion} from 'framer-motion';
import {backInOut} from 'framer-motion/dom';

const AboutMe = () => {
  return (
    <div
      id="aboutMe"
      className="flex flex-row w-full h-fit px-8 py-12 max-h-screen bg-back max-sm:overflow-clip max-sm:flex-col"
    >
      <div className="flex flex-col justify-center items-center gap-y-20 w-1/2 h-fit p-2 max-sm:flex-col max-sm:w-full">
        <div className="text-card text-3xl font-bold z-50">
          About <span className="text-orange">Me</span>?
        </div>
        <motion.div
          className="-mt-28 z-10 max-sm:hidden"
          initial={{
            // rotate: "0deg",
            scale: 0.1,
          }}
          animate={{
            // rotate: "360deg",
            scale: [0.25, 0.75, 0.6, 1],
          }}
          transition={{
            duration: 3,
            ease: backInOut,
            times: [0, 0.4, 0.7, 1],
          }}
          exit={{
            rotate: '0deg',
            scale: '1',
          }}
          // transition={={{
          //     duration:1
          // }}}
        >
          <img src="/aboutMe.svg" alt="" className="object-cover scale-50" />
        </motion.div>
      </div>

      <div className="right flex flex-col space-y-2 w-1/2 max-sm:w-full max-sm:justify-center max-sm:items-center h-fit">
        <p className="text-base font-light leading-loose">
          I am a skilled Full Stack Web Developer with proficiency in the
          <span className="text-blue-500"> MERN</span> stack
          (MongoDB, Express.js, ReactJS, Node.js). My expertise spans
          <span className="text-blue-500 font-semibold"> HTML</span>,
          <span className="text-blue-500 font-semibold"> CSS</span>,
          <span className="text-blue-500 font-semibold"> TailwindCSS</span>, and{' '}
          <span className="text-blue-500 font-semibold"> Material UI</span>, allowing me to craft dynamic and responsive user interfaces.
          Additionally, I am proficient in backend technologies, including{' '}
          <span className="text-green-500 font-semibold">Node.js</span> and{' '}
          <span className="text-green-500 font-semibold">Express.js</span>.
        </p>

        <p className="text-base font-light leading-loose">
          My skill set extends to modern web development with{' '}
          <span className="text-green-500 font-semibold">JavaScript</span>,{' '}
          <span className="text-green-500 font-semibold">TypeScript</span>, and advanced frameworks like{' '}
          <span className="text-green-500 font-semibold">Next.js</span>, enabling the development of scalable, efficient, and performant web applications.
        </p>

        <p className="text-base text-text font-light leading-loose">
          I am also well-versed in tools for version control and collaboration, such as{' '}
          <span className="text-purple-500 font-semibold">Git</span> and{' '}
          <span className="text-purple-500 font-semibold">GitHub</span>. My workflow is further streamlined by design tools like{' '}
          <span className="text-purple-500 font-semibold">Figma</span> and{' '}
          <span className="text-purple-500 font-semibold">Canva</span>, ensuring seamless integration of design and development processes.
        </p>

        <p className="text-base text-text font-light leading-loose">
          Moreover, I possess a strong foundation in{' '}
          <span className="text-green-500 font-semibold">Data Science and Algorithms</span>, along with proficiency in{' '}
          <span className="text-green-500 font-semibold">Python</span>, allowing me to incorporate data-driven insights into application logic and performance optimization.
        </p>

        <p className="text-base text-text font-light leading-loose">
          My development approach is user-centric, leveraging principles of{' '}
          <span className="text-orange-500 font-semibold">Human-Computer Interaction (HCI)</span> to create intuitive, accessible, and visually appealing experiences. I am committed to continuous learning and staying updated with the latest industry trends and technologies.
        </p>

      </div>

    </div>
  );
};

export default AboutMe;
