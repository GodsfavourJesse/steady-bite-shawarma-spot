"use client";
import { useSearchParams, useRouter } from "next/navigation";

export default function PaymentSuccess() {
    const searchParams = useSearchParams();
    const router = useRouter();
    const reference = searchParams.get("ref");

    const handleGoHome = () => {
        router.push("/");
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-green-100 p-8">
            <h1 className="text-3xl font-bold text-green-700 mb-4">Payment Successful!</h1>
            <p className="text-lg mb-2">Reference: <span className="font-mono">{reference}</span></p>
            <p className="text-center mb-6">Thank you for your purchase. Your order is being processed.</p>
            <button
                onClick={handleGoHome}
                className="px-6 py-3 bg-green-600 text-white rounded-xl hover:bg-green-700 transition"
            >
                Go to Home
            </button>
        </div>
    );
}
