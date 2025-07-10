import React from "react";

const Navbar = ({ showSection }) => (
  <nav className="flex items-center justify-between py-4 border-b border-red-700" aria-label="Primary Navigation">
    <div className="flex items-center space-x-2">
      <span className="text-red-600 font-extrabold text-xl">Easy</span>
      <span className="text-white font-extrabold text-xl">Get.</span>
    </div>
    <ul className="hidden md:flex space-x-8 text-sm font-semibold text-gray-300">
      <li>
        <button onClick={() => showSection("home")} className="text-red-600 hover:text-red-500 cursor-pointer" aria-label="Home">
          HOME
        </button>
      </li>
      <li>
        <button onClick={() => alert("About clicked")} className="hover:text-red-500 cursor-pointer" aria-label="About">
          About
        </button>
      </li>
      <li>
        <button onClick={() => alert("Pricing clicked")} className="hover:text-red-500 cursor-pointer" aria-label="Pricing">
          Pricing
        </button>
      </li>
      <li>
        <button onClick={() => alert("Contact clicked")} className="hover:text-red-500 cursor-pointer" aria-label="Contact">
          Contact
        </button>
      </li>
    </ul>
    <button
      onClick={() => alert("Download App clicked")}
      className="hidden md:block bg-red-600 hover:bg-red-700 text-white text-xs font-semibold px-4 py-2 rounded cursor-pointer"
      aria-label="Download App"
    >
      Download App
    </button>
  </nav>
);

export default Navbar;