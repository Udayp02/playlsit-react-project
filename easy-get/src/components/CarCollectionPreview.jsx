import React from "react";

const carList = [
  { name: "Kia Sonet", price: 80.5, img: "https://storage.googleapis.com/a1aa/image/d9b14934-f29c-44d9-78be-ca73b0578835.jpg" },
  { name: "Brigado Honda", price: 95.5, img: "https://storage.googleapis.com/a1aa/image/b7ff3ffc-a991-445c-e498-1657e12e80bd.jpg" },
  { name: "Honda Car", price: 75.5, img: "https://storage.googleapis.com/a1aa/image/06a987c3-65a3-4203-e6d6-9abb43181ae6.jpg" },
  { name: "Mazda 6", price: 90.5, img: "https://storage.googleapis.com/a1aa/image/4768b73a-bff9-4395-7c2c-d5bcda16721b.jpg" },
];

const CarCollectionPreview = ({ showSection, setBooking }) => (
  <section className="mt-16" aria-label="Our Car Collections Preview">
    <h3 className="text-red-600 font-semibold text-sm text-center mb-6">
      Our Car Collections
    </h3>
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 max-w-7xl mx-auto">
      {carList.map((car) => (
        <div
          key={car.name}
          className="bg-[#2a1a1a] rounded-md overflow-hidden shadow-lg cursor-pointer hover:shadow-red-600"
          tabIndex={0}
          role="button"
          aria-pressed="false"
          aria-label={`${car.name} car`}
          onClick={() => showSection("cars")}
        >
          <img
            alt={`${car.name} image`}
            className="w-full object-cover"
            height="120"
            src={car.img}
            width="200"
          />
          <div className="p-2 text-xs text-white">
            <p className="font-semibold">$ {car.price.toFixed(2)}</p>
            <p className="truncate">{car.name}</p>
            <button
              onClick={e => {
                e.stopPropagation();
                setBooking(b => ({ ...b, car: car.name }));
                showSection("booking");
              }}
              className="bg-red-600 w-full mt-1 py-1 rounded text-center text-xs font-semibold hover:bg-red-700 cursor-pointer"
              type="button"
            >
              Booking Now
            </button>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default CarCollectionPreview;