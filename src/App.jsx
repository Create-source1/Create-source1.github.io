import { useState } from "react";
import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./components/Nabvar";
import About from "./components/About";
import Experience from "./components/Experience";
import Home from "./components/Home";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import GitHub from "./components/GitHub";
import Contact from "./components/Contact";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <GitHub />
      <Contact />
      <footer className="w-full text-center py-4 bg-[#f9f9f9] text-sm text-gray-600 dark:bg-[#111827] dark:text-gray-400">
        © 2026 Pooja Jaiswal. All rights reserved.
      </footer>

      <ToastContainer position="top-left" autoClose={3000} />
    </>
  );
}

export default App;
