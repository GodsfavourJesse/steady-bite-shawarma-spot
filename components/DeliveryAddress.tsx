"use client";

import { useState, useEffect } from "react";
import { Pencil, Check, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function DeliveryAddress() {
    const [isEditing, setIsEditing] = useState(false);
    const [address, setAddress] = useState("");
    const [tempAddress, setTempAddress] = useState("");

    // 🔹 Load address from localStorage on component mount
    useEffect(() => {
        const savedAddress = localStorage.getItem("deliveryAddress");
        if (savedAddress) setAddress(savedAddress);
    }, []);

    // 🔹 Save address to localStorage when updated
    const handleSave = () => {
        setAddress(tempAddress);
        localStorage.setItem("deliveryAddress", tempAddress);
        setIsEditing(false);
    };

    const handleEdit = () => {
        setTempAddress(address);
        setIsEditing(true);
    };

    const handleCancel = () => {
        setIsEditing(false);
    };

    return (
        <motion.div
            className="w-full flex flex-col gap-2 mt-4 md:mt-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            viewport={{ once: true }}
        >
            {/* Label */}
            <h4 className="font-semibold text-[16px] md:text-base">
                Delivery Address
            </h4>

            {/* Input / Display Box */}
            <div className="relative w-full">
                <AnimatePresence mode="wait">
                    {isEditing ? (
                        <motion.div
                            key="edit"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.3 }}
                            className="flex items-center gap-2"
                        >
                            <input
                                type="text"
                                value={tempAddress}
                                onChange={(e) => setTempAddress(e.target.value)}
                                placeholder="Enter your delivery address"
                                className="w-full h-[3em] text-[13px] md:text-[14px] outline-none px-4 text-gray-800 bg-white rounded-xl border border-orange-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-100 transition-all placeholder:text-gray-400 shadow-sm"
                            />
                            <div className="flex items-center gap-1">
                                <motion.button
                                    whileTap={{ scale: 0.9 }}
                                    whileHover={{ scale: 1.1 }}
                                    onClick={handleSave}
                                    className="p-2 bg-orange-600 text-white rounded-full shadow-sm hover:bg-orange-700 transition"
                                    title="Save"
                                >
                                    <Check size={16} />
                                </motion.button>

                                <motion.button
                                    whileTap={{ scale: 0.9 }}
                                    whileHover={{ scale: 1.1 }}
                                    onClick={handleCancel}
                                    className="p-2 bg-gray-200 text-gray-700 rounded-full shadow-sm hover:bg-gray-300 transition"
                                    title="Cancel"
                                >
                                    <X size={16} />
                                </motion.button>
                            </div>
                        </motion.div>
                    ) : (
                        <motion.div
                            key="view"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.3 }}
                            className="flex items-center justify-between w-full px-4 h-[3em] text-[13px] md:text-[14px] rounded-xl border border-orange-100 bg-orange-50 shadow-sm"
                        >
                            <p
                                className={`text-gray-800 truncate ${
                                    !address ? "italic text-gray-400" : ""
                                }`}
                            >
                                {address || "No address set. Tap pencil to add one."}
                            </p>

                            <motion.button
                                whileTap={{ scale: 0.9 }}
                                whileHover={{ scale: 1.1 }}
                                onClick={handleEdit}
                                className="text-orange-700 hover:text-orange-800 transition"
                                title="Edit Address"
                            >
                                <Pencil size={16} />
                            </motion.button>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            {/* Helper Text */}
            <p className="text-xs text-gray-500 mt-1">
                Make sure your address is correct for fast delivery.
            </p>
        </motion.div>
    );
}
