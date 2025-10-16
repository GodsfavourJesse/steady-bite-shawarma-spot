"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="hidden md:flex flex-col w-full border-t border-zinc-200 dark:border-zinc-800 bg-gradient-to-b from-white/70 to-orange-50/30 dark:from-zinc-900/50 dark:to-zinc-950/70 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-5 md:gap-3 text-center sm:text-left">
        
        {/* Brand + Slogan */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-[14px] text-zinc-600 dark:text-zinc-400"
        >
          © {year} <span className="font-semibold text-orange-600 dark:text-orange-400">Steady Bite</span> — 
          <span className="ml-1 italic">Where shawarma dreams come true.</span>
        </motion.p>

        {/* Links */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="flex items-center gap-5 text-[14px] text-zinc-500 dark:text-zinc-400"
        >
          <Link
            href="/privacy"
            className="hover:text-orange-600 dark:hover:text-orange-400 transition-colors"
          >
            Privacy Policy
          </Link>
          <Link
            href="/terms"
            className="hover:text-orange-600 dark:hover:text-orange-400 transition-colors"
          >
            Terms of Service
          </Link>
          <Link
            href="/contact"
            className="hover:text-orange-600 dark:hover:text-orange-400 transition-colors"
          >
            Contact
          </Link>
        </motion.div>
      </div>
    </footer>
  );
}
