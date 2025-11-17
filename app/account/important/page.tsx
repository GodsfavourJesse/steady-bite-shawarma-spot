"use client";

import { motion } from "framer-motion";
import { FileText, Info, Mail, ShieldCheck, Truck } from "lucide-react";
import { useRouter } from "next/navigation";
import { useLoader } from "@/context/LoaderContext";

export default function Important() {
    const router = useRouter();
    const { loading, setLoading } = useLoader();

    const handleNavigation = (path: string) => {
        setLoading(true);
        router.push(path);
    };

    const importantPages = [
        {
            icon: <Info size={22} />,
            title: "About Us",
            desc: "Learn more about Steady Bite Shawarma Spot.",
            href: "/about",
            color: "from-orange-500 to-orange-600",
        },
        {
            icon: <Mail size={22} />,
            title: "Contact Us",
            desc: "Reach out for orders, feedback, or inquiries.",
            href: "/contact",
            color: "from-green-500 to-green-600",
        },
        {
            icon: <ShieldCheck size={22} />,
            title: "Privacy Policy",
            desc: "Understand how we handle your information.",
            href: "/privacy-policy",
            color: "from-blue-500 to-blue-600",
        },
        {
            icon: <FileText size={22} />,
            title: "Terms of Service",
            desc: "Read our service terms and conditions.",
            href: "/terms-of-service",
            color: "from-purple-500 to-purple-600",
        },
        {
            icon: <Truck size={22} />,
            title: "Delivery Policy",
            desc: "Check how we deliver your delicious orders.",
            href: "/delivery-policy",
            color: "from-pink-500 to-pink-600",
        },
    ];

    return (
        <div className="min-h-screen bg-gradient-to-b from-orange-50 via-white to-white pt-10 px-6 md:px-16 mb-24 md:mb-0">
            {/* Header */}
            <div className="text-center mb-10">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-2">
                    Important Pages
                </h1>
                <p className="text-gray-500 text-sm">
                    Quick access to all essential pages of Steady Bite Shawarma.
                </p>
            </div>

            {/* Cards */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            >
                {importantPages.map((item, i) => (
                    <motion.button
                        key={i}
                        onClick={() => handleNavigation(item.href)}
                        whileHover={{ y: -5 }}
                        whileTap={{ scale: 0.98 }}
                        className="bg-white rounded-2xl shadow-md p-5 flex items-center gap-4 border border-transparent hover:border-orange-400 hover:shadow-xl transition-all duration-300 cursor-pointer w-full text-left"
                    >
                        <div
                            className={`p-3.5 rounded-xl bg-gradient-to-r ${item.color} text-white shadow-md`}
                        >
                            {item.icon}
                        </div>
                        <div className="flex flex-col">
                            <h4 className="font-semibold text-gray-800 group-hover:text-orange-600 transition-colors duration-200">
                                {item.title}
                            </h4>
                            <p className="text-xs text-gray-500 mt-1">{item.desc}</p>
                        </div>
                    </motion.button>
                ))}
            </motion.div>

            {/* Footer */}
            <footer className="mt-16 text-center text-xs text-gray-500 border-t pt-6">
                <p>
                © {new Date().getFullYear()}{" "}
                <span className="text-orange-500 font-medium">Steady Bite</span>. All rights
                reserved.
                </p>
            </footer>
        </div>
    );
}
