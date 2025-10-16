"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle, Loader2 } from "lucide-react";

export default function PaymentSuccessPage() {
    const [status, setStatus] = useState("loading");
    const [paymentData, setPaymentData] = useState<any>(null);

    useEffect(() => {
        // ✅ Get payment reference from URL
        const urlParams = new URLSearchParams(window.location.search);
        const reference = urlParams.get("reference");

        if (!reference) {
            setStatus("error");
            return;
        }

        // 🔍 Verify the transaction
        const verifyPayment = async () => {
            try {
                const res = await fetch(`/api/verify-payment?reference=${reference}`);
                const data = await res.json();

                if (res.ok && data?.data?.status === "SUCCESS") {
                    setPaymentData(data.data);
                    setStatus("success");
                } else {
                    setStatus("error");
                }
            } catch (error) {
                console.error("Verification error:", error);
                setStatus("error");
            }
        };

        verifyPayment();
    }, []);

    return (
        <div className="min-h-screen flex flex-col items-center justify-center text-center bg-gray-50 px-6">
            {status === "loading" && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex flex-col items-center"
                >
                    <Loader2 size={40} className="animate-spin text-orange-600 mb-3" />
                    <p className="text-gray-700">Verifying your payment...</p>
                </motion.div>
            )}

            {status === "success" && paymentData && (
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="bg-white p-6 rounded-2xl shadow-lg max-w-md w-full"
                >
                    <CheckCircle className="text-green-600 w-14 h-14 mx-auto mb-3" />
                    <h1 className="text-xl font-semibold text-gray-800 mb-2">
                        Payment Successful 🎉
                    </h1>
                    <p className="text-gray-600 mb-5">
                        Thank you for your order! Your payment has been confirmed.
                    </p>

                    <div className="text-sm text-gray-700 bg-gray-50 rounded-lg p-4 text-left">
                        <p>
                            <strong>Reference:</strong> {paymentData.reference}
                        </p>
                        <p>
                            <strong>Amount:</strong> ₦{paymentData.amount?.toLocaleString()}
                        </p>
                        <p>
                            <strong>Status:</strong> {paymentData.status}
                        </p>
                        <p>
                            <strong>Time:</strong> {new Date(paymentData.updatedAt).toLocaleString()}
                        </p>
                    </div>

                    <motion.a
                        href="/"
                        whileTap={{ scale: 0.95 }}
                        className="mt-6 inline-block bg-orange-600 text-white px-5 py-3 rounded-lg hover:bg-orange-700 transition-all"
                    >
                        Back to Home
                    </motion.a>
                </motion.div>
            )}

            {status === "error" && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-center"
                >
                    <p className="text-red-600 text-lg font-semibold mb-3">Payment Verification Failed ❌</p>
                    <p className="text-gray-600 mb-5">We couldn’t verify your payment. Please contact support.</p>
                    <a
                        href="/"
                        className="bg-gray-700 text-white px-5 py-3 rounded-lg hover:bg-gray-800 transition"
                    >
                        Back to Home
                    </a>
                </motion.div>
            )}
        </div>
    );
}
