"use client";

import Image from "next/image";
import { CheckIcon, ChevronDown, ChevronUp, Heart, ChevronLeft } from "lucide-react";
import { useCart } from "@/context/CartContext";
import QuantitySelector from "@/components/QuantitySelector";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Sponsors from "../Sponsors";

export default function ProductDetailsMobile({ product }: { product: any }) {
    const { addToCart } = useCart();
    const router = useRouter();
    const [activeImage, setActiveImage] = useState<string>(product.images[0]);
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    const [quantity, setQuantity] = useState<number>(1);
    const [loading, setLoading] = useState(false);
    
    const handleBuyNow = () => {
        setLoading(true);

        // Declare checkoutItem first
        const checkoutItem = {
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.images[0],
            quantity,
        };

        // Encode item in query (fastest method for single product)
        const encodedItem = encodeURIComponent(JSON.stringify(checkoutItem));


        setTimeout(() => {
            router.push(`/checkout?item=${encodedItem}`);
        }, 500);
    };


    const toggle = (index: number) =>
        setOpenIndex(openIndex === index ? null : index);

    const lists = [
        { title: "Description", text: product.description },
        { title: "Ingredients", text: product.ingredients },
    ];

    const handleAddToCart = () => {
        addToCart({
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.images[0],
            quantity,
        });
    };

    const handleBack = () => {
        // check if there's a previous history
        if (window.history.length > 1) {
            setTimeout(() => {
                router.back();
            }, 500)
        } else {
            setTimeout(() => {
                router.push("/"); // fallback to home page
            }, 500)
        }
    };

    return (
        <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="flex flex-col bg-white min-h-screen md:hidden overflow-x-hidden"
        >

            {/* --- Loading overlay --- */}
            {loading && (
                <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
                    <div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-16 w-16"></div>
                    <style jsx>{`
                        .loader {
                            border-top-color: #DB751D;
                            animation: spin 1s linear infinite;
                        }
                        @keyframes spin {
                            0% { transform: rotate(0deg); }
                            100% { transform: rotate(360deg); }
                        }
                    `}</style>
                </div>
            )}


            {/* 🌆 Product Image Background */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                className="relative w-full h-[43vh]"
            >
                {activeImage && (
                    <Image
                        src={activeImage.startsWith("/") ? activeImage : `${activeImage}`}
                        alt={product.name}
                        fill
                        priority
                        sizes="100vw"
                        className="object-cover object-center transition-transform duration-500 hover:scale-105"
                    />
                )}

                <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/10" />

                {/* Back Button */}
                <motion.button
                    whileTap={{ scale: 0.9 }}
                    onClick={handleBack}
                    className="absolute top-5 left-4 bg-white/80 backdrop-blur-sm p-2 rounded-full shadow-md hover:bg-white transition"
                >
                    <ChevronLeft 
                        className="text-gray-800" 
                        size={20} 
                    />
                </motion.button>

                {/* Discount Badge */}
                <motion.span
                    initial={{ y: -10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="absolute top-5 right-4 bg-gradient-to-r from-[#DB751D] to-[#ff9a4c] text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md"
                >
                    Save {product.discount}%
                </motion.span>
            </motion.div>

            {/* 🧾 Product Info */}
            <motion.div
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
                className="relative w-full flex flex-col gap-3 px-5 bg-white rounded-t-[25px] -mt-6 shadow-[0_-4px_15px_rgba(0,0,0,0.06)] pt-5 pb-10"
            >
                <h1 className="text-[22px] font-semibold text-gray-900 leading-tight">
                    {product.name}
                </h1>

                <div>
                    <p className="text-[14px] text-gray-400 line-through">
                        ₦{product.oldPrice.toLocaleString()}
                    </p>
                    <p className="text-[19px] font-bold text-orange-600">
                        ₦{product.price.toLocaleString()}{" "}
                        <span className="text-red-500 text-sm font-medium">
                        Save {product.discount}%
                        </span>
                    </p>
                </div>

                <div className="flex items-center gap-1 text-yellow-500 text-[14px] mt-1">
                    {"⭐".repeat(Math.round(product.rating))}{" "}
                    <span className="ml-1 text-gray-600">
                        ({product.reviews} reviews)
                    </span>
                </div>

                <ul className="text-gray-600 text-[14.5px] space-y-1.5 mt-2 leading-relaxed">
                    <li>🚚 Fast delivery available</li>
                    <li>🌱 Eco-friendly packaging</li>
                    <li>🔒 Secure payments</li>
                    <li>
                        {product.inStock ? (
                            <span className="text-green-600 font-semibold">● In stock</span>
                            ) : (
                            <span className="text-red-600 font-semibold">Out of stock</span>
                        )}
                    </li>
                </ul>

                {/* Quantity + Wishlist */}
                <div className="flex items-center justify-between mt-3">
                    <div>
                        <p className="text-sm font-medium text-gray-700 mb-2">Quantity</p>
                        <QuantitySelector
                            initialQuantity={1}
                            onChange={(value) => setQuantity(value)}
                        />
                    </div>

                    <motion.button
                        whileTap={{ scale: 0.9 }}
                        onClick={handleAddToCart}
                        className="text-gray-500 hover:text-red-500 transition"
                    >
                        <Heart size={28} strokeWidth={1.6} />
                    </motion.button>
                </div>

                {/* Payment Section */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                    className="flex flex-col gap-3 mt-5"
                >

                    <button
                        onClick={handleBuyNow}
                        disabled={loading}
                        className="w-full mt-5 bg-orange-600 text-white py-3 rounded-xl font-semibold text-lg shadow-md hover:bg-orange-700 transition-colors"
                    >
                        {loading ? "Processing..." : "Buy Now"}
                    </button>


                    <button className="text-center text-[#DB751D] font-medium text-[15px] underline hover:text-[#c46412] transition-colors">
                        More payment options
                    </button>
                </motion.div>

                {/* Pickup Info */}
                <div className="flex flex-col gap-1 mt-5 border-t border-gray-100 pt-3">
                    <div className="flex items-center gap-2">
                        <CheckIcon className="text-green-500" size={16} />
                        <p className="text-sm text-gray-700">
                        Pick up available at{" "}
                        <span className="font-semibold">Steady Bite, Rumuosi Junction</span>
                        </p>
                    </div>
                    <p className="pl-6 text-sm text-gray-500">
                        Usually ready in 30 minutes
                    </p>
                </div>

                {/* Accordion Details */}
                <div className="w-full flex flex-col gap-3 py-5">
                    {lists.map((list, i) => (
                        <div key={i} className="border-b border-gray-100 pb-2">
                            <button
                                className="w-full flex justify-between items-center py-2 text-[16px] font-medium text-gray-800"
                                onClick={() => toggle(i)}
                            >
                                {list.title}
                                {openIndex === i ? (
                                    <ChevronUp size={18} className="text-[#DB751D]" />
                                ) : (
                                    <ChevronDown size={18} className="text-gray-500" />
                                )}
                            </button>
                            <AnimatePresence initial={false}>
                                {openIndex === i && (
                                    <motion.p
                                        key="content"
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: "auto" }}
                                        exit={{ opacity: 0, height: 0 }}
                                        transition={{ duration: 0.35 }}
                                        className="text-gray-600 text-[14.5px] leading-relaxed overflow-hidden"
                                    >
                                        {list.text}
                                    </motion.p>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>

                <Sponsors />
            </motion.div>
        </motion.div>
    );
}
