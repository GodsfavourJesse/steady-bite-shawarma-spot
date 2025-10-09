"use client";
import { useState } from "react";
import { motion } from "framer-motion";

export default function ChatBot() {
    const [open, setOpen] = useState(false);
    const [messages, setMessages] = useState([
        { sender: "bot", text: "Hi 👋 I'm SteadyBot. How can I help you today?" },
    ]);
    const [input, setInput] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSend = async () => {
        if (!input.trim()) return;
        const newMessage = { sender: "user", text: input };
        setMessages((prev) => [...prev, newMessage]);
        setInput("");
        setLoading(true);

        const res = await fetch("/api/chat", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ message: input }),
        });

        const data = await res.json();
        setMessages((prev) => [...prev, { sender: "bot", text: data.reply }]);
        setLoading(false);
    };

    return (
        <>
            <motion.button
                className="fixed bottom-6 right-6 bg-orange-500 text-white p-4 rounded-full shadow-lg"
                onClick={() => setOpen(!open)}
                whileHover={{ scale: 1.1 }}
            >
                💬
            </motion.button>

            {open && (
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="fixed bottom-20 right-6 w-80 bg-white shadow-2xl rounded-2xl border border-gray-200 overflow-hidden flex flex-col"
                >
                    <div className="p-3 bg-orange-500 text-white font-semibold">SteadyBot</div>

                    <div className="flex-1 overflow-y-auto p-3 space-y-2 text-sm">
                        {messages.map((msg, i) => (
                            <div
                                key={i}
                                className={`${
                                msg.sender === "user"
                                    ? "text-right text-gray-800"
                                    : "text-left text-orange-600"
                                }`}
                            >
                                <p className="bg-gray-100 inline-block px-3 py-1 rounded-lg whitespace-pre-line">
                                    {msg.text}
                                </p>

                            </div>
                        ))}
                        {loading && (
                            <p className="text-orange-500 italic text-xs">SteadyBot is typing...</p>
                        )}
                    </div>

                    <div className="flex p-2 border-t border-gray-200">
                        <input
                            type="text"
                            className="flex-1 p-2 text-sm outline-none"
                            placeholder="Type a message..."
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyDown={(e) => e.key === "Enter" && handleSend()}
                        />
                        <button
                            className="text-orange-500 font-bold px-3"
                            onClick={handleSend}
                        >
                            ➤
                        </button>
                    </div>
                </motion.div>
            )}
        </>
    );
}
