"use client";
import { useState } from "react";

export default function OpayCheckoutModal({ product }: { product: any }) {
    const [open, setOpen] = useState(false);

    return (
        <>
            <button
                onClick={() => setOpen(true)}
                className="bg-green-600 text-white px-4 py-4 rounded-lg hover:bg-green-700"
            >
                Order Now
            </button>

            {open && (
                <div className="fixed inset-0 top-0 bottom-0 left-0 right-0 bg-black/50 md:bg-black/70 flex items-center justify-center z-50">
                    <div className="bg-white rounded-xl p-6 w-[90%] h-[90%] max-w-md shadow-lg">
                        <h2 className="text-xl font-semibold mb-4">
                            Pay with <span className="text-green-600">Opay</span>
                        </h2>
                        <p className="mb-4">
                            You're about to purchase <strong>{product.name}</strong> for ₦
                            {product.price}.
                        </p>

                        {/* Replace this with Opay payment SDK or link */}
                        <button
                            className="bg-green-600 text-white w-full py-2 rounded-lg hover:bg-green-700"
                            onClick={() => alert("Redirecting to Opay...")}
                        >
                            Proceed to Pay
                        </button>

                        <button
                            onClick={() => setOpen(false)}
                            className="mt-3 text-gray-600 hover:text-black w-full"
                        >
                            Cancel
                        </button>
                    </div>
                </div>
            )}
        </>
    );
}
