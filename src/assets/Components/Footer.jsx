import React from 'react'

const Footer = () => {
   return (
    <footer className="bg-gray-900 text-white mt-10 py-6">
      <div className="container mx-auto px-4 text-center">
        <p className="text-sm mb-2">© {new Date().getFullYear()} MySite. All rights reserved.</p>
        <div className="flex justify-center space-x-6 text-sm">
          <a href="/privacy" className="hover:text-yellow-400">Privacy Policy</a>
          <a href="/terms" className="hover:text-yellow-400">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};


export default Footer