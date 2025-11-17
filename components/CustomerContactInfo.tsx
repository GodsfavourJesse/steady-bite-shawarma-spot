"use client";

import { useState, useEffect } from "react";
import { Pencil, Check, X, Truck, ChartBarBig } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface CustomerInfo {
    name: string;
    email: string;
    phone: string;
    address: string;
}

interface CustomerContactProps {
    customer: CustomerInfo;
    setCustomer: (data: CustomerInfo) => void;
}

export default function CustomerContactInfo({ customer, setCustomer}: CustomerContactProps) {

    // CONTACT STATE
    const [isEditingContact, setIsEditingContact] = useState(false);
    const [contact, setContact] = useState<CustomerInfo>({
        name: "",
        email: "",
        phone: "",
        address: ""
    });
    const [tempContact, setTempContact] = useState(customer);

    // DELIVERY METHOD
    const [deliveryMethod, setDeliveryMethod] = useState<"ship" | "pickup">("ship");
    
    // ADDRESS STATES
    const [isEditingAddress, setIsEditingAddress] = useState(false);
    const [address, setAddress] = useState("");
    const [tempAddress, setTempAddress] = useState("");


    /** Load saved contact from localStorage */
    useEffect(() => {
        const saved = localStorage.getItem("customerContact");
        const savedAddress = localStorage.getItem("deliveryAddress");

        if (saved) {
            const parsed = JSON.parse(saved);

            // Full customer info including address
            const fullInfo: CustomerInfo = {
                ...parsed,
                address: savedAddress || parsed.address || ""
            };

            setContact(fullInfo);
            setTempContact(fullInfo);
            setCustomer(fullInfo);
        } else if (savedAddress) {
            // If no saved contact, just set address
            const addressOnly: CustomerInfo = {
                name: "",
                email: "",
                phone: "",
                address: savedAddress
            };
            setCustomer(addressOnly);
            setAddress(savedAddress);
        }
    }, []);
    

    /** Save Contact */
    const handleSaveContact = () => {
        setContact(tempContact);
        setCustomer(tempContact);
        localStorage.setItem("customerContact", JSON.stringify(tempContact));
        setIsEditingContact(false);
    };

    const handleEditContact = () => {
        setTempContact(contact);
        setIsEditingContact(true);
    };
    const handleCancelContact = () => setIsEditingContact(false);


    /** Load saved address */
    useEffect(() => {
        const saved = localStorage.getItem("deliveryAddress");
        if (saved) setAddress(saved);
    }, []);

   const handleEditAddress = () => {
        setTempAddress(address);
        setIsEditingAddress(true);
    };
    const handleCancelAddress = () => setIsEditingAddress(false);

    const handleSaveAddress = () => {
        // Update local state
        setAddress(tempAddress);

        // Update parent “customer” with new address
        setCustomer({
            name: tempContact.name || "",
            email: tempContact.email || "",
            phone: tempContact.phone || "",
            address: tempAddress,
        });

        // Save to localStorage
        localStorage.setItem(
            "customerContact",
            JSON.stringify({
                name: tempContact.name || "",
                email: tempContact.email || "",
                phone: tempContact.phone || "",
                address: tempAddress,
            })
        );

        // Also store separate deliveryAddress (optional, if needed elsewhere)
        localStorage.setItem("deliveryAddress", tempAddress);

        setIsEditingAddress(false);
    };


    return (
        <div className="w-full flex flex-col gap-6">

            {/* Contact Info */}
            <motion.div
                className="flex flex-col gap-2"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                viewport={{ once: true }}
            >
                <h4 className="font-semibold text-[16px] md:text-base">Customer Contact Info</h4>
                <div className="relative w-full">
                    <AnimatePresence mode="wait">
                        {isEditingContact ? (
                            <motion.div
                                key="edit-contact"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ duration: 0.3 }}
                                className="flex flex-col gap-2"
                            >
                                <input
                                    type="text"
                                    value={tempContact.name}
                                    onChange={(e) => setTempContact({ ...tempContact, name: e.target.value })}
                                    placeholder="Full Name"
                                    className="w-full h-[3em] text-[13px] md:text-[14px] outline-none px-4 text-gray-800 bg-white rounded-xl border border-orange-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-100 transition-all placeholder:text-gray-400 shadow-sm"
                                />
                                <input
                                    type="email"
                                    value={tempContact.email}
                                    onChange={(e) => setTempContact({ ...tempContact, email: e.target.value })}
                                    placeholder="Email Address"
                                    className="w-full h-[3em] text-[13px] md:text-[14px] outline-none px-4 text-gray-800 bg-white rounded-xl border border-orange-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-100 transition-all placeholder:text-gray-400 shadow-sm"
                                />
                                <div className="w-full flex items-center gap-2 pl-2">
                                    <input type="checkbox" />
                                    <p className="text-[13px]">Email me Updates</p>
                                </div>
                                <input
                                    type="tel"
                                    value={tempContact.phone}
                                    onChange={(e) => setTempContact({ ...tempContact, phone: e.target.value })}
                                    placeholder="Phone Number"
                                    className="w-full h-[3em] text-[13px] md:text-[14px] outline-none px-4 text-gray-800 bg-white rounded-xl border border-orange-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-100 transition-all placeholder:text-gray-400 shadow-sm"
                                />

                                <div className="flex items-center gap-2 mt-1">
                                    <motion.button
                                        whileTap={{ scale: 0.9 }}
                                        whileHover={{ scale: 1.1 }}
                                        onClick={handleSaveContact}
                                        className="p-2 bg-orange-600 text-white rounded-full shadow-sm hover:bg-orange-700 transition"
                                        title="Save"
                                    >
                                        <Check size={16} />
                                    </motion.button>
                                    <motion.button
                                        whileTap={{ scale: 0.9 }}
                                        whileHover={{ scale: 1.1 }}
                                        onClick={handleCancelContact}
                                        className="p-2 bg-gray-200 text-gray-700 rounded-full shadow-sm hover:bg-gray-300 transition"
                                        title="Cancel"
                                    >
                                        <X size={16} />
                                    </motion.button>
                                </div>
                            </motion.div>
                            ) : (
                            <motion.div
                                key="view-contact"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ duration: 0.3 }}
                                className="flex flex-col gap-1 px-4 h-auto text-[13px] md:text-[14px] rounded-xl border border-orange-100 bg-orange-50 shadow-sm justify-between py-3"
                            >
                                <p className={`text-gray-800 truncate ${!contact.name ? "italic text-gray-400" : ""}`}>
                                Name: {contact.name || "No name set"}
                                </p>
                                <p className={`text-gray-800 truncate ${!contact.email ? "italic text-gray-400" : ""}`}>
                                Email: {contact.email || "No email set"}
                                </p>
                                <p className={`text-gray-800 truncate ${!contact.phone ? "italic text-gray-400" : ""}`}>
                                Phone: {contact.phone || "No phone number set"}
                                </p>

                                <motion.button
                                whileTap={{ scale: 0.9 }}
                                whileHover={{ scale: 1.1 }}
                                onClick={handleEditContact}
                                className="mt-2 text-orange-700 hover:text-orange-800 transition self-end"
                                title="Edit Contact Info"
                                >
                                <Pencil size={16} />
                                </motion.button>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
                <p className="text-xs text-gray-500 mt-1">
                    We will use this information to contact you about your order.
                </p>
            </motion.div>

            {/* Delivery Method */}


            <div className="w-full flex flex-col gap-2">
                
                {/* Ship Option */}
                <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setDeliveryMethod("ship")}
                    className={`
                        relative w-full flex items-center justify-between p-5 rounded-2xl cursor-pointer border 
                        transition-all duration-300 shadow-sm
                        ${deliveryMethod === "ship" 
                            ? "border-green-600 bg-green-50 shadow-md" 
                            : "border-gray-300 bg-white"
                        }
                    `}
                >
                    {/* Custom Radio */}
                    <div className="flex items-center gap-3">
                        <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center
                            ${deliveryMethod === "ship" ? "border-green-600" : "border-gray-400"}
                        `}>
                            {deliveryMethod === "ship" && (
                                <motion.div 
                                    layoutId="dot"
                                    className="w-3 h-3 bg-green-600 rounded-full"
                                />
                            )}
                        </div>

                        <p className="text-[15px] font-medium">Ship</p>
                    </div>

                    <Truck 
                        size={20} 
                        className={deliveryMethod === "ship" ? "text-green-700" : "text-gray-500"} 
                    />
                </motion.div>

                {/* Pick Up Option */}
                <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setDeliveryMethod("pickup")}
                    className={`
                        relative w-full flex items-center justify-between p-5 rounded-2xl cursor-pointer border 
                        transition-all duration-300 shadow-sm
                        ${deliveryMethod === "pickup" 
                            ? "border-orange-600 bg-orange-50 shadow-md" 
                            : "border-gray-300 bg-white"
                        }
                    `}
                >
                    {/* Custom Radio */}
                    <div className="flex items-center gap-3">
                        <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center
                            ${deliveryMethod === "pickup" ? "border-orange-600" : "border-gray-400"}
                        `}>
                            {deliveryMethod === "pickup" && (
                                <motion.div 
                                    layoutId="dot"
                                    className="w-3 h-3 bg-orange-600 rounded-full"
                                />
                            )}
                        </div>

                        <p className="text-[15px] font-medium">Pick Up</p>
                    </div>

                    <ChartBarBig 
                        size={20} 
                        className={deliveryMethod === "pickup" ? "text-orange-700" : "text-gray-500"} 
                    />
                </motion.div>

            </div>



            {/* Delivery Address */}
            <motion.div
                className="flex flex-col gap-2"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                viewport={{ once: true }}
            >
                <h4 className="font-semibold text-[16px] md:text-base">Delivery Address</h4>
                <div className="relative w-full">

                    {/* If PICK Up => show fixed location */}
                    {deliveryMethod === "pickup" && (
                        <motion.div
                            key="pickup-location"
                            initial={{ opacity: 0, y: 10}}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            className="w-full px-4 py-3 rounded-xl bg-orange-50 border border-orange-200 shadow-sm text-gray-800"
                        >
                            <p className="text-[14px] font-medium">Pick Up Location</p>
                            <p className="text-[13px]">Beside Assemblies of God, Rumuosi</p>
                        </motion.div>
                    )}

                    {/* If SHIP => show editable address input */}
                    {deliveryMethod === "ship" && (
                        <AnimatePresence mode="wait">
                            {isEditingAddress ? (
                                <motion.div
                                    key="edit-address"
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    transition={{ duration: 0.3 }}
                                    className="flex items-center gap-2"
                                >
                                    <input
                                        type="text"
                                        value={tempAddress}
                                        onChange={(e) => setTempAddress(e.target.value)}
                                        placeholder="Enter your delivery address"
                                        className="w-full h-[3em] text-[13px] md:text-[14px] outline-none px-4 text-gray-800 bg-white rounded-xl border border-orange-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-100 transition-all placeholder:text-gray-400 shadow-sm"
                                    />
                                    <div className="flex items-center gap-1">
                                        <motion.button
                                            whileTap={{ scale: 0.9 }}
                                            whileHover={{ scale: 1.1 }}
                                            onClick={handleSaveAddress}
                                            className="p-2 bg-orange-600 text-white rounded-full shadow-sm hover:bg-orange-700 transition"
                                            title="Save"
                                        >
                                            <Check size={16} />
                                        </motion.button>
                                        <motion.button
                                            whileTap={{ scale: 0.9 }}
                                            whileHover={{ scale: 1.1 }}
                                            onClick={handleCancelAddress}
                                            className="p-2 bg-gray-200 text-gray-700 rounded-full shadow-sm hover:bg-gray-300 transition"
                                            title="Cancel"
                                        >
                                            <X size={16} />
                                        </motion.button>
                                    </div>
                                </motion.div>
                                ) : (
                                <motion.div
                                    key="view-address"
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    transition={{ duration: 0.3 }}
                                    className="flex items-center justify-between w-full px-4 h-[3em] text-[13px] md:text-[14px] rounded-xl border border-orange-100 bg-orange-50 shadow-sm"
                                >
                                    <p className={`text-gray-800 truncate ${!address ? "italic text-gray-400" : ""}`}>
                                        {address || "No address set. Tap pencil to add one."}
                                    </p>
                                    <motion.button
                                        whileTap={{ scale: 0.9 }}
                                        whileHover={{ scale: 1.1 }}
                                        onClick={handleEditAddress}
                                        className="text-orange-700 hover:text-orange-800 transition"
                                        title="Edit Address"
                                    >
                                        <Pencil size={16} />
                                    </motion.button>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    )}
                </div>
                <p className="text-xs text-gray-500 mt-1">
                    Make sure your address is correct for fast delivery.
                </p>
            </motion.div>
        </div>
    );
}
