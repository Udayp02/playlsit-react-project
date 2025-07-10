import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const LoginModal = ({ show, onClose, onLogin, switchToRegister }) => {
  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg w-full max-w-md">
        <div className="p-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-2xl font-bold">Login</h3>
            <button 
              onClick={onClose} 
              className="text-gray-500 hover:text-gray-700"
            >
              <FontAwesomeIcon icon={faTimes} />
            </button>
          </div>
          <form onSubmit={onLogin}>
            <div className="mb-4">
              <label htmlFor="login-email" className="block text-gray-700 mb-2">Email</label>
              <input 
                type="email" 
                id="login-email" 
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" 
                required
              />
            </div>
            <div className="mb-6">
              <label htmlFor="login-password" className="block text-gray-700 mb-2">Password</label>
              <input 
                type="password" 
                id="login-password" 
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" 
                required
              />
            </div>
            <div className="flex justify-between items-center mb-6">
              <div className="flex items-center">
                <input type="checkbox" id="remember-me" className="mr-2" />
                <label htmlFor="remember-me" className="text-gray-700">Remember me</label>
              </div>
              <a href="#" className="text-blue-600 hover:underline">Forgot password?</a>
            </div>
            <button 
              type="submit" 
              className="w-full py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 font-medium mb-4"
            >
              Login
            </button>
            <div className="text-center">
              <p className="text-gray-600">
                Don't have an account? 
                <button 
                  type="button" 
                  onClick={switchToRegister} 
                  className="text-blue-600 hover:underline font-medium ml-1"
                >
                  Sign up
                </button>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
