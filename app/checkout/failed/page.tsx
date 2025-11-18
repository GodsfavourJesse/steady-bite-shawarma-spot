"use client";

import { useRouter } from "next/navigation";
import { XCircle } from "lucide-react";

export default function PaymentFailed() {
    const router = useRouter();

    const handleRetry = () => router.back();
    const handleHome = () => router.push("/");

    return (
        <div
            className="min-h-screen flex items-center justify-center p-6 relative"
            style={{
                backgroundImage: "url('/shawarma-1.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            {/* Overlay for blur effect */}
            <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>

            {/* Glassmorphism Card */}
            <div className="relative z-10 max-w-md w-full p-8 rounded-3xl bg-white/30 backdrop-blur-lg shadow-lg border border-white/20 text-center animate-fadeIn">
                
                {/* Animated Icon */}
                <div className="flex justify-center mb-6 animate-shake">
                    <XCircle size={72} className="text-orange-500" />
                </div>

                {/* Title */}
                <h1 className="text-3xl font-bold text-orange-600 mb-4">Payment Failed</h1>

                {/* Description */}
                <p className="text-white/90 mb-6">
                    Oops! Your payment could not be processed. Please check your payment details or try again.
                </p>

                {/* Buttons */}
                <div className="flex flex-col md:flex-row justify-center gap-4">
                    <button
                        onClick={handleRetry}
                        className="px-6 py-3 bg-orange-600 text-white rounded-xl shadow-md hover:bg-orange-700 transition font-semibold"
                    >
                        Retry Payment
                    </button>
                    <button
                        onClick={handleHome}
                        className="px-6 py-3 bg-white/30 text-white rounded-xl shadow-md hover:bg-white/40 transition font-semibold"
                    >
                        Go to Home
                    </button>
                </div>
            </div>

            {/* Animations */}
            <style jsx>{`
                @keyframes shake {
                    0%, 100% { transform: translateX(0); }
                    20%, 60% { transform: translateX(-10px); }
                    40%, 80% { transform: translateX(10px); }
                }
                .animate-shake {
                    animation: shake 0.8s ease-in-out;
                }

                @keyframes fadeIn {
                    from { opacity: 0; transform: translateY(-20px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                .animate-fadeIn {
                    animation: fadeIn 0.8s ease forwards;
                }
            `}</style>
        </div>
    );
}
