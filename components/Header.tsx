"use client";

import { Bell, ChevronDown, Map, Menu } from "lucide-react";

export default function Header() {
    return (
        <header className="w-full flex md:hidden items-center justify-between px-2 py-3">
            {/* Location */}
            <div className="flex flex-col">
                <span className="text-xs text-gray-300">Your location</span>
                <button className="flex items-center gap-2 text-white">
                <Map className="w-4 h-4 text-green-600" />
                <span className="text-sm font-medium">Port Harcourt</span>
                <ChevronDown className="w-4 h-4" />
                </button>
            </div>

            {/* Actions */}
            <div className="flex items-center">
                <button className="p-2 rounded-full bg-gray-500 shadow-sm hover:shadow-md transition-all">
                <Bell className="w-5 h-5 text-white" />
                </button>
            </div>
        </header>
    );
}
