import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTruck, faBoxesPacking, faTimes } from '@fortawesome/free-solid-svg-icons';

const RegisterModal = ({ show, onClose, onRegister, userType, setUserType, switchToLogin }) => {
  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg w-full max-w-md">
        <div className="p-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-2xl font-bold">Create Account</h3>
            <button 
              onClick={onClose} 
              className="text-gray-500 hover:text-gray-700"
            >
              <FontAwesomeIcon icon={faTimes} />
            </button>
          </div>
          <form onSubmit={onRegister}>
            <div className="mb-4">
              <label className="block text-gray-700 mb-4">I am a:</label>
              <div className="flex space-x-4 mb-6">
                <div className="flex-1">
                  <input 
                    type="radio" 
                    id="truck-owner" 
                    name="user-type" 
                    value="truck_owner" 
                    checked={userType === 'truck_owner'}
                    onChange={() => setUserType('truck_owner')}
                    className="hidden"
                  />
                  <label 
                    htmlFor="truck-owner" 
                    className={`block cursor-pointer border-2 rounded-lg p-4 text-center hover:bg-gray-50 ${
                      userType === 'truck_owner' ? 'border-blue-600 bg-blue-50' : 'border-gray-300'
                    }`}
                  >
                    <FontAwesomeIcon icon={faTruck} className="text-2xl mb-2" />
                    <p className="font-medium">Truck Owner</p>
                  </label>
                </div>
                <div className="flex-1">
                  <input 
                    type="radio" 
                    id="load-provider" 
                    name="user-type" 
                    value="load_provider" 
                    checked={userType === 'load_provider'}
                    onChange={() => setUserType('load_provider')}
                    className="hidden" 
                  />
                  <label 
                    htmlFor="load-provider" 
                    className={`block cursor-pointer border-2 rounded-lg p-4 text-center hover:bg-gray-50 ${
                      userType === 'load_provider' ? 'border-blue-600 bg-blue-50' : 'border-gray-300'
                    }`}
                  >
                    <FontAwesomeIcon icon={faBoxesPacking} className="text-2xl mb-2" />
                    <p className="font-medium">Load Provider</p>
                  </label>
                </div>
              </div>
            </div>
            <div className="mb-4">
              <label htmlFor="register-name" className="block text-gray-700 mb-2">Full Name</label>
              <input 
                type="text" 
                id="register-name" 
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" 
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="register-email" className="block text-gray-700 mb-2">Email</label>
              <input 
                type="email" 
                id="register-email" 
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" 
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="register-phone" className="block text-gray-700 mb-2">Phone Number</label>
              <input 
                type="tel" 
                id="register-phone" 
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" 
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="register-password" className="block text-gray-700 mb-2">Password</label>
              <input 
                type="password" 
                id="register-password" 
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" 
                required
              />
              <p className="text-xs text-gray-500 mt-1">Minimum 8 characters with at least 1 number</p>
            </div>
            <div className="mb-6">
              <label htmlFor="register-confirm-password" className="block text-gray-700 mb-2">Confirm Password</label>
              <input 
                type="password" 
                id="register-confirm-password" 
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" 
                required
              />
            </div>
            <div className="mb-4">
              <input type="checkbox" id="terms" className="mr-2" required />
              <label htmlFor="terms" className="text-gray-700">
                I agree to the <a href="#" className="text-blue-600 hover:underline">Terms of Service</a> and <a href="#" className="text-blue-600 hover:underline">Privacy Policy</a>
              </label>
            </div>
            <button 
              type="submit" 
              className="w-full py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 font-medium mb-4"
            >
              Create Account
            </button>
            <div className="text-center">
              <p className="text-gray-600">
                Already have an account? 
                <button 
                  type="button" 
                  onClick={switchToLogin} 
                  className="text-blue-600 hover:underline font-medium ml-1"
                >
                  Login
                </button>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterModal;