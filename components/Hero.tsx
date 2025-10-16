"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative hidden md:flex w-full h-[520px] overflow-hidden rounded-2xl shadow-xl">
      {/* 🔹 Background Image */}
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <Image
          src="/banner-2.jpg"
          alt="Steady Bite Shawarma Background"
          fill
          priority
          className="object-cover object-center brightness-[0.85]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
      </motion.div>

      {/* 🔹 Content Section */}
      <div className="relative z-10 flex flex-col justify-center h-full pl-[6%] max-w-[600px] text-white space-y-6">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-5xl md:text-6xl font-extrabold leading-[1.1]"
        >
          Taste the <span className="text-[#DB751D]">Real Flavor</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-lg text-gray-200 leading-relaxed max-w-[500px]"
        >
          At <span className="text-[#DB751D] font-semibold">Steady Bite</span>,
          every bite is crafted with love and premium ingredients — from juicy
          chicken to crispy beef shawarma. Experience taste that makes you crave
          more.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.9 }}
        >
          <Link
            href="/collection"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-[#DB751D] to-[#b85c1a] 
              hover:from-[#e97b22] hover:to-[#a3470f] px-6 py-3 rounded-full font-semibold 
              text-white shadow-[0_8px_25px_rgba(219,117,29,0.35)] transition-all duration-300"
          >
            Explore Menu <ArrowRight size={18} />
          </Link>
        </motion.div>
      </div>

      {/* 🔹 Floating Food Preview on the Right */}
      <motion.div
        initial={{ opacity: 0, x: 80 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.9, duration: 1 }}
        className="absolute right-[5%] bottom-0 flex items-end justify-end h-full"
      >
        <div className="relative w-[420px] h-[420px]">
          <Image
            src="/steady-bite-logo.png" // 🟢 add a transparent image of shawarma or fries
            alt="Delicious Shawarma"
            fill
            className="object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.5)]"
          />
        </div>
      </motion.div>

      {/* 🔹 Decorative Gradient Overlay */}
      <div className="absolute top-0 left-0 w-full h-[150px] bg-gradient-to-b from-black/20 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-full h-[150px] bg-gradient-to-t from-black/30 to-transparent pointer-events-none" />
    </section>
  );
}
