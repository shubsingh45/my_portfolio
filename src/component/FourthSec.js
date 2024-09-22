import { motion } from "framer-motion";
import image5 from '../assests/img5.jpg';
import html from '../assests/html.png';
import css from '../assests/css.png';
import javascript from '../assests/javascript.png';
import react from '../assests/react.png';
import node from '../assests/node.png';
import npm from '../assests/npm.png';
import telwind from '../assests/telwind.jpeg';
import Tooltip from '@mui/material/Tooltip';
import mongodb from '../assests/mongodb.png'


const FourthSec = () => {

    return (
        <div
            id="thirdsec"
            className="min-h-screen w-full flex flex-col  "
        >
            <div className=" flex lg:flex-row  flex-col w-full mt-6">
                <motion.div
                    className="lg:w-1/2  w-full"
                    initial={{ x: "-100vw" }}
                    animate={{ x: 0 } }
                    transition={{ type: "tween", duration: 1 }}
                >
                    <img
                        src={image5}
                        alt="Placeholder"
                        className="w-full"
                    />
                </motion.div>

                <motion.div
                    className="lg:w-1/2  w-full text-right mt-8 flex flex-col gap-5"
                    initial={{ x: "100vw" }}
                    animate={{ x: 0 } }
                    transition={{ type: "tween", duration: 1 }}
                >
                    <h2 className="text-3xl font-bold mb-4 text-center text-violet-500">Technologies & Tools</h2>

                    <div className=" flex flex-col gap-2 text-[19px]  font-semibold text-start  leading-relaxed  ">

                        <div className=" flex flex-row items-center gap-6 justify-center">
                            <Tooltip title="HTML">
                                <img src={html} alt="HTML Logo" className="lg:w-14  lg:h-14  md:w-14  md:h-14 h-8 w-8" />
                            </Tooltip>

                            <Tooltip title="CSS">
                                <img src={css} alt="" className=" lg:w-14  lg:h-14  md:w-14  md:h-14 h-8 w-8   " />
                            </Tooltip>
                            <Tooltip title="Javascript">
                                <img src={javascript} alt="" className="lg:w-16  lg:h-16  md:w-16  md:h-16 h-8 w-8  " />
                            </Tooltip>
                            <Tooltip title="React">
                                <img src={react} alt="" className="lg:w-14  lg:h-14  md:w-14  md:h-14 h-8 w-8  " />
                            </Tooltip>
                            <Tooltip title="Node">
                                <img src={node} alt="" className="lg:w-14  lg:h-14  md:w-14  md:h-14 h-8 w-8   " />
                            </Tooltip>


                        </div>
                        <div className=" flex flex-row items-center gap-6 mt-3 justify-center">
                            <Tooltip title="Npm">
                                <img src={npm} alt="" className="lg:w-14  lg:h-14  md:w-14  md:h-14 h-8 w-8    " />
                            </Tooltip>
                            <Tooltip title="Telwind CSS">
                                <img src={telwind} alt="" className="lg:w-14  lg:h-14  md:w-14  md:h-14 h-8 w-8   " />
                            </Tooltip>
                            <Tooltip title="MongoDb">
                                <img src={mongodb} alt="" className="lg:w-14  lg:h-14  md:w-14  md:h-14 h-8 w-8  " />
                            </Tooltip>


                        </div>


                        <div className=" flex flex-row text-[19px] gap-3  font-semibold  leading-relaxed">
                            <p>⚡</p>
                            <p className=" ">
                                Frontend: React.js, Redux, Tailwind CSS, HTML5, CSS3, JavaScript (ES6+)
                            </p>
                        </div>

                        <div className=" flex flex-row text-[19px] gap-3 font-semibold  leading-relaxed">
                            <p>⚡</p>
                            <p className=" ">
                                Backend: Node.js, Express.js, MongoDB, Mongoose
                            </p>
                        </div>

                        <div className=" flex flex-row text-[19px] gap-3 font-semibold  leading-relaxed">
                            <p>⚡</p>
                            <p className=" ">
                                APIs: RESTful APIs, JSON Web Tokens (JWT) for authentication
                            </p>
                        </div>
                        <div className=" flex flex-row text-[19px] gap-3  font-semibold  leading-relaxed">
                            <p>⚡</p>
                            <p className=" ">
                                Version Control: Git, GitHub
                            </p>
                        </div>
                        <div className=" flex flex-row text-[19px] gap-3 font-semibold  leading-relaxed">
                            <p>⚡</p>
                            <p className=" ">
                                Deployment: Vercel, Render
                            </p>
                        </div>
                        <div className=" flex flex-row text-[19px] gap-3font-semibold  leading-relaxed">
                            <p>⚡</p>
                            <p className=" ">
                                Other Tools: Thunder Client, Postman for API testing
                            </p>
                        </div>







                    </div>


                </motion.div>
            </div>
        </div>
    );
};

export default FourthSec 
