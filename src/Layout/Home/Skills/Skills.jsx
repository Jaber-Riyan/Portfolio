import { FaCss3Alt, FaGitAlt, FaGithub, FaHtml5, FaJs, FaNodeJs, FaReact } from 'react-icons/fa';
import { FaC, FaS } from 'react-icons/fa6';
import { PiTreeStructureFill } from 'react-icons/pi';
import {
    SiExpress, SiMysql, SiPython, SiThealgorithms, SiTailwindcss,
    SiBootstrap, SiMongodb, SiCplusplus, SiDaisyui,
    SiNextdotjs,
    SiShadcnui,
    SiRedux,
    SiMongoose,
    SiPostgresql,
    SiStripe,
    SiFirebase,
    SiPassport,
    SiAxios,
    SiOrigin,
    SiHeadlessui,
    SiTypescript,
    SiRedis,
    SiMinutemailer,
    SiCloudinary,
} from 'react-icons/si';
import { motion } from "framer-motion"

const Skills = () => {
    const programmingLanguages = [
        { name: "C", icon: <FaC size={40} /> },
        { name: "C++", icon: <SiCplusplus size={40} /> },
        { name: "Python", icon: <SiPython size={40} /> },
        { name: "JavaScript", icon: <FaJs size={40} /> },
        { name: "TypeScript", icon: <SiTypescript size={40} /> },
    ];

    const frontendSkills = [
        { name: "HTML5", icon: <FaHtml5 size={40} /> },
        { name: "CSS3", icon: <FaCss3Alt size={40} /> },
        { name: "React JS", icon: <FaReact size={40} /> },
        { name: "Redux RTK Query", icon: <SiRedux size={40} /> },
        { name: "Next JS", icon: <SiNextdotjs size={40} /> },
        { name: "Firebase", icon: <SiFirebase size={40} /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss size={40} /> },
        { name: "Bootstrap", icon: <SiBootstrap size={40} /> },
        { name: "Daisy UI", icon: <SiDaisyui size={40} /> },
        { name: "Headless UI", icon: <SiHeadlessui size={40} /> },
        { name: "Origin UI", icon: <SiOrigin size={40} /> },
        { name: "ShadCN UI", icon: <SiShadcnui size={40} /> },
    ];

    const backendSkills = [
        { name: "Node JS", icon: <FaNodeJs size={40} /> },
        { name: "Express JS", icon: <SiExpress size={40} /> },
        { name: "Mongoose", icon: <SiMongoose size={40} /> },
        { name: "Passport JS", icon: <SiPassport size={40} /> },
    ];

    const databases = [
        { name: "MySQL", icon: <SiMysql size={40} /> },
        { name: "MongoDB", icon: <SiMongodb size={40} /> },
        { name: "PostgreSQL", icon: <SiPostgresql size={40} /> },
        { name: "Redis", icon: <SiRedis size={40} /> },
    ];

    const paymentGateway = [
        { name: "Stripe", icon: <SiStripe size={40} /> },
        { name: "SSL Commerz", icon: <FaS size={40} /> },
    ];

    const dsaSkills = [
        {
            name: "Data Structures", icon: <PiTreeStructureFill size={40} />, topics: [
                "Singly Linked List",
                "Double Linked List",
                "Stack",
                "Queue",
                "Priority Queue",
                "Binary Tree",
                "BST & Heep",
                "STL"
            ]
        },
        {
            name: "Algorithms", icon: <SiThealgorithms size={40} />, topics: [
                "Basics of Graph",
                "Breadth First Search (BFS)",
                "Depth First Search (DFS) and 2D Grid",
                "Dijkstra Algorithm",
                "Bellman Ford Algorithm",
                "Floyd Warshall Algorithm",
                "Dynamic Programming",
                "0-1 Knapsack and Variations",
                "Unbounded Knapsack and Variations",
                "LCS DP and variations",
                "Minimum Spanning Tree"
            ]
        },
    ];

    const tools = [
        { name: "Git", icon: <FaGitAlt size={40} /> },
        { name: "GitHub", icon: <FaGithub size={40} /> },
        { name: "Cloudinary", icon: <SiCloudinary size={40} /> },
        { name: "Redux Dev Tool", icon: <SiRedux size={40} /> },
        { name: "React Dev Tool", icon: <FaReact size={40} /> },
        { name: "Axios", icon: <SiAxios size={40} /> },
        { name: "Node Mailer", icon: <SiMinutemailer size={40} /> },
    ];

    return (
        <div>
            <motion.div
                initial={{ opacity: 0, y: -30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                viewport={{ once: true }}
                className="mb-8"
            >
                <h2 className='md:text-4xl text-2xl text-center font-bold heading text-white border-2 md:w-1/3 w-[55%] mx-auto py-4 border-[#0ef] border-dashed uppercase shadow-[0_0_15px_#0ef] rounded-2xl'>
                    Skills & Tools
                </h2>
            </motion.div>

            <div className="bg-[linear-gradient(130deg,#0B0B4A_20%,#4B1E56_90%)] py-10 px-5 text-white rounded-2xl">

                {/* Programming Languages */}
                <h2 className="text-3xl font-bold text-center mb-9 para-strong-word-language">Programming Languages</h2>
                <motion.div
                    initial={{ opacity: 0, y: -30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="flex flex-wrap justify-center gap-6 mb-9"
                >
                    {programmingLanguages.map((skill, index) => (
                        <div key={index} className="bg-white/10 p-5 rounded-xl w-40 text-center shadow-[0_0_15px_#0ef] hover:shadow-[0_0_25px_#0ef] hover:bg-cyan-600 transition-all duration-500 flex flex-col">
                            <div className="text-4xl mx-auto mb-2">{skill.icon}</div>
                            <span className="text-lg font-semibold">{skill.name}</span>
                        </div>
                    ))}
                </motion.div>

                {/* Frontend Skills */}
                <h2 className="text-3xl font-bold text-center mb-9 para-strong-word">Frontend Development</h2>
                <motion.div
                    initial={{ opacity: 0, y: -30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="flex flex-wrap justify-center gap-6 mb-9"
                >
                    {frontendSkills.map((skill, index) => (
                        <div key={index} className="bg-white/10 p-5 rounded-xl w-40 text-center shadow-[0_0_15px_#6a0dad] hover:shadow-[0_0_25px_#6a0dad] hover:bg-[#8607e0] transition-all duration-500 flex flex-col">
                            <div className="text-4xl mx-auto mb-2">{skill.icon}</div>
                            <span className="text-lg font-semibold">{skill.name}</span>
                        </div>
                    ))}
                </motion.div>

                {/* Backend Skills */}
                <h2 className="text-3xl font-bold text-center mb-9 para-strong-word-backend">Backend Development</h2>
                <motion.div
                    initial={{ opacity: 0, y: -30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="flex flex-wrap justify-center gap-6 mb-9"
                >
                    {backendSkills.map((skill, index) => (
                        <div key={index} className="bg-white/10 p-5 rounded-xl w-40 text-center shadow-[0_0_15px_#8e44ad] hover:shadow-[0_0_25px_#8e44ad] hover:bg-[#8e44ad] transition-all duration-500 flex flex-col">
                            <div className="text-4xl mx-auto mb-2">{skill.icon}</div>
                            <span className="text-lg font-semibold">{skill.name}</span>
                        </div>
                    ))}
                </motion.div>

                {/* Databases */}
                <h2 className="text-3xl font-bold text-center mb-9 para-strong-word-db">Databases</h2>
                <motion.div
                    initial={{ opacity: 0, y: -30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="flex flex-wrap justify-center gap-6 mb-9"
                >
                    {databases.map((skill, index) => (
                        <div key={index} className="bg-white/10 p-5 rounded-xl w-40 text-center shadow-[0_0_15px_#2ecc71] hover:shadow-[0_0_25px_#2ecc71] hover:bg-[#2ecc71] transition-all duration-500 flex flex-col">
                            <div className="text-4xl mx-auto mb-2">{skill.icon}</div>
                            <span className="text-lg font-semibold">{skill.name}</span>
                        </div>
                    ))}
                </motion.div>

                {/* Payment Gateway */}
                <h2 className="text-3xl font-bold text-center mb-9 para-strong-word-db">Payment Gateways</h2>
                <motion.div
                    initial={{ opacity: 0, y: -30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="flex flex-wrap justify-center gap-6 mb-9"
                >

                    {paymentGateway.map((skill, index) => (
                        <div key={index} className="bg-white/10 p-5 rounded-xl w-40 text-center shadow-[0_0_15px_#0ef] hover:shadow-[0_0_25px_#0ef] hover:bg-cyan-600 transition-all duration-500 flex flex-col">
                            <div className="text-4xl mx-auto mb-2">{skill.icon}</div>
                            <span className="text-lg font-semibold">{skill.name}</span>
                        </div>
                    ))}
                </motion.div>

                {/* Data Structures & Algorithms */}
                <h2 className="text-3xl font-bold text-center mb-9 para-strong-word-dsa">Data Structures & Algorithms (Hover It)</h2>
                <motion.div
                    initial={{ opacity: 0, y: -30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="flex flex-wrap justify-center gap-6 mb-9"
                >
                    {dsaSkills.map((skill, index) => (
                        <div key={index} className="bg-white/10 p-5 rounded-xl w-40 text-center shadow-[0_0_10px_#3498db] hover:shadow-[0_0_25px_#3498db] hover:bg-[#3498db] transition-all duration-500 flex flex-col">
                            <div className='relative group inline-block'>
                                <div className="text-4xl mx-auto mb-2 flex justify-center">
                                    <span>{skill.icon}</span>
                                </div>
                                {/* Tooltip  */}
                                <div className="absolute left-1/2 w-48 text-left -translate-x-1/2 bottom-full mb-2 px-3 py-1 rounded-lg bg-purple-800 text-white text-xs opacity-0 group-hover:opacity-100 transition duration-300 font-bold">
                                    {
                                        skill?.topics?.map((topic, index) => <h3 className='mb-1' key={index}>{index + 1}. {topic}</h3>)
                                    }
                                </div>
                            </div>

                            <span className="text-base font-semibold">{skill.name}</span>
                        </div>
                    ))}
                </motion.div>

                {/* Tools */}
                <h2 className="text-3xl font-bold text-center mb-9 para-strong-word-tools">Tools</h2>
                <motion.div
                    initial={{ opacity: 0, y: -30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="flex flex-wrap justify-center gap-6 mb-9"
                >
                    {tools.map((tool, index) => (
                        <div key={index} className="bg-white/10 p-5 rounded-xl w-40 text-center shadow-[0_0_10px_#e74c3c] hover:shadow-[0_0_25px_#e74c3c] hover:bg-[#e74c3c] transition-all duration-500 flex flex-col">
                            <div className="text-4xl mx-auto mb-2">{tool.icon}</div>
                            <span className="text-lg font-semibold">{tool.name}</span>
                        </div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
};

export default Skills;
