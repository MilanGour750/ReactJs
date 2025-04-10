import React from 'react';

const Footer = () => {
  return (
    <footer className="relative bg-black text-white py-16 px-8">

      <div className="absolute inset-0 bg-gradient-to-br from-orange-500 via-purple-500 to-yellow-500 opacity-30 blur-3xl"></div>


      <div className="relative z-10 text-center">
        <h1 className="text-7xl font-extrabold uppercase mb-8">
          LET'S CREATE SOMETHING
        </h1>

        <div className="flex justify-center items-center mb-16">
          <input
            type="email"
            placeholder="Your Email Here"
            className="w-1/3 px-4 py-3 rounded-l-full bg-white text-black outline-none"
          />
          <button className="bg-orange-500 text-white px-6 py-3 rounded-r-full">
            →
          </button>
        </div>

        <div className="grid grid-cols-4 gap-8 text-left">
          <div>
            <h2 className="font-bold text-lg mb-2">Address</h2>
            <p className="text-gray-400">
              Perumahan Sukorejo Indah, Street<br />
              Glatik, Number 10, Kediri, Indonesia
            </p>
          </div>

          <div>
            <h2 className="font-bold text-lg mb-2">Pages</h2>
            <ul className="text-gray-400 space-y-1">
              <li>About</li>
              <li>Services</li>
              <li>Career</li>
              <li>Blog</li>
            </ul>
          </div>

          <div>
            <h2 className="font-bold text-lg mb-2">Blog Post</h2>
            <ul className="text-gray-400 space-y-1">
              <li>Sales Software</li>
              <li>Marketplace</li>
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
            </ul>
          </div>

          <div>
            <h2 className="font-bold text-lg mb-2">Help Center</h2>
            <ul className="text-gray-400 space-y-1">
              <li>Community</li>
              <li>Blog</li>
              <li>Academy</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-700 pt-4 text-gray-400 flex justify-between items-center">
          <div className="flex space-x-8">
            <span>Twitter</span>
            <span>Youtube</span>
            <span>Instagram</span>
            <span>Facebook</span>
          </div>

          <p>2025 © Antstheme Copyright</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
