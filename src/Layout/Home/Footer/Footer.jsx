import React from 'react';
import { IoLogoGithub } from 'react-icons/io';
import { LiaFacebook } from 'react-icons/lia';
import { TiSocialLinkedinCircular } from 'react-icons/ti';
import { Link } from 'react-router-dom';
import logo from '../../../assets/1-modified.png'


const Footer = () => {
    return (
        <div>
            <footer className="footer bg-[linear-gradient(130deg,#2e064e_20%,#562D5C_90%)] w-[95%] mx-auto text-neutral-content items-center p-4 shadow-xl rounded-2xl">
                <aside className="grid-flow-col items-center">
                    <Link to="home" smooth={true} duration={500} className='cursor-pointer mr-5'>
                        <img className='w-20' src={logo} alt="" />
                    </Link>
                    <p className='text-base font-semibold'>Copyright © {new Date().getFullYear()} PORTFOLIO. All right reserved || Site created by <Link className='hover:text-[#0ef] hover:font-bold hover:underline' to={"https://www.linkedin.com/in/jaber-ahmed-riyan/"}>JABER AHMED RIYAN</Link></p>
                </aside>
                <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
                    <div className="flex gap-5">
                        {/* facebook  */}
                        <Link onClick={() => window.open('https://web.facebook.com/jaberriyanyan/', "_blank")}><LiaFacebook className='text-[#fff] shadow-[0_0_5px_#2e064e,0_0_25px_#2e064e] 
             hover:shadow-[0_0_5px_#2e064e,0_0_25px_#2e064e,0_0_30px_#2e064e] hover:bg-[#2e064e] hover:text-white/80 
             transition-all duration-700 rounded-full' size={40} /></Link>

                        {/* linkedin  */}
                        <Link onClick={() => window.open('https://www.linkedin.com/in/jaber-ahmed-riyan/', "_blank")}><TiSocialLinkedinCircular className='text-[#fff] shadow-[0_0_5px_#2e064e,0_0_25px_#2e064e] 
             hover:shadow-[0_0_5px_#2e064e,0_0_25px_#2e064e,0_0_30px_#2e064e] hover:bg-[#2e064e] hover:text-white/80 
             transition-all duration-700 rounded-full' size={40} /></Link>

                        {/* github  */}
                        <Link onClick={() => window.open('https://github.com/Jaber-riyan', "_blank")}><IoLogoGithub className='text-[#fff] shadow-[0_0_5px_#2e064e,0_0_25px_#2e064e] 
             hover:shadow-[0_0_5px_#2e064e,0_0_25px_#2e064e,0_0_30px_#2e064e] hover:bg-[#2e064e] hover:text-white/80 
             transition-all duration-700 rounded-full' size={40} /></Link>
                    </div>
                </nav>
            </footer>
        </div>
    );
};

export default Footer;