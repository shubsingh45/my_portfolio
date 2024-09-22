import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import image2 from '../assests/img2.jpg';
import html from '../assests/html.png';
import css from '../assests/css.png';
import javascript from '../assests/javascript.png';
import react from '../assests/react.png';
import node from '../assests/node.png';
import npm from '../assests/npm.png';
import telwind from '../assests/telwind.jpeg';
import Tooltip from '@mui/material/Tooltip';
import mongodb from '../assests/mongodb.png'


const ThirdSec = () => {
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

        const thirdsec = document.querySelector("#thirdsec");
        observer.observe(thirdsec);
    }, []);

    return (
        <div
            id="thirdsec"
            className="min-h-screen w-full flex flex-col  "
        >
            <div className=" flex lg:flex-row  flex-col w-full mt-12">
                {/* Image */}
                <motion.div
                    className="lg:w-1/2  w-full"
                    initial={{ x: "-100vw" }}
                    animate={isVisible ? { x: 0 } : {}}
                    transition={{ type: "tween", duration: 1 }}
                >
                    <img
                        src={image2}
                        alt="Placeholder"
                        className="w-full"
                    />
                </motion.div>

                {/* Text */}
                <motion.div
                    className="lg:w-1/2  w-full text-right flex flex-col mt-8 gap-5"
                    initial={{ x: "100vw" }}
                    animate={isVisible ? { x: 0 } : {}}
                    transition={{ type: "tween", duration: 1 }}
                >
                    <h2 className="text-3xl font-bold mb-4 text-center text-violet-500">Full Stack Development</h2>

                    <div className=" flex flex-col gap-2 text-[19px]  font-semibold text-start  leading-relaxed  ">

                        <div className=" flex flex-row items-center gap-6 justify-center">
                            <Tooltip title="HTML">
                                <img src={html} alt="HTML Logo" className=" lg:w-14  lg:h-14  md:w-14  md:h-14 h-8 w-8" />
                            </Tooltip>

                            <Tooltip title="CSS">
                                <img src={css} alt="" className="lg:w-14  lg:h-14  md:w-14  md:h-14 h-8 w-8  " />
                            </Tooltip>
                            <Tooltip title="Javascript">
                                <img src={javascript} alt="" className="lg:w-16  lg:h-16  md:w-16  md:h-16 h-8 w-8 " />
                            </Tooltip>
                            <Tooltip title="React">
                                <img src={react} alt="" className="lg:w-14  lg:h-14  md:w-14  md:h-14 h-8 w-8 " />
                            </Tooltip>
                            <Tooltip title="Node">
                                <img src={node} alt="" className="lg:w-14  lg:h-14  md:w-14  md:h-14 h-8 w-8 " />
                            </Tooltip>


                        </div>
                        <div className=" flex flex-row items-center gap-6 mt-3 justify-center">
                        <Tooltip title="Npm">
                            <img src={npm} alt="" className="lg:w-14  lg:h-14  md:w-14  md:h-14 h-8 w-8  " />
                            </Tooltip>
                            <Tooltip title="Telwind CSS">
                            <img src={telwind} alt="" className="lg:w-14  lg:h-14  md:w-14  md:h-14 h-8 w-8   " />
                            </Tooltip>
                            <Tooltip title="MongoDb">
                            <img src={mongodb} alt="" className="lg:w-14  lg:h-14  md:w-14  md:h-14 h-8 w-8  " />
                            </Tooltip>


                        </div>


                        <div className=" flex flex-row text-[19px] gap-3 mt-3  font-semibold  leading-relaxed">
                            <p>⚡</p>
                            <p className=" ">
                                Proficient in using MongoDB for database management and data modeling
                            </p>
                        </div>

                        <div className=" flex flex-row text-[19px] gap-3 font-semibold  leading-relaxed">
                            <p>⚡</p>
                            <p className=" ">
                                Hands-on experience with deploying full-stack applications on platforms like Vercel and Render
                            </p>
                        </div>

                        <div className=" flex flex-row text-[19px] gap-3  font-semibold  leading-relaxed">
                            <p>⚡</p>
                            <p className=" ">
                                Skilled in handling authentication using JWT for user verification and secure data flows
                            </p>
                        </div>




                    </div>


                </motion.div>
            </div>
        </div>
    );
};

export default ThirdSec
