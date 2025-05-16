import React from 'react'
import Image from 'next/image';

export default function HomePage() {
  return (
    <div className="flex flex-col md:flex-row items-stretch min-h-[calc(100vh-5rem)]"> {/* 5rem = h-20 navbar height */}

      {/* Left Column: Content */}
      <div className="w-full md:w-1/2 flex flex-col justify-center items-start text-left p-8 sm:p-12 md:p-16 lg:p-24 space-y-8">
        {/* Your Name - styled like "Chipie DESIGN" */}
        <div>
            <h1 className="font-sans text-6xl sm:text-7xl lg:text-8xl font-extrabold tracking-tighter text-black">
                Mahi
            </h1>
            <p className="font-sans text-5xl sm:text-6xl lg:text-7xl font-semibold tracking-normal -mt-2 sm:-mt-3 text-black">
                Sidda
            </p>
        </div>

        {/* Your Bio/Tagline */}
        <p className="font-sans text-base sm:text-lg text-gray-800 leading-relaxed">
          {/* Replace this with your 3-4 line bio */}
         "" 
          <br />
          
          <br />
         
        </p>

        {/* Button removed from here as per your request */}
      </div>

      {/* Right Column: Image */}
      <div className="w-half md:w-1/2 h-[60vh] md:h-auto bg-gray-300 relative">
        <Image
          src="/snow4.jpg" // TODO: Replace with your preferred hero image
          alt="Mahi Sidda - Portfolio Hero" // Make this descriptive
          layout="fill"
          objectFit="cover"
          priority
        />
        {/* The text "SERVICES", "HOW IT WORKS" seen on the Chipie image would either be part of your image
            or could be overlaid with absolute positioning if you want them dynamic. */}
      </div>
    </div>
  )
}