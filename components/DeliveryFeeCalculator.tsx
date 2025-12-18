"use client";

interface DeliveryFeeCalculatorProps {
    totalItems: number;
    deliveryMethod: "ship" | "pickup";
}

export default function DeliveryFeeCalculator({ totalItems, deliveryMethod }: DeliveryFeeCalculatorProps) {
    const deliveryFee = calculateDeliveryFee(totalItems, deliveryMethod);
    return <span>₦{deliveryFee.toLocaleString()}</span>;
}

// Utility Function: ₦500 for every 5 items (no upper limit)
export const calculateDeliveryFee = (totalItems: number, deliveryMethod: "ship" | "pickup" = "ship") => {
    if (deliveryMethod === "pickup") return 0; // No fee for pickup
    if (totalItems <= 0) return 0; // no delivery fee if no item
    return Math.ceil(totalItems / 5) * 500;
};
