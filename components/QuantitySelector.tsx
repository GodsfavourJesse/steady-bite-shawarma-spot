"use client";

import { Minus, Plus } from "lucide-react";
import { useState } from "react";

// 🔹 Utility Function: ₦500 for every 5 items (no upper limit)
const calculateDeliveryFee = (totalItems: number) => {
    if (totalItems <= 0) return 0; // no delivery fee if no item
    return Math.ceil(totalItems / 5) * 500;
};

interface QuantitySelectorProps {
    initialQuantity?: number;
    onChange?: (value: number) => void;
    min?: number;
    max?: number;
}

export default function QuantitySelector({
    initialQuantity = 1,
    onChange,
    min = 1,
    max = 99,
}: QuantitySelectorProps) {
    const [quantity, setQuantity] = useState<number>(initialQuantity);

    const updateQuantity = (newQuantity: number) => {
        if (newQuantity < min || newQuantity > max) return;
        setQuantity(newQuantity);
        onChange?.(newQuantity);
    };

    const increase = () => updateQuantity(quantity + 1);
    const decrease = () => updateQuantity(quantity - 1);

    // 🔹 Calculate delivery fee dynamically
    const deliveryFee = calculateDeliveryFee(quantity);

    return (
        <div className="flex flex-col items-start gap-3">
        {/* Quantity Controller */}
            <div className="w-[120px] md:w-[160px] h-[2.6em] md:h-[3em] flex items-center justify-between bg-gray-100 border border-gray-300 rounded-full shadow-sm">
                <button
                    onClick={decrease}
                    className="w-[30px] md:w-[45px] h-[1.8em] md:h-[2.5em] flex items-center justify-center text-gray-700 bg-white hover:bg-gray-100 rounded-full transition"
                >
                    <Minus size={18} />
                </button>

                <span className="px-2 md:px-5 text-[16px] md:text-lg font-semibold select-none">
                    {quantity}
                </span>

                <button
                    onClick={increase}
                    className="w-[30px] md:w-[45px] h-[1.8em] md:h-[2.5em] flex items-center justify-center text-gray-700 bg-white hover:bg-gray-100 rounded-full transition"
                >
                    <Plus size={18} />
                </button>
            </div>

            {/* Delivery Fee Display */}
            {/* <div className="text-sm md:text-base text-gray-600 font-medium bg-orange-50 border border-orange-200 px-4 py-2 rounded-full shadow-sm">
                Delivery Fee:{" "}
                <span className="text-[#DB751D] font-semibold">
                ₦{deliveryFee.toLocaleString()}
                </span>
            </div> */}
        </div>
    );
}
