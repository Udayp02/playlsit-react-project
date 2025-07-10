import React from 'react';

const CTA = ({ openModal, userType }) => {
  const handleTruckOwnerClick = () => {
    if (openModal) {
      openModal('register-modal', 'truck_owner');
    }
  };

  const handleLoadProviderClick = () => {
    if (openModal) {
      openModal('register-modal', 'load_provider');
    }
  };

  return (
    <section className="bg-gradient-to-r from-blue-500 to-blue-800 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold mb-6">Ready to transform your transport business?</h2>
        <p className="text-xl mb-8 max-w-3xl mx-auto">
          Join thousands of truck owners and load providers who are saving time and money with TruckBridge
        </p>
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <button 
            onClick={handleTruckOwnerClick}
            className="px-6 py-3 bg-white text-blue-600 rounded-md font-bold hover:bg-gray-100 transition-colors duration-200"
          >
            Register as Truck Owner
          </button>
          <button 
            onClick={handleLoadProviderClick}
            className="px-6 py-3 border border-white text-white rounded-md font-bold hover:bg-white hover:text-blue-600 transition-colors duration-200"
          >
            Register as Load Provider
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTA;