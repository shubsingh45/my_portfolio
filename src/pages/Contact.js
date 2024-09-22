import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Avatar, Button } from 'flowbite-react';
import user from '../assests/user.png'
import { BsFacebook, BsInstagram, } from 'react-icons/bs'
import linkdin from '../assests/linkdin.webp'
import email from '../assests/email.webp'
import { FaGithub } from "react-icons/fa";
import con1 from '../assests/con1.png'
import shubham_cv from '../assests/shubham_cv.pdf'

const Contact = () => {

    return (
        <div
            id="secondPage"
            className="min-h-screen  lg:pl-16 lg:pr-16 md:pl-16 md:pr-16 flex flex-col items-center p-3 " >
            <div className=" flex lg:flex-row flex-col  w-full lg:mt-24 mt-16 gap-6 ">
                {/* Image */}
                <motion.div
                    className="lg:w-1/2  w-full flex flex-col  items-center"
                    initial={{ y: "100vw" }}
                    animate={ { y: 0 } }
                    transition={{ type: "tween", duration: 1 }}
                >
                    <div className="  border-black border-2 lg:h-[410px]   lg:w-[410px] w-[290px] h-[290px] flex justify-center items-end rounded-full overflow-hidden ">
                    { user ? (
                        <img src={ user} className="  lg:h-[370px] lg:w-[370px] h-[250px] w-[250px] rounded-ful" />
                    ) : (
                   <Avatar  className="  lg:h-[370px] lg:w-[370px] h-[250px] w-[250px] rounded-ful"/>
                    )}
                    </div>
                    <div className=" flex flex-col justify-center w-full">

                        <h2 className=" lg:mt-14  mt-8 lg:text-[35px] md:text-[35px] text-[28px] font-bold text-violet-950 text-center">Explore My GitHub</h2>

                        <p className=" text-[19px]  text-center  font-semibold  leading-relaxed">
                            I document my professional experiences and share technical
                            knowledge on my GitHub. Check out my projects and contributions!</p>

                        <Link to={'https://github.com/shubsingh45'} target="_blank" className=" flex justify-center items-center w-full">
                            <Button className=' mt-10 lg:w-[283px] w-[233px]  bg-violet-950 flex items-center
                           hover:bg-white h-14 rounded-lg text-white hover:text-violet-950
                            hover:border-violet-950  transition-colors duration-300 ease-in-out border-2'>
                                <h1 className=' lg:text-2xl text-xl'>See &nbsp;  My &nbsp;Repositories</h1>
                            </Button>

                        </Link>
                    </div>
                </motion.div>


                <motion.div
                    className="lg:w-1/2  w-full"
                    initial={{ y: "100vw" }}
                    animate={ { y: 0 } }
                    transition={{ type: "tween", duration: 1 }}
                >

                    <h2 className="  mt-8 text-[35px] font-bold text-violet-950 text-center">Projects</h2>

                    <div className=" text-[19px]  lg:text-start  text-center  font-semibold  leading-relaxed  ">
                        I am available on almost every social media platform. You can message me anytime,
                        and I will do my best to reply within
                        24 hours. Feel free to reach out for any inquiries, collaborations, or just to connect!

                    </div>
                    <div className="flex justify-center space-x-4 mt-5">
                        <a href="https://www.linkedin.com/in/shubham-kumar-60b565285" target="_blank" rel="noreferrer">
                            <img src={linkdin} alt="" className="w-14 h-14  " />
                        </a>
                        <a href="mailto:itsmeshubham49@gmail.com">
                            <img src={email} alt="" className="w-12 h-12  " />
                        </a>
                        <a href="https://github.com/shubsingh45" target="_blank" rel="noreferrer">
                            <FaGithub className="w-12 h-12 rounded-full text-black" />
                        </a>
                        <a href='https://www.facebook.com/profile.php?id=61560194821509' target="_blank" rel="noreferrer">
                            <BsFacebook className="w-12 h-12  " style={{ color: '#1877F2' }} />
                        </a>
                        <a href='https://www.instagram.com/silent_boy__45?utm_source=qr&igsh=MXRlcWV1Zm8xYTZ6YQ==' target="_blank" rel="noreferrer">
                            <BsInstagram className="w-12 h-12  " style={{ color: '#E4405F' }} />
                        </a>
                    </div>

                        <a href={shubham_cv} download="shubham_cv.pdf" className=" flex justify-center items-center w-full h-24">
                            <Button className=' mt-24 flex items-center mb-24  lg:w-[283px] w-[213px] bg-violet-950
                           hover:bg-white h-14 rounded-lg text-white hover:text-violet-950 hover:border-violet-950  border-2 transition-colors duration-300 ease-in-out'>
                             <h1 className=" lg:text-2xl text-xl">See &nbsp;  My &nbsp;Resume</h1>   
                            </Button>

                        </a>


                    <img src={con1} alt="" className=" lg:mt-16 mb-20 mt-20" />

                </motion.div>

            </div>
        </div>
    );
};



export default Contact
