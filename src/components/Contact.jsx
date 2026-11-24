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

const MotionH2 = motion.h2;
const MotionDiv = motion.div;
const MotionForm = motion.form;

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
        toast.success("Your message has been sent successfully!");
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
      <MotionH2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: false }}
        className="text-3xl md:text-4xl font-bold text-center text-indigo-600 mb-14"
      >
        Contact Me
      </MotionH2>

      <div className="max-w-6xl mx-auto grid gap-10 lg:grid-cols-2 items-stretch">
        {/* Contact Info */}
        <MotionDiv
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="w-full rounded-2xl bg-white/80 p-8 md:p-10 shadow-lg border border-white/70 flex flex-col justify-between"
        >
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-indigo-500 mb-3">
              Get in touch
            </p>
            <h3 className="text-3xl font-bold text-gray-800 mb-4">
              Let&apos;s build something meaningful.
            </h3>
            <p className="text-gray-600 leading-relaxed max-w-lg">
              Have a project, opportunity, or idea in mind? Send a message and
              I&apos;ll get back to you as soon as possible.
            </p>
          </div>

          <div className="flex flex-col gap-4 mt-10">
            <a
              href="tel:+919142706913"
              className="flex items-center gap-4 text-gray-700 hover:text-indigo-600 transition group"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-100 text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition">
                <FaPhoneAlt />
              </span>
              <span>
                <span className="block text-sm text-gray-500">Phone</span>
                <span className="font-semibold">+91 9142706913</span>
              </span>
            </a>
            <a
              href="mailto:jaiswalpj13@gmail.com"
              className="flex items-center gap-4 text-gray-700 hover:text-indigo-600 transition group"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-100 text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition">
                <FaEnvelope />
              </span>
              <span>
                <span className="block text-sm text-gray-500">Email</span>
                <span className="font-semibold break-all">
                  jaiswalpj13@gmail.com
                </span>
              </span>
            </a>
          </div>

          <div className="flex items-center gap-4 mt-10 text-xl text-gray-700">
            <a
              href="https://github.com/create-source1"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-11 w-11 items-center justify-center rounded-xl bg-gray-100 hover:bg-indigo-600 hover:text-white transition"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com/in/pooja-jaiswal13"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-11 w-11 items-center justify-center rounded-xl bg-gray-100 hover:bg-blue-600 hover:text-white transition"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://wa.me/919142706913"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-11 w-11 items-center justify-center rounded-xl bg-gray-100 hover:bg-green-500 hover:text-white transition"
              aria-label="WhatsApp"
            >
              <FaWhatsapp />
            </a>
          </div>
        </MotionDiv>

        {/* Contact Form */}
        <MotionForm
          ref={formRef}
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex flex-col gap-5 w-full bg-white p-6 md:p-8 rounded-2xl shadow-lg border border-indigo-100"
        >
          <div className="mb-1">
            <h3 className="text-2xl font-semibold text-indigo-700">Send a message</h3>
            <p className="text-gray-600 mt-2">I&apos;d love to hear from you.</p>
          </div>

          <label className="flex flex-col gap-2 text-sm font-semibold text-gray-700">
            Your Name
            <input
              type="text"
              name="name"
              required
              placeholder="Your Name"
              className="w-full p-3.5 rounded-lg border border-gray-300 font-normal placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 transition"
            />
          </label>
          <label className="flex flex-col gap-2 text-sm font-semibold text-gray-700">
            Your Email
            <input
              type="email"
              name="email"
              required
              placeholder="Your Email"
              className="w-full p-3.5 rounded-lg border border-gray-300 font-normal placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 transition"
            />
          </label>
          <label className="flex flex-col gap-2 text-sm font-semibold text-gray-700">
            Your Message
            <textarea
              name="message"
              required
              placeholder="Your Message"
              rows="5"
              className="w-full p-3.5 rounded-lg border border-gray-300 font-normal placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 transition resize-y"
            ></textarea>
          </label>

          <button
            type="submit"
            className="w-full bg-indigo-600 text-white px-6 py-3.5 rounded-lg cursor-pointer hover:bg-indigo-700 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2 shadow-md transition"
          >
            Send Message
          </button>
        </MotionForm>
      </div>
    </section>
  );
};

export default Contact;
