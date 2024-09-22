import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import image3 from '../assests/img3.webp'
const Second = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.5 }
    );

    const secondPage = document.querySelector("#secondPage");
    observer.observe(secondPage);
  }, []);

  return (
    <div
      id="secondPage"
      className="min-h-screen w-full flex flex-col mt-16"
    >
      <h1 className=" text-[45px] font-bold text-violet-950 text-center">What I Do?</h1>
      <div className=" flex lg:flex-row flex-col w-full mt-12 ">
        {/* Image */}
        <motion.div
          className=" lg:w-1/2  w-full"
          initial={{ x: "-100vw" }}
          animate={isVisible ? { x: 0 } : {}}
          transition={{ type: "tween", duration: 1 }}
        >
          <img
            src={image3}
            alt="Placeholder"
            className="w-full"
          />
        </motion.div>

        {/* Text */}
        <motion.div
          className="lg:w-1/2 w-full text-right flex flex-col gap-5"
          initial={{ x: "100vw" }}
          animate={isVisible ? { x: 0 } : {}}
          transition={{ type: "tween", duration: 1 }}
        >
          <h2 className="text-3xl font-bold mb-4 text-center text-violet-500">MERN Stack Development</h2>

          <div className=" flex flex-col gap-2 text-[19px] text-start  font-semibold  leading-relaxed  ">

            <div className=" flex flex-row text-[19px] gap-3 font-semibold  leading-relaxed">
              <p>⚡</p>
              <p className=" ">
                Building scalable and efficient web applications using the MERN stack (MongoDB, Express.js, React.js, Node.js)
              </p>
            </div>
            <div className=" flex flex-row text-[19px] gap-3  font-semibold  leading-relaxed">
              <p>⚡</p>
              <p className=" ">
                Experience with creating responsive and interactive frontend UIs using React and Tailwind CSS
              </p>
            </div>
            <div className=" flex flex-row text-[19px] gap-3  font-semibold  leading-relaxed">
              <p>⚡</p>
              <p className=" ">
                Developing RESTful APIs and handling backend logic with Node.js and Express
              </p>
            </div>
            <div className=" flex flex-row text-[19px] gap-3 font-semibold  leading-relaxed">
              <p>⚡</p>
              <p className=" ">
                Knowledgeable in integrating databases and managing application state with Redux
              </p>
            </div>

          </div>

        </motion.div>
      </div>
    </div>
  );
};

export default Second
