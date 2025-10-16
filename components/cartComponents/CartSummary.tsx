"use client";

import { motion } from "framer-motion";
import { calculateDeliveryFee } from "@/components/DeliveryFeeCalculator";

export default function CartSummary({
    subtotal,
    totalItems,
    // clearCart,
}: {
    subtotal: number;
    totalItems: number;
    // clearCart: () => void;
}) {
    // Auto-calculate delivery fee using your logic
    const deliveryFee = calculateDeliveryFee(totalItems);
    const total = subtotal + deliveryFee;

    return (
        <motion.div
            className="w-full py-6 md:p-8 flex flex-col gap-3 md:mt-12"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            viewport={{ once: true }}
        >
            <h3 className="font-semibold text-gray-900 text-lg md:text-xl">Order Summary</h3>

            <motion.div
                className="w-full flex flex-col gap-3 bg-[#F9FAFB] rounded-2xl shadow-sm p-5 border border-gray-100"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15, duration: 0.4 }}
            >
                {/* Subtotal */}
                <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                    <p className="text-gray-700 text-sm md:text-base">
                        Subtotal ({totalItems} {totalItems > 1 ? "items" : "item"})
                    </p>
                    <p className="text-gray-800 text-sm md:text-base font-semibold">
                        ₦{subtotal.toLocaleString()}
                    </p>
                </div>

                {/* Delivery Fee */}
                <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                    <p className="text-gray-700 text-sm md:text-base">Delivery Fee</p>
                    <p className="text-gray-800 text-sm md:text-base font-semibold">
                        ₦{deliveryFee.toLocaleString()}
                    </p>
                </div>

                {/* Total */}
                <div className="flex justify-between items-center mt-1">
                    <p className="text-gray-900 text-base md:text-lg font-medium">Total:</p>
                    <p className="text-gray-900 text-base md:text-lg font-bold">
                        ₦{total.toLocaleString()}
                    </p>
                </div>
            </motion.div>

            {/* Checkout + Clear Cart */}
            <motion.div
                className="flex flex-col gap-3 mt-3 md:flex-row md:gap-6"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25, duration: 0.4 }}
            >
                <motion.button
                    whileTap={{ scale: 0.96 }}
                    whileHover={{ scale: 1.03 }}
                    className="md:w-[250px] bg-orange-600 text-white rounded-[10px] py-2.5 text-sm md:text-base font-medium hover:bg-orange-700 shadow-sm hover:shadow-md transition-all duration-300"
                >
                    Checkout with Opay
                </motion.button>

                {/* <motion.button
                    whileTap={{ scale: 0.95 }}
                    className="md:w-[150px] bg-gray-200 text-gray-700 rounded-[10px] py-2.5 text-sm md:text-base font-medium hover:bg-gray-300 transition-all"
                    onClick={clearCart}
                >
                    Clear Cart
                </motion.button> */}
            </motion.div>
        </motion.div>
    );
}
