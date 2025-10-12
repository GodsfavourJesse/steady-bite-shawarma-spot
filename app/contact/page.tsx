"use client";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function ContactPage() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    const [form, setForm] = useState({
        name: "",
        email: "",
        phone: "",
        prices: [] as string[],
        quantity: "1",
        address: "",
        message: "",
    });
    const [status, setStatus] = useState("");

    const toggle = (index: number) =>
        setOpenIndex(openIndex === index ? null : index);

    const faqs = [
        {
            question:
                "Want to visit us in-person? Here is our store location with an address.",
            answer:
                "Steady Bite Shawarma Spot — Besides Assemblies of God, Rumuosi Junction, Port Harcourt, Nigeria. We’re open daily from 6:30 PM to 10:30 PM.",
        },
        {
            question: "Want to know more about your order?",
            answer: "Contact us on WhatsApp at +234 916 604 2066.",
        },
        {
            question: "Do you have any complaints?",
            answer:
                "We’re sorry to hear that 😔. Please fill the contact form below or message us on WhatsApp — we’ll fix it fast.",
        },
        {
            question: "Have any positive or negative feedback?",
            answer:
                "We’d love to hear from you ❤️! Your feedback helps us make your next shawarma even better. Click the floating feedback icon and drop your feedback.",
        },
    ];

    const handleCheckboxChange = (value: string) => {
        setForm((prev) => {
            const selected = prev.prices.includes(value)
                ? prev.prices.filter((p) => p !== value)
                : [...prev.prices, value];
            return { ...prev, prices: selected };
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (!form.name || !form.email || !form.address || !form.message) {
            setStatus("⚠️ Please fill all fields before sending.");
            return;
        }

        const ceoPhone = "2349166042066"; // your WhatsApp number (no + or spaces)

        const text = `🍗 *New Order / Message for Steady Bite* 🍗

            👤 *Name:* ${form.name}
            📧 *Email:* ${form.email}
            📞 *Phone Number:* ${form.phone}
            🏠 *Address:* ${form.address}

            📦 *Quantity:* ${form.quantity}
            💰 *Selected Sizes:* ${form.prices.length > 0 ? form.prices.join(", ") : "None"}

            📝 *Customer's Message:*
                ${form.message}

            Sent from *Steady Bite Website*`
        ;

        const url = `https://wa.me/${ceoPhone}?text=${encodeURIComponent(text)}`;

        window.open(url, "_blank");
        setStatus("✅ Opening WhatsApp...");
        setForm({
            name: "",
            email: "",
            phone: "",
            prices: [],
            quantity: "1",
            address: "",
            message: "",
        });
    };

    return (
        <section className="max-w-3xl mx-auto px-4 py-16 text-gray-800">
            {/* Accordion Section */}
            <div className="space-y-4">
                {faqs.map((faq, i) => (
                    <div key={i} className="border-b border-gray-300">
                        <button
                            className="w-full text-left py-3 flex justify-between items-center text-[20px] font-bold"
                            onClick={() => toggle(i)}
                        >
                        {faq.question}
                        <span className="text-xl">
                            {openIndex === i ? (
                                <ChevronUp size={18} />
                            ) : (
                                <ChevronDown size={18} />
                            )}
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
                    Contact us / Place Order
                </h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Name + Email */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="block font-semibold mb-1 text-sm">Name</label>
                            <input
                                type="text"
                                placeholder="Enter your name"
                                value={form.name}
                                onChange={(e) => setForm({ ...form, name: e.target.value })}
                                className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:border-orange-500"
                            />
                        </div>

                        <div>
                            <label className="block font-semibold mb-1 text-sm">Phone Number</label>
                            <input
                                type="tel"
                                placeholder="Enter your whatsapp number"
                                value={form.phone}
                                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                                className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:border-orange-500"
                            />
                        </div>
                        <div>
                            <label className="block font-semibold mb-1 text-sm">Email</label>
                            <input
                                type="email"
                                placeholder="Enter your email"
                                value={form.email}
                                onChange={(e) => setForm({ ...form, email: e.target.value })}
                                className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:border-orange-500"
                            />
                        </div>
                    </div>

                    {/* Price checkboxes */}
                    <div>
                        <label className="block font-semibold mb-1 text-sm">Select Size / Price</label>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                            {[
                                "Normal Size - ₦2,500",
                                "Medium Size - ₦3,500",
                                "Jumbo Size - ₦4,500",
                                "Special Order",
                            ].map((item) => (
                                <label key={item} className="flex items-center space-x-2">
                                <input
                                    type="checkbox"
                                    checked={form.prices.includes(item)}
                                    onChange={() => handleCheckboxChange(item)}
                                    className="accent-orange-500"
                                />
                                <span>{item}</span>
                                </label>
                            ))}
                        </div>
                    </div>

                    {/* Quantity */}
                    <div>
                        <label className="block font-semibold mb-1 text-sm">Quantity</label>
                        <select
                            value={form.quantity}
                            onChange={(e) => setForm({ ...form, quantity: e.target.value })}
                            className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:border-orange-500"
                        >
                            {Array.from({ length: 100 }, (_, i) => (
                                <option key={i + 1} value={i + 1}>
                                    {i + 1}
                                </option>
                            ))}
                        </select>
                    </div>

                    {/* Address */}
                    <div>
                        <label className="block font-semibold mb-1 text-sm">Address</label>
                        <input
                            type="text"
                            placeholder="Enter your delivery address"
                            value={form.address}
                            onChange={(e) => setForm({ ...form, address: e.target.value })}
                            className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:border-orange-500"
                        />
                    </div>

                    {/* Message */}
                    <div>
                        <label className="block font-semibold mb-1 text-sm">Message</label>
                        <textarea
                            rows={5}
                            placeholder="Write your message or custom request..."
                            value={form.message}
                            onChange={(e) => setForm({ ...form, message: e.target.value })}
                            className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:border-orange-500"
                        ></textarea>
                    </div>

                    {/* Submit */}
                    <div className="text-center">
                        <button
                            type="submit"
                            className="w-full bg-[#DB751D] hover:bg-[#c96919] text-white px-6 py-3 rounded-md shadow-md transition duration-300"
                        >
                            Send via WhatsApp
                        </button>
                    </div>

                    {status && (
                        <p className="text-center mt-2 text-sm font-medium">{status}</p>
                    )}
                </form>
            </div>
        </section>
    );
}
