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

        </>
    );
}
