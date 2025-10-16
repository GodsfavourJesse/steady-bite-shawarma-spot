"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Sponsors() {
  return (
    <section className="w-full py-10 flex flex-col items-center justify-center bg-gradient-to-b from-white via-orange-50/10 to-white/50">
      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-xl md:text-2xl font-semibold text-gray-800 mb-3"
      >
        We Accept
      </motion.h2>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="text-gray-500 text-sm md:text-base mb-6 text-center"
      >
        Seamless and secure payments with trusted platforms.
      </motion.p>

      {/* Payment Logos */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="flex items-center justify-center gap-5 md:gap-10 px-5 py-4 rounded-2xl 
        backdrop-blur-md bg-white/30 border border-white/40 shadow-[0_4px_25px_rgba(255,165,0,0.1)]"
      >
        <motion.div
          whileHover={{ scale: 1.08 }}
          className="transition-all duration-300 drop-shadow-lg"
        >
          <Image
            src="/opay.png"
            alt="Opay"
            width={90}
            height={90}
            className="object-contain"
          />
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.08 }}
          className="transition-all duration-300 drop-shadow-lg"
        >
          <Image
            src="/paypal.png"
            alt="PayPal"
            width={90}
            height={90}
            className="object-contain"
          />
        </motion.div>

        {/* Add more in future */}
      </motion.div>

      {/* Glow line below */}
      <div className="w-24 h-[2px] bg-gradient-to-r from-orange-400 to-green-500 mt-6 rounded-full shadow-[0_0_10px_rgba(255,140,0,0.6)]" />
    </section>
  );
}
