

import React from 'react'
import { Footer } from 'flowbite-react'
import { BsFacebook, BsGithub, BsEnvelopeFill, BsInstagram, BsLinkedin, } from 'react-icons/bs'
import { Link } from 'react-router-dom'
const FooterComp = () => {
    return (
        <Footer container className="border-t-8  border-teal-500 ">
            <div className="w-full min-w-7xl max-auto px-2 py-1">
                <div className=" w-full flex flex-col h-36 mt-5">

                    <Link to={'/'} className=" text-left  whitespace-nowrap text-lg sm:text-xl font-semibold ">
                        <span className="text-violet-700 ">Shubham Kumar</span>

                    </Link>


                    <div className=" flex lg:flex-row  md:flex-row flex-col w-full mt-3">
                        <div className=" flex flex-row  w-full gap-32">
                            <div className=' flex flex-col gap-3'>
                                <Footer.Title title='About' className="font-bold" />
                                <Footer.LinkGroup col className=' flex flex-col gap-3'>
                                    <Footer.Link href='/contact' target='blank' rel='noopener noreferrer'>Contact</Footer.Link>
                                </Footer.LinkGroup>

                            </div>
                            <div className=' flex flex-col gap-3'>
                                <Footer.Title title='Follow us' className="font-bold" />
                                <Footer.LinkGroup col className=' flex flex-col gap-3'>
                                    <Footer.Link href='https://www.linkedin.com/in/shubham-kumar-60b565285' target='blank' rel='noopener noreferrer'>Linkedin</Footer.Link>

                                </Footer.LinkGroup>

                            </div>
                        </div>

                        <div className=' flex l flex-col  list-none  w-full  gap-3 mt-4'>
                            <Footer.Title title='Legal' className="font-bold" />
                            <div className=" flex lg:flex-col md:flex-col flex-row lg:gap-3 md:gap-3 gap-12">
                                <Footer.Link href='#'>Privacy policy</Footer.Link>
                                <Footer.Link href='#'>Terms and condition</Footer.Link>
                            </div>

                        </div>

                    </div>
                </div>

                <Footer.Divider className=' lg:mt-6 md:mt-6 mt-9 ' />
                <div className=' w-full flex items-center justify-between   mt- p-2'>
                    <Footer.Copyright href='#' by=" Shubham Kumar" year={new Date().getFullYear()} />
                    <div className=" flex lg:gap-8 md:gap-8 gap-5  mt- mb-2">
                        <Footer.Icon href='https://www.facebook.com/profile.php?id=61560194821509' target="_blank" icon={BsFacebook} style={{ color: '#1877F2' }} />
                        <Footer.Icon href='https://www.instagram.com/silent_boy__45?utm_source=qr&igsh=MXRlcWV1Zm8xYTZ6YQ==' target="_blank" icon={BsInstagram} style={{ color: '#E4405F' }} />
                        <Footer.Icon href="https://www.linkedin.com/in/shubham-kumar-60b565285" target="_blank" rel="noreferrer" icon={BsLinkedin} style={{ color: '#0A66C2' }} />
                        <Footer.Icon href="mailto:itsmeshubham49@gmail.com" icon={BsEnvelopeFill} style={{ color: '#D44638' }} />
                        <Footer.Icon href="https://github.com/shubsingh45" target="_blank" icon={BsGithub} style={{ color: '#171515' }} />
                    </div>
                </div>
            </div>
        </Footer>
    )
}

export default FooterComp