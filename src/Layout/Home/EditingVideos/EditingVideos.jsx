import React from "react";
import { motion } from "framer-motion";

export default function EditingVideos() {
  const videos = [
    {
      id: 1,
      title: "Podcast Demo",
      link: "https://drive.google.com/file/d/1AL8c3IaWd9g_g_m2KkZTn2SOcT-AZCpn/preview",
    },
    {
      id: 2,
      title: "Travel Cinematic Edit",
      link: "https://drive.google.com/file/d/1HvbBYcHvw3R0NjfErgzQAjzHNrreUfFe/preview",
    },
    {
      id: 3,
      title: "Short Documentary Cut",
      link: "https://drive.google.com/file/d/YOUR_VIDEO_ID_3/preview",
    },
  ];

  return (
    <div className="py-16">
      {/* Section Title */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true }}
        className="mb-12"
      >
        <h2 className="md:text-4xl text-2xl text-center font-bold heading text-white md:w-2/4 w-[80%] border-2 mx-auto py-4 border-[#0ef] border-dashed uppercase shadow-[0_0_15px_#0ef] rounded-2xl">
          Editing Highlights
        </h2>
      </motion.div>

      {/* Video Grid */}
      <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 px-4 md:px-12">
        {videos.map((video, index) => (
          <motion.div
            key={video.id}
            initial={{ opacity: 0, scale: 0.9, y: 40 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
              delay: index * 0.2,
            }}
            viewport={{ once: true }}
            className="bg-[#0a0a0a] border border-[#0ef]/40 rounded-xl shadow-[0_0_10px_#0ef50] overflow-hidden hover:scale-[1.03] hover:shadow-[0_0_20px_#0ef] duration-300"
          >
            <div className="relative w-full h-64">
              <iframe
                src={video.link}
                title={video.title}
                allow="autoplay; fullscreen"
                allowFullScreen
                className="w-full h-full rounded-lg"
              ></iframe>
            </div>
            <h3 className="text-center text-white text-lg font-semibold py-3 tracking-wide">
              {video.title}
            </h3>
          </motion.div>
        ))}
      </div>

      {/* Sub Text */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      className="text-center text-gray-400 mt-10 text-sm md:text-base"
      >
      🎞️ A collection of my creative edits — turning raw clips into cinematic stories.
    </motion.p>
    </div >
  );
}
