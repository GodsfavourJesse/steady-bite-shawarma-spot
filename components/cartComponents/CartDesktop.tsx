"use client";

import { motion } from "framer-motion";
import { Trash2 } from "lucide-react";
import { useCart } from "@/context/CartContext";
import Image from "next/image";
import Link from "next/link";
import QuantitySelector from "@/components/QuantitySelector";
import CartSummary from "./CartSummary";
import DeliveryAddress from "../DeliveryAddress";

export default function CartDesktop() {
    const { cart, removeFromCart, updateQuantity } = useCart();

    const subtotal = cart.reduce((acc: number, item: any) => acc + item.price * item.quantity, 0);
    const totalItems = cart.reduce((acc: number, item: any) => acc + item.quantity, 0);

    let deliveryFee = 500;
    if (totalItems > 5 && totalItems < 10) deliveryFee = 1000;
    else if (totalItems >= 10 && totalItems < 15) deliveryFee = 1500;
    else if (totalItems >= 15 && totalItems <= 20) deliveryFee = 2000;
    else if (totalItems > 20 && totalItems <= 30) deliveryFee = 2500;
    else if (totalItems > 30 && totalItems <= 40) deliveryFee = 3000;

    const total = subtotal + deliveryFee;

    if (cart.length === 0) {
        return (
            <div className="hidden md:flex flex-col items-center justify-center min-h-screen bg-gray-50 text-center">
                <Image
                    src="/empty-cart.svg"
                    alt="Empty cart"
                    width={220}
                    height={220}
                    className="mb-6"
                />
                <h2 className="text-2xl font-semibold text-gray-800">Your cart is empty</h2>
                <p className="text-gray-500 mt-2 mb-6">Add some items to make it happy 😊</p>
                <Link
                    href="/collection"
                    className="bg-orange-500 hover:bg-orange-700 text-white font-medium px-6 py-3 rounded-full transition-all"
                >
                    Start Shopping
                </Link>
            </div>
        );
    }

    return (
        <div className="hidden md:flex flex-col items-center w-full min-h-screen bg-gray-50 py-12 px-8">
            {/* Header */}
            <div className="text-center mb-10">
                <h1 className="text-3xl font-bold text-gray-800">Your Shopping Cart</h1>
                <p className="text-gray-500 mt-2">Review your selections before checkout</p>
            </div>

            {/* Cart Layout */}
            <div className="grid grid-cols-3 gap-10 w-full max-w-6xl">
                {/* Left - Cart Items */}
                <div className="col-span-2 bg-white rounded-2xl shadow-sm border border-gray-100 p-6 overflow-y-auto max-h-[70vh]">
                    {cart.map((item: any) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3 }}
                            className="flex items-center justify-between border-b border-gray-100 py-6 last:border-none"
                        >
                            <div className="flex items-center gap-5">
                                <div className="relative w-[100px] h-[100px] rounded-lg overflow-hidden bg-gray-100">
                                    <Image
                                        src={item.image}
                                        alt={item.name}
                                        fill
                                        className="object-cover hover:scale-105 transition-transform"
                                    />
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-800">{item.name}</h3>
                                    <p className="text-sm text-gray-500 mt-1">
                                        ₦{item.price.toLocaleString()} <span className="text-xs text-gray-400">per item</span>
                                    </p>

                                    <div className="mt-3">
                                        <QuantitySelector
                                            initialQuantity={item.quantity}
                                            onChange={(value) => updateQuantity(item.id, value)}
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col items-end gap-2">
                                <p className="text-lg font-bold text-gray-900">
                                    ₦{(item.price * item.quantity).toLocaleString()}
                                </p>
                                <button
                                    onClick={() => removeFromCart(item.id)}
                                    className="text-sm text-red-500 hover:text-red-600 flex items-center gap-1 transition-all"
                                >
                                    <Trash2 size={14} /> Remove
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Right - Summary */}
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 flex flex-col justify-between">
                    <div>
                        <DeliveryAddress />
                    </div>
                    <div className="mt-6">
                        <CartSummary
                            subtotal={subtotal}
                            totalItems={totalItems}
                        />
                    </div>
                    <button className="mt-8 w-full bg-orange-600 hover:bg-orange-700 text-white font-semibold py-4 rounded-xl transition-all shadow-md">
                        Proceed to Checkout
                    </button>
                </div>
            </div>
        </div>
    );
}
