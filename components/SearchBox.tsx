"use client";

import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import { products } from "@/app/data/products";
import { Calendar, Search, Sliders } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function SearchBox() {
    const router = useRouter();
    const [query, setQuery] = useState("");
    const [results, setResults] = useState<typeof products>([]);
    const containerRef = useRef<HTMLDivElement>(null);

    // Close dropdown if click outside
    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
                setResults([]);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setQuery(value);

        if (!value.trim()) {
            setResults([]);
            return;
        }

        const filtered = products
        .filter((product) =>
            product.name.toLowerCase().includes(value.toLowerCase())
        )
        .slice(0, 5); // limit results to 5
        setResults(filtered);
    };

    const goToProduct = (slug: string) => {
        router.push(`/collection/${slug}`);
        setQuery("");
        setResults([]);
    };

    return (
        <div ref={containerRef} className="relative w-full">
            {/* DESKTOP */}
            <motion.div className="hidden md:flex items-center w-1/3 justify-start relative">
                <div className="relative w-full max-w-xs">
                    <input
                        type="text"
                        placeholder="Search..."
                        value={query}
                        onChange={handleSearch}
                        className="w-full h-[2.8rem] bg-black text-white placeholder-gray-300 pl-4 pr-10 focus:outline-none focus:ring-2 focus:ring-gray-600 transition-all"
                    />
                    <Search size={20} className="absolute right-3 top-3 text-white" />

                    {results.length > 0 && (
                        <ul className="absolute z-50 top-full mt-1 w-full bg-white rounded-lg shadow-lg max-h-60 overflow-y-auto">
                            {results.map((item) => (
                                <li
                                    key={item.id}
                                    onClick={() => goToProduct(item.slug)}
                                    className="cursor-pointer flex items-center px-4 py-2 hover:bg-orange-100"
                                >
                                    <Image
                                        src={item.images[0]}
                                        alt={item.name}
                                        width={50}
                                        height={50}
                                        className="rounded-md mr-3 object-cover"
                                    />
                                    <span className="text-black">{item.name}</span>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </motion.div>

            {/* MOBILE */}
            <motion.div className="w-full md:hidden flex justify-center relative">
                <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.97 }}
                    className="relative w-[100%] rounded-2xl bg-white/10 backdrop-blur-lg border border-white/20 overflow-visible"
                >
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-orange-400/30 via-yellow-300/30 to-orange-400/30 blur-xl opacity-60 animate-pulse" />

                    <div className="relative flex items-center h-[50px] px-3">
                        <Calendar className="text-white/80 w-5 h-5 ml-1" />

                        <input
                            type="search"
                            placeholder="Search your favorite shawarma..."
                            value={query}
                            onChange={handleSearch}
                            className="w-full bg-transparent text-white placeholder:text-gray-300 text-sm px-3 outline-none"
                        />

                        <Sliders className="text-white/80 w-5 h-5 mr-1" />
                    </div>

                    {results.length > 0 && (
                        <ul className="absolute z-50 top-full mt-1 w-full bg-white rounded-lg shadow-lg max-h-60 overflow-y-auto text-black">
                            {results.map((item) => (
                                <li
                                    key={item.id}
                                    onClick={() => goToProduct(item.slug)}
                                    className="cursor-pointer flex items-center px-4 py-2 hover:bg-orange-100"
                                >
                                    <Image
                                        src={item.images[0]}
                                        alt={item.name}
                                        width={40}
                                        height={40}
                                        className="rounded-md mr-3 object-cover"
                                    />
                                    <span>{item.name}</span>
                                </li>
                            ))}
                        </ul>
                    )}
                </motion.div>
            </motion.div>
        </div>
    );
}
