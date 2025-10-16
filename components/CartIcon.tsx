"use client";

import { ShoppingCart } from "lucide-react";
import { useCart } from "@/context/CartContext";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function CartIcon() {
    const { cart } = useCart();
    const totalItems = cart.reduce((acc: number, item: any) => acc + item.quantity, 0);

    // Bounce animation trigger when cart length changes
    const [bounce, setBounce] = useState(false);

    useEffect(() => {
        if (totalItems > 0) {
            setBounce(true);
            const timer = setTimeout(() => setBounce(false), 500); // bounce duration
            return () => clearTimeout(timer);
        }
    }, [totalItems]);

    return (
        <Link href="/cart" className="relative inline-flex items-center">
            <AnimatePresence>
                <motion.div
                    key={totalItems} // re-trigger animation when totalItems changes
                    animate={bounce ? { scale: [1, 1.3, 1] } : { scale: 1 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="relative"
                >
                    <ShoppingCart className="w-6 h-6" />
                    {totalItems > 0 && (
                        <span className="absolute -top-2 -right-2 bg-orange-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                            {totalItems}
                        </span>
                    )}
                </motion.div>
            </AnimatePresence>
        </Link>
    );
}
