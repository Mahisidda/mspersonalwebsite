import React from 'react';
import Link from 'next/link';

function ProjectsPage() {
  const projects = [
    {
      title: "Online Voting System",
      description: "",
      tech: "DBMS · SQLite · Django Framework · ",
      link: "#"
    },
    {
      title: "ECDSA Encrypted Chat Application",
      description: "End-to-end encrypted messaging system using Elliptic Curve Digital Signature Algorithm (ECDSA) for message authentication and forward secrecy.",
      tech: "TypeScript · WebCrypto API · Socket.io · Redis",
      link: "#"
    },
    {
      title: "Book Recommendation System",
      description: "ML-powered recommendation engine using Neural Collaborative Filtering, processing 1M+ ratings from Book-Crossing dataset with real-time updates via Kafka.",
      tech: "Python · TensorFlow · Apache Spark · Kafka",
      link: "#"
    }
  ];

  // Add error handling for empty projects
  if (!projects?.length) {
    return (
      <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Technical Projects</h1>
          <p className="text-gray-600">No projects available at the moment.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">
          Technical Projects
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              role="article"
              aria-labelledby={`project-title-${index}`}
            >
              <div className="p-6">
                <h3 
                  id={`project-title-${index}`}
                  className="text-xl font-semibold text-gray-800 mb-3"
                >
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="mb-4">
                  <span className="inline-block bg-gray-100 rounded-full px-3 py-1 text-sm font-medium text-gray-700">
                    {project.tech}
                  </span>
                </div>
                {project.link !== "#" ? (
                  <Link
                    href={project.link}
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View ${project.title} project`}
                  >
                    View Project
                  </Link>
                ) : (
                  <span className="text-gray-500 text-sm">Coming soon</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProjectsPage;