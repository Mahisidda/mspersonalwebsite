"use client";
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Link from 'next/link';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';
import { SiX } from 'react-icons/si';

const PortfolioPage = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <div className="p-6 sm:p-10 md:p-[50px] bg-white">
        {/* Section 1: About Me (Profile Pic & Bio) */}
        <div className="flex flex-col md:flex-row mb-10 md:mb-16">
          {/* Image Column */}
          <div className="w-full md:w-1/2 md:pr-4 mb-8 md:mb-0 flex justify-center md:justify-start items-start" data-aos="fade-right">
            <img
              src="profes.jpg"
              alt="Mahi Sidda"
              style={{ width: '70%', height: 'auto', objectFit: 'cover', borderRadius: '8px' }}
            />
          </div>
          {/* Text Column */}
          <div className="w-full md:w-1/2 md:pl-4 flex flex-col justify-start">
            {/* Container for Mahi Sidda name */}
            <div className="mb-5 leading-tight md:leading-normal" data-aos="fade-left" data-aos-delay="100">
              <h1 className="font-sans text-6xl sm:text-7xl lg:text-8xl font-extrabold tracking-tighter text-black">
                Mahi
              </h1>
              <p className="font-sans text-5xl sm:text-6xl lg:text-7xl font-semibold tracking-normal -mt-2 sm:-mt-3 text-black">
                Sidda
              </p>
            </div>
            <p className="text-base sm:text-lg leading-relaxed text-black max-w-md text-justify" data-aos="fade-right" data-aos-delay="200">
              Hola! I am Mahi, an AI Engineer who loves training neural networks and building smart systems that solve real problems.<br />
              
              With hands-on experience in LLMs, RAG pipelines, and ML system design, I specialize in bridging the gap between cutting-edge research and real-world applications.<br />

              Recently, I built a production-grade RAG model for a startup called Hashmint during a two-month AI internship — tailoring it to user needs from the ground up.<br />

              I'm currently pursuing my Master's at Arizona State University, diving deep into deep learning, LLMs, and applied AI.
            </p>
          </div>
        </div>

        {/* Section 2: Projects - NEWLY ADDED SECTION */}
        <div className="flex flex-col md:flex-row" data-aos="fade-up" data-aos-delay="200">
          {/* Column 1: Project Description */}
          <div className="w-full md:w-1/2 md:pr-4 mb-8 md:mb-0 flex flex-col">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-black tracking-tight">
              My Work
            </h2>
            <div className="space-y-8">
              <div>
                <p className="text-base sm:text-lg leading-relaxed max-w-md text-justify text-gray-700 ">
                I've worked on <Link href="/projects" legacyBehavior><a className="text-red-600 hover:text-yellow-600 font-semibold underline"> Multiple</a></Link> projects, 
                including a Fake News Detection system using multimodal learning, a Book Recommendation engine powered by collaborative filtering, and iVote, 
                a full-stack web application for secure digital voting. These projects strengthened my ability to build robust end-to-end ML pipelines, 
                apply deep learning techniques effectively, and develop AI solutions aligned with real-world user needs.
                </p>
              </div>
              <div>
                
              </div>
              {/* Add more project items here as needed */}
            </div>
          </div>
          {/* Column 2: Project Image */}
          <div className="w-full md:w-1/2 md:pl-4 flex justify-center md:justify-start items-start">
            <img
              src="project.png"
              alt="Project Showcase Visual"
              className="rounded-lg shadow-xl object-cover"
              style={{ width: '100%', height: 'auto', maxHeight: '400px' }}
            />
          </div>
        </div>

        {/* Section 3: Tools I Work With */}
        <div className="flex flex-col md:flex-row mt-10 md:mt-16" data-aos="fade-up" data-aos-delay="200">
          {/* Column 1: Tools Description - Now takes full width */}
          <div className="w-full md:pr-4 mb-8 md:mb-0 flex flex-col">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-black tracking-tight">
              Tools I Work With
            </h2>
            <div className="space-y-8">
              <div>
                <p className="text-base sm:text-lg leading-relaxed max-w-md text-justify text-gray-700 ">
                  Here I can describe the various technologies, programming languages, frameworks, and other tools I'm proficient with. For example, Python, TensorFlow, PyTorch, scikit-learn, AWS, Docker, Git, etc.
                </p>
              </div>
              {/* Add more tool details or categories here as needed */}
            </div>
          </div>
          {/* Column 2: Project Image - REMOVED */}
        </div>
      </div>

      {/* Section 4: Let's Make AI Talk - Full Bleed Background */}
      <div className="mt-10 md:mt-16 bg-black flex flex-col flex-grow" data-aos="fade-up">
        {/* Inner container for content alignment, padding, and original styling */}
        <div className="max-w-7xl mx-auto py-8 md:py-12 px-6 sm:px-10 md:px-[50px] text-white rounded-lg flex flex-col justify-center flex-grow">
          <div className="text-center">
            <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-4">
              Let's Make AI Talk
            </h2>
            <p className="text-lg sm:text-m mb-8 max-w-2xl mx-auto">
              I would like to connect with you to discuss more.
            </p>
            <div className="flex justify-center space-x-4 sm:space-x-6 mb-8">
              {/* Replace # with your actual profile URLs */}
              <a href="https://www.linkedin.com/in/mahisidda/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300 transition-colors duration-300">
                <FaLinkedin size={28} />
              </a>
              <a href="https://github.com/Mahisidda" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300 transition-colors duration-300">
                <FaGithub size={28} />
              </a>
            </div>
            <a
              href="#" // Replace # with the actual path to your resume
              className="inline-block bg-red-800 hover:bg-yellow-600 text-white font-bold py-3 px-8 rounded-full text-lg transition-colors duration-300"
            >
              Resume-mahisidda.pdf
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioPage;

