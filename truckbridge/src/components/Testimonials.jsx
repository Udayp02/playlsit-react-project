import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';

const TestimonialCard = ({ name, role, quote, rating, imageSrc, alt }) => (
  <div className="bg-white p-8 rounded-lg shadow-md">
    <div className="flex items-center mb-4">
      <img 
        src={imageSrc} 
        alt={alt}
        className="w-12 h-12 rounded-full mr-4"
      />
      <div>
        <h4 className="font-bold">{name}</h4>
        <p className="text-gray-600 text-sm">{role}</p>
      </div>
    </div>
    <div className="text-gray-700 mb-4">
      {quote}
    </div>
    <div className="text-yellow-400">
      {[...Array(5)].map((_, i) => {
        if (rating >= i + 1) {
          return <FontAwesomeIcon key={i} icon={faStar} />;
        } else if (rating > i) {
          return <FontAwesomeIcon key={i} icon={faStarHalfAlt} />;
        } else {
          return <FontAwesomeIcon key={i} icon={faStar} className="text-gray-300" />;
        }
      })}
    </div>
  </div>
);

const Testimonials = () => {
  const testimonials = [
    {
      name: "Rajesh Kumar",
      role: "Truck Owner - Bangalore",
      quote: "Since using TruckBridge, I've reduced my empty return trips by 60%. The bidding system helps me get fair prices for my services. Highly recommended!",
      rating: 5,
      imageSrc: "https://placehold.co/50x50",
      alt: "Portrait of Rajesh Kumar, male truck owner from Bangalore with beard"
    },
    {
      name: "Priya Sharma",
      role: "Textile Exporter - Mumbai",
      quote: "We've reduced our transport costs by 15% since switching to TruckBridge. The platform makes it easy to compare bids and choose reliable transporters.",
      rating: 5,
      imageSrc: "https://placehold.co/50x50",
      alt: "Portrait of Priya Sharma, female business owner from Mumbai in professional attire"
    },
    {
      name: "Sameer Patel",
      role: "Fleet Manager - Delhi",
      quote: "Managing 12 trucks became effortless with TruckBridge. The load matching and documentation features save us hours every week. Excellent platform!",
      rating: 4.5,
      imageSrc: "https://placehold.co/50x50",
      alt: "Portrait of Sameer Patel, male fleet manager from Delhi wearing a shirt"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">What Our Users Say</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hear from truck owners and load providers who are saving time and money with TruckBridge
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard 
              key={index}
              name={testimonial.name}
              role={testimonial.role}
              quote={testimonial.quote}
              rating={testimonial.rating}
              imageSrc={testimonial.imageSrc}
              alt={testimonial.alt}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;