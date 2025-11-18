"use client";

import { User, MapPin, ShoppingBag, LogOut, Heart, Settings, Link as LinkIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function AccountPageInner() {
    const accountItems = [
        // {
        //     icon: <ShoppingBag size={22} />,
        //     title: "My Orders",
        //     desc: "Track and view your recent orders.",
        //     color: "from-orange-500 to-orange-600",
        //     href: "/account/orders",
        // },
        // {
        //     icon: <MapPin size={22} />,
        //     title: "Delivery Address",
        //     desc: "Manage and update delivery locations.",
        //     color: "from-green-500 to-green-600",
        //     href: "/account/address",
        // },
        // {
        //     icon: <Heart size={22} />,
        //     title: "Favorites",
        //     desc: "View your favorite shawarma and meals.",
        //     color: "from-pink-500 to-pink-600",
        //     href: "/account/favorites",
        // },
        // {
        //     icon: <Settings size={22} />,
        //     title: "Settings",
        //     desc: "Update preferences and password.",
        //     color: "from-blue-500 to-blue-600",
        //     href: "/account/settings",
        // },
        {
            icon: <LinkIcon size={22} />,
            title: "Important Links",
            desc: "Access all key pages.",
            color: "from-yellow-500 to-yellow-600",
            href: "/account/important",
        },
        // {
        //     icon: <LogOut size={22} />,
        //     title: "Logout",
        //     desc: "Sign out securely.",
        //     color: "from-gray-500 to-gray-700",
        //     href: "/logout",
        // },
    ];

    return (
        <div className="min-h-screen bg-gradient-to-b from-orange-50 via-white to-white pt-10 px-6 md:px-16 mb-24 md:mb-0">

            {/* Desktop - Coming Soon */}
            <div className="hidden md:flex flex-col items-center justify-center h-[70vh] text-center px-6">
                <motion.div 
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="bg-white/70 backdrop-blur-md p-10 rounded-3xl shadow-xl max-w-2xl"
                >
                    <h1 className="text-5xl md:text-6xl font-extrabold text-gray-800 mb-6">
                        Coming Soon
                    </h1>
                    <p className="text-gray-600 text-lg md:text-xl leading-relaxed">
                        Our full desktop account dashboard is still under development.  
                        For now, the available features follow our{' '}
                        <Link href="/terms" className="text-orange-500 font-semibold underline hover:text-orange-600">
                            Terms & Conditions
                        </Link>{' '}
                        and{' '}
                        <Link href="/privacy-policy" className="text-orange-500 font-semibold underline hover:text-orange-600">
                            Privacy Policy
                        </Link>.  
                        More exciting features will be added as we update our policies — stay tuned!
                    </p>
                </motion.div>
            </div>

            {/* Mobile - Account Links */}
            <div className="md:hidden">
                {/* Header */}
                <div className="flex flex-col items-center text-center mb-10">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.4 }}
                        className="relative w-28 h-28 mb-4"
                    >
                        <Image
                            src="/icons/icon-192x192.png"
                            alt="Profile"
                            fill
                            className="rounded-full border-4 border-orange-500 shadow-lg object-cover"
                        />
                    </motion.div>
                    <h2 className="text-3xl font-bold text-gray-800">My Account</h2>
                    <p className="text-gray-500 text-sm mt-1">
                        Manage your profile, orders, and preferences all in one place.
                    </p>
                </div>

                {/* Account Cards */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="grid grid-cols-1 gap-4"
                >
                    {accountItems.map((item, i) => (
                        <Link key={i} href={item.href} className="group">
                            <motion.div
                                whileHover={{ y: -3 }}
                                whileTap={{ scale: 0.97 }}
                                className="bg-white rounded-2xl shadow-md p-5 flex items-center gap-4 border border-transparent hover:border-orange-400 hover:shadow-lg transition-all duration-300 cursor-pointer"
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
                            </motion.div>
                        </Link>
                    ))}
                </motion.div>

                {/* Footer */}
                <footer className="mt-16 text-center text-xs text-gray-500 border-t pt-6">
                    <p>
                        © {new Date().getFullYear()}{" "}
                        <span className="text-orange-500 font-medium">Steady Bite</span>. All rights reserved.
                    </p>
                </footer>
            </div>
        </div>
    );
}
