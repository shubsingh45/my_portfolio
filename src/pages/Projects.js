import { motion } from "framer-motion";
import pr1 from '../assests/pr1.webp';
import LiveProjects from "../component/Projects/LiveProjects";

const Projects = () => {
  return (
    <div
      id="projects"
      className="min-h-screen w-full flex flex-col lg:pl-16 lg:pr-16 md:pl-16 md:pr-16 p-3 overflow-hidden"
    >
      <div className="flex lg:flex-row  flex-col w-full mt-12">
        {/* Image */}
        <motion.div
          className="lg:w-1/2  w-full"
          initial={{ y: "-100vw" }}
          animate={{ y: 0 }}
          transition={{ type: "tween", duration: 1 }}
        >
          <img
            src={pr1}
            alt="Placeholder"
            className="w-full"
          />
        </motion.div>

        {/* Text */}
        <motion.div
          className="lg:w-1/2  w-fulltext-right flex flex-col"
          initial={{ y: "100vw" }}
          animate={{ y: 0 }}
          transition={{ type: "tween", duration: 1 }}
        >
          <h2 className="mt-[122px] lg:text-[45px] md:text-[45px] text-[30px] font-bold text-violet-950 text-center">Projects</h2>
 
          <div className="text-[19px] lg:text-start text-center font-semibold leading-relaxed">
            My projects leverage a wide range of modern web technologies. My expertise lies in developing 
            and deploying full-stack web applications using the MERN stack (MongoDB, Express, React, Node.js). 
            I have hands-on experience in hosting these applications on cloud platforms like Vercel and Render, ensuring scalability and efficient performance.
          </div>
        </motion.div>
      </div>

      <div>
        <LiveProjects />
      </div>
    </div>
  );
};

export default Projects;
