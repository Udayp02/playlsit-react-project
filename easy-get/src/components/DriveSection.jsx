import React from "react";

const DriveSection = ({ showSection }) => (
  <section tabIndex={0} aria-label="Drive Information">
    <h2 className="text-red-600 font-semibold text-lg mb-4">Drive</h2>
    <p className="text-gray-300 text-sm max-w-3xl mx-auto mb-6">
      After payment confirmation, your car will be ready for pickup at the
      selected location. Please bring your driving license and booking receipt.
    </p>
    <div className="max-w-3xl mx-auto bg-[#2a1a1a] rounded-md p-6 shadow-lg text-xs">
      <ul className="list-disc list-inside space-y-2">
        <li>Pickup location and time will be confirmed via email.</li>
        <li>Ensure you have a valid driving license.</li>
        <li>Inspect the car before driving off.</li>
        <li>Contact support for any assistance during your drive.</li>
      </ul>
    </div>
    <div className="flex justify-center mt-6">
      <button
        onClick={() => showSection("trip")}
        className="bg-red-600 hover:bg-red-700 text-white font-semibold px-4 py-2 rounded cursor-pointer"
      >
        Submit Trip
      </button>
    </div>
  </section>
);

export default DriveSection;