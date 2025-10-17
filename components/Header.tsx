"use client";

import { Bell, ChevronDown, Map } from "lucide-react";
import { useState, useEffect } from "react";

export default function Header() {
    const [location, setLocation] = useState("Port Harcourt");

    // Load saved location from localStorage on mount
    useEffect(() => {
        const savedLocation = localStorage.getItem("userLocation");
        if (savedLocation) {
            setLocation(savedLocation);
        }
    }, []);

    // Save location to localStorage whenever it changes
    const handleLocationChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const newLocation = e.target.value;
        setLocation(newLocation);
        localStorage.setItem("userLocation", newLocation);
    };

    return (
        <header className="w-full flex md:hidden items-center justify-between px-2 py-3">
            {/* Location */}
            <div className="flex flex-col">
                <span className="text-xs text-gray-300">Your location</span>
                <div className="flex items-center gap-2 text-white relative">
                    <Map className="w-4 h-4 text-green-600" />

                    {/* Dropdown (saves to localStorage) */}
                    <select
                        value={location}
                        onChange={handleLocationChange}
                        className="bg-transparent text-sm font-medium appearance-none outline-none cursor-pointer pr-5"
                    >
                        <option className="bg-white text-gray-700" value="Port Harcourt">
                        Port Harcourt
                        </option>
                        <option className="bg-white text-gray-700" value="Lagos">
                        Lagos
                        </option>
                        <option className="bg-white text-gray-700" value="Abuja">
                        Abuja
                        </option>
                        <option className="bg-white text-gray-700" value="Enugu">
                        Enugu
                        </option>
                        <option className="bg-white text-gray-700" value="Owerri">
                        Owerri
                        </option>
                    </select>

                    {/* Chevron icon (for looks only) */}
                    <ChevronDown className="w-4 h-4 absolute right-0 pointer-events-none" />
                </div>
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
