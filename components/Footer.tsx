"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Facebook, Instagram, Twitter, Mail } from "lucide-react";
import { useRouter } from "next/navigation";
import { useLoader } from "@/context/LoaderContext";

export default function Footer() {
    const year = new Date().getFullYear();
    const router = useRouter();
    const { setLoading } = useLoader();

    const handleNavigation = (href: string) => {
        setLoading(true);
        router.push(href);
    }

    return (
        <footer className="hidden md:block w-full bg-gradient-to-tr from-orange-50 via-white to-orange-100 dark:from-zinc-900/50 dark:to-zinc-950/70 backdrop-blur-md border-t border-orange-200 dark:border-zinc-800 py-10">

            <div className="max-w-6xl mx-auto px-6 md:flex flex-col md:flex-row justify-between items-center gap-6">
                

                {/* Brand + Slogan */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center md:text-left"
                >
                    <h2 className="text-2xl font-extrabold text-orange-600 dark:text-orange-400">
                        Steady Bite
                    </h2>
                    <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-1 italic">
                        Where shawarma dreams come true
                    </p>
                </motion.div>

                {/* Quick Links */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    className="flex flex-col md:flex-row items-center gap-6"
                >
                    {[
                        { href: "/privacy-policy", label: "Privacy Policy" },
                        { href: "/terms-of-service", label: "Terms of Service" },
                        { href: "/contact", label: "Contact" },
                        { href: "/about", label: "About Us" },
                    ].map((link) => (
                        <button
                            key={link.href}
                            onClick={() => handleNavigation(link.href)}
                            className="text-zinc-600 dark:text-zinc-400 hover:text-orange-600 dark:hover:text-orange-400 transition-colors font-medium"
                        >
                            {link.label}
                        </button>
                    ))}
                </motion.div>

                {/* Social Icons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                    className="flex items-center gap-4 mt-4 md:mt-0"
                >
                    {[Facebook, Instagram, Twitter, Mail].map((Icon, i) => (
                        <motion.a
                            key={i}
                            href="#"
                            whileHover={{ scale: 1.2 }}
                            className="p-2 rounded-full bg-orange-100 dark:bg-zinc-800 text-orange-600 dark:text-orange-400 shadow-sm hover:shadow-md transition"
                        >
                            <Icon size={20} />
                        </motion.a>
                    ))}
                </motion.div>

            </div>

            <div className="flex items-center justify-center">
                <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-2">
                    © {year} Steady Bite. All rights reserved.
                </p>
            </div>
        </footer>
    );
}
