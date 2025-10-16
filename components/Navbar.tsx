"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Search, User2 } from "lucide-react";
import CartIcon from "./CartIcon";

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const menuLinks = [
        { href: "/", label: "Home" },
        { href: "/contact", label: "Contact us" },
        { href: "/about", label: "About us" },
        { href: "/privacy-policy", label: "Privacy Policy" },
        { href: "/refund-policy", label: "Refund Policy" },
        { href: "/delivery-policy", label: "Delivery Policy" },
        { href: "/terms", label: "Terms of Service" },
    ];

    return (
        <nav className="hidden md:block w-full bg-white text-black shadow-sm relative z-[1000]">
            {/* Desktop Top Section */}
            <div className="flex items-center justify-between px-20 py-4 border-b border-gray-200">
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

                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.3 }}
                    >
                        <CartIcon />
                    </motion.div>
                </motion.div>
            </div>

            {/* Desktop Bottom Menu */}
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
        </nav>
    );
}
