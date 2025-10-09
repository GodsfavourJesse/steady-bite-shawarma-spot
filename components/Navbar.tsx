"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Search, ShoppingBag, Menu, X, ChevronRight, User2 } from "lucide-react";

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const menuLinks = [
        { href: "/", label: "Home" },
        { href: "/contact", label: "Contact us" },
        { href: "/about", label: "About us" },
        { href: "/privacy-policy", label: "Privacy Policy" },
        { href: "/refund-policy", label: "Refund Policy" },
        { href: "/shipping-policy", label: "Shipping Policy" },
        { href: "/terms", label: "Terms of Service" },
    ];

    return (
        <nav className="w-full bg-white text-black shadow-sm relative z-[1000]">
        {/* 🔹 Top Section */}
            <div className="flex flex-col md:flex-row items-center justify-between px-4 md:px-20 py-4 border-b border-gray-200">
                {/* ✅ Mobile Layout */}
                <div className="flex justify-between items-center w-full md:hidden mb-3 md:mb-0">
                {/* Logo */}
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4 }}
                    >
                        <Link href="/" className="flex items-center justify-center">
                            <Image
                                src="/steady-bite-logo.png"
                                alt="Steady Bite Logo"
                                width={55}
                                height={55}
                                className="object-contain"
                            />
                        </Link>
                    </motion.div>

                    {/* Cart & Hamburger */}
                    <div className="flex items-center gap-4">
                        {!menuOpen && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.2 }}
                            >
                                <Link
                                    href="/cart"
                                    className=" transition-ease"
                                >
                                    <ShoppingBag size={24} />
                                </Link>
                            </motion.div>
                        )}

                        <motion.button
                            whileTap={{ scale: 0.9 }}
                            onClick={() => setMenuOpen(!menuOpen)}
                            className="text-gray-800 focus:outline-none"
                        >
                            <AnimatePresence mode="wait">
                                {menuOpen ? (
                                    <motion.div
                                        key="close"
                                        initial={{ rotate: -90, opacity: 0 }}
                                        animate={{ rotate: 0, opacity: 1 }}
                                        exit={{ rotate: 90, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <X size={26} />
                                    </motion.div>
                                    ) : (
                                    <motion.div
                                        key="menu"
                                        initial={{ rotate: 90, opacity: 0 }}
                                        animate={{ rotate: 0, opacity: 1 }}
                                        exit={{ rotate: -90, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <Menu size={26} />
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.button>
                    </div>
                </div>

                {/* ✅ Desktop Layout */}
                <div className="hidden md:flex items-center justify-between w-full py-3">
                    {/* Left — Search */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4 }}
                        className="flex items-center w-1/3 justify-start"
                    >
                        <div className="relative w-full max-w-xs">
                            <input
                                type="text"
                                placeholder="Search..."
                                className="w-full h-[2.8rem] bg-black text-white placeholder-gray-300 pl-4 pr-10 focus:outline-none focus:ring-2 focus:ring-gray-600 transition-all"
                            />
                            <Search size={20} className="absolute right-3 top-3 text-white" />
                        </div>
                    </motion.div>

                    {/* Middle — Logo */}
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.4 }}
                        className="flex justify-center w-1/3"
                    >
                        <Link href="/" className="flex items-center justify-center">
                            <Image
                                src="/steady-bite-logo.png"
                                alt="Steady Bite Logo"
                                width={100}
                                height={100}
                                className="object-contain"
                            />
                        </Link>
                    </motion.div>

                    {/* Right — Account & Cart */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4 }}
                        className="flex justify-end items-center gap-6 w-1/3"
                    >
                        <Link
                            href="/account"
                            className="flex items-center gap-2 text-gray-700 hover:text-gray-800 transition-ease"
                        >
                            <User2 size={22} />
                            <span className="text-sm font-medium">Account</span>
                        </Link>

                        <Link
                            href="/cart"
                            className="flex items-center gap-2 text-gray-700 hover:text-gray-800 transition-ease"
                        >
                            <ShoppingBag size={22} />
                            <span className="text-sm font-medium">Cart</span>
                        </Link>
                    </motion.div>
                </div>

                {/* ✅ Mobile Search */}
                <AnimatePresence>
                    {!menuOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.3 }}
                            className="w-full md:hidden"
                        >
                            <div className="relative w-full">
                                <input
                                    type="text"
                                    placeholder="Search..."
                                    className="w-full h-[2.8rem] bg-black text-white placeholder-gray-300 pl-4 pr-10 focus:outline-none focus:ring-2 focus:ring-gray-600 transition-all"
                                />
                                <Search size={20} className="absolute right-3 top-3 text-white" />
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            {/* 🔸 Desktop Bottom Menu */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="hidden md:flex justify-center items-center space-x-10 py-3 text-sm font-medium border-t border-gray-100 bg-white"
            >
                {menuLinks.map(({ href, label }) => (
                    <Link key={href} href={href} className="relative group">
                        <motion.span
                        whileHover={{ scale: 1.1 }}
                        className="text-[12px] text-gray-700 hover:text-gray-800 transition-colors"
                    >
                        {label}
                        </motion.span>
                        <span className="absolute left-0 bottom-[-11px] w-0 h-[2px] bg-[#DB751D] transition-all duration-500 group-hover:w-full"></span>
                    </Link>
                ))}
            </motion.div>

            {/* 🔹 Mobile Dropdown */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        key="menu"
                        initial={{ opacity: 0, y: -15 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -15 }}
                        transition={{ duration: 0.3 }}
                        className="md:hidden absolute top-[72px] left-0 w-full bg-white py-4 px-6 flex items-center border-t border-gray-100 z-[9999] shadow-lg"
                    >
                        <motion.div
                            initial={{ y: -10, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.1 }}
                            className="bg-gray-100 w-full px-4 py-2 flex flex-col space-y-3 rounded-md"
                        >
                            {menuLinks.map(({ href, label }, i) => (
                                <motion.div
                                    key={href}
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.05 * i }}
                                >
                                    <Link
                                        href={href}
                                        onClick={() => setMenuOpen(false)}
                                        className="h-10 flex items-center justify-between text-gray-800 text-base font-medium border-b border-gray-200 pb-2 last:border-0"
                                    >
                                        <span className="text-[14px]">{label}</span>
                                        <ChevronRight size={18} className="text-gray-600" />
                                    </Link>
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
