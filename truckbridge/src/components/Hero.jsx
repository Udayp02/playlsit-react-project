import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';

const Hero = ({ openModal }) => {
  return (
    <section className="bg-gradient-to-r from-blue-500 to-blue-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Connecting Truck Owners & Load Providers</h1>
            <p className="text-xl mb-8">
              The smarter way to find loads and trucks for your transportation needs. 
              Save time and money with our bidding platform.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <button 
                onClick={() => openModal('register-modal')} 
                className="px-6 py-3 bg-white text-blue-600 rounded-md font-bold hover:bg-gray-100"
              >
                Get Started
              </button>
              <button 
                onClick={() => openModal('how-it-works-video')} 
                className="px-6 py-3 border border-white text-white rounded-md font-bold hover:bg-white hover:text-blue-600 flex items-center"
              >
                <FontAwesomeIcon icon={faPlay} className="mr-2" /> How It Works
              </button>
            </div>
          </div>
          <div className="md:w-1/2 md:pl-10">
            <img 
              src="https://placehold.co/600x400" 
              alt="Digital illustration showing trucks on a highway with data connections and financial indicators representing the bidding system" 
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;