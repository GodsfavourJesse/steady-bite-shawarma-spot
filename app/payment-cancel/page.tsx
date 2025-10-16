"use client";

import { motion } from "framer-motion";
import { XCircle } from "lucide-react";

export default function PaymentCancelPage() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center text-center bg-gray-50 px-6">
            {/* ❌ Cancel Icon */}
            <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.4 }}
                className="bg-white p-8 rounded-2xl shadow-lg max-w-md w-full"
            >
                <XCircle className="text-red-600 w-16 h-16 mx-auto mb-3" />

                {/* 🧾 Heading */}
                <h1 className="text-2xl font-semibold text-gray-800 mb-2">
                    Payment Cancelled
                </h1>

                {/* 💬 Message */}
                <p className="text-gray-600 mb-5">
                    You cancelled your payment or something went wrong.  
                    Don’t worry — you can always try again when ready.
                </p>

                {/* 🛍️ Action Buttons */}
                <div className="flex flex-col gap-3">
                    <motion.a
                        href="/"
                        whileTap={{ scale: 0.95 }}
                        className="bg-orange-600 text-white px-5 py-3 rounded-lg hover:bg-orange-700 transition-all"
                    >
                        Back to Home
                    </motion.a>

                    <motion.a
                        href="/cart"
                        whileTap={{ scale: 0.95 }}
                        className="text-orange-700 font-medium hover:underline"
                    >
                        Return to Cart
                    </motion.a>
                </div>
            </motion.div>

            {/* ⚡ Subtle micro animation background */}
            <motion.div
                className="absolute bottom-10 text-gray-400 text-sm"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
            >
                © {new Date().getFullYear()} Steady Bite — Where shawarma dreams come true.
            </motion.div>
        </div>
    );
}
