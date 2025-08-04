// src/components/sections/GitHub.jsx
import React from "react";
import GitHubCalendar from "react-github-calendar";
import { motion } from "framer-motion";

const GitHub = () => {
  const username = "create-source1";

  return (
    <section
      id="github"
      className="min-h-screen px-6 py-20 bg-gradient-to-br from-indigo-50 to-cyan-50 scroll-mt-20"
    >
      <motion.h2
        className="text-3xl md:text-4xl font-bold text-center text-indigo-600 mb-14"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        GitHub Statistics & Calendar
      </motion.h2>

      <div className="max-w-6xl mx-auto flex flex-col items-center gap-12">
        {/* Contribution Calendar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
          className="w-full overflow-x-auto scrollbar-hide"
        >
            <div className="w-max mx-auto px-2 ">
              <GitHubCalendar
                username={username}
                blockSize={15}
                blockMargin={5}
                color="#4F46E5"
                fontSize={14}
              />
            </div>
        </motion.div>

        {/* Stats & Streaks */}
        <motion.div
          className="flex flex-col md:flex-row flex-wrap items-center justify-center gap-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <img
            loading="lazy"
            src={`https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true&theme=react&hide_border=true`}
            alt="GitHub Stats"
            className="w-full md:w-[400px]"
          />
          <img
            src={`https://github-readme-streak-stats.herokuapp.com?user=${username}&theme=react&hide_border=true`}
            alt="GitHub Streak"
            className="w-full md:w-[400px]"
          />
        </motion.div>

        {/* Most Used Languages */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <img
            src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${username}&layout=compact&theme=react&hide_border=true`}
            alt="Top Languages Used"
            className="w-full md:w-[400px]"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default GitHub;
