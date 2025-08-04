// src/components/sections/Contact.jsx
import React, { useRef } from "react";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPhoneAlt,
  FaWhatsapp,
} from "react-icons/fa";
import { motion } from "framer-motion";
import { toast } from "react-toastify";

const Contact = () => {
  const formRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = formRef.current;
    const formData = new FormData(form);

    fetch("https://formsubmit.co/ajax/jaiswalpj13@gmail.com", {
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json",
      },
    })
      .then(() => {
        toast.success("Message sent successfully! 📩");
        form.reset();
      })
      .catch(() => {
        toast.error("Something went wrong. Try again!");
      });
  };
  return (
    <section
      id="contact"
      className="min-h-screen px-6 py-20 bg-gradient-to-br from-indigo-50 to-cyan-50 scroll-mt-20"
    >
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: false }}
        className="text-3xl md:text-4xl font-bold text-center text-indigo-600 mb-14"
      >
        Contact Me
      </motion.h2>

      <div className="flex flex-col md:flex-row justify-between items-center gap-16 max-w-5xl mx-auto">
        {/* Contact Info */}
        <div className="flex flex-col items-center gap-4 w-full md:w-1/2">
          <p className="text-lg text-gray-700 ">
            📞 Phone: <span className="font-semibold">+91 9142706913</span>
          </p>
          <p className="text-lg text-gray-700">
            📧 Email:{" "}
            <span className="font-semibold">jaiswalpj13@gmail.com</span>
          </p>
          <div className="flex items-center justify-center md:justify-start gap-6 mt-4 text-2xl text-gray-700">
            <a
              href="https://github.com/create-source1"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-indigo-600"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com/in/pooja-jaiswal13"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-600"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://wa.me/919142706913"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-500"
              aria-label="WhatsApp"
            >
              <FaWhatsapp />
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="flex flex-col gap-4 w-full md:w-1/2 bg-white p-6 rounded-xl shadow"
        >
          <input
            type="text"
            name="name"
            required
            placeholder="Your Name"
            className="p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
          <input
            type="email"
            name="email"
            required
            placeholder="Your Email"
            className="p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
          <textarea
            name="message"
            required
            placeholder="Your Message"
            rows="5"
            className="p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400"
          ></textarea>

          <button
            type="submit"
            className="bg-indigo-600 text-white px-6 py-3 rounded cursor-pointer hover:bg-indigo-700 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
    // <section
    //   id="contact"
    //   className="min-h-[80vh] px-6 py-20 bg-gradient-to-br from-indigo-50 to-cyan-50 scroll-mt-20"
    // >
    //   <motion.h2
    //     className="text-3xl md:text-4xl font-bold text-center text-indigo-600 mb-14"
    //     initial={{ opacity: 0 }}
    //     whileInView={{ opacity: 1 }}
    //     transition={{ duration: 0.5 }}
    //   >
    //     Contact Me
    //   </motion.h2>

    //   <motion.div
    //     className="max-w-xl mx-auto flex flex-col items-center gap-6 text-center"
    //     initial={{ opacity: 0, y: 20 }}
    //     whileInView={{ opacity: 1, y: 0 }}
    //     viewport={{ once: true }}
    //     transition={{ duration: 0.5 }}
    //   >
    //     {/* Email */}
    //     <div className="flex items-center gap-3 text-lg text-gray-800">
    //       <FaEnvelope className="text-indigo-600" />
    //       <a href="mailto:jaiswalpj13@gmail.com" className="hover:underline">
    //         jaiswalpj13@gmail.com
    //       </a>
    //     </div>

    //     {/* Phone */}
    //     <div className="flex items-center gap-3 text-lg text-gray-800">
    //       <FaPhoneAlt className="text-indigo-600" />
    //       <a href="tel:+919142706913" className="hover:underline">
    //         +91 9142706913
    //       </a>
    //     </div>

    //     {/* Social Links */}
    //     <div className="flex items-center gap-8 mt-6">
    //       <a
    //         href="https://github.com/pooja-jaiswal13"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //         className="text-gray-700 hover:text-indigo-600 text-2xl"
    //         aria-label="GitHub"
    //       >
    //         <FaGithub />
    //       </a>
    //       <a
    //         href="https://linkedin.com/in/pooja-jaiswal13"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //         className="text-gray-700 hover:text-indigo-600 text-2xl"
    //         aria-label="LinkedIn"
    //       >
    //         <FaLinkedin />
    //       </a>
    //     </div>
    //   </motion.div>
    // </section>
  );
};

export default Contact;
