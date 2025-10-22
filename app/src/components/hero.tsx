"use client";

import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col md:flex-row items-center justify-between px-10 md:px-20 py-16 min-h-screen">
      {/* Left Section */}
      <div className="max-w-xl space-y-6 text-center md:text-left">
        {/* Logo */}
        <div className="text-2xl font-bold text-gray-800">
          <span className="text-cyan-600">Cyber</span>EZ
        </div>

        {/* Heading */}
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
          Empowering You <br /> in the Digital Age
        </h1>

        {/* Paragraph */}
        <p className="text-gray-600 text-base md:text-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
          congue metus quis accumsan euismod. Maecenas sed est mollis,
          convallis nisi convallis, imperdiet massa.
        </p>

        {/* Button */}
        <button className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-semibold shadow-md hover:shadow-lg transition">
          Purchase
        </button>
      </div>

      {/* Right Section (Image) */}
      <div className="relative mt-12 md:mt-0">
        <Image
          src="/shield.png"
          alt="Cyber Security Shield"
          width={400}
          height={400}
          className="drop-shadow-2xl"
          priority
        />
      </div>
    </main>
  );
}
