import React from 'react';
import { Linkedin, Github, Facebook, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white mt-10 py-10 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Branding */}
        <div className="text-center md:text-left">
          <h3 className="text-xl font-bold mb-2">Sakibul Setu</h3>
          <p className="text-sm text-gray-400">Web Developer | Problem Solver | Tech Enthusiast</p>
        </div>

        {/* Navigation */}
        <div className="text-center">
          <h4 className="text-lg font-semibold mb-2">Quick Links</h4>
          <ul className="space-y-1 text-sm">
            <li><a href="/" className="hover:text-yellow-400">Home</a></li>
            <li><a href="/about" className="hover:text-yellow-400">About</a></li>
            <li><a href="/services" className="hover:text-yellow-400">Services</a></li>
            <li><a href="/contact" className="hover:text-yellow-400">Contact</a></li>
          </ul>
        </div>

        {/* Social Links */}
        <div className="text-center md:text-right">
          <h4 className="text-lg font-semibold mb-2">Follow Me</h4>
          <div className="flex justify-center md:justify-end space-x-4">
            <a href="https://linkedin.com/in/sakibul-setu" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="https://github.com/sakibulSetu" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400">
              <Github className="w-5 h-5" />
            </a>
            <a href="https://facebook.com/sakib.sakibulhasansetu.54" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="https://instagram.com/___se__tu__/" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400">
              <Instagram className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      <div className="mt-8 text-center text-sm text-gray-500">
        <p>© {new Date().getFullYear()} Sakibul Setu. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
