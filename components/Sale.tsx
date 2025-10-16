"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useRef } from "react";
import { Star } from "lucide-react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";

export default function Sales() {
  const [activeTab, setActiveTab] = useState("Specials");
  const tabs = ["Specials", "Chicken", "Beef", "Mixed", "Delight", "Combo"];

  const products = [
    { id: 1, image: "/shawarma-1.jpg", name: "Chicken Shawarma", price: "₦2,500", rating: 4.9, category: "Chicken" },
    { id: 2, image: "/shawarma-2.jpg", name: "Beef Shawarma", price: "₦2,700", rating: 4.7, category: "Beef" },
    { id: 3, image: "/shawarma-3.jpg", name: "Suya Shawarma", price: "₦3,000", rating: 4.8, category: "Specials" },
    { id: 4, image: "/shawarma-4.jpg", name: "Mixed Shawarma", price: "₦3,200", rating: 4.6, category: "Mixed" },
    { id: 5, image: "/shawarma-7.jpg", name: "Double Delight", price: "₦3,400", rating: 4.9, category: "Delight" },
    { id: 6, image: "/shawarma-8.jpg", name: "Steady Bite Combo", price: "₦4,000", rating: 5.0, category: "Combo" },
  ];

  const filteredProducts =
    activeTab === "Specials"
      ? products
      : products.filter((item) => item.category === activeTab);

  // Animation triggers
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  const scrollRef = useRef(null);
  const { scrollXProgress } = useScroll({ container: scrollRef });
  const x = useTransform(scrollXProgress, [0, 1], [0, -40]);

  return (
    <motion.section
      ref={sectionRef}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="w-full bg-white pt-4 md:pt-10 rounded-t-3xl md:px-[6%]"
    >
      {/* Tabs */}
      <div className="flex items-center gap-6 overflow-x-auto no-scrollbar mb-6 px-4 md:justify-center">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`text-[14px] md:text-[16px] font-medium transition-all whitespace-nowrap ${
              activeTab === tab
                ? "text-black font-bold pb-1 border-b-2 border-black"
                : "text-gray-500 hover:text-gray-700"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Cards Section */}
      <motion.div
        ref={scrollRef}
        style={{ x }}
        className="
          flex gap-5 overflow-x-auto no-scrollbar px-4 pb-3
          md:grid md:grid-cols-3 lg:grid-cols-4 md:gap-10 md:overflow-visible
        "
      >
        {filteredProducts.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{
              scale: 1.04,
              y: -5,
              transition: { type: "spring", stiffness: 250, damping: 12 },
            }}
            className="flex-shrink-0 md:flex-shrink"
          >
            <Link href="/collection">
              <div
                className="
                  bg-white rounded-3xl shadow-md overflow-hidden 
                  hover:shadow-2xl border border-gray-100 transition-all
                  min-w-[160px] md:min-w-[260px] md:max-w-[280px]
                "
              >
                {/* Image */}
                <div className="relative w-full h-[120px] md:h-[200px] lg:h-[240px]">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Info */}
                <div className="p-3 md:p-5">
                  <h3 className="text-[14px] md:text-[18px] font-semibold text-gray-800 truncate">
                    {item.name}
                  </h3>

                  <div className="flex items-center justify-between mt-1 md:mt-3">
                    <span className="text-[13px] md:text-[17px] font-medium text-gray-500">
                      {item.price}
                    </span>

                    <div className="flex items-center gap-1 md:gap-2">
                      <Star className="w-3.5 h-3.5 md:w-5 md:h-5 text-yellow-400 fill-yellow-400" />
                      <span className="text-[13px] md:text-[16px] text-gray-700">
                        {item.rating}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}
