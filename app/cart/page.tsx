"use client";

import { useCart } from "@/context/CartContext";
import Image from "next/image";
import Link from "next/link";
import QuantitySelector from "@/components/QuantitySelector";

export default function Cart() {
    const { cart, removeFromCart, clearCart, updateQuantity } = useCart();

    // 🧮 Calculate subtotal
    const subtotal = cart.reduce(
        (acc: number, item: any) => acc + item.price * item.quantity,
        0
    );

    // 🧮 Calculate total quantity
    const totalItems = cart.reduce(
        (acc: number, item: any) => acc + item.quantity,
        0
    );

    // 🚚 Delivery fee logic
    let deliveryFee = 500;
    if (totalItems > 5 && totalItems < 10) {
        deliveryFee = 1000;
    } else if (totalItems >= 10 && totalItems < 15) {
        deliveryFee = 1500;
    } else if (totalItems >= 15 && totalItems <= 20) {
        deliveryFee = 2000;
    } else if (totalItems > 20 && totalItems <= 30) {
        deliveryFee = 2500;
    } else if (totalItems > 30 && totalItems <= 40) {
        deliveryFee = 3000;
    }

    const total = subtotal + deliveryFee;

    return (
        <div className="w-full min-h-screen bg-gradient-to-b from-white to-green-50 flex flex-col items-center py-12 px-4">
            <h1 className="text-3xl md:text-4xl font-semibold mb-10 text-green-800">
                🛍️ Your Cart
            </h1>

            {cart.length === 0 ? (
                <div className="text-center text-gray-600 mt-16">
                    <p>Your cart is empty!</p>
                    <p className="mt-2 text-sm">Add items to see them here.</p>
                    <Link
                        href={"/collection"}
                        className="inline-block mt-4 bg-green-700 hover:bg-green-800 text-white px-6 py-3 rounded-full transition"
                    >
                        Shop Now
                    </Link>
                </div>
            ) : (
                <div className="w-full max-w-4xl">
                    {/* 🧺 Cart Items */}
                    <div className="grid gap-6">
                        {cart.map((item: any) => (
                            <div
                                key={item.id}
                                className="flex flex-col md:flex-row items-center p-4 rounded-2xl shadow-lg bg-white/90 hover:shadow-xl transition-all"
                            >
                                <Image
                                    src={item.image}
                                    alt={item.name}
                                    width={100}
                                    height={100}
                                    className="rounded-xl object-cover"
                                />

                                <div className="flex flex-col md:flex-row justify-between w-full md:ml-6 mt-4 md:mt-0">
                                    <div>
                                        <h2 className="text-xl font-semibold text-green-900">
                                        {item.name}
                                        </h2>
                                        <p className="text-gray-700 text-sm">
                                            Unit Price:{" "}
                                            <span className="font-medium">
                                                ₦{item.price.toLocaleString()}
                                            </span>
                                        </p>

                                        {/* 🔢 Quantity Selector */}
                                        <div className="mt-3">
                                            <QuantitySelector
                                                initialQuantity={item.quantity}
                                                onChange={(value) => updateQuantity(item.id, value)}
                                                min={1}
                                                max={50}
                                            />
                                        </div>
                                    </div>

                                    <div className="flex flex-col gap-2">
                                        <p className="text-green-700 font-semibold mt-2">
                                        Total: ₦{(item.price * item.quantity).toLocaleString()}
                                        </p>
                                        <button
                                            onClick={() => removeFromCart(item.id)}
                                            className="mt-3 md:mt-0 bg-red-600 hover:bg-red-700 text-white rounded-full px-5 py-2 transition-all"
                                        >
                                            Remove
                                        </button>
                                    </div>

                                </div>
                            </div>
                        ))}
                    </div>

                    {/* 💰 Totals Section */}
                    <div className="mt-10 bg-green-100 p-6 rounded-2xl flex flex-col gap-3 md:gap-0 md:flex-row justify-between items-center shadow-md">
                        <div>
                            <p className="text-lg font-medium text-green-800">
                                Subtotal ({totalItems} {totalItems > 1 ? "items" : "item"}): ₦
                                {subtotal.toLocaleString()}
                            </p>
                            <p className="text-md text-green-700">
                                Delivery Fee: ₦{deliveryFee.toLocaleString()}
                            </p>
                            <p className="text-xl font-semibold text-green-900 mt-1">
                                Total: ₦{total.toLocaleString()}
                            </p>
                        </div>

                        <div className="flex gap-4 mt-4 md:mt-0">
                            <button
                                onClick={clearCart}
                                className="text-green-700 border border-green-600 hover:bg-green-600 hover:text-white px-5 py-2 rounded-full transition-all"
                            >
                                Clear Cart
                            </button>
                            <button className="bg-green-700 hover:bg-green-800 text-white px-6 py-2 rounded-full transition-all">
                                Checkout with Opay
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
