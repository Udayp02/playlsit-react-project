import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlayCircle, faTimes } from '@fortawesome/free-solid-svg-icons';

const HowItWorksVideoModal = ({ show, onClose }) => {
  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg w-full max-w-4xl">
        <div className="p-4">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-2xl font-bold">How TruckBridge Works</h3>
            <button 
              onClick={onClose} 
              className="text-gray-500 hover:text-gray-700"
            >
              <FontAwesomeIcon icon={faTimes} />
            </button>
          </div>
          <div className="aspect-w-16 aspect-h-9">
            <div className="w-full bg-gray-200 rounded-md flex items-center justify-center h-96">
              <div className="text-center p-8">
                <FontAwesomeIcon icon={faPlayCircle} className="text-5xl text-blue-600 mb-4" />
                <h4 className="text-xl font-bold mb-2">TruckBridge Overview</h4>
                <p className="text-gray-600">Watch our video tutorial to learn how to get started</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorksVideoModal;