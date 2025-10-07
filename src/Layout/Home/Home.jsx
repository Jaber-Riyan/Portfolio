import React from 'react';
import Navbar from './Navbar/Navbar';
import Footer from './Footer/Footer';
import Banner from './Banner/Banner';
import AboutMe from './AboutMe/AboutMe';
import Skills from './Skills/Skills';
import Academic from './Academic/Academic';
import Projects from './Projects/Projects';
import Contact from './Contact/Contact';
import EditingVideos from './EditingVideos/EditingVideos';

const Home = () => {
    const [isVisible, setIsVisible] = React.useState(true);
    const [lastScrollY, setLastScrollY] = React.useState(0);

    React.useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > lastScrollY) {
                setIsVisible(false);
            } else {
                setIsVisible(true);
            }
            setLastScrollY(window.scrollY);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollY]);
    return (
        <>
            {/* navbar section start */}
            {/* className={`sticky top-0 z-50 w-full border-b bg-background/100 backdrop-blur supports-[backdrop-filter]:bg-background/60 ${

        isVisible ? "translate-y-0" : "-translate-y-full"
      } transition-transform duration-300`} */}
            <nav className={`sticky shadow-[0_0_10px_#fff] top-0 z-50 w-full bg-[#2e064e] ${isVisible ? "translate-y-0" : "-translate-y-full"
                } transition-transform duration-300`}>
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

            {/* Video Editing Section Start  */}
            <section id='projects' className="bg-[linear-gradient(130deg,#1A1A4D_20%,#562D5C_90%)] bg-no-repeat pb-20 w-full bg-cover bg-center pt-20 border-b-2 border-gray-600">
                <section className='lg:w-[80%] w-[95%] mx-auto'>
                    <Projects></Projects>
                </section>
            </section>
            {/* Video Editing Section End  */}

            {/* projects section start  */}
            <section id='editingHighlights' className="bg-[linear-gradient(130deg,#1A1A4D_20%,#562D5C_90%)] bg-no-repeat pb-20 w-full bg-cover bg-center pt-20 border-b-2 border-gray-600">
                <section className='lg:w-[80%] w-[95%] mx-auto'>
                    <EditingVideos></EditingVideos>
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
            <footer className="bg-[linear-gradient(130deg,#2e064e_40%,#562D5C_80%)] bg-no-repeat p-5 w-full bg-cover bg-center border-b-2 border-gray-600">
                <Footer></Footer>
            </footer>
            {/* footer section end  */}
        </>
    );
};

export default Home;