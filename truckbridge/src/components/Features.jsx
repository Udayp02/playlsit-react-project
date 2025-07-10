import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faTruck, 
  faMoneyBillWave, 
  faMapMarkedAlt, 
  faBell, 
  faFileInvoiceDollar, 
  faShieldAlt 
} from '@fortawesome/free-solid-svg-icons';

const FeatureCard = ({ icon, title, description }) => (
  <div className="bg-white p-6 rounded-lg shadow-md hover:transform hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
      {icon}
    </div>
    <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const Features = () => (
  <section id="features" className="py-20 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Key Features</h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Everything you need to efficiently manage your trucking business or shipping needs
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <FeatureCard
          icon={<FontAwesomeIcon icon={faTruck} className="text-blue-600 text-2xl" />}
          title="Smart Load Matching"
          description="Our algorithm matches your empty trucks with the best loads along your preferred routes."
        />
        <FeatureCard
          icon={<FontAwesomeIcon icon={faMoneyBillWave} className="text-blue-600 text-2xl" />}
          title="Fair Bidding System"
          description="Competitive bidding ensures you get the best price whether you're shipping or transporting goods."
        />
        <FeatureCard
          icon={<FontAwesomeIcon icon={faMapMarkedAlt} className="text-blue-600 text-2xl" />}
          title="Route Optimization"
          description="Smart route suggestions to maximize efficiency and minimize empty backhauls."
        />
        <FeatureCard
          icon={<FontAwesomeIcon icon={faBell} className="text-blue-600 text-2xl" />}
          title="Real-time Notifications"
          description="Instant alerts for new loads, bid acceptances, and important updates."
        />
        <FeatureCard
          icon={<FontAwesomeIcon icon={faFileInvoiceDollar} className="text-blue-600 text-2xl" />}
          title="Digital Documentation"
          description="All your contracts, invoices, and proof of delivery in one place for easy access."
        />
        <FeatureCard
          icon={<FontAwesomeIcon icon={faShieldAlt} className="text-blue-600 text-2xl" />}
          title="Verified Partners"
          description="We verify all users to ensure you're working with trusted truckers and shippers."
        />
      </div>
    </div>
  </section>
);

export default Features;