import React from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import {  Dropdown } from 'flowbite-react'
import { FaUser } from 'react-icons/fa'
import { AiOutlineMore } from 'react-icons/ai'

const Navbar = () => {
    const location = useLocation();
    return (
        <div className=' w-full h-16 border-b-8 rounded-lg  border-teal-500  flex items-center justify-center'>
            <div className=" flex flex-row w-full justify-between items-center pl-3 pr-3 ">
                <div className="">
                   <Link to={'/'}><h1 className=' text-2xl font-semibold font-serif text-violet-700'>Shubham kumar</h1></Link>
                </div>
                <div className=" flex flex-row gap-16  lg:flex md:flex hidden ">
                    <NavLink to={'/'} className=' text-lg cursor-pointer text-gray-700' style={({ isActive }) => ({
                        color: isActive ? 'blue' : 'black',
                    })}>Home</NavLink>
                    <NavLink to={'/projects'} className=' text-lg cursor-pointer text-gray-400' style={({ isActive }) => ({
                        color: isActive ? 'blue' : 'black',
                    })}>Projects</NavLink>
                   
                    <NavLink to={'/contact'} className=' text-lg cursor-pointer text-gray-400' style={({ isActive }) => ({
                        color: isActive ? 'blue' : 'black',
                    })}>Contact Me</NavLink>
                </div>
                <div className=" lg:hidden md:hidden block">
                <Dropdown arrowIcon={false} inline label={<AiOutlineMore className=' w-9 text-gray-600 font-bold  h-8 '/>} className='bg-white w-44 '>
            <Link to={'/'} className=' cursor-pointer '>
                <Dropdown.Item
                    className={location.pathname === '/' ? '  bg-slate-300' : ''} 
                    style={{ fontSize:"18px", marginTop: "6px"}}  >
                    Home
                </Dropdown.Item>
            </Link>
            <Link to={'/projects'}>
                <Dropdown.Item
                    className={location.pathname === '/projects' ? ' bg-slate-300' : ''}
               style={{ fontSize:"18px", marginTop: "12px"}}  >
                    Projects
                </Dropdown.Item>
            </Link>
            <Link to={'/contact'}>
                <Dropdown.Item
                    className={location.pathname === '/contact' ? 'bg-slate-300' : ''} 
                    style={{ fontSize:"18px", marginTop: "12px"}}  >
                    Contact Me
                </Dropdown.Item>
            </Link>
            <Dropdown.Divider />
        </Dropdown>
                </div>

            </div>
        </div>
    )
}

export default Navbar
