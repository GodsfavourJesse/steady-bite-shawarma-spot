"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Search, User2 } from "lucide-react";
import CartIcon from "./CartIcon";
import SearchBox from "./SearchBox";

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const menuLinks = [
        { href: "/", label: "Home" },
        { href: "/collection", label: "Collection" },
        { href: "/contact", label: "Contact us" },
        { href: "/about", label: "About us" },
        { href: "/privacy-policy", label: "Privacy Policy" },
        { href: "/delivery-policy", label: "Delivery Policy" },
        { href: "/terms-of-service", label: "Terms of Service" },
    ];

    return (
        <nav className="hidden md:block w-full bg-white text-black shadow-sm relative z-[1000]">
            {/* Desktop Top Section */}
            <div className="relative w-full h-[10rem] flex items-center justify-between px-20 py-4 border-b border-gray-200">
                {/* Left — Search */}
                <div className="flex-1">
                    <SearchBox />
                </div>

                {/* Middle — Logo */}
                <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.4 }}
                    className="absolute left-1/2 top-1/1 -translate-x-1/2 -translate-y-1/2"
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
                    className="flex justify-end items-center gap-6"
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
