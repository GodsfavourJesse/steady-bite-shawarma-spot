"use client";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

export default function ContactPage() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggle = (index: number) =>
        setOpenIndex(openIndex === index ? null : index);

    const faqs = [
        {
            question: "Want to visit us in-person? Here is our store location with an address.",
            answer:
                "Steady Bite Shawarma Spot — Beside Assemblies of God, Rumuosi Junction, Port Harcourt, Nigeria. We’re open daily",
        },
        {
            question: "Want to know more about your order?",
            answer:
                "WhatsApp or call us in 0916 604 2066",
        },
        {
            question: "Do you have any complaints?",
            answer:
                "Email us at steadylight8@gmail.com",
        },
        {
            question: "Have any positive or negative feedback?",
            answer:
                "We’d love to hear from you!. Your feedback helps us make your next shawarma even better. WhatsApp in 0916 604 2066 us or Email us at steadylight8@gmail.com",
        },
    ];

    return (
        <section className="max-w-3xl mx-auto px-4 py-16 text-gray-800">
            {/* Accordion Section */}
            <div className="space-y-4">
                {faqs.map((faq, i) => (
                    <div key={i} className="border-b border-gray-300">
                        <button
                            className="w-full text-left font-medium py-3 flex justify-between items-center text-[20px] text-bold"
                            onClick={() => toggle(i)}
                        >
                            {faq.question}
                            <span className="text-xl">
                                {openIndex === i ? <ChevronUp size={18} /> : <ChevronDown size={18} /> }
                            </span>
                        </button>
                        {openIndex === i && (
                            <p className="pb-4 text-[16px] text-gray-600">{faq.answer}</p>
                        )}
                    </div>
                ))}
            </div>

            {/* Contact Form */}
            <div className="mt-16">
                <h2 className="text-center text-3xl font-bold mb-8 font-fondamento">
                    Contact us
                </h2>

                <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="block font-semibold mb-1 text-sm">Name</label>
                            <input
                                type="text"
                                placeholder="Enter your name"
                                className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:border-orange-500"
                            />
                        </div>
                        <div>
                            <label className="block font-semibold mb-1 text-sm">Email</label>
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:border-orange-500"
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block font-semibold mb-1 text-sm">Message</label>
                        <textarea
                            rows={5}
                            placeholder="Write your message here..."
                            className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:border-orange-500"
                        ></textarea>
                    </div>

                    <div className="text-left">
                        <button
                            type="submit"
                            className="w-full md:w-[200px] bg-[#DB751D] hover:bg-[#c96919] text-white px-6 py-3 rounded-md shadow-md transition duration-300"
                        >
                            Send Message
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
}
