import React from 'react';
import Navbar from './Navbar/Navbar';
import Footer from './Footer/Footer';
import Banner from './Banner/Banner';
import AboutMe from './AboutMe/AboutMe';
import Skills from './Skills/Skills';
import Academic from './Academic/Academic';
import Projects from './Projects/Projects';
import Contact from './Contact/Contact';

const Home = () => {
    return (
        <>
            {/* navbar section start */}
            <nav className='sticky z-30 top-0 bg-[#2e064e]'>
                <div className='w-[90%] mx-auto'>
                    <Navbar></Navbar>
                </div>
            </nav>
            {/* navbar section end */}

            {/* banner section start  */}
            <section id='home' className="bg-[linear-gradient(130deg,#040641_10.47%,#3F0753_98.32%)] bg-no-repeat pb-20 w-full bg-cover bg-center pt-20">
                <section className='lg:w-[80%] w-[90%] mx-auto'>
                    <Banner></Banner>
                </section>
            </section>
            {/* banner section end  */}

            {/* about me section start  */}
            <section id='about' className="bg-[linear-gradient(130deg,#1A1A4D_20%,#562D5C_90%)] bg-no-repeat pb-20 w-full bg-cover bg-center pt-20 border-b-2 border-gray-600">
                <section className='lg:w-[80%] w-[95%] mx-auto'>
                    <AboutMe></AboutMe>
                </section>
            </section>
            {/* about me section end  */}

            {/* skills section start  */}
            <section id='skills' className="bg-[linear-gradient(130deg,#090933_15%,#451A46_85%)] bg-no-repeat pb-20 w-full bg-cover bg-center pt-20 border-b-2 border-gray-600">
                <section className='lg:w-[80%] w-[90%] mx-auto'>
                    <Skills></Skills>
                </section>
            </section>
            {/* skills section end  */}

            {/* academic qualification section start */}
            <section className="bg-[linear-gradient(-160deg,#562D5C_20%,#1A1A4D_90%)] bg-no-repeat pb-20 w-full bg-cover bg-center pt-20 border-b-2 border-gray-600">
                <section className='lg:w-[80%] w-[90%] mx-auto'>
                    <Academic></Academic>
                </section>
            </section>
            {/* academic qualification section end */}

            {/* projects section start  */}
            <section id='projects' className="bg-[linear-gradient(130deg,#1A1A4D_20%,#562D5C_90%)] bg-no-repeat pb-20 w-full bg-cover bg-center pt-20 border-b-2 border-gray-600">
                <section className='lg:w-[80%] w-[95%] mx-auto'>
                    <Projects></Projects>
                </section>
            </section>
            {/* projects section end  */}

            {/* contact section start  */}
            <section id='contact' className="bg-[linear-gradient(130deg,#1A1A4D_20%,#562D5C_90%)] bg-no-repeat pb-20 w-full bg-cover bg-center pt-20 border-b-2 border-gray-600">
                <section className='lg:w-[100%] w-[90%] mx-auto'>
                    <Contact></Contact>
                </section>
            </section>
            {/* contact section end  */}

            {/* footer section start  */}
            <footer className=''>
                {/* <Footer></Footer> */}
            </footer>
            {/* footer section end  */}
        </>
    );
};

export default Home;