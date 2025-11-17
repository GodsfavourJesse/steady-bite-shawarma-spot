"use client";

import Image from "next/image";
import { CheckIcon, ChevronDown, ChevronUp, Heart } from "lucide-react";
import { useCart } from "@/context/CartContext";
import QuantitySelector from "@/components/QuantitySelector";
import { useState } from "react";
import Sponsors from "../Sponsors";
import { useRouter } from "next/navigation";


export default function ProductDetailsDesktop({ product }: { product: any }) {
    const { addToCart } = useCart();
    const [activeImage, setActiveImage] = useState<string>(product.images[0]);
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    const [quantity, setQuantity] = useState<number>(1);
    const [loading, setLoading] = useState(false);
    const router = useRouter();

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

    return (
        <div className="relative hidden md:flex flex-col w-full bg-white min-h-screen md:max-w-6xl mx-auto gap-8 md:p-10">

            {/* --- Loading overlay --- */}
            {loading && (
                <div className="fixed w-full h-screen absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
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

            <div className="flex gap-8">
                {/* --- Image Section --- */}
                <div className="w-1/2 flex flex-col gap-4">
                    <div className="relative">
                        <Image
                            src={activeImage}
                            alt={product.name}
                            width={600}
                            height={600}
                            className="rounded-2xl object-cover w-full shadow-md"
                        />
                        <span className="absolute top-3 left-3 bg-[#DB751D] text-white text-xs px-3 py-1 rounded-full shadow">
                            Save {product.discount}%
                        </span>
                    </div>

                    <div className="flex gap-3 w-[70px] h-[70px] overflow-x-auto mt-3 pb-2">
                        <Image
                            src={activeImage}
                            alt={product.name}
                            width={600}
                            height={600}
                            className="border border-orange-500 rounded-xl object-cover w-full shadow-md"
                        />
                    </div>
                </div>

                {/* --- Product Info --- */}
                <div className="w-1/2 flex flex-col gap-4">
                    <h1 className="text-3xl font-bold text-gray-900">{product.name}</h1>

                    <div>
                        <p className="text-lg text-gray-400 line-through">
                            ₦{product.oldPrice.toLocaleString()}
                        </p>
                        <p className="text-3xl font-semibold text-[#DB751D]">
                            ₦{product.price.toLocaleString()}{" "}
                            <span className="text-red-500 text-sm font-medium">
                                Save {product.discount}%
                            </span>
                        </p>
                    </div>

                    <div className="flex items-center gap-2 text-yellow-500 text-sm">
                        ⭐ {product.rating} ({product.reviews} reviews)
                    </div>

                    <ul className="text-gray-600 text-[15px] space-y-1 mt-3">
                        <li>🚚 Fast delivery available</li>
                        <li>🌱 Eco-friendly packaging</li>
                        <li>🔒 Secure payments</li>
                        <li>
                            {product.inStock ? (
                                <span className="text-green-600 font-medium">● In stock</span>
                            ) : (
                                <span className="text-red-600 font-medium">Out of stock</span>
                            )}
                        </li>
                    </ul>

                    <div className="flex items-center justify-between mt-4">
                        <div className="flex flex-col">
                            <p className="text-sm font-medium text-gray-700 mb-2">Quantity</p>
                            <QuantitySelector
                                initialQuantity={1}
                                onChange={(value) => setQuantity(value)}
                            />
                        </div>

                        <button
                            onClick={handleAddToCart}
                            className="text-gray-500 hover:text-red-500 transition"
                        >
                            <Heart size={30} />
                        </button>
                    </div>

                    <div className="flex flex-col gap-3 mt-6">

                        <button
                            onClick={handleBuyNow}
                            className="w-full mt-5 bg-orange-600 text-white py-3 rounded-xl font-semibold text-lg shadow-md hover:bg-orange-700 transition-colors"
                        >
                            {loading ? "Redirecting..." : "Buy Now"}
                        </button>


                        <a
                            href="#"
                            className="text-[#DB751D] font-medium text-[15px] underline"
                        >
                            More payment options
                        </a>
                    </div>

                    <div className="flex flex-col gap-1 mt-4 border-t pt-3 border-gray-200">
                        <div className="flex items-center gap-2">
                            <CheckIcon className="text-green-500" size={16} />
                            <p className="text-sm text-gray-700">
                                Pick up available at{" "}
                                <span className="font-semibold">
                                    Steady Bite, Rumuosi Junction
                                </span>
                            </p>
                        </div>
                        <p className="pl-6 text-sm text-gray-500">
                        Usually ready in 30 minutes
                        </p>
                    </div>
                </div>
            </div>

            {/* --- Accordion Section --- */}
            <div className="w-full md:max-w-3xl mx-auto flex flex-col gap-5 px-5 md:px-0 py-8">
                {lists.map((list, i) => (
                    <div key={i} className="border-b border-gray-200 pb-2">
                        <button
                            className="w-full flex justify-between items-center py-3 text-[17px] font-medium text-gray-800"
                            onClick={() => toggle(i)}
                        >
                            {list.title}
                            {openIndex === i ? (
                                <ChevronUp size={18} className="text-[#DB751D]" />
                            ) : (
                                <ChevronDown size={18} className="text-gray-500" />
                            )}
                        </button>
                        
                        {openIndex === i && (
                            <p className="pb-3 text-gray-600 text-[15px] leading-relaxed">
                                {list.text}
                            </p>
                        )}
                    </div>
                ))}
            </div>

        <Sponsors />
        </div>
    );
}
