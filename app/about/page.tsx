"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { ChevronLeft } from "lucide-react";

export default function AboutPage() {

    const router = useRouter();

    const handleBack = () => {
        setTimeout(() => {
            router.back();
        }, 200) // Slight delay for smooth UX
    };

    return (
        <section className="max-w-7xl mx-auto px-4 pt-10 pb-20">

            {/* HERO */}
            <div className="relative h-[420px] md:h-[350px] w-full rounded-3xl overflow-hidden mb-16">
                <Image
                    src="/shawarma-1.jpg"
                    alt="About Steady Bite Shawarma Spot"
                    fill
                    className="object-cover object-center"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/70 to-black/90 backdrop-blur-[2px]" />

                {/* Mobile Back Button */}
                <button
                    onClick={handleBack}
                    className="absolute top-4 left-4 z-50 md:hidden bg-white/80 hover:bg-white text-gray-800 rounded-full p-2 shadow-md transition duration-300"
                >
                    <ChevronLeft size={20} />
                </button>

                {/* Hero Text */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    className="absolute inset-0 flex flex-col items-center justify-center text-center px-4"
                >
                    <h1 className="text-white text-5xl md:text-6xl font-bold font-fondamento">
                        About Steady Bite
                    </h1>
                    <p className="text-gray-200 mt-2 md:text-lg">
                        Home of irresistible shawarma & unforgettable taste.
                    </p>
                </motion.div>
            </div>

            {/* OUR STORY */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">

                {/* Text */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7 }}
                    className="flex flex-col gap-4"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                        Our Story
                    </h2>
                    <p className="text-[17px] text-gray-700 leading-relaxed">
                        Steady Bite Shawarma Spot was born out of passion for good food, warm experiences,
                        and unforgettable flavors. From a humble beginning as a small shawarma stand, we’ve
                        grown into a beloved brand known for premium quality and consistency.
                    </p>
                    <p className="text-[17px] text-gray-700 leading-relaxed">
                        Every wrap we serve is carefully crafted using fresh vegetables, rich sauces,
                        marinated proteins, and the perfect grill blend — all wrapped with love.
                    </p>
                </motion.div>

                {/* Image */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7 }}
                >
                    <div className="w-full h-[300px] relative rounded-2xl overflow-hidden shadow-md">
                        <Image
                            src="/shawarma-1.jpg"
                            alt="Steady Bite Shawarma"
                            fill
                            className="object-cover"
                        />
                    </div>
                </motion.div>
            </div>

            {/* WHY PEOPLE LOVE STEADY BITE */}
            <div className="mb-20">
                <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">
                    Why People Love Steady Bite
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        {
                            title: "Fresh Ingredients",
                            desc: "We handpick the freshest veggies, sauces, and proteins daily.",
                        },
                        {
                            title: "Perfectly Grilled",
                            desc: "Everything is seasoned and grilled with precision for unbeatable flavor.",
                        },
                        {
                            title: "Consistent Quality",
                            desc: "Every order carries the signature taste that keeps customers coming back.",
                        },
                    ].map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: i * 0.1 }}
                            className="p-6 bg-orange-50 border border-orange-200 rounded-2xl shadow-sm"
                        >
                            <h3 className="text-xl font-bold text-orange-700 mb-2">{item.title}</h3>
                            <p className="text-gray-700">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* SIGNATURE DISH HIGHLIGHT */}
            <div className="relative mb-20">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="relative w-full h-[300px] rounded-2xl overflow-hidden shadow-lg"
                    >
                        <Image
                            src="/shawarma-7.jpg"
                            alt="Signature Shawarma"
                            fill
                            className="object-cover"
                        />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="flex flex-col gap-4"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                            Our Signature Mix
                        </h2>
                        <p className="text-[17px] text-gray-700 leading-relaxed">
                            The Chicken & Beef Mix Shawarma — a fan favorite — brings together
                            perfectly grilled proteins, rich sauces, fresh vegetables, and that
                            unbeatable Steady Bite balance your taste buds crave.
                        </p>
                    </motion.div>
                </div>
            </div>

            {/* MISSION & VISION */}
            <div className="mb-16">
                <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">
                    Our Mission & Vision
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {[
                        {
                            title: "Our Mission",
                            desc: "To deliver the best shawarma experience with unbeatable taste, warmth, and reliability.",
                        },
                        {
                            title: "Our Vision",
                            desc: "To be the number one shawarma spot known for flavor, freshness, and unforgettable moments.",
                        },
                    ].map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="p-6 bg-white border rounded-2xl shadow-sm"
                        >
                            <h3 className="text-xl font-bold text-orange-700 mb-2">{item.title}</h3>
                            <p className="text-gray-700">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* FINAL CTA */}
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7 }}
                className="p-10 bg-orange-600 rounded-3xl text-center text-white shadow-lg"
            >
                <h2 className="text-2xl md:text-4xl font-bold mb-3">
                    “Where Shawarma Dreams Come True”
                </h2>
                <p className="md:text-lg text-orange-100">
                    Join us today and enjoy a bite of happiness — made with love, passion, and flavor.
                </p>
            </motion.div>
        </section>
    );
}
