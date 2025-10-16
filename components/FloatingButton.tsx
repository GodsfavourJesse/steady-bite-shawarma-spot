"use client";

import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  const phoneNumber = "2349043060566";

  // 👇 Friendly editable message with a “system tag” at the bottom
  const message = 
    `Hello! I’d like to make an inquiry.%0A%0A-------------------------%0A🧡 Sent via Steady Bite Website`;

  const handleClick = () => {
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, "_blank");
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 group">
      {/* 🔸 Floating Button */}
      <div
        onClick={handleClick}
        className="
          relative bg-[#DB751D] hover:bg-[#c96919]
          text-white rounded-full p-4 cursor-pointer
          shadow-lg shadow-orange-400/40 
          transition-all duration-300 hover:scale-110
          animate-pulse flex items-center justify-center
        "
      >
        <MessageCircle className="w-6 h-6" />
      </div>

      {/* 🔸 Tooltip */}
      <span
        className="
          absolute bottom-14 right-1/2 translate-x-1/2 
          bg-[#DB751D] text-white text-xs font-medium
          px-3 py-1 rounded-md shadow-md 
          opacity-0 group-hover:opacity-100 
          transition-opacity duration-300
        "
      >
        Chat with us 🍔
      </span>
    </div>
  );
}
