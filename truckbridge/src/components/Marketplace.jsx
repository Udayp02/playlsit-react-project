import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faWeight, 
  faIndianRupeeSign, 
  faMapMarkerAlt, 
  faClock 
} from '@fortawesome/free-solid-svg-icons';

const LoadCard = ({ 
  product, 
  weight, 
  price, 
  route, 
  duration, 
  bids, 
  onBidClick,
  imageSrc,
  alt
}) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden hover:transform hover:-translate-y-1 hover:shadow-lg transition-all">
    <div className="relative">
      <img 
        src={imageSrc} 
        alt={alt} 
        className="w-full h-48 object-cover"
      />
      <div className="absolute top-2 right-2 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full">
        Available
      </div>
    </div>
    <div className="p-6">
      <h3 className="text-xl font-bold text-gray-900 mb-2">{product}</h3>
      <div className="flex items-center text-gray-600 mb-2">
        <FontAwesomeIcon icon={faWeight} className="mr-2" />
        <span>{weight} Tonnes</span>
      </div>
      <div className="flex items-center text-gray-600 mb-4">
        <FontAwesomeIcon icon={faIndianRupeeSign} className="mr-2" />
        <span>₹{price} per tonne</span>
      </div>
      <div className="flex items-center justify-between text-sm mb-4">
        <div className="flex items-center text-gray-600">
          <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-1" />
          <span>{route}</span>
        </div>
        <div className="text-gray-600">
          <FontAwesomeIcon icon={faClock} className="mr-1" />
          <span>{duration}</span>
        </div>
      </div>
      <div className="flex justify-between items-center">
        <div>
          <span className="text-sm text-gray-600">{bids} bids</span>
        </div>
        <button 
          onClick={onBidClick}
          className="px-4 py-2 bg-blue-600 text-white rounded-md text-sm hover:bg-blue-700"
        >
          Place Bid
        </button>
      </div>
    </div>
  </div>
);

const Marketplace = ({ showBidForm }) => {
  const loads = [
    {
      product: "Rice Bags",
      weight: "20",
      price: "2,500",
      route: "Mumbai to Delhi",
      duration: "2 days",
      bids: "5",
      imageSrc: "https://placehold.co/600x400",
      alt: "Warehouse with stacked bags of rice ready for transportation"
    },
    {
      product: "Machine Parts",
      weight: "15",
      price: "3,200",
      route: "Pune to Hyderabad",
      duration: "3 days",
      bids: "3",
      imageSrc: "https://placehold.co/600x400",
      alt: "Manufacturing plant with metal components packaged on pallets"
    },
    {
      product: "Electronic Goods",
      weight: "10",
      price: "4,500",
      route: "Bangalore to Chennai",
      duration: "2 days",
      bids: "8",
      imageSrc: "https://placehold.co/600x400",
      alt: "Truck container being loaded with large electrical appliances"
    }
  ];

  return (
    <section id="marketplace" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Current Available Loads</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Browse some of the current loads looking for transport
          </p>
        </div>
        
        <div className="mb-8">
          <div className="flex flex-wrap -mx-2 mb-6">
            <div className="w-full md:w-auto px-2 mb-2 md:mb-0">
              <select className="w-full px-4 py-2 border border-gray-300 rounded-md">
                <option>All Locations</option>
                <option>Mumbai</option>
                <option>Delhi</option>
                <option>Bangalore</option>
                <option>Chennai</option>
                <option>Hyderabad</option>
              </select>
            </div>
            <div className="w-full md:w-auto px-2 mb-2 md:mb-0">
              <select className="w-full px-4 py-2 border border-gray-300 rounded-md">
                <option>All Load Types</option>
                <option>Full Truck Load</option>
                <option>Partial Load</option>
              </select>
            </div>
            <div className="w-full md:w-auto px-2 mb-2 md:mb-0">
              <select className="w-full px-4 py-2 border border-gray-300 rounded-md">
                <option>All Truck Types</option>
                <option>Trailer</option>
                <option>Container</option>
                <option>Tanker</option>
                <option>Pickup</option>
              </select>
            </div>
            <div className="w-full md:w-auto px-2 mb-2 md:mb-0">
              <button className="w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                Apply Filters
              </button>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {loads.map((load, index) => (
            <LoadCard 
              key={index}
              product={load.product}
              weight={load.weight}
              price={load.price}
              route={load.route}
              duration={load.duration}
              bids={load.bids}
              onBidClick={showBidForm}
              imageSrc={load.imageSrc}
              alt={load.alt}
            />
          ))}
        </div>
        
        <div className="text-center mt-10">
          <button className="px-6 py-3 border border-blue-600 text-blue-600 rounded-md hover:bg-blue-50 font-medium">
            View All Loads (124)
          </button>
        </div>
      </div>
    </section>
  );
};

export default Marketplace;