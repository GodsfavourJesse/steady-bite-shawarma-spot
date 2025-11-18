"use client";

import { useState } from "react";
import {
  Phone,
  MapPin,
  Mail,
  Clock,
  MessageCircle,
  ChevronDown,
  ChevronUp,
  Calendar,
  Timer,
  ChevronLeft,
} from "lucide-react";
import { useRouter } from "next/navigation";

export default function ContactPage() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    const toggle = (i: number) => setOpenIndex(prev => (prev === i ? null : i));

    const router = useRouter();
    const handleBack = () => router.back();

    const faqs = [
        {
            question: "Where is Steady Bite located?",
            answer:
                "Steady Bite Shawarma Spot — Beside Assemblies of God, Rumuosi Junction, Port Harcourt, Nigeria.",
        },
        {
            question: "What are your opening hours?",
            answer: "We are open every day from 6:30 PM to 10:30 PM.",
        },
        {
            question: "How can I place an order?",
            answer: "You can place an order through WhatsApp or directly from our website checkout.",
        },
        {
            question: "Do you accept custom shawarma requests?",
            answer: "Yes! Just message us on WhatsApp — we’ll prepare it exactly how you like 🔥.",
        },
    ];

    const contacts = [
        {
            title: "Call / WhatsApp",
            icon: <Phone size={38} className="text-[#DB751D]" />,
            text: "+234 916 604 2066",
            link: "https://wa.me/2349166042066",
            btn: "Chat on WhatsApp",
        },
        {
            title: "Email Us",
            icon: <Mail size={38} className="text-[#DB751D]" />,
            text: "steadylight8@gmail.com",
            link: "mailto:steadylight8@gmail.com",
            btn: "Send Email",
        },
        {
            title: "Visit Our Spot",
            icon: <MapPin size={38} className="text-[#DB751D]" />,
            text: "Besides Assemblies of God Church, Rumuosi Junction, PH, Nigeria",
            link: "https://www.google.com/maps/place/ASSEMBLIES+OF+GOD+CHURCH/@4.8824214,6.9392414,17z",
            btn: "Open in Maps",
        },
    ];

    return (
        <section className="w-full text-gray-800">

            {/* HERO SECTION */}
            <div
                className="relative h-[350px] md:h-[400px] w-full bg-center bg-cover"
                style={{ backgroundImage: "url('/shawarma-10.jpg')" }}
            >
                <div className="absolute inset-0 bg-black/60"></div>

                {/* Back Button */}
                <button
                    onClick={handleBack}
                    className="absolute md:hidden top-4 left-4 z-50 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow-md transition"
                >
                    <ChevronLeft size={24} />
                </button>

                <div className="relative z-10 h-full flex flex-col justify-center items-center text-center text-white px-6">
                    <h1 className="text-4xl md:text-5xl font-extrabold tracking-wide">
                        Contact Steady Bite
                    </h1>
                    <p className="max-w-2xl text-lg mt-4 text-gray-200">
                        We’re here to help you with orders, enquiries, feedback and more.
                        Let’s make your shawarma experience unforgettable.
                    </p>
                </div>
            </div>

            {/* CONTACT GRID */}
            <div className="max-w-6xl mx-auto px-6 -mt-10 md:-mt-20 mb-20">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {contacts.map((item, i) => (
                        <div
                            key={i}
                            className="backdrop-blur-xl bg-white/70 border border-white/40 shadow-xl rounded-2xl p-8 text-center hover:scale-[1.03] transition-transform duration-300"
                        >
                            <div className="flex justify-center mb-4">{item.icon}</div>
                            <h3 className="font-bold text-xl mb-1 text-gray-900">{item.title}</h3>
                            <p className="text-gray-700">{item.text}</p>
                            <a
                                href={item.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-5 inline-block bg-[#DB751D] hover:bg-[#C76416] text-white px-6 py-2 rounded-md shadow-md transition"
                            >
                                {item.btn}
                            </a>
                        </div>
                    ))}
                </div>
            </div>

            {/* OPENING HOURS */}
            <div className="max-w-4xl mx-auto mb-20 px-6 bg-[#FFF3EA] border border-[#F4D8C2] md:rounded-2xl p-8 shadow-sm">
                <div className="flex items-center gap-3">
                    <Clock className="text-[#DB751D]" size={30} />
                    <h2 className="text-2xl md:text-3xl font-semibold">Opening Hours</h2>
                </div>

                <div className="mt-4 text-gray-800 text-lg ml-10">
                    <p className="flex items-center gap-2 font-medium text-gray-700">
                        <Calendar size={20} /> Every Day
                    </p>
                    <p className="flex items-center gap-2 font-medium text-gray-700 mt-1">
                        <Timer size={24} /> 6:30 PM – 10:30 PM
                    </p>
                </div>
            </div>

            {/* FAQ */}
            <div className="max-w-4xl mx-auto mb-24 px-6">
                <h2 className="text-3xl font-bold text-center mb-10">Frequently Asked Questions</h2>

                <div className="space-y-4">
                    {faqs.map((faq, i) => (
                        <div key={i} className="border-b border-gray-300 pb-3">
                            <button
                                className="w-full flex justify-between items-center py-3 text-lg font-semibold text-left"
                                onClick={() => toggle(i)}
                            >
                                {faq.question}
                                {openIndex === i ? (
                                <ChevronUp className="text-[#DB751D]" size={20} />
                                ) : (
                                <ChevronDown className="text-[#DB751D]" size={20} />
                                )}
                            </button>
                            {openIndex === i && <p className="text-gray-700 pt-1">{faq.answer}</p>}
                        </div>
                    ))}
                </div>
            </div>

            {/* BOTTOM CTA */}
            <div className="text-center mb-20 px-4">
                <h2 className="text-3xl font-semibold mb-3">Still have a question?</h2>
                <p className="text-gray-600 mb-6">
                    If you need help with anything — orders, issues or feedback — reach out instantly.
                </p>

                <a
                    href="https://wa.me/2349166042066"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#DB751D] hover:bg-[#C76416] text-white px-10 py-4 rounded-xl text-lg shadow-lg transition flex items-center gap-2 mx-auto w-max"
                >
                    <MessageCircle size={22} />
                    Message Steady Bite
                </a>
            </div>
        </section>
    );
}
