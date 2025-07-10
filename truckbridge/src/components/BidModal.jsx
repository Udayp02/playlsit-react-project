import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRupeeSign, faTimes } from '@fortawesome/free-solid-svg-icons';

const BidModal = ({ show, onClose, onSubmit }) => {
  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg w-full max-w-md">
        <div className="p-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-2xl font-bold">Place Your Bid</h3>
            <button 
              onClick={onClose} 
              className="text-gray-500 hover:text-gray-700"
            >
              <FontAwesomeIcon icon={faTimes} />
            </button>
          </div>
          <form onSubmit={onSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">
                Product: <span className="font-bold" id="bid-product-name">Rice Bags</span>
              </label>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">
                Route: <span className="font-bold" id="bid-route">Mumbai to Delhi</span>
              </label>
            </div>
            <div className="mb-4">
              <label htmlFor="bid-price" className="block text-gray-700 mb-2">
                Your Bid Price (per tonne)
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <FontAwesomeIcon icon={faRupeeSign} className="text-gray-500" />
                </div>
                <input 
                  type="number" 
                  id="bid-price" 
                  className="w-full pl-8 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" 
                  required
                />
              </div>
            </div>
            <div className="mb-4">
              <label htmlFor="bid-truck" className="block text-gray-700 mb-2">Truck Type</label>
              <select 
                id="bid-truck" 
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" 
                required
              >
                <option value="">Select Truck Type</option>
                <option value="trailer">Trailer</option>
                <option value="container">Container</option>
                <option value="tanker">Tanker</option>
                <option value="pickup">Pickup</option>
              </select>
            </div>
            <div className="mb-4">
              <label htmlFor="bid-capacity" className="block text-gray-700 mb-2">
                Available Capacity (Tonnes)
              </label>
              <input 
                type="number" 
                id="bid-capacity" 
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" 
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="bid-availability" className="block text-gray-700 mb-2">
                Available From Date
              </label>
              <input 
                type="date" 
                id="bid-availability" 
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" 
                required
              />
            </div>
            <div className="mb-6">
              <label htmlFor="bid-notes" className="block text-gray-700 mb-2">
                Additional Notes
              </label>
              <textarea 
                id="bid-notes" 
                rows="3" 
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>
            <button 
              type="submit" 
              className="w-full py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 font-medium mb-4"
            >
              Submit Bid
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BidModal;