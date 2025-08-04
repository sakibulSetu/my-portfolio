import React, { useState } from 'react';
import {
  CircularProgressbar,
  buildStyles,
} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const skills = [
  { name: 'HTML & CSS', value: 90, color: '#f97316' },    // Orange
  { name: 'JavaScript', value: 75, color: '#8b5cf6' },    // Purple
  { name: 'PHP', value: 50, color: '#14b8a6' },           // Teal
  { name: 'ReactJS', value: 60, color: '#475569' }, 
  { name: 'NodeJs', value: 60, color: '#0bdb76ff' },
  { name: 'MongoDB&MySql', value: 75, color: '#a4c60eff' },         // Slate
];

const About = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <section className="bg-indigo-50 py-16 px-4">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-start">
        {/* Skill Circles */}
        <div className="grid grid-cols-2 gap-6">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="bg-white rounded-3xl p-6 shadow-md text-center"
            >
              <CircularProgressbar
                value={skill.value}
                text={`${skill.value}%`}
                styles={buildStyles({
                  textColor: skill.color,
                  pathColor: skill.color,
                  trailColor: '#f3f4f6',
                  textSize: '18px',
                  strokeLinecap: 'round',
                })}
              />
              <p className="mt-4 font-medium">{skill.name}</p>
            </div>
          ))}
        </div>

        {/* Description & Experience */}
        <div>
          <h4 className="text-sm uppercase text-gray-600 font-semibold mb-1">
            My Skills
          </h4>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Beautiful & Unique Digital Experiences
          </h2>

          {/* Always visible intro */}
          <p className="text-gray-600 mb-4 leading-relaxed">
            I am currently serving as a MERN stack Intern at (9AM Solution), contributing their projects.
            My responsibilities include full-stack development using Ract,and NodeJs.
            I also manage and update the IT vendor database.
          </p>

          {/* Expandable content */}
          {showMore && (
            <>
        
              <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                <li>HTML, CSS, Tailwind
                → Solid understanding of building modern, responsive, and accessible web interfaces using HTML for structure, CSS for styling, and Tailwind CSS for utility-first design.</li>
                <li>JavaScript, ReactJS
               → Experienced in writing JavaScript for dynamic behavior and building fast, interactive web apps using React, including component-based architecture and hooks.</li>
                <li>MySQL, MongoDB
                → Familiar with managing both relational databases like MySQL and databases like MongoDB for storing and querying structured and unstructured data.</li>
                <li>Manual & Automation Testing
               → Proficient in writing and executing manual test cases and also using tools for automated testing to ensure the quality and reliability of applications.</li>
                <li>IT Support & Networking
→ Practical knowledge in troubleshooting technical issues, setting up systems and networks, and ensuring secure and efficient IT infrastructure.</li>
                <li>Developed a HTML, CSS, JavaScript and PHP based E-Ticket Management Project.</li>
                <li>Developed a React-based medicine delivery app</li>
                <li>Designed and developed a camp management system</li>
                <li>Built responsive designs in React, NodeJs and Tailwind</li>
                <li>Worked on a finance-related UI project</li>
              </ul>
              <p className="text-gray-600 mb-6">
                Strong focus on <span className="text-blue-600 underline">frontend development</span>, and backend tools like
                <span className="text-purple-600 font-semibold"> MongoDB</span> and
                <span className="text-blue-600 font-semibold"> MySQL</span>.
              </p>
            </>
          )}

          {/* Buttons */}
          <div className="flex gap-4 flex-wrap items-center">
            <a
              href="/my-cv.pdf"
              download="Sakib_Resume.pdf"
              className="bg-orange-400 text-white px-6 py-3 rounded-full hover:bg-orange-500 transition inline-block"
            >
              Download CV
            </a>
            <button
              onClick={() => setShowMore(!showMore)}
              className="text-indigo-700 font-medium hover:underline"
            >
              {showMore ? 'See Less' : 'See More'}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
