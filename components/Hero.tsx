"use client";

import Image from "next/image";
import Link from "next/link";

export default function Hero() {
    return (
        <section
            className="relative w-full h-[400px] md:h-[480px] flex flex-col md:flex-row items-center justify-between overflow-hidden rounded"
        >
            {/* 🔹 Background Image */}
            <Image
                src="/banner-2.jpg" // 🟢 make sure this file is in your /public folder
                alt="Steady Bite Shawarma Background"
                fill
                priority
                className="object-cover object-center cursor-pointer"
            />

            {/* 🔹 Content Section */}
            <div className="relative z-10 flex-1 text-left space-y-6 px-6 md:px-20">
                <h1 className="p-10 md:p-0 text-4xl md:text-6xl font-fondamento text-[#DB751D] leading-tight drop-shadow-md">
                    Steady Bite
                </h1>
            </div>
        </section>
    );
}
