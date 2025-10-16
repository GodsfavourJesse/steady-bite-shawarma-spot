"use client";

import { Calendar, Sliders } from "lucide-react";
import { motion } from "framer-motion";

export default function SearchBox() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="w-full md:hidden flex justify-center"
        >
            <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                className="relative w-[100%] h-[50px] rounded-2xl bg-white/10 backdrop-blur-lg border border-white/20  overflow-hidden"
            >
                {/* Animated glow border */}
                <div 
                    className="absolute inset-0 rounded-2xl bg-gradient-to-r from-orange-400/30 via-yellow-300/30 to-orange-400/30 blur-xl opacity-60 animate-pulse" 
                />

                    {/* Input + icons container */}
                    <div className="relative flex items-center h-full px-3">
                    {/* Left Icon */}
                    <Calendar className="text-white/80 w-5 h-5 ml-1" />

                    {/* Input */}
                    <input
                        type="search"
                        placeholder="Search your favorite shawarma..."
                        className="w-full bg-transparent text-white placeholder:text-gray-300 text-sm px-3 outline-none"
                    />

                    {/* Right Icon */}
                    <Sliders className="text-white/80 w-5 h-5 mr-1" />
                </div>
            </motion.div>
        </motion.div>
    );
}
