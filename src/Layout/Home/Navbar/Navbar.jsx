import React from 'react';
import { Link } from 'react-scroll'
import './Navbar.css'

const Navbar = () => {

    const links =
        <>
            <Link to="home" smooth={true} duration={500} className='text-glow cursor-pointer'>Home</Link>
            <Link to="about" smooth={true} duration={500} className='text-glow cursor-pointer'>About</Link>
            <Link to="skills" smooth={true} duration={500} className='text-glow cursor-pointer'>Skills</Link>
            <Link to="projects" smooth={true} duration={500} className='text-glow cursor-pointer'>Projects</Link>
            <Link to="contact" smooth={true} duration={500} className='text-glow cursor-pointer'>Contact</Link>
        </>

    return (
        <div className=''>
            <div className="navbar">
                <div className="navbar-start">
                    <button>
                        <img className='w-20' src="https://i.ibb.co.com/1Jj5D5Qm/1-modified.png" alt="" />
                    </button>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 text-white gap-4 text-[1rem] font-semibold">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end">
                    <div className="dropdown">
                        <div tabIndex="0" role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5 text-white"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex="0"
                            className="menu menu-sm dropdown-content bg-[#3a0f5e] text-white rounded-box mt-3 w-52 hover:bg-[#2e064edc] shadow right-0 font-semibold">
                            <Link to="home" smooth={true} duration={500} className='hover:bg-[#56158b] p-2 hover:rounded-lg cursor-pointer'>Home</Link>
                            <Link to="about" smooth={true} duration={500} className='hover:bg-[#56158b] p-2 hover:rounded-lg cursor-pointer'>About</Link>
                            <Link to="skills" smooth={true} duration={500} className='hover:bg-[#56158b] p-2 hover:rounded-lg cursor-pointer'>Skills</Link>
                            <Link to="projects" smooth={true} duration={500} className='hover:bg-[#56158b] p-2 hover:rounded-lg cursor-pointer'>Project</Link>
                            <Link to="contact" smooth={true} duration={500} className='hover:bg-[#56158b] p-2 hover:rounded-lg cursor-pointer'>Contact</Link>
                            <button type='button' onClick={() => window.open("www.facebook.com", "_blank")} className='p-3 bg-orange-500 rounded-xl hover:bg-orange-300'>Resume</button>
                        </ul>
                    </div>
                    <button
                        type="button"
                        className="px-9 py-3 bg-[#0ef] rounded-3xl text-black font-bold lg:block hidden
             shadow-[0_0_5px_#0ef,0_0_25px_#0ef] 
             hover:shadow-[0_0_5px_cyan,0_0_25px_cyan,0_0_30px_cyan] 
             transition-all duration-300"
                    >
                        Resume
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;