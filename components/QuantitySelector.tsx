"use client";

import { Minus, Plus } from "lucide-react";
import { useState } from "react";

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
        if (onChange) onChange(newQuantity);
    };

    const increase = () => updateQuantity(quantity + 1);
    const decrease = () => updateQuantity(quantity - 1);

    return (
        <div className="flex items-center gap-3">
            <div className="flex items-center border border-gray-300 rounded-lg">
                <button
                    onClick={decrease}
                    className="p-3 text-gray-700 hover:bg-gray-100 transition"
                >
                    <Minus size={18} />
                </button>
                <span className="px-5 text-lg font-semibold">{quantity}</span>
                <button
                    onClick={increase}
                    className="p-3 text-gray-700 hover:bg-gray-100 transition"
                >
                    <Plus size={18} />
                </button>
            </div>
        </div>
    );
}
