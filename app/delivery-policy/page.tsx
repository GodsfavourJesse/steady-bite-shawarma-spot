"use client"

import Image from "next/image";

export default function DeliveryPolicy() {
    return (
        <section className="max-w-7xl mx-auto px-4 pb-10 md:pb-16 pt-10 text-gray-800">

            <div className="relative w-full h-[400px] md:h-[300px] flex flex-col md:flex-row items-center justify-between overflow-hidden rounded mb-6">
                <Image 
                    src="/banner-2.jpg"
                    alt="Steady Bite Shawarma Background"
                    fill
                    priority
                    className="object-cover object-center cursor-pointer"
                />

                <div className="absolute top-0 bottom-0 left-0 right-0 backdrop-blur-md bg-black/70"></div>

                <div className="w-full h-full relative z-10 flex flex-col items-center justify-center text-center text-white gap-2">
                    <h1 className="text-5xl font-fondamento font-bold">Delivery Policy</h1>
                    <p className="px-4 text-[14px]">We now ship with DPD local fresh food next day delivery services.</p>
                </div>
            </div>

        </section>
    );
}