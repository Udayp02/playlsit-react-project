import React from "react";

const SubmitTripSection = ({ trip, setTrip, handleTripSubmit }) => (
  <section tabIndex={0} aria-label="Submit Trip">
    <h2 className="text-red-600 font-semibold text-lg mb-4">Submit Trip</h2>
    <p className="text-gray-300 text-sm max-w-3xl mx-auto mb-6">
      Submit your trip details below. We will generate a receipt for your
      records.
    </p>
    <div className="max-w-3xl mx-auto bg-[#2a1a1a] rounded-md p-6 shadow-lg">
      <form onSubmit={handleTripSubmit} className="space-y-4 text-xs">
        <label className="block">
          <span className="text-gray-300">Pick up location</span>
          <input
            type="text"
            placeholder="Pick up location"
            required
            className="w-full mt-1 rounded bg-[#1a1a1a] border border-gray-700 px-3 py-2 focus:outline-none focus:ring-1 focus:ring-red-600"
            value={trip.pickup}
            onChange={e => setTrip(t => ({ ...t, pickup: e.target.value }))}
          />
        </label>
        <label className="block">
          <span className="text-gray-300">Drop off location</span>
          <input
            type="text"
            placeholder="Drop off location"
            required
            className="w-full mt-1 rounded bg-[#1a1a1a] border border-gray-700 px-3 py-2 focus:outline-none focus:ring-1 focus:ring-red-600"
            value={trip.dropoff}
            onChange={e => setTrip(t => ({ ...t, dropoff: e.target.value }))}
          />
        </label>
        <label className="block">
          <span className="text-gray-300">Pick up date</span>
          <input
            type="date"
            required
            className="w-full mt-1 rounded bg-[#1a1a1a] border border-gray-700 px-3 py-2 focus:outline-none focus:ring-1 focus:ring-red-600"
            value={trip.pickupDate}
            onChange={e => setTrip(t => ({ ...t, pickupDate: e.target.value }))}
          />
        </label>
        <label className="block">
          <span className="text-gray-300">Drop off date</span>
          <input
            type="date"
            required
            className="w-full mt-1 rounded bg-[#1a1a1a] border border-gray-700 px-3 py-2 focus:outline-none focus:ring-1 focus:ring-red-600"
            value={trip.dropoffDate}
            onChange={e => setTrip(t => ({ ...t, dropoffDate: e.target.value }))}
          />
        </label>
        <button
          type="submit"
          className="bg-red-600 hover:bg-red-700 text-white font-semibold px-4 py-2 rounded w-full cursor-pointer"
        >
          Submit Trip
        </button>
      </form>
    </div>
  </section>
);

export default SubmitTripSection;