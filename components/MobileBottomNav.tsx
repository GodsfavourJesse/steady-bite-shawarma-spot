"use client";

import {
    Circle,
    Home,
    Home as HomeFilled,
    ShoppingBag,
    ShoppingBag as ShoppingBagFilled,
    User2,
    User2 as User2Filled,
} from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import CartIcon from "./CartIcon";
import { motion, AnimatePresence } from "framer-motion";
import { useLoader } from "@/context/LoaderContext";
import { useEffect } from "react";

export default function MobileBottomNav() {
    const pathname = usePathname();
    const { loading, setLoading } = useLoader();
    const router = useRouter();


    const handleNavigation = (path: string) => {
        setLoading(true);
        router.push(path);
    };

    const navLinks = [
        {
            href: "/",
            label: "Home",
            icon: <Home size={24} />,
            iconActive: <HomeFilled size={24} />,
        },
        {
            href: "/collection",
            label: "Shop",
            icon: <ShoppingBag size={24} />,
            iconActive: <ShoppingBagFilled size={24} />,
        },
        {
            href: "/cart",
            label: "Cart",
            icon: <CartIcon />,
            iconActive: <CartIcon />,
        },
        {
            href: "/account",
            label: "Profile",
            icon: <User2 size={24} />,
            iconActive: <User2Filled size={24} />,
        },
    ];

    return (
        <nav className="fixed bottom-0 left-0 w-full bg-white rounded-t-2xl shadow-xl md:hidden z-50 border-t border-gray-200">
            {/* Loading overlay */}
            {loading && (
                <div className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm z-50">
                    <div className="flex flex-col items-center">
                        <Circle className="w-12 h-12 text-white animate-spin" />
                        <p className="text-white mt-4 text-sm font-medium">Loading...</p>
                    </div>
                </div>
            )}

            <ul className="flex justify-around items-center py-3">
                {navLinks.map(({ href, label, icon, iconActive }) => {
                    const isActive = pathname === href;
                    const colorClass = isActive ? "text-orange-600" : "text-gray-700";

                    return (
                        <li key={href} className="flex flex-col items-center text-center">
                            <motion.button
                                onClick={() => handleNavigation(href)}
                                whileTap={{ scale: 0.9 }}
                                className="flex flex-col items-center bg-transparent border-none"
                            >
                                <div className="relative w-6 h-6">
                                    <AnimatePresence mode="wait">
                                        {isActive ? (
                                            <motion.div
                                                key="active"
                                                initial={{ opacity: 0, scale: 0.6 }}
                                                animate={{ opacity: 1, scale: [1.3, 1, 1.1, 1] }}
                                                exit={{ opacity: 0, scale: 0.8 }}
                                                transition={{ duration: 0.5, ease: "easeOut" }}
                                                className={colorClass}
                                            >
                                                {iconActive}
                                            </motion.div>
                                        ) : (
                                            <motion.div
                                                key="inactive"
                                                initial={{ opacity: 0, scale: 0.8 }}
                                                animate={{ opacity: 1, scale: 1 }}
                                                exit={{ opacity: 0, scale: 0.8 }}
                                                transition={{ duration: 0.25 }}
                                            >
                                                {icon}
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>

                                <span
                                    className={`text-[12px] ${
                                        isActive ? "text-orange-600 font-semibold" : "text-gray-700"
                                    }`}
                                >
                                    {label}
                                </span>
                            </motion.button>
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
}
