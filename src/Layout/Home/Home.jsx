import React from 'react';
import Navbar from './Navbar/Navbar';
import Footer from './Footer/Footer';
import Banner from './Banner/Banner';

const Home = () => {
    return (
        <>
            {/* navbar section start */}
            <nav className='sticky z-30 top-0 bg-[#2e064e] backdrop-blur-sm bg-transparent'>
                <div className='w-[90%] mx-auto'>
                    <Navbar></Navbar>
                </div>
            </nav>
            {/* navbar section end */}

            {/* banner section start  */}
            <section className="bg-[linear-gradient(130deg,#040641_10.47%,#3F0753_98.32%)] bg-no-repeat pb-20 w-full bg-cover bg-center pt-20">
                <section className='lg:w-[80%] w-[90%] mx-auto'>
                    <Banner></Banner>
                </section>
            </section>
            {/* banner section end  */}

            {/* footer section start  */}
            <footer className=''>
                {/* <Footer></Footer> */}
            </footer>
            {/* footer section end  */}
        </>
    );
};

export default Home;