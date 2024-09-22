import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Card } from "flowbite-react";
import img2 from './img2.jpg'
import instapost from './instapost.jpg'
import apiimg from './apiimg.webp'
import blogimg from './blogimg.jpg'
import { Link } from "react-router-dom";
import { Button } from 'flowbite-react';

const LiveProjects = () => {
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
      className="min-h-screen  flex flex-col items-center " >
            <motion.div
          className="lg:w-1/2  w-full"
          initial={{ y: "100vw" }}
          animate={isVisible ? { y : 0 } : {}}
          transition={{ type: "tween", duration: 1 }}
        >
      <h1 className="lg:text-[45px] md:text-[45px] text-[30px]  w-full font-bold text-violet-950 text-center mt-8">My Live Projects</h1>

        </motion.div>

      <div className=" flex flex-col lg:flex-row items-center justify-center  w-full mt-12 gap-6 ">
        {/* Image */}
        <motion.div
          className="lg:w-1/2 md:w-full flex flex-col justify-center  w-[80%]"
          initial={{ y: "100vw" }}
          animate={isVisible ? { y : 0 } : {}}
          transition={{ type: "tween", duration: 1 }}
        >
           <Card
      className=" lg:max-w-screen-lg md:max-w-screen-md max-w-sm  items-center   pb-4 cursor-pointer hover:shadow-lg  shadow-slate-400" 
      imgAlt="Meaningful alt text for an image that is not purely decorative"
  
    >
        <img src={blogimg} className=" w-[296px] h-[178px]" alt="" />

      <h5 className="text-2xl font-bold tracking-tight text-violet-700">
       Blog Application 2024
      </h5>
      <p className="font-normal ">
      User authentication, CRUD operations, and responsive design using Mern Stack  </p>
    </Card>
    <Link to={'https://github.com/shubsingh45/my_portfolio'} target="_blank">
      <Button className='  flex items-center ml-16  mt-8   border-2 lg:w-[140px] w-[100px] bg-white text-violet-950
          hover:bg-violet-950 h-10 rounded-lg  hover:text-white border-violet-950  transition-colors duration-300 ease-in-out'>
              <h1 className=' text-xl'>View</h1>
            </Button>

      </Link>

        </motion.div>
        <motion.div
          className="lg:w-1/2  md:w-full flex justify-center flex-col  w-[80%]"
          initial={{ y: "100vw" }}
          animate={isVisible ? { y : 0 } : {}}
          transition={{ type: "tween", duration: 1 }}
        >
           <Card
      className="lg:max-w-screen-lg md:max-w-screen-md max-w-sm    pb-4 cursor-pointer hover:shadow-lg   shadow-slate-400"
      imgAlt="Meaningful alt text for an image that is not purely decorative"
      // imgSrc={instapost}
    >
    <img src={instapost} className=" w-[296px] h-[178px]" alt="" />
      <h5 className="text-2xl font-bold tracking-tight  text-violet-700">
      Instagram Ui 2024
      </h5>
      <p className="font-normal ">
      Feed, user profiles, post creation, search, and messaging features with React and Tailwind CSS. </p>
    </Card>
    <Link to={'https://github.com/shubsingh45/instagram_ui'} target="_blank">
      <Button className='  flex items-center ml-16  mt-8   border-2 lg:w-[140px] w-[100px] bg-white text-violet-950
          hover:bg-violet-950 h-10 rounded-lg  hover:text-white border-violet-950  transition-colors duration-300 ease-in-out'>
              <h1 className=' text-xl'>View</h1>
            </Button>

      </Link>

        </motion.div>

        <motion.div
          className="lg:w-1/2  md:w-full flex justify-center flex-col  w-[80%]"
          initial={{ y : "100vw" }}
          animate={isVisible ? { y : 0 } : {}}
          transition={{ type: "tween", duration: 1 }}
        >
           <Card
      className=" lg:max-w-screen-lg md:max-w-screen-md max-w-sm    pb-4 cursor-pointer hover:shadow-lg  shadow-slate-400"
      imgAlt="Meaningful alt text for an image that is not purely decorative"
      
    >
    <img src={apiimg} className=" w-[296px] h-[178px]" alt="" />
      <h5 className="text-2xl font-bold tracking-tight  text-violet-700">
         School Managemant API
      </h5>
      <p className="font-normal ">
      Add and Get Schools functionality using Node.js and MongoDB.
      </p>
    </Card>
    <Link to={'https://github.com/shubsingh45/school_api'} target="_blank">
      <Button className='  flex items-center ml-16  mt-8   border-2 lg:w-[140px] w-[100px] bg-white text-violet-950
          hover:bg-violet-950 h-10 rounded-lg  hover:text-white border-violet-950  transition-colors duration-300 ease-in-out'>
              <h1 className=' text-xl'>View</h1>
            </Button>

      </Link>

        </motion.div>
      </div>
      <motion.div
          className="  w-full flex justify-center "
          initial={{ y: "100vw" }}
          animate={isVisible ? { y : 0 } : {}}
          transition={{ type: "tween", duration: 1 }}
        >
      <Link to={'https://github.com/shubsingh45'} target="_blank">
      <Button className=' mt-24 flex items-center mb-20  border-2 lg:w-[283px] w-[213px] bg-violet-950
          hover:bg-white h-14 rounded-lg text-white hover:text-violet-950 hover:border-violet-950  transition-colors duration-300 ease-in-out'>
              <h1 className=' text-2xl'>More Projects</h1>
            </Button>

      </Link>

        </motion.div>

    </div>
  );
};





export default LiveProjects