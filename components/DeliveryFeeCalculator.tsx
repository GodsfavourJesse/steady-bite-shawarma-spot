"use client";

interface DeliveryFeeCalculatorProps {
    totalItems: number;
}

export default function DeliveryFeeCalculator({ totalItems }: DeliveryFeeCalculatorProps) {
    const deliveryFee = calculateDeliveryFee(totalItems);
    return <span>₦{deliveryFee.toLocaleString()}</span>;
}

// 🔹 Utility Function: ₦500 for every 5 items (no upper limit)
export const calculateDeliveryFee = (totalItems: number) => {
    if (totalItems <= 0) return 0; // no delivery fee if no item
    return Math.ceil(totalItems / 5) * 500;
};
