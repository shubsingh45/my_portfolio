import React from 'react'
import img from '../img.bmp'
import {  FaGithub, FaStar } from 'react-icons/fa';
import { Button } from 'flowbite-react';
import linkdin from '../assests/linkdin.webp'
import email from '../assests/email.webp'
import Second from '../component/Second';
import ThirdSec from '../component/Thirdsec';
import FourthSec from '../component/FourthSec';
import { BsFacebook, BsInstagram } from 'react-icons/bs';
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className=' min-h-screen w-full flex  justify-center items-center lg:pl-16 lg:pr-16 md:pl-16 md:pr-16 p-3'>
      <div className=" w-full ">
        <div className=" flex lg:flex-row  flex-col-reverse w-full mt-6 ">
          <div className=" lg:w-[50%]  w-full flex flex-col items-center mt-5  lg:mt-[122px] md:mt-[122px]">
            <h1 className=' lg:text-[55px] md:text-[55px] text-[32px]  font-bold text-violet-950'>Shubham kumar</h1>
            <p className=' text-[19px] text-center  font-semibold  leading-relaxed'>I am a passionate MERN Stack Developer who thrives on building scalable and impactful
              products. With expertise in React, Node.js, Express,
              and MongoDB, I focus on creating sustainable solutions that solve real-world problems.</p>
            <div className="flex justify-start space-x-4 mt-5">
              <a href="https://www.linkedin.com/in/shubham-kumar-60b565285" target="_blank" rel="noreferrer">
                <img src={linkdin} alt="" className="w-12 h-12  " />
              </a>
              <a href="mailto:itsmeshubham49@gmail.com">
                <img src={email} alt="" className="w-10 h-10  " />
              </a>
              <a href="https://github.com/shubsingh45" target="_blank" rel="noreferrer">
                <FaGithub className="w-10 h-10 rounded-full text-black" />
              </a>
              <a href='https://www.facebook.com/profile.php?id=61560194821509' target="_blank" rel="noreferrer">
                <BsFacebook className="w-10 h-10  " style={{ color: '#1877F2' }} />
              </a>
              <a href='https://www.instagram.com/silent_boy__45?utm_source=qr&igsh=MXRlcWV1Zm8xYTZ6YQ=='  target="_blank" rel="noreferrer">
                <BsInstagram className="w-10 h-10  " style={{ color: '#E4405F' }} />
              </a>

            </div>
            <Link  to={'https://github.com/shubsingh45'} target='_blank' className=" flex justify-center items-center w-full h-24 mt-14">
                            <Button className=' flex-row justify-center mt-5 flex items-center mb-24 border-2 md:w-[283px]  lg:w-[283px] w-[213px] bg-violet-950
                           hover:bg-white h-14 rounded-lg text-white hover:text-violet-950 hover:border-violet-950  transition-colors duration-300 ease-in-out'>
              <FaStar className=" mr-2 lg:h-7 lg:w-7 h-5 w-5 text-yellow-500" />
              <h1 className='lg:text-2xl text-xl'>Star Me On Github</h1>
                            </Button>

                        </Link>
          </div>
          <div className="lg:w-[50%]  w-full">
            <img src={img} alt="" className=' ' />
          </div>

        </div>
        <Second />
        <ThirdSec />
        <FourthSec />
      </div>

    </div>
  )
}

export default Home