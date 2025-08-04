import React from 'react';
import { Code2, MonitorCheck, Wrench } from 'lucide-react'; // you can change icons as needed

const services = [
  {
    title: 'Web Development',
    description:
      "Currently I’m working at 9AM Solution as a software development Intern. I have helped with the front-end development and backend development of several projects . ",
    icon: <Code2 className="h-16 w-16 text-purple-600" />,
  },
  {
    title: 'Software Quality Assurance',
    description:
      'As a quality assurance engineer, I have participated in several initiatives including Esquare Electronics, Healthy Nikah & more. I’m experienced in manual testing, automation testing, and performance testing.',
    icon: <MonitorCheck className="h-16 w-16 text-purple-600" />,
  },
  {
    title: 'IT Specialist',
    description:
      ' I have experience in IT support, server and network management. I manage server infrastructure, networking, and provide IT support.',
    icon: <Wrench className="h-16 w-16 text-purple-600" />,
  },
];

const Service = () => {
  return (
    <section className="bg-indigo-50 py-16 px-4">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h4 className="text-sm uppercase tracking-wide text-gray-500">My Expertise</h4>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Provide Wide Range of Digital Services</h2>
      </div>

      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto px-4">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white rounded-3xl shadow-md p-6 flex flex-col items-center text-center hover:shadow-lg transition"
          >
            <div className="mb-4">{service.icon}</div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">{service.title}</h3>
            <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Service;
