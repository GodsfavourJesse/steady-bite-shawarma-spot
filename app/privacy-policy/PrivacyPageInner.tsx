"use client";

import { ShieldCheck, Lock, FileText, Globe, Mail, Phone, Lollipop, ChevronLeft } from "lucide-react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

export default function PrivacyPageInner() {

    const router = useRouter();

    const handleBack = () => {
        setTimeout(() => {
            router.back();
        }, 200);
    }

    return (
        <section className="max-w-5xl mx-auto px-6 py-16 text-gray-800">

            {/* Back Button */}
            <button
                onClick={handleBack}
                className="md:hidden text-gray-800 bg-white/20 rounded-full"
            >
                <ChevronLeft size={30 } />
            </button>
            
            {/* Header Section */}
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center mb-14"
            >
                <ShieldCheck className="mx-auto text-[#DB751D]" size={60} />
                <h1 className="text-4xl md:text-5xl font-bold mt-4">Privacy Policy</h1>
                <p className="text-gray-600 mt-3 text-lg">
                    Last updated: November 2025
                </p>
            </motion.div>

            {/* Content Wrapper */}
            <div className="space-y-12">

                {/* Section 1 */}
                <PolicySection
                    icon={<FileText className="text-[#DB751D]" size={28} />}
                    title="1. Information We Collect"
                    content={
                        <>
                            <p>
                                At Steady Bite, we value your privacy. We do <span className="font-semibold text-orange-600">NOT</span> collect or store any personal data unnecessarily.
                                We only request the basic information required to successfully process and deliver your order.
                            </p>

                            <p className="mt-3 font-medium">This includes only:</p>

                            <ul className="list-disc ml-6 mt-3 space-y-1">
                                <li>Your name</li>
                                <li>Phone number</li>
                                <li>Delivery address</li>
                                <li>Order details</li>
                            </ul>

                            <p className="mt-4">
                                We do <span className="font-semibold text-orange-600">not</span> store card details.  
                                Payments are securely processed by Paystack or OPay.
                            </p>
                        </>
                    }
                />

                {/* Section 2 */}
                <PolicySection
                    icon={<Lock className="text-[#DB751D]" size={28} />}
                    title="2. How We Use Your Information"
                    content={
                        <>
                            <p className="mb-3">
                                Your information is used <span className="font-semibold text-orange-600">strictly</span> for:
                            </p>

                            <ul className="list-disc ml-6 space-y-2">
                                <li>Processing your food order</li>
                                <li>Delivering your order to the correct location</li>
                                <li>Contacting you if needed regarding delivery</li>
                            </ul>

                            <p className="mt-4 font-semibold text-orange-700">
                                We do NOT store your data after your order is delivered.  
                                We do NOT sell, share, or use your information for marketing.
                            </p>
                        </>
                    }
                />

                {/* Section 3 */}
                <PolicySection
                    icon={<Globe className="text-[#DB751D]" size={28} />}
                    title="3. Cookies & Tracking"
                    content={
                        <p>
                            We use basic cookies only to help items stay in your cart and improve the website experience.  
                            No personal or sensitive data is collected through cookies.
                        </p>
                    }
                />

                {/* Section 4 */}
                <PolicySection
                    icon={<Lock className="text-[#DB751D]" size={28} />}
                    title="4. Data Security"
                    content={
                        <>
                            <p>
                                All payments are handled through trusted third-party providers (Paystack or OPay).  
                                We do <span className="font-semibold text-orange-600">not</span> store your payment information or card details in any form.
                            </p>

                            <p className="mt-3">
                                Any personal details provided for delivery are automatically cleared from our system after your order has been completed.
                            </p>
                        </>
                    }
                />

                {/* Section 5 */}
                <PolicySection
                    icon={<ShieldCheck className="text-[#DB751D]" size={28} />}
                    title="5. Your Rights"
                    content={
                        <ul className="list-disc ml-6 space-y-2">
                            <li>You may request confirmation about any temporary information collected during your order.</li>
                            <li>You may request immediate deletion after delivery if needed.</li>
                            <li>We ensure all data is automatically removed after order completion.</li>
                        </ul>
                    }
                />

                {/* Section 6 */}
                <PolicySection
                    icon={<Mail className="text-[#DB751D]" size={28} />}
                    title="6. Contact Us"
                    content={
                        <>
                            <p>If you have questions about this Privacy Policy, contact us:</p>
                            <p className="mt-3 font-medium flex items-center gap-2">
                                <Lollipop size={18} /> Steady Bite Shawarma Spot
                            </p>
                            <p className="mt-1 font-medium flex items-center gap-2">
                                <Phone size={18} /> +234 916 604 2066 
                            </p>
                            <p className="mt-1 font-medium flex items-center gap-2">
                                <Mail size={18} /> steadylight8@gmail.com
                            </p>
                        </>
                    }
                />

            </div>
        </section>
    );
}

function PolicySection({ icon, title, content }: any) {
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
