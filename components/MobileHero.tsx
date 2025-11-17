"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

export default function MobileHero() {
    const { scrollY } = useScroll();
    const y = useTransform(scrollY, [0, 500], [0, 30]); // Parallax effect

    return (
        <div className="relative w-full md:hidden">
            {/* Parallax Hero Section */}
            <motion.div
                style={{ y }}
                className="w-full h-[190px] rounded-[28px] overflow-hidden shadow-xl relative"
            >
                <Image
                    src="/shawarma-111.jpg"
                    alt="Steady Bite Shawarma Background"
                    fill
                    priority
                    className="object-cover object-center"
                />

                {/* Overlay with Gradient Glow */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60 backdrop-blur-[1px]" />

                {/* Gradient Border Glow */}
                <div className="absolute inset-0 rounded-[28px] pointer-events-none border border-white/10 shadow-[0_0_30px_rgba(255,140,0,0.4)]" />

                {/* Text Content */}
                <div className="relative z-10 w-full h-full flex flex-col justify-center px-5">
                    <motion.h1
                        className="text-white text-[18px] font-semibold leading-tight"
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        Steady Bite Shawarma Spot
                    </motion.h1>

                    <motion.p
                        className="text-gray-200 text-[13px] mt-1 leading-snug"
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.1, duration: 0.5 }}
                    >
                        Where Shawarma Dreams Come True! Keep yourself satisfied with our recipe.
                    </motion.p>

                    <motion.button
                        className="mt-4 w-fit px-4 py-2 bg-orange-500 hover:bg-green-600 text-white text-[13px] font-medium rounded-xl shadow-md transition-all"
                        whileTap={{ scale: 0.95 }}
                    >
                        Learn More
                    </motion.button>
                </div>

                <div className="absolute bottom-0 left-0 w-full h-10 bg-gradient-to-b from-transparent to-black" />

            </motion.div>
        </div>
    );
}
