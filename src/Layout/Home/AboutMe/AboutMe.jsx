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
          <h5 className='text-2xl text-white font-bold mb-3 para-heading'>
            👋 Hi, I’m Jaber Ahmed Riyan!
          </h5>

          <p className='text-gray-300 text-xl mb-5'>
            I’m a MERN stack developer passionate about crafting full-stack solutions that solve real-world problems.
            From sleek React interfaces to robust Node.js APIs, I bridge creativity and functionality.
            I thrive in the JavaScript ecosystem, building RESTful APIs with Express and Node, designing NoSQL databases with MongoDB,
            and creating dynamic UIs using React and Tailwind CSS.
          </p>

          <h5 className='text-2xl text-white font-bold mb-3 para-heading'>
            ✨ My Journey into Web Development
          </h5>

          <p className='text-gray-300 text-xl'>
            My journey into programming started with a simple question — <span className='italic'>“Why am I learning this? Will it truly impact my life?”</span>  
            That curiosity turned into passion.  
            <br /><br />

            <span className='para-strong-line italic'>
              Ever wondered how apps come to life? I did — and that curiosity changed everything.
            </span>  
            <br /><br />

            I began by exploring how software applications are built, and soon realized that every great developer starts with strong fundamentals.
            To build mine, I enrolled in <span className='para-strong-word italic'>Phitron Batch-3</span> — where I learned core programming concepts through  
            <span className='para-strong-word italic'> C, C++, Data Structures & Algorithms (DSA), MySQL, and Python.</span>  
            <br /><br />

            Later, I transitioned into software development using <span className='para-strong-word italic'>Python and Django</span>,
            but I felt there was more to explore in modern web development.  
            That’s when I joined <span className='para-strong-word italic'>Programming Hero Level-1, Batch-10</span>,
            where I mastered <span className='para-strong-word italic'>HTML, CSS, JavaScript, React, Node.js, Express.js, MongoDB</span>,
            along with version control using <span className='para-strong-word italic'>Git & GitHub.</span>  
            <br /><br />

            After completing Level-1, I successfully moved into the <span className='para-strong-word italic'>Endgame Phase</span>,
            where I worked on a <span className='para-strong-word italic'>Team Project</span> as the <span className='para-strong-word italic'>Backend Developer & Team Leader.</span>  
            Leading a team and building scalable backend systems taught me real-world collaboration, API architecture, and project management skills.
            <br /><br />

            Currently, I’ve joined <span className='para-strong-word italic'>Programming Hero Level-2, Batch-5</span>,
            where I’m diving deeper into advanced technologies like  
            <span className='para-strong-word italic'>TypeScript, Mongoose, PostgreSQL, Redux, and RTK Query.</span>  
            <br /><br />

            <h5 className='text-2xl text-white font-bold mb-3 para-heading'>💡 The Type of Work I Enjoy</h5>
            <p className='text-gray-300 text-xl mb-5'>
              I love working on <span className='para-strong-line italic'>challenging projects</span> that push my limits and sharpen my skills.
              Whether it’s solving complex backend logic, optimizing performance, or designing intuitive UIs,
              I enjoy transforming problems into functional, elegant solutions.
            </p>

            <h5 className='text-2xl text-white font-bold mb-3 para-heading'>🎬 My Hobbies & Interests</h5>
            <p className='text-gray-300 text-xl'>
              Outside of coding, I enjoy watching movies, exploring new technologies, and improving my English communication skills.
              I often watch tech podcasts and tutorials to stay up-to-date.
              I also love traveling and discovering hidden, lesser-known places that inspire creativity and fresh perspectives.
            </p>
            <br />

            <span className='para-strong-line italic'>
              ✨ To me, coding isn’t just syntax — it’s solving real problems that make people’s lives easier.
            </span>
            <br /><br />

            Now, as a Junior Web Developer, I’m focused on growing my expertise, learning industry best practices,
            and building meaningful projects that create impact.
            I believe technology has the power to change lives — and I’m proud to be part of that mission. 🚀
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
