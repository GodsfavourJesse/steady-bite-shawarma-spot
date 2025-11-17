"use client";

import { Bell, MapPin, ChevronDown, Circle } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useLoader } from "@/context/LoaderContext";

const deliveryAreas = [
    "GRA Phase 1",
    "GRA Phase 2",
    "GRA Phase 3",
    "GRA Phase 4",
    "Ada George",
    "Rumuokoro",
    "Rumuola",
    "Rumuigbo",
    "Rumuosi",
    "Rumuekini",
    "Choba",
    "Alakahia",
    "Ozuoba",
    "Aluu",
    "Mgbuogba",
    "Eneka",
    "Woji",
    "Trans-Amadi",
    "Peter Odili Road",
    "Stadium Road",
    "Rukpoku",
    "Elelenwo",
    "Rumuodara",
    "Rumuibekwe",
    "D-Line",
    "Diobu",
    "Abuloma",
    "Borikiri",
    "Airport Road",
];

export default function Header() {
    const [location, setLocation] = useState<string | null>(null);
    const [open, setOpen] = useState(false);

    const { loading, setLoading } = useLoader();
    const router = useRouter();
    
    const navigateToNotification = () => {
        setLoading(true);
        router.push('/notifications');
    }

    const dropdownRef = useRef<HTMLDivElement | null>(null);

    // Load saved location
    useEffect(() => {
        const saved = localStorage.getItem("userLocation");
        setTimeout(() => {
            setLocation(saved || "GRA Phase 1");
        }, 500);
    }, []);

    // Save on change
    const chooseLocation = (area: string) => {
        setLocation(area);
        localStorage.setItem("userLocation", area);
        setOpen(false);
    };

    // Close dropdown on outside click
    useEffect(() => {
        const handler = (e: MouseEvent) => {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(e.target as Node)
            ) {
                setOpen(false);
            }
        };
        document.addEventListener("mousedown", handler);
        return () => document.removeEventListener("mousedown", handler);
    }, []);

    return (
        <header className="relative w-full flex md:hidden items-center justify-between px-3 py-4">

            {/* LEFT SIDE LOCATION */}
            <div className="flex flex-col">
                <span className="text-[11px] text-gray-300">Delivering to</span>

                {/* LOADING SKELETON */}
                {!location ? (
                    <div className="w-28 h-4 bg-white/20 animate-pulse rounded-md mt-1"></div>
                ) : (
                    <div className="relative mt-1" ref={dropdownRef}>
                        {/* Selected Location Display */}
                        <motion.div
                            onClick={() => setOpen(!open)}
                            className="flex items-center gap-1 bg-white/10 backdrop-blur-md px-3 py-1.5 rounded-xl border border-white/20 cursor-pointer active:scale-95 transition-all"
                            initial={{ opacity: 0, y: 5 }}
                            animate={{ opacity: 1, y: 0 }}
                        >
                            <MapPin className="w-4 h-4 text-green-400" />
                            <span className="text-white font-semibold text-sm truncate max-w-[110px]">
                                {location}
                            </span>
                            <ChevronDown
                                className={`w-4 h-4 text-white transition-all ${
                                open ? "rotate-180" : ""
                                }`}
                            />
                        </motion.div>

                        {/* DROPDOWN */}
                        <AnimatePresence>
                            {open && (
                                <motion.div
                                    initial={{ opacity: 0, y: 5, scale: 0.95 }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    exit={{ opacity: 0, y: 5, scale: 0.95 }}
                                    transition={{ duration: 0.18 }}
                                    className="absolute mt-2 w-48 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-2 shadow-xl max-h-56 overflow-y-auto no-scrollbar z-50"
                                >
                                    {deliveryAreas.map((area, index) => (
                                        <motion.button
                                            key={area}
                                            onClick={() => chooseLocation(area)}
                                            className={`w-full text-left px-3 py-2 rounded-xl text-white text-sm hover:bg-white/20 transition ${
                                                location === area ? "bg-white/20 font-semibold" : ""
                                            }`}
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            transition={{ delay: index * 0.02 }}
                                        >
                                            {area}
                                        </motion.button>
                                    ))}

                                    {/* CONTRACT AREA */}
                                    <div className="mt-2 border-t border-white/20 pt-2">
                                        <button
                                            className="w-full text-left px-3 py-2 text-red-300 font-semibold text-sm hover:bg-red-400/10 rounded-xl"
                                        >
                                            🚫 Outside Port Harcourt  
                                            <span className="block text-[11px] text-red-200 opacity-70">
                                                Contract Delivery Only
                                            </span>
                                        </button>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                )}
            </div>

            {/* NOTIFICATION ICON */}
            <motion.button
                onClick={navigateToNotification}
                whileTap={{ scale: 0.88 }}
                className="p-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 shadow-sm"
            >
                <Bell className="w-5 h-5 text-white" />
            </motion.button>

            {/* Loading Overlay */}
            {loading && (
                <div className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm z-50">
                    <div className="flex flex-col items-center">
                        <Circle className="w-12 h-12 text-white animate-spin" />
                        <p className="text-white mt-4 text-sm font-medium">Loading...</p>
                    </div>
                </div>
            )}

        </header>
    );
}
