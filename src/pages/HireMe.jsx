import { useEffect, useRef, useState } from "react";
import hireImage from "/interview.svg";

const HireMe = () => {
  const [projectsCount, setProjectsCount] = useState(0);
  const [yearsCount, setYearsCount] = useState(0);
  const [contributionsCount, setContributionsCount] = useState(0);

  const counterRef = useRef(null);

  // Actual target values
  const targetProjects = 79;
  const targetYears = 5;
  const targetContributions = 15;

  // Animate count
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    };

    const animateCounter = (setter, target) => {
      let currentCount = 0;
      const duration = 2000; // Total animation duration in ms
      const increment = target / (duration / 16); // 16ms is roughly one frame at 60fps

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
        // Animate counters when section becomes visible
        animateCounter(setProjectsCount, targetProjects);
        animateCounter(setYearsCount, targetYears);
        animateCounter(setContributionsCount, targetContributions);

        // Disconnect observer after animation starts
        observer.disconnect();
      }
    }, observerOptions);

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      if (counterRef.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observer.unobserve(counterRef.current);
      }
    };
  }, []);

  return (
    <div
      id="hireMe"
      ref={counterRef}
      className="flex flex-row px-8 py-12 justify-between max-sm:flex-col max-sm:space-y-10"
    >
      <div className="w-1/2 flex flex-col space-y-20 justify-center items-center max-sm:w-full">
        <div className="text-3xl font-bold text-orange">
          Why <span className="text-card">Hire</span> Me?
        </div>
        <div className="w-8/12">
          <img src={hireImage} alt="HireMe" />
        </div>
      </div>
      <div className="w-1/2 bg-card flex flex-col space-y-10 justify-center items-center max-sm:w-full">
        <div className="flex flex-wrap gap-x-5 justify-start items-start my-10">
          <div className="flex flex-col space-y-7 justify-center items-center w-40 max-sm:w-full">
            <div className="text-3xl flex items-center justify-center font-medium text-white">
              <span data-count="79" className="my_Counter">
                {projectsCount}
              </span>
              <span className="text-xl mx-1">+</span>
            </div>
            <div className="text-base font-light text-white text-center">
              Projects completed
            </div>
          </div>
          <div className="flex flex-col space-y-7 justify-center items-center w-40 max-sm:w-full">
            <div className="text-3xl flex items-center justify-center font-medium text-white">
              <span data-count="5" className="my_Counter">
                {yearsCount}
              </span>
              <span className="text-xl mx-1">+</span>
            </div>
            <div className="text-base font-light text-white text-center">
              Years of Experience
            </div>
          </div>
          <div className="flex flex-col space-y-7 justify-center items-center w-40 max-sm:w-full">
            <div className="text-3xl flex items-center justify-center font-medium text-white">
              <span data-count="15" className="my_Counter">
                {contributionsCount}
              </span>
              <span className="text-xl mx-1">+</span>
            </div>
            <div className="text-base font-light text-white text-center">
              Open Source Contributions
            </div>
          </div>
        </div>

        {/* <Button text='Hire Me' bgColor='card' textColor='white'></Button> */}
      </div>
    </div>
  );
};

export default HireMe;
