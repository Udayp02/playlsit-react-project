import React from "react";

const PaymentSection = ({ payment, setPayment, handlePayment }) => (
  <section tabIndex={0} aria-label="Payment">
    <h2 className="text-red-600 font-semibold text-lg mb-4">Payment</h2>
    <p className="text-gray-300 text-sm max-w-3xl mx-auto mb-6">
      After confirming your booking, please proceed with the payment. We accept
      all major credit cards and PayPal.
    </p>
    <div className="max-w-3xl mx-auto bg-[#2a1a1a] rounded-md p-6 shadow-lg">
      <form onSubmit={handlePayment} className="space-y-4 text-xs">
        <label className="block">
          <span className="text-gray-300">Cardholder Name</span>
          <input
            type="text"
            placeholder="Name on card"
            required
            className="w-full mt-1 rounded bg-[#1a1a1a] border border-gray-700 px-3 py-2 focus:outline-none focus:ring-1 focus:ring-red-600"
            value={payment.cardName}
            onChange={e => setPayment(p => ({ ...p, cardName: e.target.value }))}
          />
        </label>
        <label className="block">
          <span className="text-gray-300">Card Number</span>
          <input
            type="text"
            placeholder="1234 5678 9012 3456"
            pattern="\d{4} \d{4} \d{4} \d{4}"
            required
            className="w-full mt-1 rounded bg-[#1a1a1a] border border-gray-700 px-3 py-2 focus:outline-none focus:ring-1 focus:ring-red-600"
            value={payment.cardNumber}
            onChange={e => setPayment(p => ({ ...p, cardNumber: e.target.value }))}
          />
        </label>
        <div className="flex space-x-4">
          <label className="flex-1">
            <span className="text-gray-300">Expiry Date</span>
            <input
              type="text"
              placeholder="MM/YY"
              pattern="(0[1-9]|1[0-2])\/\d{2}"
              required
              className="w-full mt-1 rounded bg-[#1a1a1a] border border-gray-700 px-3 py-2 focus:outline-none focus:ring-1 focus:ring-red-600"
              value={payment.cardExpiry}
              onChange={e => setPayment(p => ({ ...p, cardExpiry: e.target.value }))}
            />
          </label>
          <label className="flex-1">
            <span className="text-gray-300">CVV</span>
            <input
              type="password"
              placeholder="123"
              pattern="\d{3}"
              required
              className="w-full mt-1 rounded bg-[#1a1a1a] border border-gray-700 px-3 py-2 focus:outline-none focus:ring-1 focus:ring-red-600"
              value={payment.cardCVV}
              onChange={e => setPayment(p => ({ ...p, cardCVV: e.target.value }))}
            />
          </label>
        </div>
        <button
          type="submit"
          className="bg-red-600 hover:bg-red-700 text-white font-semibold px-4 py-2 rounded w-full cursor-pointer"
        >
          Pay Now
        </button>
      </form>
    </div>
  </section>
);

export default PaymentSection;