import React from 'react';
import { FaCss3Alt, FaDatabase, FaGitAlt, FaGithub, FaHtml5, FaJs, FaNodeJs, FaReact } from 'react-icons/fa';
import { FaC } from 'react-icons/fa6';
import { PiTreeStructureFill } from 'react-icons/pi';
import {
    SiDjango, SiExpress, SiMysql, SiPython, SiThealgorithms, SiTailwindcss,
    SiBootstrap, SiMongodb, SiCplusplus, SiDaisyui
} from 'react-icons/si';

const Skills = () => {
    const programmingLanguages = [
        { name: "C", icon: <FaC size={40} /> },
        { name: "C++", icon: <SiCplusplus size={40} /> },
        { name: "Python", icon: <SiPython size={40} /> },
        { name: "JavaScript", icon: <FaJs size={40} /> },
    ];

    const frontendSkills = [
        { name: "HTML", icon: <FaHtml5 size={40} /> },
        { name: "CSS", icon: <FaCss3Alt size={40} /> },
        { name: "React.js", icon: <FaReact size={40} /> },
    ];

    const backendSkills = [
        { name: "Node.js", icon: <FaNodeJs size={40} /> },
        { name: "Express.js", icon: <SiExpress size={40} /> },
        { name: "Django", icon: <SiDjango size={40} /> },
    ];

    const databases = [
        { name: "MySQL", icon: <SiMysql size={40} /> },
        { name: "MongoDB", icon: <SiMongodb size={40} /> },
    ];

    const dsaSkills = [
        { name: "Data Structures", icon: <PiTreeStructureFill size={40} /> },
        { name: "Algorithms", icon: <SiThealgorithms size={40} /> },
    ];

    const cssFrameworks = [
        { name: "Tailwind CSS", icon: <SiTailwindcss size={40} /> },
        { name: "DaisyUI", icon: <SiDaisyui size={40} /> },
        { name: "Bootstrap", icon: <SiBootstrap size={40} /> },
    ];

    const tools = [
        { name: "Git", icon: <FaGitAlt size={40} /> },
        { name: "GitHub", icon: <FaGithub size={40} /> },
    ];

    return (
        <div>
            <div className='mb-8'>
                <h2 className='md:text-4xl text-2xl text-center font-bold heading text-white border-2 md:w-1/3 w-[55%] mx-auto py-4 border-[#0ef] border-dashed uppercase shadow-[0_0_15px_#0ef] rounded-2xl'>
                    Skills & Tools
                </h2>
            </div>

            <div className="bg-[linear-gradient(130deg,#0B0B4A_20%,#4B1E56_90%)] py-10 px-5 text-white rounded-2xl">

                {/* Programming Languages */}
                <h2 className="text-3xl font-bold text-center mb-9 para-strong-word-language">Programming Languages</h2>
                <div className="flex flex-wrap justify-center gap-6 mb-9">
                    {programmingLanguages.map((skill, index) => (
                        <div key={index} className="bg-white/10 p-5 rounded-xl w-40 text-center shadow-[0_0_15px_#0ef] hover:shadow-[0_0_25px_#0ef] hover:bg-cyan-600 transition-all duration-500 flex flex-col">
                            <div className="text-4xl mx-auto mb-2">{skill.icon}</div>
                            <span className="text-lg font-semibold">{skill.name}</span>
                        </div>
                    ))}
                </div>

                {/* Frontend Skills */}
                <h2 className="text-3xl font-bold text-center mb-9 para-strong-word">Frontend Development</h2>
                <div className="flex flex-wrap justify-center gap-6 mb-9">
                    {frontendSkills.map((skill, index) => (
                        <div key={index} className="bg-white/10 p-5 rounded-xl w-40 text-center shadow-[0_0_15px_#6a0dad] hover:shadow-[0_0_25px_#6a0dad] hover:bg-[#8607e0] transition-all duration-500 flex flex-col">
                            <div className="text-4xl mx-auto mb-2">{skill.icon}</div>
                            <span className="text-lg font-semibold">{skill.name}</span>
                        </div>
                    ))}
                </div>

                {/* Backend Skills */}
                <h2 className="text-3xl font-bold text-center mb-9 para-strong-word-backend">Backend Development</h2>
                <div className="flex flex-wrap justify-center gap-6 mb-9">
                    {backendSkills.map((skill, index) => (
                        <div key={index} className="bg-white/10 p-5 rounded-xl w-40 text-center shadow-[0_0_15px_#8e44ad] hover:shadow-[0_0_25px_#8e44ad] hover:bg-[#8e44ad] transition-all duration-500 flex flex-col">
                            <div className="text-4xl mx-auto mb-2">{skill.icon}</div>
                            <span className="text-lg font-semibold">{skill.name}</span>
                        </div>
                    ))}
                </div>

                {/* Databases */}
                <h2 className="text-3xl font-bold text-center mb-9 para-strong-word-db">Databases</h2>
                <div className="flex flex-wrap justify-center gap-6 mb-9">
                    {databases.map((skill, index) => (
                        <div key={index} className="bg-white/10 p-5 rounded-xl w-40 text-center shadow-[0_0_15px_#2ecc71] hover:shadow-[0_0_25px_#2ecc71] hover:bg-[#2ecc71] transition-all duration-500 flex flex-col">
                            <div className="text-4xl mx-auto mb-2">{skill.icon}</div>
                            <span className="text-lg font-semibold">{skill.name}</span>
                        </div>
                    ))}
                </div>

                {/* Data Structures & Algorithms */}
                <h2 className="text-3xl font-bold text-center mb-9 para-strong-word-dsa">Data Structures & Algorithms</h2>
                <div className="flex flex-wrap justify-center gap-6 mb-9">
                    {dsaSkills.map((skill, index) => (
                        <div key={index} className="bg-white/10 p-5 rounded-xl w-40 text-center shadow-[0_0_10px_#3498db] hover:shadow-[0_0_25px_#3498db] hover:bg-[#3498db] transition-all duration-500 flex flex-col">
                            <div className="text-4xl mx-auto mb-2">{skill.icon}</div>
                            <span className="text-lg font-semibold">{skill.name}</span>
                        </div>
                    ))}
                </div>

                {/* CSS Frameworks */}
                <h2 className="text-3xl font-bold text-center mb-9 para-strong-word-libraries">CSS Frameworks & Libraries</h2>
                <div className="flex flex-wrap justify-center gap-6 mb-9">
                    {cssFrameworks.map((skill, index) => (
                        <div key={index} className="bg-white/10 p-5 rounded-xl w-40 text-center shadow-[0_0_10px_#f39c12] hover:shadow-[0_0_25px_#f39c12] hover:bg-[#f39c12] transition-all duration-500 flex flex-col">
                            <div className="text-4xl mx-auto mb-2">{skill.icon}</div>
                            <span className="text-lg font-semibold">{skill.name}</span>
                        </div>
                    ))}
                </div>

                {/* Tools */}
                <h2 className="text-3xl font-bold text-center mb-9 para-strong-word-tools">Tools</h2>
                <div className="flex flex-wrap justify-center gap-6">
                    {tools.map((tool, index) => (
                        <div key={index} className="bg-white/10 p-5 rounded-xl w-40 text-center shadow-[0_0_10px_#e74c3c] hover:shadow-[0_0_25px_#e74c3c] hover:bg-[#e74c3c] transition-all duration-500 flex flex-col">
                            <div className="text-4xl mx-auto mb-2">{tool.icon}</div>
                            <span className="text-lg font-semibold">{tool.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Skills;
