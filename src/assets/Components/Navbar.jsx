import React from 'react';
import { NavLink } from 'react-router-dom';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  {name: 'Service', path: '/service'},
  {name: 'MyWork', path: '/myWork'},
  { name: 'Contact', path: '/contact' },
  
];

const Navbar = () => {
  return (
    <nav className="bg-indigo-700 text-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="text-2xl font-bold">Portfolio</div>
        <ul className="flex space-x-6">
          {navLinks.map((link) => (
            <li key={link.name}>
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  isActive ? 'text-yellow-300 font-semibold' : 'hover:text-yellow-300'
                }
              >
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

