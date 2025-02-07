import React, { useEffect, useRef } from 'react';
import myImage from '../../../assets/new image 2.png'
import Typed from 'typed.js';
import { Link } from 'react-router-dom';
import { LiaFacebook } from 'react-icons/lia';
import { TiSocialLinkedinCircular } from 'react-icons/ti';
import { IoLogoGithub } from 'react-icons/io';

const Banner = () => {
    const textRef = useRef(null)
    useEffect(() => {
        const typed = new Typed(textRef.current, {
            strings: ["Frontend Developer", "Web Developer", "Full Stack Developer", "MERN Stack Developer",],
            typeSpeed: 50,
            backSpeed: 30,
            backDelay: 1000,
            loop: true
        })

        return () => {
            typed.destroy();
        }
    }, [])
    return (
        <div className='lg:flex-row flex-col-reverse flex gap-y-16 justify-center items-center'>
            <div className='text-white'>
            <h3 className='md:text-4xl text-3xl font-semibold mb-2'>Hey there! I'm</h3>
            <h1 className='md:text-5xl text-[32px] md:ml-6 ml-3 font-bold mb-2'>Jaber Ahmed Riyan</h1>
                <h3 className='md:text-[35px] text-[28px] font-bold'>
                    <span className='md:inline-block hidden'>A Passionate</span> <span className='md:hidden inline-block'>I am a</span>
                    <span className='text-[#0ef] ml-2' ref={textRef}></span></h3>
                <div className='mb-6'>
                    <p className='md:w-[90%] mt-6 text-gray-300 md:text-xl text-[1rem]'>
                        🚀 I'm a MERN Stack Developer with expertise in React.js, Node.js, Express.js, and MongoDB. I specialize in building modern, scalable, and efficient web applications that provide seamless user experiences.
                    </p>
                </div>
                <div className="flex gap-5">

                    {/* facebook  */}
                    <Link onClick={() => window.open('https://web.facebook.com/jaberriyanyan/', "_blank")}><LiaFacebook className='text-[#0ef] shadow-[0_0_5px_#0ef,0_0_25px_#0ef] 
             hover:shadow-[0_0_5px_cyan,0_0_25px_cyan,0_0_30px_cyan] hover:bg-[#0ef] hover:text-black 
             transition-all duration-700 rounded-full' size={40} /></Link>

                    {/* linkedin  */}
                    <Link onClick={() => window.open('https://www.linkedin.com/in/jaber-ahmed-riyan/', "_blank")}><TiSocialLinkedinCircular className='text-[#0ef] shadow-[0_0_5px_#0ef,0_0_25px_#0ef] 
             hover:shadow-[0_0_5px_cyan,0_0_25px_cyan,0_0_30px_cyan] hover:bg-[#0ef] hover:text-black 
             transition-all duration-700 rounded-full' size={40} /></Link>

                    {/* github  */}
                    <Link onClick={() => window.open('https://github.com/Jaber-riyan', "_blank")}><IoLogoGithub className='text-[#0ef] shadow-[0_0_5px_#0ef,0_0_25px_#0ef] 
             hover:shadow-[0_0_5px_cyan,0_0_25px_cyan,0_0_30px_cyan] hover:bg-[#0ef] hover:text-black 
             transition-all duration-700 rounded-full' size={40} /></Link>
                </div>

                {/* resume button  */}
                <div className='mt-8'>
                    <button
                        className="px-9 py-3 bg-[#0ef] rounded-3xl text-black font-bold
             shadow-[0_0_5px_#0ef,0_0_25px_#0ef] 
             hover:shadow-[0_0_5px_cyan,0_0_25px_cyan,0_0_30px_cyan] 
             transition-all duration-300"
                    >
                        Resume
                    </button>

                </div>
            </div>
            <div className="relative group inline-block">
                {/* Image */}
                <img
                    className="shadow-[0_0_100px_rgba(255,255,255,0.651)] rounded-full lg:w-[900px] md:w-[500px] w-80 cursor-pointer hover:shadow-[0_0_100px_rgba(255,255,255)]"
                    draggable={false}
                    onContextMenu={(e) => e.preventDefault()}
                    src={myImage}
                    alt="Jaber Ahmed Riyan"
                />

                {/* Tooltip */}
                <div className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 px-3 py-1 rounded-lg bg-purple-800 text-white text-xs opacity-0 group-hover:opacity-100 transition duration-300 font-bold">
                    Jaber Ahmed Riyan
                </div>
            </div>


        </div>
    );
};

export default Banner;