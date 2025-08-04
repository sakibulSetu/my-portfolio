import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Github, Facebook, Instagram } from 'lucide-react';

const Contact = () => {
  return (
    <section className="bg-indigo-50 py-16 px-4">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">

        {/* Contact Form */}
        <div className="bg-white rounded-3xl shadow-md p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Send a Message</h2>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">Name</label>
              <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400" placeholder="Your name" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">Email</label>
              <input type="email" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400" placeholder="you@example.com" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">Message</label>
              <textarea rows="5" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400" placeholder="Your message..."></textarea>
            </div>
            <button type="submit" className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition">
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col justify-center space-y-6">
          <div className="flex items-start gap-4">
            <Mail className="text-indigo-600 w-6 h-6" />
            <div>
              <h4 className="font-semibold text-gray-800">Email</h4>
              <p className="text-gray-600">sakibul.setu57@gmail.com</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <Phone className="text-indigo-600 w-6 h-6" />
            <div>
              <h4 className="font-semibold text-gray-800">Phone</h4>
              <p className="text-gray-600">+880 1906425911</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <MapPin className="text-indigo-600 w-6 h-6" />
            <div>
              <h4 className="font-semibold text-gray-800">Location</h4>
              <p className="text-gray-600">Dhaka, Bangladesh</p>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex gap-4 pt-4">
            <a href="https://linkedin.com/in/sakibul-setu" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-800">
              <Linkedin className="w-10 h-10" />
            </a>
            <a href="https://github.com/sakibulSetu" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-800">
              <Github className="w-10 h-10" />
            </a>
            <a href="https://facebook.com/sakib.sakibulhasansetu.54" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-800">
              <Facebook className="w-10 h-10" />
            </a>
            <a href="https://instagram.com/___se__tu__/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-800">
              <Instagram className="w-10 h-10" />
            </a>
          </div>

          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.902305940173!2d90.3914632!3d23.7508764!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8535af47f9d%3A0xf43e5e60dd3bfbdf!2sDhaka%2C%20Bangladesh!5e0!3m2!1sen!2sbd!4v1691221528471!5m2!1sen!2sbd"
            className="w-full h-60 rounded-lg border-none"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Contact;
