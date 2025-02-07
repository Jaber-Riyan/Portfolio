import React from 'react';

const AboutMe = () => {
    return (
        <div>
            <div className='mb-10'>
                <h2 className='md:text-4xl text-2xl text-center font-bold heading text-white border-2 md:w-1/3 w-[55%] mx-auto py-4 border-[#0ef] border-dashed uppercase shadow-[0_0_15px_#fff] rounded-2xl'>
                    About Me
                </h2>
            </div>
            <div>
                <div className='bg-[linear-gradient(130deg,#1A1A4D_20%,#562D5C_90%)] bg-no-repeat shadow-2xl p-6 rounded-2xl'>
                    <h5 className='text-2xl text-white font-bold mb-3 para-heading'>👋 Hi, I’m Jaber Ahmed Riyan!</h5>
                    <p className='text-gray-300 text-xl mb-5'>
                        I’m a MERN stack developer obsessed with crafting full-stack solutions that solve real-world problems. From sleek React interfaces to robust Node.js APIs, I bridge creativity and functionality. I thrive in the JavaScript ecosystem, building RESTful APIs with Express and Node, designing NoSQL databases in MongoDB, and crafting dynamic UIs with React and Tailwind CSS.
                    </p>
                    <h5 className='text-2xl text-white font-bold mb-3 para-heading'>✨ My Journey into Web Development</h5>
                    <p className='text-gray-300 text-xl'>
                        My journey into programming started with a simple question: Why am I learning this? Will it impact my life? <br /> <br />

                        <span className='para-strong-line italic'>Ever wondered how apps come to life? I did—and it changed everything.</span> <br /><br />

                        As I explored, I discovered the world of software applications—built by developers who all started as programmers. I realized that every skilled developer first learns programming fundamentals before diving into development. With this in mind, I enrolled in <span className='para-strong-word italic'>Phitron Batch-3.</span> to build a strong foundation in programming. <br /><br />

                        During this time, I worked hard, solving problems and learning key technologies like <span className='para-strong-word italic'>C, C++, Data Structures & Algorithms (DSA), MySQL, and Python</span>. After a year of dedication, I transitioned into software development with Python and Django. However, I felt something was missing in my learning process. <br /><br />

                        To fill that gap, I joined <span className='para-strong-word italic'>Programming Hero Batch-10 Level-1</span>, where I learned <span className='para-strong-word italic'>HTML, CSS, JavaScript, React, Node.js, Express.js, MongoDB</span>, and version control tools like <span className='para-strong-word italic'>Git & GitHub</span>. I also explored essential web development tools and best practices. <br /><br />

                        <h5 className='text-2xl text-white font-bold mb-3 para-heading'>💡 The Type of Work I Enjoy</h5>
                        <p className='text-gray-300 text-xl mb-5'>
                            I love working on **challenging projects** that push my limits and help me sharpen my skills. Whether it's solving complex backend logic, optimizing performance, or creating innovative UI designs, I thrive on overcoming obstacles and continuously learning.
                        </p>

                        <h5 className='text-2xl text-white font-bold mb-3 para-heading'>🎬 My Hobbies & Interests</h5>
                        <p className='text-gray-300 text-xl'>
                            Outside of programming, I enjoy watching movies. Exploring different genres and storytelling styles helps me relax and refresh my mind, giving me new perspectives and creativity for my work.
                        </p><br />

                        <span className='para-strong-line italic'>✨ To me, coding isn’t just syntax—it’s solving puzzles that make people’s lives easier.</span><br /><br />

                        Now, as a Junior Web Developer, I am fully committed to deepening my knowledge and continuously improving my skills. I believe that technology has the power to change lives, and I am excited to be part of this journey. Let’s connect and build something meaningful! 🚀
                    </p>
                </div>
                <div></div>
            </div>
        </div>
    );
};

export default AboutMe;