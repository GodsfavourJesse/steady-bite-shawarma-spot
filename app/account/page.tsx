"use client";

import { User, MapPin, ShoppingBag, LogOut, Heart, Settings } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Account() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 via-white to-white pt-10 px-6 md:px-16 mb-24 md:mb-0">
      {/* Header */}
      <div className="flex flex-col items-center text-center mb-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          className="relative w-28 h-28 mb-4"
        >
          <Image
            src="/icons/icon-192x192.png"
            alt="Profile"
            fill
            className="rounded-full border-4 border-orange-500 shadow-lg object-cover"
          />
        </motion.div>
        <h2 className="text-3xl font-bold text-gray-800">My Account</h2>
        <p className="text-gray-500 text-sm mt-1">
          Manage your profile, orders, and preferences all in one place.
        </p>
      </div>

      {/* Account Cards */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {[
          {
            icon: <ShoppingBag size={22} />,
            title: "My Orders",
            desc: "Track and view your recent orders.",
            color: "from-orange-500 to-orange-600",
          },
          {
            icon: <MapPin size={22} />,
            title: "Delivery Address",
            desc: "Manage and update delivery locations.",
            color: "from-green-500 to-green-600",
          },
          {
            icon: <Heart size={22} />,
            title: "Favorites",
            desc: "View your favorite shawarma and meals.",
            color: "from-pink-500 to-pink-600",
          },
          {
            icon: <Settings size={22} />,
            title: "Settings",
            desc: "Update preferences and password.",
            color: "from-blue-500 to-blue-600",
          },
          {
            icon: <User size={22} />,
            title: "Profile Info",
            desc: "Edit your name, email, and photo.",
            color: "from-purple-500 to-purple-600",
          },
          {
            icon: <LogOut size={22} />,
            title: "Logout",
            desc: "Sign out from your account securely.",
            color: "from-gray-500 to-gray-700",
          },
        ].map((item, i) => (
          <motion.div
            key={i}
            whileHover={{ y: -5 }}
            whileTap={{ scale: 0.98 }}
            className="group bg-white rounded-2xl shadow-md p-5 flex items-center gap-4 border border-transparent hover:border-orange-400 hover:shadow-xl transition-all duration-300 cursor-pointer"
          >
            <div
              className={`p-3.5 rounded-xl bg-gradient-to-r ${item.color} text-white shadow-md`}
            >
              {item.icon}
            </div>
            <div className="flex flex-col">
              <h4 className="font-semibold text-gray-800 group-hover:text-orange-600 transition-colors duration-200">
                {item.title}
              </h4>
              <p className="text-xs text-gray-500 mt-1">{item.desc}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Footer */}
      <footer className="mt-16 text-center text-xs text-gray-500 border-t pt-6">
        <p>
          © {new Date().getFullYear()}{" "}
          <span className="text-orange-500 font-medium">Steady Bite</span>. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
