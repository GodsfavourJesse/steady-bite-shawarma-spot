"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Bell } from "lucide-react";

export default function Notifications() {
    return (
        <div className="flex flex-col justify-center items-center min-h-screen bg-gray-50 text-center px-6">
            
            {/* Fun emoji / illustration */}
            <motion.div 
                className="text-8xl mb-8 animate-bounce"
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.6, repeat: Infinity, repeatType: "mirror" }}
            >
                🔔
            </motion.div>
            
            {/* Headline */}
            <h1 className="text-3xl font-extrabold text-gray-800 mb-3">
                Notifications Coming Soon
            </h1>
            
            {/* Friendly message */}
            <p className="text-gray-600 mb-6 max-w-md">
                We’re working hard to bring you notifications for new orders, offers, and updates. 
                For now, notifications are disabled based on our 
                <Link href="/terms" className="text-orange-600 underline mx-1">Terms & Conditions</Link> 
                and 
                <Link href="/privacy-policy" className="text-orange-600 underline mx-1">Privacy Policy</Link>.
            </p>
            
            {/* Optional CTA button */}
            <Link 
                href="/collection"
                className="bg-orange-600 hover:bg-orange-700 text-white px-10 py-3 rounded-full font-semibold shadow-lg transition-all transform hover:scale-105"
            >
                Browse Collection
            </Link>
        </div>
    );
}
