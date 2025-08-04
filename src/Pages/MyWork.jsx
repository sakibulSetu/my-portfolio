import React from "react";

const MyWork = () => {
  const projects = [
    {
      title: "E-Ticket Management System",
      description:
        "A full-stack system for booking train, bus, and air tickets with real-time seat availability and secure payments.",
      technologies: ["HTML", "CSS", "PHP", "MySQL"],
    },
    {
      title: "IoT-Based Aquaponics Monitoring System",
      description:
        "Monitors water quality (pH, temperature, nutrients) with cloud reporting and remote access for efficient aquaponics management.",
      technologies: ["IoT", "Sensors", "Cloud", "C++ (Arduino)"],
    },
    {
      title: "Bluetooth Controlled Pick and Place Robotic Arm Car",
      description:
        "A robotic car with a movable arm controlled via Bluetooth, designed for automation and pick-and-place tasks.",
      technologies: ["Arduino", "Bluetooth Module", "Motor Driver"],
    },
    {
      title: "Weather Application",
      description:
        "Responsive weather app showing real-time weather data using OpenWeatherMap API.",
      technologies: ["HTML", "CSS", "JavaScript", "API"],
    },
    {
      title: "Customer Information Management System",
      description:
        "A web-based CRM prototype built for Lanka Bangla Securities Limited to manage customer information securely.",
      technologies: ["Web App", "MySQL", "PHP"],
    },
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <h1 className="text-4xl font-bold text-center mb-8">My Work</h1>
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-2xl p-6 border border-gray-200"
          >
            <h2 className="text-2xl font-semibold mb-2">{project.title}</h2>
            <p className="text-gray-700 mb-3">{project.description}</p>
            <div className="text-sm text-gray-600">
              <span className="font-semibold">Technologies:</span>{" "}
              {project.technologies.join(", ")}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyWork;
