"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { calculateDeliveryFee } from "@/components/DeliveryFeeCalculator";
import { X, MapPin } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface OpayCheckoutModalProps {
    product: {
        id: number;
        name: string;
        image?: string;
        price: number;
        quantity: number;
    };
}

export default function OpayCheckoutModal({ product }: OpayCheckoutModalProps) {
    const [open, setOpen] = useState(false);
    const [address, setAddress] = useState("");

     // 🧮 Calculate subtotal and delivery fee
    const subtotal = product.price * product.quantity;
    const deliveryFee = calculateDeliveryFee(product.quantity);
    const totalPrice = subtotal + deliveryFee;

    // 🏠 Load delivery address from localStorage
    useEffect(() => {
        const savedAddress = localStorage.getItem("deliveryAddress");
        if (savedAddress) setAddress(savedAddress);
    }, [open]);

    const handlePayment = async () => {
        try {
            const res = await fetch("/api/initiate-payment", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    amount: totalPrice,
                    currency: "EGY",
                    reference: `SB-${Date.now()}`,
                    customer: {
                    name: "Customer Name",
                    email: "customer@email.com",
                    phoneNumber: "09012345678",
                    },
                    callbackUrl: "http://localhost:3000/payment-success",
                    cancelUrl: "http://localhost:3000/payment-cancel",
                    description: `Payment for ${product.name}`,
                }),
            });

            const data = await res.json();
            if (data.paymentUrl) {
                window.open(data.paymentUrl, "_blank");
            } else {
                console.error("Payment init failed:", data);
                alert("Payment failed: " + (data.error || "Unknown error"));
            }
        } catch (err) {
            console.error("Payment error:", err);
            alert("An error occurred while starting payment.");
        }
    };



    return (
        <>
            {/* 🟠 Order Button */}
            <motion.button
                onClick={() => setOpen(true)}
                whileTap={{ scale: 0.95 }}
                className="bg-orange-600 text-white px-4 py-4 rounded-lg hover:bg-orange-700 transition-all"
            >
                Order Now
            </motion.button>

            {/* 💳 Modal */}
            <AnimatePresence>
                {open && (
                    <motion.div
                        className="fixed inset-0 bg-black/50 md:bg-black/70 flex items-center justify-center z-50"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            transition={{ type: "spring", duration: 0.4 }}
                            className="bg-white rounded-2xl p-6 w-[90%] max-w-md shadow-2xl relative"
                        >
                            {/* ❌ Close */}
                            <button
                                onClick={() => setOpen(false)}
                                className="absolute top-4 right-5 text-gray-400 hover:text-gray-700 transition"
                            >
                                <X size={20} />
                            </button>

                            {/* 🛍️ Product Info */}
                            <div className="flex flex-col items-start mb-4">
                                {product.image && (
                                    <Image
                                        src={product.image}
                                        alt={product.name}
                                        width={120}
                                        height={120}
                                        className="rounded-lg mb-3"
                                    />
                                )}
                                <h2 className="text-[20px] font-semibold text-left text-gray-800 mb-2">
                                    Pay with <span className="text-green-700">Opay</span>
                                </h2>
                                <p className="text-gray-700 text-[14px]">
                                    You’re about to order{" "}
                                    <strong className="text-green-800">{product.name}</strong>.
                                </p>
                            </div>

                            {/* 💰 Summary */}
                            <motion.div
                                layout
                                className="bg-green-50 p-4 rounded-lg mb-4 border border-green-100 shadow-sm"
                            >
                                <div className="flex justify-between text-sm text-gray-700 mb-1">
                                    <span>Unit Price:</span>
                                    <span>₦{product.price.toLocaleString()}</span>
                                </div>
                                <div className="flex justify-between text-sm text-gray-700 mb-1">
                                    <span>Quantity:</span>
                                    <span>{product.quantity}</span>
                                </div>
                                <div className="flex justify-between text-sm text-gray-700 mb-1">
                                    <span>Delivery Fee:</span>
                                    <span className="font-medium text-green-700">
                                        ₦{deliveryFee.toLocaleString()}
                                    </span>
                                </div>
                                <div className="flex justify-between font-semibold text-green-800 text-lg border-t border-green-200 pt-2">
                                    <span>Total:</span>
                                    <motion.span
                                        key={totalPrice}
                                        initial={{ scale: 0.9, opacity: 0 }}
                                        animate={{ scale: 1, opacity: 1 }}
                                    >
                                        ₦{totalPrice.toLocaleString()}
                                    </motion.span>
                                </div>
                            </motion.div>

                            {/* 📍 Delivery Address */}
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.3 }}
                                className="flex items-start gap-3 bg-orange-50 border border-orange-100 p-3 rounded-lg shadow-sm mb-4"
                            >
                                <MapPin className="text-orange-700 mt-1" size={18} />
                                <div className="flex flex-col text-sm text-gray-700">
                                    <span className="font-semibold text-orange-800">
                                        Delivery Address
                                    </span>
                                    {address ? (
                                        <p className="text-gray-700 mt-1">{address}</p>
                                    ) : (
                                        <p className="italic text-gray-500 mt-1">
                                            No address found. Please add your delivery address first.
                                        </p>
                                    )}
                                </div>
                            </motion.div>

                            {/* ✅ Payment Action */}
                            <motion.button
                                whileTap={{ scale: 0.95 }}
                                onClick={handlePayment}
                                disabled={!address}
                                className={`w-full py-3 rounded-lg transition-all text-white ${
                                    address
                                        ? "bg-green-600 hover:bg-green-700"
                                        : "bg-gray-300 cursor-not-allowed"
                                }`}
                            >
                                Proceed to Pay ₦{totalPrice.toLocaleString()}
                            </motion.button>

                            {/* Cancel */}
                            <button
                                onClick={() => setOpen(false)}
                                className="mt-3 text-gray-600 hover:text-black w-full transition-all"
                            >
                                Cancel
                            </button>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
