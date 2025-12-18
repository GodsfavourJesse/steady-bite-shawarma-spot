"use client";

import { useCart } from "@/context/CartContext";
import { calculateDeliveryFee } from "@/components/DeliveryFeeCalculator";
import { useEffect, useState } from "react";
import CustomerContactInfo from "@/components/CustomerContactInfo";
import { ChevronLeft } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import toast, { Toaster } from "react-hot-toast";

export default function CheckoutPage() {
    const { cart, clearCart } = useCart();
    const [checkoutItems, setCheckoutItems] = useState<any[]>([]);
    const [loading, setLoading] = useState(false);
    const [redirecting, setRedirecting] = useState(false);
    const router = useRouter();
    const searchParams = useSearchParams();

    // Delivery method state
    const [deliveryMethod, setDeliveryMethod] = useState<"ship" | "pickup">("ship");

    // Customer info state
    const [customer, setCustomer] = useState({ 
        name: "", 
        email: "", 
        phone: "",
        address: "",
    });

    // Load saved customer info from localStorage
    useEffect(() => {
        const savedCustomer = localStorage.getItem("customerContact");
        if (savedCustomer) {
            const parsed = JSON.parse(savedCustomer);
            setCustomer({
                name: parsed.name || "",
                email: parsed.email || "",
                phone: parsed.phone || "",
                address: parsed.address || "",
            });
        }
    }, []);

    // Product handling (Buy Now or cart)
    useEffect(() => {
        const itemParam = searchParams.get("item");
        if (itemParam) {
            setCheckoutItems([JSON.parse(decodeURIComponent(itemParam))]);
        } else {
            setCheckoutItems(cart);
        }
    }, [cart, searchParams]);

    // Subtotal and totals
    const subtotal = checkoutItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const totalItems = checkoutItems.reduce((sum, item) => sum + item.quantity, 0);
    const deliveryFee = calculateDeliveryFee(totalItems, deliveryMethod);
    const total = subtotal + deliveryFee;

    // Load Paystack SDK
    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://js.paystack.co/v1/inline.js";
        document.body.appendChild(script);
        return () => document.body.removeChild(script);
    }, []);

    // Validate customer info before payment
    const validateCustomerInfo = () => {
        if (!(customer.name || "").trim()) return "Please enter your full name";
        if (!(customer.email || "").trim()) return "Please enter your email address";
        if (!(customer.phone || "").trim()) return "Please enter your phone number";
        if (!(customer.address || "").trim()) return "Please enter your delivery address";
        return null;
    };

    // Paystack Payment
    const handlePayment = () => {
        const error = validateCustomerInfo();
        if (error) {
            toast.error(error);
            return;
        }

        if (checkoutItems.length === 0) {
            toast.error("Your cart is empty!");
            return;
        }

        setLoading(true);

        const info = { ...customer }; // Merge customer info

        const handler = window.PaystackPop.setup({
            key: process.env.NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY,
            email: info.email,
            amount: total * 100,
            currency: "NGN",
            ref: "SB" + Math.floor(Math.random() * 1000000000 + 1),
            metadata: {
                custom_fields: [
                    { display_name: "Customer Name", variable_name: "name", value: info.name },
                    { display_name: "Customer Phone", variable_name: "phone", value: info.phone },
                    { display_name: "Customer Address", variable_name: "address", value: info.address },
                ]
            },
            label: "Steady Bite Shawarma Spot",
            onClose: () => {
                setLoading(false);
                toast.error("Payment window closed.");
                setRedirecting(true);
                router.push("/checkout/failed");
            },
            callback: (response: any) => {
                clearCart();
                setLoading(false);
                toast.success("Payment successful! Ref: " + response.reference);
                setRedirecting(true);
                router.push(`/checkout/success?ref=${response.reference}`);
            },
        });

        handler.openIframe();
    };

    const handleBack = () => router.back();

    return (
        <div className="min-h-screen relative bg-gray-50 flex flex-col items-center md:justify-center md:gap-2 md:p-8 mb-20 md:mb-0">

            <Toaster position="top-right" reverseOrder={false} />

            {redirecting && (
                <div className="absolute inset-0 bg-black-50 flex flex-col items-center justify-center z-50">
                    <h1 className="text-2xl font-bold text-white mb-4">Processing Payment...</h1>
                    <p className="text-white text-center">Please wait 15 seconds while we confirm your transaction.</p>
                </div>
            )}

            {/* Mobile Header */}
            <header className="md:hidden fixed md:relative w-full z-10 p-4 bg-orange-600 text-white text-center shadow-md flex items-center justify-between">
                <button onClick={handleBack} className="p-2 bg-white/30 rounded-full hover:bg-white/50 transition text-white">
                    <ChevronLeft size={18} />
                </button>
                <div className="flex flex-col items-center flex-1">
                    <h1 className="text-2xl font-semibold">Checkout</h1>
                    <p className="text-sm mt-1">{totalItems} {totalItems > 1 ? "items" : "item"} in your cart</p>
                </div>
                <div className="w-8" />
            </header>

            {/* Desktop Header */}
            <div className="hidden w-full md:flex flex-col items-center justify-center">
                <h1 className="text-3xl font-semibold">Checkout</h1>
                <p className="text-sm mt-1">{totalItems} {totalItems > 1 ? "items" : "item"} in your cart</p>
            </div>

            {/* Order Summary */}
            <div className="w-full md:w-1/3 mt-4 md:mt-0 md:sticky md:top-8">
                <div className="mt-20 w-full p-2">
                    <div className="w-full p-2 md:p-0 mb-4">
                        <CustomerContactInfo 
                            customer={customer}
                            setCustomer={setCustomer}
                            totalItems={totalItems} 
                            deliveryMethod={deliveryMethod}
                            setDeliveryMethod={setDeliveryMethod}
                        />
                    </div>

                    <div className="bg-white rounded-3xl shadow-lg p-6 border border-gray-200">
                        <h3 className="text-lg font-semibold mb-4 text-gray-900">Order Summary</h3>
                        <div className="flex justify-between mb-2">
                            <p className="text-gray-600">Subtotal</p>
                            <p className="font-medium text-gray-900">₦{subtotal.toLocaleString()}</p>
                        </div>
                        <div className="flex justify-between mb-2">
                            <p className="text-gray-600">Delivery Fee</p>
                            <p className="font-medium text-gray-900">₦{deliveryFee.toLocaleString()}</p>
                        </div>
                        <div className="flex justify-between mt-3 pt-3 border-t border-gray-200">
                            <p className="text-lg font-semibold">Total</p>
                            <p className="text-lg font-bold">₦{total.toLocaleString()}</p>
                        </div>

                        <button
                            onClick={handlePayment}
                            disabled={loading}
                            className="w-full mt-5 bg-orange-600 text-white py-3 rounded-xl font-semibold text-lg shadow-md hover:bg-orange-700 transition-colors"
                        >
                            {loading ? "Processing..." : "Pay with Paystack"}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
