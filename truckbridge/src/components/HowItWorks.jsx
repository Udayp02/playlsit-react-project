import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faPencilAlt, 
  faEnvelopeOpenText, 
  faCheckCircle, 
  faSearch, 
  faTruckLoading 
} from '@fortawesome/free-solid-svg-icons';

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">How TruckBridge Works</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Simple steps to start saving on transportation costs
          </p>
        </div>
        
        <div className="flex flex-col md:flex-row items-center mb-16">
          <div className="md:w-1/2 mb-10 md:mb-0 md:pr-10">
            <img 
              src="https://placehold.co/600x400" 
              alt="illustration showing a person using a smartphone to post a load shipment with form inputs visualized" 
              className="rounded-lg shadow-md"
            />
          </div>
          <div className="md:w-1/2">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">For Load Providers</h3>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-blue-100 rounded-full p-2 mr-4">
                  <FontAwesomeIcon icon={faPencilAlt} className="text-blue-600" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Post Your Load</h4>
                  <p className="text-gray-600">
                    Fill out a simple form with details about what you need to ship, including size, weight, and locations.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-blue-100 rounded-full p-2 mr-4">
                  <FontAwesomeIcon icon={faEnvelopeOpenText} className="text-blue-600" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Receive Bids</h4>
                  <p className="text-gray-600">
                    Qualified truck owners will bid on your load with competitive pricing and availability.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-blue-100 rounded-full p-2 mr-4">
                  <FontAwesomeIcon icon={faCheckCircle} className="text-blue-600" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Select & Confirm</h4>
                  <p className="text-gray-600">
                    Choose the best bid for your needs and confirm the booking through our platform.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row-reverse items-center">
          <div className="md:w-1/2 mb-10 md:mb-0 md:pl-10">
            <img 
              src="https://placehold.co/600x400" 
              alt="Illustration showing a truck driver reviewing available load options on a tablet with route maps" 
              className="rounded-lg shadow-md"
            />
          </div>
          <div className="md:w-1/2">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">For Truck Owners</h3>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-blue-100 rounded-full p-2 mr-4">
                  <FontAwesomeIcon icon={faSearch} className="text-blue-600" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Find Loads</h4>
                  <p className="text-gray-600">
                    Search for loads that match your route, truck type, and availability.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-blue-100 rounded-full p-2 mr-4">
                  <FontAwesomeIcon icon={faMoneyBillWave} className="text-blue-600" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Place Your Bid</h4>
                  <p className="text-gray-600">
                    Submit competitive bids for loads you want to transport.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-blue-100 rounded-full p-2 mr-4">
                  <FontAwesomeIcon icon={faTruckLoading} className="text-blue-600" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Get Confirmed & Transport</h4>
                  <p className="text-gray-600">
                    When your bid is accepted, get all the details and start transporting.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;