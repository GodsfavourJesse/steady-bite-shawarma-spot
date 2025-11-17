"use client";

import { motion } from "framer-motion";
import { ChevronLeft, Trash2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { useCart } from "@/context/CartContext";
import Image from "next/image";
import Link from "next/link";
import QuantitySelector from "@/components/QuantitySelector";
import CartSummary from "./CartSummary";
import DeliveryAddress from "../DeliveryAddress";
import CustomerContactInfo from "../CustomerContactInfo";

export default function CartMobile() {
    const { cart, removeFromCart, clearCart, updateQuantity } = useCart();
    const router = useRouter();

    const subtotal = cart.reduce((acc: number, item: any) => acc + item.price * item.quantity, 0);
    const totalItems = cart.reduce((acc: number, item: any) => acc + item.quantity, 0);

    const deliveryFee =
        totalItems > 30 ? 3000 :
        totalItems > 20 ? 2500 :
        totalItems > 15 ? 2000 :
        totalItems > 10 ? 1500 :
        totalItems > 5 ? 1000 : 500;

    const total = subtotal + deliveryFee;

    if (cart.length === 0) {
        return (
            <div className="flex flex-col justify-center items-center min-h-screen bg-white text-gray-700 px-6 md:hidden">
            
                {/* Fun illustration or emoji */}
                <div className="text-6xl mb-6 animate-bounce">🥙</div>
                
                {/* Headline */}
                <h2 className="text-2xl font-bold mb-2 text-gray-800">Oops! Your cart is empty.</h2>
                
                {/* Friendly message */}
                <p className="text-gray-600 mb-6 text-center max-w-xs">
                    Looks like you haven’t added any delicious Steady Bite treats yet. Let’s fix that!
                </p>
                
                {/* Shop Now button */}
                <Link
                    href="/collection"
                    className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-full font-semibold shadow-lg transition-all transform hover:scale-105"
                >
                    Shop Now
                </Link>
            </div>
        );
    }


    return (
        <div className="flex flex-col bg-white min-h-screen md:hidden mb-10">
            {/* Header Image with Back Arrow */}
            <div className="relative w-full h-[15vh]">
                <Image src="/shawarma-4.jpg" alt="Cart" fill priority className="object-cover object-center" />

                <div className="absolute w-full inset-0 bg-black/70 backdrop-blur-md"></div>

                <div className="absolute z-10 flex w-full h-[10vh] items-center justify-start px-3">
                    <button
                        onClick={() => router.back()}
                        className=" bg-white/70 backdrop-blur-sm p-2 rounded-full"
                    >
                        <ChevronLeft className="w-5 h-5 text-green-700" />
                    </button>

                    <p className="w-full flex items-center justify-center text-white text-[16px]">Cart</p>
                </div>
                
            </div>

            {/* Cart Items */}
            <motion.div
                className="flex flex-col gap-3 p-5 bg-white rounded-t-3xl -mt-6 z-10 relative"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
            >
                <h3 className="font-bold text-[20px]">Items</h3>
                {cart.map((item: any) => (
                    <motion.div
                        key={item.id}
                        className="flex justify-between items-center pb-2 shadow-sm"
                        whileHover={{ scale: 1.02 }}
                    >
                        <Image src={item.image} alt={item.name} width={70} height={70} className="w-[90px] h-[90px] rounded-xl" />

                        <div className="relative flex flex-col gap-1.5 flex-1 ml-4">

                            <button
                                onClick={() => removeFromCart(item.id)}
                                className="absolute right-0 text-red-500 text-xs underline"
                            >
                                <Trash2 size={16} />
                            </button>
                            
                            <h3 
                                className="text-sm font-semibold text-gray-800"
                            >
                                {item.name}
                            </h3>
                            <p className="flex items-center gap-1 text-[14px] text-gray-500">
                                ₦{item.price.toLocaleString()} 
                                <span className="text-xs text-gray-400"
                                >
                                    per item
                                </span>
                            </p>

                            <div className="w-full flex items-center justify-between">
                                <QuantitySelector
                                    initialQuantity={item.quantity}
                                    onChange={(value) => updateQuantity(item.id, value)}
                                />
                                <p className="text-[14px] text-gray-900">
                                ₦{(item.price * item.quantity).toLocaleString()}.00
                                </p>
                            </div>
                        </div>

                    </motion.div>
                ))}

                {/* Summary Section */}
                <CartSummary />
            </motion.div>
        </div>
    );
}
