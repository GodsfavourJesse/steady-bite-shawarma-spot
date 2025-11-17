"use client";

import { ShieldCheck, FileText, Lock, CheckCircle, Truck, ChevronLast, ChevronLeft } from "lucide-react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

export default function TermsOfService() {

    const router = useRouter();
    const handleBack = () => router.back();

    return (
        <section className="max-w-5xl mx-auto px-6 py-16 text-gray-800 mb-20 md:mb-0">
            {/* Back Button */}
            <button
                onClick={handleBack}
                className="md:hidden text-gray-800"
            >
                <ChevronLeft size={24} />
            </button>

            {/* Header Section */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center mb-14"
            >
                <ShieldCheck className="mx-auto text-[#DB751D]" size={60} />
                <h1 className="text-4xl md:text-5xl font-bold mt-4">Terms of Service</h1>
                <p className="text-gray-600 mt-3 text-lg">
                    Last updated: November 2025
                </p>
            </motion.div>

            {/* Content Sections */}
            <div className="space-y-12">

                {/* 1. Acceptance */}
                <TermsSection
                    icon={<FileText className="text-[#DB751D]" size={28} />}
                    title="1. Acceptance of Terms"
                    content={
                        <>
                            <p>
                                By accessing or using Steady Bite Shawarma Spot website and services, you agree to be bound by these Terms of Service. 
                                If you do not agree, please do not use our website or place orders.
                            </p>
                        </>
                    }
                />

                {/* 2. Orders & Payments */}
                <TermsSection
                    icon={<CheckCircle className="text-[#DB751D]" size={28} />}
                    title="2. Orders & Payments"
                    content={
                        <>
                            <ul className="list-disc ml-6 space-y-2">
                                <li>All orders are subject to availability.</li>
                                <li>Prices, promotions, and offers may change without notice.</li>
                                <li>Payments are processed securely via Paystack or OPay. We do <span className="font-semibold text-orange-600">not</span> store card information.</li>
                                <li>By placing an order, you confirm that all information provided is accurate and complete.</li>
                            </ul>
                        </>
                    }
                />

                {/* 3. Delivery */}
                <TermsSection
                    icon={<Truck className="text-[#DB751D]" size={28} />}
                    title="3. Delivery"
                    content={
                        <>
                            <p>
                                Delivery times are estimates and may vary due to traffic, weather, or unforeseen circumstances. 
                                Steady Bite is not liable for delays outside our control.
                            </p>
                            <p className="mt-2">
                                Please ensure your contact information and delivery address are correct. Riders may contact you to verify the order details.
                            </p>
                        </>
                    }
                />

                {/* 4. Customer Responsibilities */}
                <TermsSection
                    icon={<Lock className="text-[#DB751D]" size={28} />}
                    title="4. Customer Responsibilities"
                    content={
                        <>
                            <ul className="list-disc ml-6 space-y-2">
                                <li>Ensure delivery details are accurate.</li>
                                <li>Provide correct phone number for rider contact.</li>
                                <li>Report issues with order promptly via our contact channels.</li>
                                <li>Abide by our local laws when using our services.</li>
                            </ul>
                        </>
                    }
                />

                {/* 5. Privacy & Data */}
                <TermsSection
                    icon={<ShieldCheck className="text-[#DB751D]" size={28} />}
                    title="5. Privacy & Data"
                    content={
                        <>
                            <p>
                                We do not store personal information beyond what is necessary to complete your order. 
                                Data such as name, address, and contact number is used solely for delivery purposes and is automatically cleared after the order is fulfilled.
                            </p>
                            <p className="mt-2">
                                Payment information is handled securely by Paystack or OPay. We do not store credit/debit card details.
                            </p>
                        </>
                    }
                />

                {/* 6. Limitation of Liability */}
                <TermsSection
                    icon={<Lock className="text-[#DB751D]" size={28} />}
                    title="6. Limitation of Liability"
                    content={
                        <>
                            <p>
                                Steady Bite is not responsible for indirect, incidental, or consequential damages arising from use of our services. 
                                We do not guarantee uninterrupted service or perfect delivery times.
                            </p>
                        </>
                    }
                />

                {/* 7. Changes to Terms */}
                <TermsSection
                    icon={<FileText className="text-[#DB751D]" size={28} />}
                    title="7. Changes to Terms"
                    content={
                        <>
                            <p>
                                We may update these Terms of Service at any time. 
                                The latest version will be posted on this page with the updated date. Continued use of our website constitutes acceptance of the updated terms.
                            </p>
                        </>
                    }
                />

            </div>
        </section>
    );
}

// --- Section Component ---
function TermsSection({ icon, title, content }: any) {
    return (
        <motion.div 
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-all"
        >
            <div className="flex items-center gap-3 mb-4">
                {icon}
                <h2 className="text-2xl font-bold">{title}</h2>
            </div>
            <div className="text-gray-700 leading-relaxed">{content}</div>
        </motion.div>
    );
}
