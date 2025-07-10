import React, { useRef, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import HomeSection from "./components/HomeSection";
import BookingSection from "./components/BookingSection";
import PaymentSection from "./components/PaymentSection";
import DriveSection from "./components/DriveSection";
import CarsSection from "./components/CarsSection";
import SubmitTripSection from "./components/SubmitTripSection";
import ReceiptSection from "./components/ReceiptSection";

const initialSection = "home";

function App() {
  const [section, setSection] = useState(initialSection);
  const [receiptContent, setReceiptContent] = useState("");
  const [booking, setBooking] = useState({
    car: "",
    name: "",
    email: "",
    phone: "",
  });
  const [payment, setPayment] = useState({
    cardName: "",
    cardNumber: "",
    cardExpiry: "",
    cardCVV: "",
  });
  const [trip, setTrip] = useState({
    pickup: "",
    dropoff: "",
    pickupDate: "",
    dropoffDate: "",
  });
  const receiptRef = useRef();

  // Section navigation
  const showSection = (sec) => {
    setSection(sec);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Booking form handler
  const handleBooking = (e) => {
    e.preventDefault();
    const { car, name, email, phone } = booking;
    if (!car || !name.trim() || !email.trim() || !phone.trim()) {
      alert("Please fill all booking fields.");
      return;
    }
    alert(
      `Booking confirmed for ${car}.\nName: ${name}\nEmail: ${email}\nPhone: ${phone}`
    );
    showSection("payment");
  };

  // Payment form handler
  const handlePayment = (e) => {
    e.preventDefault();
    const { cardName, cardNumber, cardExpiry, cardCVV } = payment;
    if (
      !cardName.trim() ||
      !cardNumber.trim() ||
      !cardExpiry.trim() ||
      !cardCVV.trim()
    ) {
      alert("Please fill all payment fields.");
      return;
    }
    const cardNumberPattern = /^\d{4} \d{4} \d{4} \d{4}$/;
    if (!cardNumberPattern.test(cardNumber)) {
      alert("Card number format invalid. Use '1234 5678 9012 3456'.");
      return;
    }
    const expiryPattern = /^(0[1-9]|1[0-2])\/\d{2}$/;
    if (!expiryPattern.test(cardExpiry)) {
      alert("Expiry date format invalid. Use 'MM/YY'.");
      return;
    }
    const cvvPattern = /^\d{3}$/;
    if (!cvvPattern.test(cardCVV)) {
      alert("CVV must be 3 digits.");
      return;
    }
    alert("Payment successful! Thank you.");
    showSection("drive");
  };

  // Trip form handler
  const handleTripSubmit = (e) => {
    e.preventDefault();
    const { pickup, dropoff, pickupDate, dropoffDate } = trip;
    if (
      !pickup.trim() ||
      !dropoff.trim() ||
      !pickupDate ||
      !dropoffDate
    ) {
      alert("Please fill all trip fields.");
      return;
    }
    if (pickupDate > dropoffDate) {
      alert("Drop off date must be after pick up date.");
      return;
    }
    alert(
      `Trip submitted:\nPick up: ${pickup} on ${pickupDate}\nDrop off: ${dropoff} on ${dropoffDate}`
    );
    const receiptHtml = `
      <h3 class="text-white font-semibold mb-2">Trip Receipt</h3>
      <p><strong>Pick up location:</strong> ${pickup}</p>
      <p><strong>Drop off location:</strong> ${dropoff}</p>
      <p><strong>Pick up date:</strong> ${pickupDate}</p>
      <p><strong>Drop off date:</strong> ${dropoffDate}</p>
      <p class="mt-4 text-red-600 font-semibold">Thank you for choosing EasyGet!</p>
    `;
    setReceiptContent(receiptHtml);
    showSection("receipt");
  };

  // Print receipt
  const printReceipt = () => {
    const content = receiptRef.current?.innerHTML;
    if (
      !content ||
      content.trim() === "" ||
      content.includes("No receipt to display")
    ) {
      alert("No receipt available to print.");
      return;
    }
    const printWindow = window.open("", "Print Receipt", "width=600,height=400");
    printWindow.document.write(`
      <html>
        <head>
          <title>Receipt</title>
          <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap" rel="stylesheet">
          <style>
            body { font-family: 'Montserrat', sans-serif; background: #1a1a1a; color: white; padding: 20px; }
            h3 { color: #dc2626; }
          </style>
        </head>
        <body>
          ${content}
        </body>
      </html>
    `);
    printWindow.document.close();
    printWindow.focus();
    printWindow.print();
  };

  // Clear receipt
  const clearReceipt = () => setReceiptContent("");

  // Helper for showing/hiding sections
  const sectionVisible = (sec) => section === sec ? "" : "hidden";

  return (
    <div className="bg-gradient-to-br from-[#1a1a1a] via-[#2a2a2a] to-[#3a1a1a] text-white min-h-screen flex flex-col">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex-grow">
        <Navbar showSection={showSection} />
        <main className="mt-10 max-w-7xl mx-auto">
          <div className={sectionVisible("home")}>
            <HomeSection showSection={showSection} setBooking={setBooking} />
          </div>
          <div className={sectionVisible("booking")}>
            <BookingSection booking={booking} setBooking={setBooking} handleBooking={handleBooking} />
          </div>
          <div className={sectionVisible("payment")}>
            <PaymentSection payment={payment} setPayment={setPayment} handlePayment={handlePayment} />
          </div>
          <div className={sectionVisible("drive")}>
            <DriveSection showSection={showSection} />
          </div>
          <div className={sectionVisible("cars")}>
            <CarsSection showSection={showSection} setBooking={setBooking} />
          </div>
          <div className={sectionVisible("trip")}>
            <SubmitTripSection trip={trip} setTrip={setTrip} handleTripSubmit={handleTripSubmit} />
          </div>
          <div className={sectionVisible("receipt")}>
            <ReceiptSection
              receiptContent={receiptContent}
              receiptRef={receiptRef}
              printReceipt={printReceipt}
              clearReceipt={clearReceipt}
            />
          </div>
        </main>
      </div>
      <footer className="mt-16 border-t border-red-700 pt-6 pb-10 text-gray-400 text-xs max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center">
        <div className="flex items-center space-x-1 mb-4 sm:mb-0">
          <span className="text-red-600 font-extrabold text-lg">Easy</span>
          <span className="font-extrabold text-lg text-white">Get.</span>
          <span>2023 © All rights reserved</span>
        </div>
        <div className="flex space-x-6">
          <button onClick={() => alert("Quick Links clicked")} className="hover:text-red-600 cursor-pointer">
            Quick Links
          </button>
          <button onClick={() => alert("FAQ clicked")} className="hover:text-red-600 cursor-pointer">
            FAQ
          </button>
          <button onClick={() => showSection("home")} className="hover:text-red-600 cursor-pointer">
            Home
          </button>
          <button onClick={() => alert("Privacy clicked")} className="hover:text-red-600 cursor-pointer">
            Privacy
          </button>
          <button onClick={() => alert("Terms & Conditions clicked")} className="hover:text-red-600 cursor-pointer">
            Terms &amp; Conditions
          </button>
          <button onClick={() => alert("Contact clicked")} className="hover:text-red-600 cursor-pointer">
            Contact
          </button>
        </div>
        <div className="flex space-x-4 mt-4 sm:mt-0">
          <button aria-label="Facebook" onClick={() => alert("Facebook clicked")} className="hover:text-red-600 cursor-pointer">
            <i className="fab fa-facebook-f"></i>
          </button>
          <button aria-label="Twitter" onClick={() => alert("Twitter clicked")} className="hover:text-red-600 cursor-pointer">
            <i className="fab fa-twitter"></i>
          </button>
          <button aria-label="Instagram" onClick={() => alert("Instagram clicked")} className="hover:text-red-600 cursor-pointer">
            <i className="fab fa-instagram"></i>
          </button>
        </div>
      </footer>
    </div>
  );
}

export default App;