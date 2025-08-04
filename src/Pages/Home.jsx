import React from 'react';
import profileImg from '../assets/Media/home-photo.jpg'; // <-- Replace with your actual image path

const Home = () => {
  return (
    <section className="bg-blue-50 min-h-screen flex items-center">
      <div className="container mx-auto px-2 py-10 grid md:grid-cols-2 gap-10 items-center">
        {/* Left Content */}
        <div>
          <h1 className="text-4xl md:text-5xl font-semibold text-gray-800 mb-4">
            Hello! I Am <br />
            <span className="text-purple-600 font-bold">Sakibul Hasan Setu</span>
          </h1>
          <p className="text-gray-600 mb-6 leading-relaxed">
            I am a recent graduate who has been practicing web development and IT support. A web developer with skills in React, NodeJs, ExpressJs and Tailwind. I enjoy building modern,
            user-friendly websites and solving real-world tech problems.
            My expertise is in IT assistantship, and I have experience in creating responsive websites
            including backend integration.
          </p>
          <button className="bg-orange-400 hover:bg-orange-500 text-white px-6 py-3 rounded-full text-lg font-medium transition">
            Hire Me
          </button>
        </div>

        {/* Right Image */}
        <div className="flex justify-center">
          <img
            src={profileImg}
            alt="Your Portrait"
            className="w-72 h-auto object-cover rounded-xl"
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
;
