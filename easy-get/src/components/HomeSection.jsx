import React from "react";
import AboutUs from "./AboutUs";
import CarCollectionPreview from "./CarCollectionPreview";

const HomeSection = ({ showSection, setBooking }) => (
  <section tabIndex={0}>
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
      {/* Left side text and car image */}
      <section className="flex flex-col justify-center space-y-6">
        <h1 className="text-white text-3xl sm:text-4xl font-semibold leading-tight">
          Search car in your area<br />
          and get rent with <span className="text-red-600">EasyGet.</span>
        </h1>
        <p className="text-gray-300 text-xs sm:text-sm max-w-md">
          Drive performance and your cross-functional collaboration with easy
          to use dashboard, data visualizations and automated insights in one
          click.
        </p>
        <div className="flex items-center space-x-4">
          <button
            onClick={() => showSection("booking")}
            className="bg-red-600 hover:bg-red-700 text-white text-xs font-semibold px-4 py-2 rounded cursor-pointer"
          >
            Booking Now
          </button>
          <button
            onClick={() => showSection("cars")}
            className="text-gray-300 text-xs font-semibold hover:text-red-600 cursor-pointer"
          >
            See all car
          </button>
        </div>
        <div className="flex flex-wrap items-center space-x-4 space-y-2 sm:space-y-0 max-w-xl" aria-label="Car brand logos">
          {[
            "ff493b41-d186-484d-ddfa-9a5f28de3e27",
            "d31782c7-acb8-4f02-53b8-4eabb10fa77a",
            "4c6ea7d7-3efa-4058-9d21-75ab87f2503e",
            "05fcc406-61c7-4872-f090-4406e4062a4e",
            "44acc541-287d-42ed-eb1a-98d6f1209b36",
            "4f5004ed-5da7-4cac-e7da-97453a44f634",
            "06c40d71-b7e6-4612-c580-1296bc252791",
            "12752525-c961-4015-203e-80b5a8356872",
            "c01076e3-8829-4a38-2dc6-234516274317",
          ].map((id) => (
            <img
              key={id}
              alt="Car brand logo"
              className="h-5 w-auto"
              height="20"
              src={`https://storage.googleapis.com/a1aa/image/${id}.jpg`}
              width="40"
            />
          ))}
        </div>
      </section>
      <section className="flex justify-center lg:justify-end">
        <img
          alt="Red sporty Audi car front view on dark background"
          className="w-full max-w-md object-contain"
          height="200"
          src="https://storage.googleapis.com/a1aa/image/4ff3e5ad-ff12-4604-fbf9-d6c75c1c8c33.jpg"
          width="400"
        />
      </section>
    </div>
    <AboutUs showSection={showSection} />
    <CarCollectionPreview showSection={showSection} setBooking={setBooking} />
  </section>
);

export default HomeSection;