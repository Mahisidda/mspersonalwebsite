// components/Sidebar.js
import Link from 'next/link';

const Sidebar = () => {
  return (
    <div className="fixed left-0 top-0 h-screen w-64 text-gray-800 p-4 shadow-md">
      {/* Center content vertically */}
      <div className="flex flex-col justify-center h-full space-y-8">
        {/* Professional Section */}
        <div>
          <h1 className="text-2xl font-bold mb-3 text-center">Professional</h1>
          <nav>
            <ul className="space-y-2 flex items-center flex-col">
              <li>
                <Link
                  href="/aboutme"
                  className="hover:underline hover:text-yellow-600 transition-all duration-300 rounded text-center font-semibold underline-offset-4"
                >
                  About me
                </Link>
              </li>
              <li>
                <Link
                  href="/projects"
                  className="hover:underline hover:text-yellow-600 transition-all duration-300 rounded text-center font-semibold underline-offset-4"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  href="/workexperience"
                  className="hover:underline hover:text-yellow-600 transition-all duration-300 rounded text-center font-semibold underline-offset-4"
                >
                  Work Experience
                </Link>
              </li>
              <li>
                <Link
                  href="/skills"
                  className="hover:underline hover:text-yellow-600 transition-all duration-300 rounded text-center font-semibold underline-offset-4"
                >
                  Skills
                </Link>
              </li>
              <li>
                <Link
                  href="/resume"
                  className="hover:underline hover:text-yellow-600 transition-all duration-300 rounded text-center font-semibold underline-offset-4"
                >
                  Resume
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        {/* Personal Section */}
        <div>
          <h1 className="text-2xl font-bold mb-3 text-center">Personal</h1>
          <nav>
            <ul className="space-y-2 flex items-center flex-col">
              <li>
                <Link
                  href="/blogs"
                  className="hover:underline hover:text-yellow-600 transition-all duration-300 rounded text-center font-semibold underline-offset-4"
                >
                  Blogs
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;