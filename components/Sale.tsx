"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { Star } from "lucide-react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { products as allProducts } from "@/app/data/products";
import SkeletonCard from "./Skeleton";

export default function Sales() {
    const [activeTab, setActiveTab] = useState("Specials");
    const tabs = ["Specials", "Chicken", "Beef", "Combo", "Vegetarian", "Spicy"];
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 800);
        return () => clearTimeout(timer);
    })


    // Filter products based on active tab and inStock
    const filteredProducts =
        activeTab === "Specials"
        ? allProducts.filter((p) => p.inStock).slice(0, 4)
        : allProducts.filter((item) => item.category === activeTab && item.inStock).slice(0, 4);

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
                relative w-full flex gap-5 overflow-x-auto no-scrollbar px-4 pb-3
                md:grid md:grid-cols-3 lg:grid-cols-4 md:gap-10 md:overflow-visible
            "
        >
            {/* Skeleton while loading */}
            {loading &&
                [1, 2, 3, 4].map((i) => <SkeletonCard key={i} />)
            }

            {/* Actual products */}
            {!loading &&
                filteredProducts.map((item, index) => (
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
                        <Link href={`/collection/${item.slug}`}>
                            <div
                                className="
                                relative rounded-3xl overflow-hidden 
                                bg-white shadow-[0_8px_20px_rgba(0,0,0,0.1)]
                                hover:shadow-[0_12px_28px_rgba(0,0,0,0.18)] 
                                transition-all
                                min-w-[150px] max-w-[160px] 
                                md:min-w-[260px] md:max-w-[280px]
                            "
                            >
                                {/* Discount badge */}
                                {item.discount > 0 && (
                                    <div className="absolute top-3 left-3 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded-xl z-20">
                                        -{item.discount}%
                                    </div>
                                )}

                                {/* Image */}
                                <div className="relative w-full h-[140px] md:h-[220px] lg:h-[240px]">
                                    <Image
                                        src={item.images[0]}
                                        alt={item.name}
                                        fill
                                        className="object-cover"
                                    />
                                </div>

                                {/* Info */}
                                <div className="p-3 md:p-5">
                                    <h3 className="text-[14px] md:text-[18px] font-semibold text-gray-700 truncate">
                                        {item.name}
                                    </h3>

                                    <div className="flex items-center justify-between mt-1 md:mt-3">
                                        <span className="text-[13px] md:text-[17px] font-medium text-gray-700">
                                            ₦{item.price.toLocaleString()}
                                        </span>

                                        <div className="flex items-center gap-1">
                                            <Star className="w-4 h-4 md:w-5 md:h-5 text-yellow-400 fill-yellow-400" />
                                            <span className="text-[13px] md:text-[16px] text-gray-700">
                                                {item.rating}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </motion.div>
                )
            )}

            {/* Mobile “Go to Shop” card */}
            {!loading && (
                <Link 
                    href="/collection"
                    className="relative flex md:hidden items-center justify-center flex-shrink-0 min-w-[160px] h-[205px] border rounded-3xl"
                >
                    <div className="w-full h-full flex items-center justify-center p-4 bg-gradient-to-br from-orange-500 to-green-400 hover:bg-orange-600 text-white rounded-3xl shadow-md hover:shadow-lg transition-all font-semibold text-[14px]">
                        Go to Shop
                    </div>
                </Link>
            )}
        </motion.div>

        {/* Desktop View More Link */}
        <div className="hidden md:flex justify-end mt-4 pr-4">
            <Link href="/collection" className="flex items-center gap-1 text-orange-600 font-semibold hover:underline">
                View More →
            </Link>
        </div>

        </motion.section>
    );
}
