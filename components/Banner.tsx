"use client";

import { motion } from "framer-motion";
import { ShoppingBag } from "lucide-react";

export default function Banner() {
  return (
    <section className="hidden md:flex relative w-full h-screen overflow-hidden bg-[#fafafa]">
      {/* 🔹 Background Layer */}
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <img
          src="/Group.png"
          alt="Banner background"
          className="w-full h-full object-cover object-center brightness-[0.85]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
      </motion.div>

      {/* 🔹 Main Content */}
      <div className="relative z-10 flex flex-col justify-center pl-20 max-w-[600px] text-white space-y-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="uppercase text-sm tracking-[5px] font-semibold text-[#DB751D]/90"
        >
          Limited Time Offer
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.9 }}
          className="text-5xl md:text-7xl font-extrabold leading-[1.1] drop-shadow-[0_5px_15px_rgba(0,0,0,0.5)]"
        >
          Save Big on <br /> <span className="text-[#DB751D]">Bunk Orders</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.9 }}
          className="text-lg text-gray-200 max-w-[480px] leading-relaxed"
        >
          Discover unbeatable discounts of up to{" "}
          <span className="font-semibold text-[#ffb84c]">30%</span> on bulk
          purchases. Order now and enjoy top quality at the best value.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="flex items-center gap-4 pt-4"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 bg-gradient-to-r from-[#DB751D] to-[#b95a12] 
              hover:from-[#e67a1a] hover:to-[#a54e0f] px-6 py-3 rounded-full font-semibold 
              text-white shadow-[0_8px_20px_rgba(219,117,29,0.3)] transition-all duration-300"
          >
            <ShoppingBag size={20} />
            Buy Now
          </motion.button>

          <motion.button
            whileHover={{ backgroundColor: "rgba(255,255,255,0.1)", scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="border border-white/60 text-white/90 px-6 py-3 rounded-full 
              font-medium transition-all duration-300"
          >
            Learn More
          </motion.button>
        </motion.div>
      </div>

      {/* 🔹 Floating Decorative Element */}
      <motion.div
        initial={{ opacity: 0, y: 50, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 right-10 flex flex-col items-center gap-4"
      >
        <motion.div
          whileHover={{ scale: 1.1, rotate: 3 }}
          transition={{ type: "spring", stiffness: 150 }}
          className="w-[90px] h-[90px] bg-white/10 border border-white/20 backdrop-blur-md rounded-2xl shadow-lg flex items-center justify-center"
        >
          <img
            src="/steady-bite-logo.png"
            alt="product"
            className="w-[70%] h-[70%] object-contain"
          />
        </motion.div>
        <p className="text-sm text-white/70 font-light tracking-wide">
          Quality Guaranteed
        </p>
      </motion.div>

      {/* 🔹 Subtle gradient frame edges */}
      <div className="absolute top-0 left-0 w-full h-[200px] bg-gradient-to-b from-black/30 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-full h-[200px] bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
    </section>
  );
}
