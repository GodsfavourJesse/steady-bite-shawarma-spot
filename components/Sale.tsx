"use client";

import Image from "next/image";

export default function Sales() {
    const products = [
        {
            id: 1,
            image: "/shawarma-1.jpg",
            name: "Chicken Shawarma",
        },
        {
            id: 2,
            image: "/shawarma-2.jpg",
            name: "Beef Shawarma",
        },
        {
            id: 3,
            image: "/shawarma-3.jpg",
            name: "Suya Shawarma",
        },
        {
            id: 4,
            image: "/shawarma-4.jpg",
            name: "Mixed Shawarma",
        },
        {
            id: 5,
            image: "/shawarma-5.jpg",
            name: "Mixed Shawarma",
        },
        {
            id: 6,
            image: "/shawarma-6.jpg",
            name: "Mixed Shawarma",
        },
        {
            id: 7,
            image: "/shawarma-7.jpg",
            name: "Mixed Shawarma",
        },
        {
            id: 8,
            image: "/shawarma-8.jpg",
            name: "Mixed Shawarma",
        },
        {
            id: 8,
            image: "/shawarma-9.jpg",
            name: "Mixed Shawarma",
        },
        {
            id: 8,
            image: "/shawarma-10.jpg",
            name: "Mixed Shawarma",
        },
    ];

    return (
        <section className="w-full bg-white">
            {/* 🟡 Section Header */}
            <h1 className="font-fondamento text-[#DB751D] text-4xl md:text-5xl font-bold text-left mb-7">
                Only at Steady Bite
            </h1>

            {/* 🟢 Product Grid */}
            <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 
                gap-4 md:gao-0">
                {products.map((item) => (
                    <div
                        key={item.id}
                        className="transition-all w-[100px] md:w-[220px] overflow-hidden group text-center cursor-pointer"
                    >
                        <div className="relative w-full h-[100px] md:h-[200px]">
                            <Image
                                src={item.image}
                                alt={item.name}
                                fill
                                className="object-cover transition-ease duration-500 ease-in-out rounded-xl 
                                group-hover:scale-110 group-hover:brightness-110 group-hover:animate-pulse-glow"
                            />
                        </div>

                        <div className="p-2 md:p4">
                            <p className="text-black text-[13px] md:text-[16px] font-semibold md:font-medium">
                                {item.name}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
