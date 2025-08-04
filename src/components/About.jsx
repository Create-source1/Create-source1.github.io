// src/components/sections/About.jsx
import React from "react";
import { FaGithub, FaEnvelope, FaPhone, FaLinkedin } from "react-icons/fa"; // npm install react-icons
import { openAndDownloadResume } from "../utils/downloadResume";
import myPhoto from "/Pooja_Jaiswal.JPEG"; // put your photo in public or src/assets

const About = () => {
  return (
    <section
      id="about"
      className="flex flex-col md:flex-row items-center justify-center text-center md:text-left min-h-screen px-6 py-20 bg-gradient-to-br from-indigo-50 to-cyan-50"
    >
      {/* Left Side (Text) */}
      <div className="flex-1 space-y-4">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
          Hello, I am{" "}
          <span className="text-indigo-600 font-extrabold">{`<Pooja Jaiswal />`}</span>
        </h1>
        <h2 className="text-xl md:text-2xl font-semibold text-gray-700">
          A Passionate Full-Stack Web Developer
        </h2>
        <p className="text-gray-600 max-w-xl mx-auto md:mx-0">
          I build scalable, responsive, and user-friendly web applications using
          modern technologies. I love solving problems and turning ideas into
          beautiful, functional products.
        </p>

        <div className="flex justify-center md:justify-start space-x-4">
          <button
            onClick={openAndDownloadResume}
            className="border border-indigo-600 text-indigo-600 rounded px-4 py-2 cursor-pointer hover:bg-indigo-600 hover:text-white transition"
          >
            Download Resume
          </button>
        </div>

        {/* Socials */}
        <div className="flex justify-center md:justify-start space-x-6 mt-4 text-gray-700 text-2xl">
          <a href="https://github.com/Create-source1" target="_blank" rel="noreferrer">
            <FaGithub />
          </a>
          <a href="mailto:jaiswalpj13@gmail.com">
            <FaEnvelope />
          </a>
          <a href="tel:+919142706913">
            <FaPhone />
          </a>
          <a href="https://linkedin.com/in/pooja-jaiswal13" target="_blank" rel="noreferrer">
            <FaLinkedin />
          </a>
        </div>
      </div>

      {/* Right Side (Photo) */}
      <div className="flex-1 mt-10 md:mt-0 flex justify-center">
        <img
          src={myPhoto}
          alt="Pooja Jaiswal"
          className="w-60 h-80 rounded-full object-cover shadow-lg"
        />
      </div>
    </section>
  );
};

export default About;
