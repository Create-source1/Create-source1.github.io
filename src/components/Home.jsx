// // src/components/Home.jsx
// import React from "react";
// import { openAndDownloadResume } from "../utils/downloadResume";
// import { Github, Mail, Phone, Linkedin } from "lucide-react"; // npm install lucide-react

// const Home = () => {
//   return (
//     <section
//       id="about"
//       className="min-h-screen flex flex-col justify-center items-center text-center px-4 py-12 bg-gradient-to-br from-indigo-50 to-cyan-50"
//     // className="flex flex-col md:flex-row items-center justify-center text-center md:text-left min-h-screen px-6 py-20 bg-gradient-to-br from-indigo-50 to-cyan-50"
//     >
//       {/* Name Heading */}
//       <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
//         Hello, I am{" "}
//         <span className="text-indigo-600">Pooja Jaiswal</span>
//       </h1>

//       {/* Professional Title */}
//       <h2 className="text-xl md:text-2xl font-semibold text-gray-600 mb-6">
//         A Passionate Full-Stack Developer
//       </h2>

//       {/* Profile Photo */}
//       <img
//         src="/Untitled design.zip - 2-min.PNG" // Ask me if you want to adjust
//         alt="Pooja Jaiswal"
//         className="w-50 h-50 md:w-50 md:h-60 rounded-full object-cover mb-6 shadow-lg border-2 border-indigo-500"
//       />

//       {/* Short Introduction */}
//       <p className="max-w-2xl text-gray-700 mb-8">
//         I design and develop modern, responsive web applications
//         with a focus on clean code and elegant UI. I am passionate about
//         solving real-world problems and continuously improving my skills.
//       </p>

//       {/* Resume Download Button */}
//       <button
//         onClick={openAndDownloadResume}
//         className="flex items-center gap-2 px-6 py-2 border border-indigo-600 text-indigo-600 font-medium rounded cursor-pointer hover:bg-indigo-50 transition"
//       >
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           className="h-5 w-5"
//           fill="none"
//           viewBox="0 0 24 24"
//           stroke="currentColor"
//         >
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5 5-5M12 4v12" />
//         </svg>
//         Resume
//       </button>

//       {/* Social Links */}
//       <div className="flex gap-6 mt-8 text-gray-700">
//         <a href="https://github.com/Create-source1" target="_blank" rel="noopener noreferrer">
//           <Github className="hover:text-indigo-600 transition" />
//         </a>
//         <a href="mailto:jaiswalpj13@gmail.com">
//           <Mail className="hover:text-indigo-600 transition" />
//         </a>
//         <a href="tel:+919142706913">
//           <Phone className="hover:text-indigo-600 transition" />
//         </a>
//         <a href="http://www.linkedin.com/in/pooja-jaiswal13" target="_blank" rel="noopener noreferrer">
//           <Linkedin className="hover:text-indigo-600 transition" />
//         </a>
//       </div>
//     </section>
//   );
// };

const Home = ()=>{
    return(
        <section id="home">
            
        </section>
    )
}

export default Home;
