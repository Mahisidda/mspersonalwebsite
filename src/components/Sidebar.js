// components/Sidebar.js
"use client";
import { useState } from 'react';
import Link from 'next/link';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div>
      {/* Hamburger Icon */}
      <button
        className="md:hidden p-4"
        onClick={toggleSidebar}
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16m-7 6h7"
          ></path>
        </svg>
      </button>

      {/* Sidebar */}
      <div className={`fixed left-0 top-0 h-screen ${isCollapsed ? 'w-16' : 'w-64'} text-gray-800 p-4 shadow-md transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-all duration-300 md:translate-x-0`}>
        {/* Collapse Button */}
        <button
          onClick={toggleCollapse}
          className="absolute right-2 top-2 p-2 hover:bg-gray-100 rounded-full transition-colors duration-200"
        >
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isCollapsed ? "M9 5l7 7-7 7" : "M15 19l-7-7 7-7"}
            ></path>
          </svg>
        </button>

        {/* Name/Logo Section */}
        <div className="relative w-full">
          <Link href="/" className={`text-2xl font-mono font-semibold hover:underline hover:text-yellow-600 transition-all duration-300 rounded text-center underline-offset-4 absolute top-4 left-1/2 transform -translate-x-1/2 ${isCollapsed ? 'text-xl' : ''}`}>
            MS
          </Link>
        </div>

        {/* Center content vertically */}
        <div className="flex flex-col justify-center h-full space-y-8">
          {/* Professional Section */}
          <div>
            {!isCollapsed && <h1 className="text-1xl font-semibold font-mono mb-3 text-center">Professional</h1>}
            <nav>
              <ul className="space-y-2 flex items-center flex-col">
                <li>
                  <Link
                    href="/aboutme"
                    className="font-mono hover:underline hover:text-yellow-600 transition-all duration-300 rounded text-center underline-offset-4"
                  >
                    {isCollapsed ? 'A' : 'About me'}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/projects"
                    className="font-mono hover:underline hover:text-yellow-600 transition-all duration-300 rounded text-center underline-offset-4"
                  >
                    {isCollapsed ? 'P' : 'Projects'}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/workexperience"
                    className="font-mono hover:underline hover:text-yellow-600 transition-all duration-300 rounded text-center underline-offset-4"
                  >
                    {isCollapsed ? 'W' : 'Work Experience'}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/skills"
                    className="font-mono hover:underline hover:text-yellow-600 transition-all duration-300 rounded text-center underline-offset-4"
                  >
                    {isCollapsed ? 'S' : 'Skills'}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/resume"
                    className="font-mono hover:underline hover:text-yellow-600 transition-all duration-300 rounded text-center underline-offset-4"
                  >
                    {isCollapsed ? 'R' : 'Resume'}
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          {/* Personal Section */}
          <div>
            {!isCollapsed && <h1 className="text-1xl font-semibold font-mono mb-3 text-center">Personal</h1>}
            <nav>
              <ul className="space-y-2 flex items-center flex-col">
                <li>
                  <Link
                    href="/blogs"
                    className="font-mono hover:underline hover:text-yellow-600 transition-all duration-300 rounded text-center underline-offset-4"
                  >
                    {isCollapsed ? 'B' : 'Blogs'}
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;