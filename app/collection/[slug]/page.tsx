"use client";

import { useParams } from "next/navigation";
import { products } from "@/app/data/products";
import Image from "next/image";
import { useState, useEffect } from "react";
import { CheckIcon, ChevronDown, ChevronUp, Heart, Minus, Plus } from "lucide-react";
import OpayCheckoutModal from "@/components/OpayCheckoutModal";
import { useCart } from "@/context/CartContext";
import QuantitySelector from "@/components/QuantitySelector";

export default function ProductPage() {
    const { slug } = useParams();
    const product = products.find((p) => p.slug === slug);
    const [activeImage, setActiveImage] = useState<string | null>(null);
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    const [quantity, setQuantity] = useState<number>(1);
    const { addToCart } = useCart();

    useEffect(() => {
        if (product) setActiveImage(product.images[0]);
    }, [product]);

    if (!product)
        return (
            <div className="p-10 text-center text-red-600 text-lg font-semibold">
                Product not found
            </div>
        );

    const toggle = (index: number) => setOpenIndex(openIndex === index ? null : index);

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
        <div className="flex flex-col">
            <div className="w-full md:max-w-6xl mx-auto flex flex-col md:flex-row gap-8 md:p-10">
                {/* Left Side: Image Gallery */}
                <div className="flex gap-4 justify-center items-start">
                    {activeImage && (
                        <Image
                            src={activeImage}
                            alt={product.name}
                            width={600}
                            height={600}
                            // className="rounded-lg"
                        />
                    )}
                </div>

                {/* Right Side: Details */}
                <div className="flex flex-col gap-4 max-w-lg p-5 md:p-0 pt-2">
                <h1 className="text-3xl font-bold">{product.name}</h1>

                <div>
                    <p className="text-lg line-through text-gray-400">₦{product.oldPrice}</p>
                    <p className="text-2xl font-semibold">
                    ₦{product.price}{" "}
                    <span className="text-red-500">Save {product.discount}%</span>
                    </p>
                </div>

                <div className="flex items-center gap-2 text-yellow-500">
                    ⭐ {product.rating} ({product.reviews} reviews)
                </div>

                <ul className="text-gray-600 space-y-2">
                    <li>🚚 Fast delivery</li>
                    <li>🌱 Eco-friendly packaging</li>
                    <li>🔒 Secure payments</li>
                    <li>
                    {product.inStock ? (
                        <span className="text-green-600">● In stock</span>
                    ) : (
                        <span className="text-red-600">Out of stock</span>
                    )}
                    </li>
                </ul>

                {/* 🔢 Quantity Selector */}
                <div className="flex items-end justify-start gap-4">
                    <div className="flex flex-col items-start gap-4 mt-4">
                        <p className="text-lg font-medium">Quantity:</p>
                        <QuantitySelector
                            initialQuantity={1}
                            onChange={(value) => setQuantity(value)}
                        />
                    </div>

                    <button
                    onClick={handleAddToCart}
                    className="text-gray-700"
                    >
                    <Heart
                        size={40}
                    />
                    </button>
                </div>

                {/* 🛒 Buttons */}
                <div className="flex flex-col gap-3 mt-3">

                    <OpayCheckoutModal product={{ ...product, quantity }} />
                </div>

                <a className="text-center underline text-[18px]" href="#">
                    More payment options
                </a>

                <div className="w-full flex flex-col gap-2 mt-2">
                    <div className="flex items-center justify-start gap-3">
                    <CheckIcon className="text-green-500" size={16} />
                    <p className="text-[16px]">
                        Pick up available at{" "}
                        <span className="font-bold">Steady Bite, Rumuosi Junction</span>
                    </p>
                    </div>
                    <p className="pl-7 text-[16px]">Usually ready 30 minutes after order</p>
                </div>
                </div>
            </div>

        {/* Accordion Section */}
        <div className="w-full mx-auto flex flex-col items-center justify-center gap-10 p-10">
            {lists.map((list, i) => (
            <div
                key={i}
                className="w-full md:w-[700px] border-b border-gray-300"
            >
                <button
                className="w-full text-left py-3 flex justify-between items-center text-[20px] font-medium"
                onClick={() => toggle(i)}
                >
                {list.title}
                <span className="text-xl">
                    {openIndex === i ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                </span>
                </button>
                {openIndex === i && (
                <p className="pb-4 text-[16px] text-gray-600">{list.text}</p>
                )}
            </div>
            ))}
        </div>
        </div>
    );
}
