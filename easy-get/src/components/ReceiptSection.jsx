import React from "react";

const ReceiptSection = ({ receiptContent, receiptRef, printReceipt, clearReceipt }) => (
  <section tabIndex={0} aria-label="Booking Receipt">
    <h2 className="text-red-600 font-semibold text-lg mb-4 text-center">
      Booking Receipt
    </h2>
    <div
      ref={receiptRef}
      className="max-w-3xl mx-auto bg-[#2a1a1a] rounded-md p-6 shadow-lg text-xs"
      tabIndex={0}
      aria-live="polite"
      dangerouslySetInnerHTML={{
        __html:
          receiptContent ||
          `<p class="text-gray-400 text-center">No receipt to display.</p>`,
      }}
    />
    <div className="max-w-3xl mx-auto mt-4 flex justify-center space-x-4">
      <button
        onClick={printReceipt}
        className="bg-red-600 hover:bg-red-700 text-white font-semibold px-4 py-2 rounded cursor-pointer"
        aria-label="Print Receipt"
      >
        Print Receipt
      </button>
      <button
        onClick={clearReceipt}
        className="bg-gray-700 hover:bg-gray-600 text-white font-semibold px-4 py-2 rounded cursor-pointer"
        aria-label="Clear Receipt"
      >
        Clear Receipt
      </button>
    </div>
  </section>
);

export default ReceiptSection;