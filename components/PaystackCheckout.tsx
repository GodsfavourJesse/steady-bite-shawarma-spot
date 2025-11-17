"use client";

import { useEffect, useState } from "react";
import { useCart } from "@/context/CartContext"; // Ensure this provides { cartItems, total }

declare global {
  interface Window {
    PaystackPop?: any;
  }
}

const PaystackCheckout = () => {
  const { total } = useCart();
  const [paystackReady, setPaystackReady] = useState(false);

  // ✅ Load Paystack script dynamically once
  useEffect(() => {
    const existingScript = document.querySelector(
      'script[src="https://js.paystack.co/v1/inline.js"]'
    );
    if (existingScript) {
      setPaystackReady(true);
      return;
    }

    const script = document.createElement("script");
    script.src = "https://js.paystack.co/v1/inline.js";
    script.async = true;
    script.onload = () => setPaystackReady(true);
    document.body.appendChild(script);

    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  // ✅ Handle payment
  const payWithPaystack = () => {
    if (!paystackReady || !window.PaystackPop) {
      alert("Payment system not ready yet. Please wait a few seconds and try again.");
      return;
    }

    const handler = window.PaystackPop.setup({
      key: process.env.NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY || "",
      email: "customer@email.com", // you can replace this with logged-in user email
      amount: Math.floor(total * 100), // Convert to kobo
      currency: "NGN",
      ref: "SB" + Date.now(), // unique reference
      label: "Steady Bite Shawarma Spot",
      callback: function (response: any) {
        alert(`✅ Payment successful! Reference: ${response.reference}`);
        // TODO: Optionally call your backend to verify the transaction here
      },
      onClose: function () {
        alert("❌ Payment window closed.");
      },
    });

    handler.openIframe();
  };

  return (
    <button
      onClick={payWithPaystack}
      disabled={!paystackReady}
      className={`${
        paystackReady
          ? "bg-green-600 hover:bg-green-700"
          : "bg-gray-400 cursor-not-allowed"
      } text-white px-6 py-3 rounded-xl transition-all`}
    >
      {paystackReady
        ? `Pay ₦${total.toLocaleString()} with Paystack`
        : "Loading Payment..."}
    </button>
  );
};

export default PaystackCheckout;
