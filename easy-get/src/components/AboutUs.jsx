import React from "react";

const AboutUs = ({ showSection }) => (
  <section className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-8 items-center" aria-label="About Us">
    <div className="lg:col-span-2 space-y-4">
      <h2 className="text-red-600 font-semibold text-sm">About Us</h2>
      <h3 className="text-white font-semibold text-xl max-w-xl">
        We have 120+ special car collection
      </h3>
      <p className="text-gray-400 text-xs max-w-xl">
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
        sint. Velit officia consequat duis enim velit mollit. Exercitation
        veniam consequat sunt nostrud amet.
      </p>
      <button
        onClick={() => showSection("cars")}
        className="bg-red-600 hover:bg-red-700 text-white text-xs font-semibold px-4 py-2 rounded cursor-pointer"
      >
        See all Car
      </button>
    </div>
    <div>
      <img
        alt="Car collection parked in row in parking lot"
        className="rounded"
        height="150"
        src="https://storage.googleapis.com/a1aa/image/855b2ccc-6218-493d-bcda-283721bdc621.jpg"
        width="300"
      />
    </div>
  </section>
);

export default AboutUs;