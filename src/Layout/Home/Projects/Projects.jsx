import React, { useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

// First project all images start 
import OneOne from '../../../assets/1stProjects/1.PNG'
import OneTwo from '../../../assets/1stProjects/2.PNG'
import OneThree from '../../../assets/1stProjects/3.PNG'
import OneFour from '../../../assets/1stProjects/4.PNG'
import OneFive from '../../../assets/1stProjects/5.PNG'
import OneSix from '../../../assets/1stProjects/6.PNG'
// First project all images end

// Second project all images start 
import TwoOne from '../../../assets/2ndProjects/1.PNG'
import TwoTwo from '../../../assets/2ndProjects/2.PNG'
import TwoThree from '../../../assets/2ndProjects/3.PNG'
import TwoFour from '../../../assets/2ndProjects/4.PNG'
import TwoFive from '../../../assets/2ndProjects/5.PNG'
import TwoSix from '../../../assets/2ndProjects/6.PNG'
import TwoSeven from '../../../assets/2ndProjects/7.PNG'
// Second project all images end 

// Third project all images start 
import ThreeOne from '../../../assets/3rdProjects/1.PNG'
import ThreeTwo from '../../../assets/3rdProjects/2.PNG'
import ThreeThree from '../../../assets/3rdProjects/3.PNG'
import ThreeFour from '../../../assets/3rdProjects/4.PNG'
import ThreeFive from '../../../assets/3rdProjects/5.PNG'
import ThreeSix from '../../../assets/3rdProjects/6.PNG'
import ThreeSeven from '../../../assets/3rdProjects/7.PNG'
// Third project all images end 

// Fourth project all images start 
import FourOne from '../../../assets/4thProjects/1.PNG'
import FourTwo from '../../../assets/4thProjects/2.PNG'
import FourThree from '../../../assets/4thProjects/3.PNG'
import FourFour from '../../../assets/4thProjects/4.PNG'
import FourFive from '../../../assets/4thProjects/5.PNG'
import FourSix from '../../../assets/4thProjects/6.PNG'
import FourSeven from '../../../assets/4thProjects/7.PNG'
// Fourth project all images end 
import { Link } from "react-router-dom";


const projects = [
    {
        name: "Quizmania 💡 (Team Project)",
        images: [
            FourOne,
            FourTwo,
            FourThree,
            FourFour,
            FourFive,
            FourSix,
            FourSeven
        ],
        contributors: [
            {
                name: "Mahmuda Akter Mumu",
                github: "https://github.com/mumuuh6"
            },
            {
                name: "Ifratul Jannat Ritu",
                github: "https://github.com/ifratul36",
            }
        ],
        technologies: ["Next.js", "Gemini AI", "Node.js", "Loading Skeleton", "MongoDB", "Express.js", "Tailwind CSS", "ShadCN UI", "React Toastify", , "Next Auth", "JWT", "Animate.css"],
        description: "QUIZMANIA is an educational quiz application that dynamically generates quizzes using AI, adapts difficulty based on user performance, and provides real-time feedback and analytics. The frontend is built with modern web technologies to ensure responsiveness, usability, and seamless interaction.",
        liveLink: "https://quizzmaniaa.vercel.app",
        githubLink: "https://github.com/Jaber-Riyan/Quizmania_Client",
        challenges: "Implementing real-time stock updates and optimizing database queries.",
        futurePlans: "Add AI-based product recommendations and a mobile app version.",
        color: "white"
    },
    {
        name: "Traventure 🌍",
        images: [
            OneOne,
            OneTwo,
            OneThree,
            OneFour,
            OneFive,
            OneSix
        ],
        technologies: ["React", "Node.js", "MongoDB", "Express.js", "Tailwind CSS", "DaisyUI", "React Toastify", "React Captcha", "Firebase", "JWT", "Stripe Payment Gateway", "Animate.css"],
        description: "Traventure is an advanced and interactive Tourism Management System designed to help travelers explore Bangladesh effortlessly. It provides rich insights into destinations, cultural experiences, tour packages, and local guides. Users can manage their bookings, share their travel stories, and engage with the travel community seamlessly.",
        liveLink: "https://traventuree.netlify.app/",
        githubLink: "https://github.com/Jaber-riyan/Traventure_Client",
        challenges: "Implementing real-time stock updates and optimizing database queries.",
        futurePlans: "Add AI-based product recommendations and a mobile app version.",
        color: "white"
    },
    {
        name: "VisaSphere 🌐",
        images: [
            TwoOne,
            TwoTwo,
            TwoThree,
            TwoFour,
            TwoFive,
            TwoSix,
            TwoSeven
        ],
        technologies: ["React", "Node.js", "MongoDB", "Express.js", "Tailwind CSS", "DaisyUI", "React Toastify", "Firebase", "Animate.css"],
        description: "VisaSphere is a user-friendly Visa Navigator Portal designed to simplify the process of checking visa requirements, applying for visas online, and tracking applications. The platform provides a dynamic user interface, robust functionality, and seamless user experience for both casual travelers and frequent visa applicants.",
        liveLink: "https://visasphere.netlify.app/",
        githubLink: "https://github.com/Jaber-riyan/Visa_Sphere_Client",
        challenges: "Implementing real-time stock updates and optimizing database queries.",
        futurePlans: "Add AI-based product recommendations and a mobile app version.",
        color: "#2ecc71"
    },
    {
        name: "Wandau 🏺",
        images: [
            ThreeOne,
            ThreeTwo,
            ThreeThree,
            ThreeFour,
            ThreeFive,
            ThreeSix,
            ThreeSeven
        ],
        technologies: ["React", "Node.js", "MongoDB", "Express.js", "Tailwind CSS", "DaisyUI", "React Toastify", "Firebase", "Animate.css", "JWT"],
        description: "Wandau is a responsive and user-friendly web application designed to manage and explore details about remarkable historical artifacts like the Rosetta Stone and Antikythera Mechanism. Users can browse detailed information, add new artifacts, and interact through likes. The platform offers private routes for managing personal entries and favorite artifacts, ensuring a rich and personalized user experience.",
        liveLink: "https://wandau.netlify.app/",
        githubLink: "https://github.com/Jaber-riyan/Wandau_Client",
        challenges: "Implementing real-time stock updates and optimizing database queries.",
        futurePlans: "Add AI-based product recommendations and a mobile app version.",
        color: "#3498db"
    },
];

const Projects = () => {
    const [selectedProject, setSelectedProject] = useState(null);

    return (
        <div className="">
            <div className='mb-16'>
                <h2 className='md:text-4xl text-2xl text-center font-bold heading text-white md:w-2/4 w-[80%] border-2 mx-auto py-4 border-[#0ef] border-dashed uppercase shadow-[0_0_15px_#0ef] rounded-2xl'>
                    Projects Showcase
                </h2>
            </div>

            <div className="flex flex-wrap justify-left gap-8">
                {projects.map((project, index) => (
                    <div key={index} className={`bg-white/10 p-5 rounded-xl w-80 transition hover:bg-[#0ef] hover:shadow-[0_0_30px_#0ef] shadow-[0_0_20px_#0ef] text-center`}>
                        <h3 className="text-xl font-semibold text-left mb-4 text-white para-strong-word">{project.name}</h3>
                        <Carousel className="rounded-lg" autoPlay={true} interval={2000} infiniteLoop={true}>
                            {
                                project?.images?.map((image, idx) => <div key={idx}>
                                    <img src={image} alt={`Image ${idx + 1}`} />
                                </div>)
                            }
                        </Carousel>
                        {
                            project?.contributors && project.contributors.length > 0 && (
                                <div className="mt-10 text-center">
                                    <h1 className="text-xl md:text-2xl font-bold text-[#0ef] mb-4 uppercase tracking-wide drop-shadow-[0_0_10px_#0ef]">
                                        Contributors
                                    </h1>

                                    <div className="flex flex-wrap justify-center gap-4">
                                        {project.contributors.map((contributor, idx) => (
                                            <a
                                                key={idx}
                                                href={contributor.github}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="px-5 py-2 text-white font-medium bg-[#0a0a0a] border border-[#0ef]/50 rounded-lg 
                       hover:bg-[#0ef] hover:text-black hover:shadow-[0_0_15px_#0ef] transition duration-300"
                                            >
                                                {contributor.name}
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            )
                        }


                        <button
                            className="mt-3 px-4 py-2 bg-[#23bec9] text-white mr-3 rounded-lg font-bold hover:bg-[#08c]"
                            onClick={() => setSelectedProject(project)}
                        >
                            View More
                        </button>
                        <button onClick={() => window.open(project.liveLink, "_blank")} className="bg-blue-800 hover:bg-blue-600 px-4 py-2 rounded-lg text-white font-bold">
                            Live Project
                        </button>
                    </div>
                ))}
            </div>

            {selectedProject && (
                <div className="fixed inset-0 flex justify-center items-center bg-black/70 p-4 z-50">
                    <div className="bg-[#1A1A4D] p-6 rounded-2xl min-w-[80%] max-h-[90vh] overflow-y-auto text-white shadow-xl">
                        <h3 className="text-2xl font-bold mt-8 mb-4">{selectedProject.name}</h3>
                        <Carousel className="rounded-lg" autoPlay={true} interval={2000} infiniteLoop={true}>
                            {
                                selectedProject?.images?.map((image, idx) => <div key={idx}>
                                    <img src={image} alt="Image 1" />
                                </div>)
                            }
                        </Carousel>
                        <p className="text-lg"><span className="para-strong-word font-semibold text-xl">📖 Description</span><br /><span className="text-gray-400">{selectedProject.description}</span></p>
                        <div className="mt-4 mb-5">
                            <h4 className="para-strong-word font-semibold text-xl mb-3">🛠 Tech Stack:</h4>
                            <div className="flex flex-wrap gap-3">
                                {
                                    selectedProject.technologies.map((technology, index) => <button className="px-5 font-semibold py-1 bg-blue-600 block rounded-3xl" key={index}>#{technology}</button>)
                                }
                            </div>
                        </div>
                        <div className="mt-4 mb-5">
                            <h4 className="para-strong-word font-semibold text-xl mb-3">⚡ Challenges Faced:</h4>
                            <p className="text-gray-400">{selectedProject.challenges}</p>
                        </div>
                        <div className="mt-4">
                            <h4 className="para-strong-word font-semibold text-xl mb-3">🚀 Future Plans:</h4>
                            <p className="text-gray-400">{selectedProject.futurePlans}</p>
                        </div>
                        <div className="mt-4 flex justify-between">
                            <button onClick={() => window.open(selectedProject.liveLink, "_blank")} target="_blank" rel="noopener noreferrer" className="bg-[#0ef] px-4 py-2 rounded-lg text-black font-bold">
                                Live Project
                            </button>
                            <button onClick={() => window.open(selectedProject.githubLink, "_blank")} target="_blank" rel="noopener noreferrer" className="bg-[#fff] px-4 py-2 rounded-lg text-black font-bold">
                                GitHub Repo
                            </button>
                        </div>
                        <div className="text-center">
                            <button
                                className="mt-4 px-10 py-2 bg-red-500 text-white rounded-lg font-bold"
                                onClick={() => setSelectedProject(null)}
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            )}

        </div>
    );
};

export default Projects;
