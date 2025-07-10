import React from "react";

const carList = [
  "Kia Sonet",
  "Brigado Honda",
  "Honda Car",
  "Mazda 6",
  "BMW 3 Series",
  "Audi R8",
  "Tesla Model S",
  "Ford Mustang",
];

const BookingSection = ({ booking, setBooking, handleBooking }) => (
  <section tabIndex={0} aria-label="Booking Process">
    <h2 className="text-red-600 font-semibold text-lg mb-4">Booking Process</h2>
    <p className="text-gray-300 text-sm max-w-3xl mx-auto mb-6">
      Welcome to EasyGet! To book your car, select your preferred vehicle from
      our collection, provide your details, and proceed to payment. Once
      payment is confirmed, your car will be ready for pickup.
    </p>
    <div className="max-w-3xl mx-auto bg-[#2a1a1a] rounded-md p-6 shadow-lg">
      <form onSubmit={handleBooking} className="space-y-4 text-xs">
        <label className="block">
          <span className="text-gray-300">Select Car</span>
          <select
            required
            className="w-full mt-1 rounded bg-[#1a1a1a] border border-gray-700 px-3 py-2 focus:outline-none focus:ring-1 focus:ring-red-600"
            value={booking.car}
            onChange={e => setBooking(b => ({ ...b, car: e.target.value }))}
          >
            <option value="" disabled>Select a car</option>
            {carList.map(car => (
              <option key={car} value={car}>{car}</option>
            ))}
          </select>
        </label>
        <label className="block">
          <span className="text-gray-300">Full Name</span>
          <input
            type="text"
            placeholder="Your full name"
            required
            className="w-full mt-1 rounded bg-[#1a1a1a] border border-gray-700 px-3 py-2 focus:outline-none focus:ring-1 focus:ring-red-600"
            value={booking.name}
            onChange={e => setBooking(b => ({ ...b, name: e.target.value }))}
          />
        </label>
        <label className="block">
          <span className="text-gray-300">Email</span>
          <input
            type="email"
            placeholder="you@example.com"
            required
            className="w-full mt-1 rounded bg-[#1a1a1a] border border-gray-700 px-3 py-2 focus:outline-none focus:ring-1 focus:ring-red-600"
            value={booking.email}
            onChange={e => setBooking(b => ({ ...b, email: e.target.value }))}
          />
        </label>
        <label className="block">
          <span className="text-gray-300">Phone Number</span>
          <input
            type="tel"
            placeholder="+1234567890"
            required
            className="w-full mt-1 rounded bg-[#1a1a1a] border border-gray-700 px-3 py-2 focus:outline-none focus:ring-1 focus:ring-red-600"
            value={booking.phone}
            onChange={e => setBooking(b => ({ ...b, phone: e.target.value }))}
          />
        </label>
        <button
          type="submit"
          className="bg-red-600 hover:bg-red-700 text-white font-semibold px-4 py-2 rounded w-full cursor-pointer"
        >
          Confirm Booking
        </button>
      </form>
    </div>
  </section>
);

export default BookingSection;