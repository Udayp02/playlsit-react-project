import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const Navbar = ({ openModal }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <img 
                src="https://placehold.co/50x50" 
                alt="TruckBridge logo showing a stylized truck and bridge" 
                className="h-8 w-auto"
              />
              <span className="ml-2 text-xl font-bold text-blue-600">TruckBridge</span>
            </div>
          </div>
          <div className="hidden md:ml-6 md:flex items-center space-x-8">
            <a href="#features" className="text-gray-700 hover:text-blue-600 font-medium">Features</a>
            <a href="#how-it-works" className="text-gray-700 hover:text-blue-600 font-medium">How It Works</a>
            <a href="#marketplace" className="text-gray-700 hover:text-blue-600 font-medium">Marketplace</a>
            <div className="flex space-x-4">
              <button 
                onClick={() => openModal('login-modal')} 
                className="px-4 py-2 text-blue-600 border border-blue-600 rounded-md hover:bg-blue-50 font-medium"
              >
                Login
              </button>
              <button 
                onClick={() => openModal('register-modal')} 
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 font-medium"
              >
                Sign Up
              </button>
            </div>
          </div>
          <div className="-mr-2 flex items-center md:hidden">
            <button 
              type="button" 
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100" 
              onClick={toggleMobileMenu}
            >
              <FontAwesomeIcon icon={mobileMenuOpen ? faTimes : faBars} />
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      <div className={`md:hidden bg-white shadow-lg ${mobileMenuOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <a href="#features" className="block px-3 py-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-blue-50">Features</a>
          <a href="#how-it-works" className="block px-3 py-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-blue-50">How It Works</a>
          <a href="#marketplace" className="block px-3 py-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-blue-50">Marketplace</a>
          <div className="pt-4 border-t border-gray-200">
            <button 
              onClick={() => {
                openModal('login-modal');
                setMobileMenuOpen(false);
              }} 
              className="w-full px-4 py-2 mb-2 text-blue-600 border border-blue-600 rounded-md hover:bg-blue-50"
            >
              Login
            </button>
            <button 
              onClick={() => {
                openModal('register-modal');
                setMobileMenuOpen(false);
              }} 
              className="w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;