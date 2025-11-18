"use client";

import { ChevronLeft } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function DeliveryPageInner() {

    const router = useRouter();
    const handleBack = () => {
        setTimeout(() => {
            router.back();
        }, 200)
    };

    return (
        <section className="max-w-6xl mx-auto px-4 pt-10 pb-20 text-gray-800">

            {/* --- HERO SECTION --- */}
            <div className="relative w-full h-[350px] rounded-2xl overflow-hidden shadow-sm">
                <Image
                    src="/shawarma-2.jpg"
                    alt="Steady Bite Background"
                    fill
                    priority
                    className="object-cover object-center"
                />

                {/* Orange Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-orange-900/70"></div>

                <button
                    onClick={handleBack}
                    className="md:hidden absolute top-4 left-4 z-50 bg-white/50 text-gray-800 p-2 hover:bg-white rounded-full trnansition"
                >
                    <ChevronLeft size={24} />
                </button>

                {/* Title */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
                    <h1 className="text-white  text-6xl md:text-5xl font-bold font-fondamento drop-shadow-lg">
                        Delivery Policy
                    </h1>
                    <p className="text-orange-200 text-sm mt-2 max-w-md">
                        Freshly made shawarma delivered with speed, safety, and care.
                    </p>
                </div>
            </div>

            {/* --- CONTENT SECTION --- */}
            <div className="mt-12 space-y-10">

                {/* Item */}
                <div className="bg-white p-6 rounded-xl border border-orange-100 shadow-sm hover:shadow-md transition-all">
                    <h2 className="text-xl font-semibold text-orange-700 mb-3">
                        1. Delivery Coverage
                    </h2>
                    <p className="text-gray-700 leading-relaxed">
                        Steady Bite currently delivers within selected cities and zones.
                        Delivery availability depends on distance, traffic conditions,
                        and rider availability. You will be notified automatically if
                        your location is outside the delivery radius.
                    </p>
                </div>

                {/* Item */}
                <div className="bg-white p-6 rounded-xl border border-orange-100 shadow-sm hover:shadow-md transition-all">
                    <h2 className="text-xl font-semibold text-orange-700 mb-3">
                        2. Delivery Time
                    </h2>
                    <p className="text-gray-700 leading-relaxed">
                        Orders are prepared immediately after confirmation.
                        Standard delivery time ranges from{" "}
                        <span className="font-medium text-orange-600">
                            20 – 45 minutes
                        </span>{" "}
                        depending on order volume, weather, and traffic.
                    </p>
                </div>

                {/* Item */}
                <div className="bg-white p-6 rounded-xl border border-orange-100 shadow-sm hover:shadow-md transition-all">
                    <h2 className="text-xl font-semibold text-orange-700 mb-3">
                        3. Next-Day Shipping (DPD Fresh Food)
                    </h2>
                    <p className="text-gray-700 leading-relaxed">
                        For inter-city or long-distance orders,
                        we partner with{" "}
                        <span className="font-semibold text-orange-600">
                            DPD Local Fresh Food Delivery
                        </span>{" "}
                        to ship items safely the next day. This ensures your meal
                        arrives chilled, fresh, and ready to heat.
                    </p>
                </div>

                {/* Item */}
                <div className="bg-white p-6 rounded-xl border border-orange-100 shadow-sm hover:shadow-md transition-all">
                    <h2 className="text-xl font-semibold text-orange-700 mb-3">
                        4. Delivery Fees
                    </h2>
                    <p className="text-gray-700 leading-relaxed">
                        Delivery fees vary based on distance and location.
                        The exact fee will be shown at checkout before payment.
                    </p>
                </div>

                {/* Item */}
                <div className="bg-white p-6 rounded-xl border border-orange-100 shadow-sm hover:shadow-md transition-all">
                    <h2 className="text-xl font-semibold text-orange-700 mb-3">
                        5. Order Verification
                    </h2>
                    <p className="text-gray-700 leading-relaxed">
                        Riders may contact you via call or SMS to verify drop-off
                        location and delivery instructions. Please ensure your phone
                        number is correct and reachable.
                    </p>
                </div>

                {/* Item */}
                <div className="bg-white p-6 rounded-xl border border-orange-100 shadow-sm hover:shadow-md transition-all">
                    <h2 className="text-xl font-semibold text-orange-700 mb-3">
                        6. Failed Delivery Attempts
                    </h2>
                    <p className="text-gray-700 leading-relaxed">
                        If a rider is unable to reach you after{" "}
                        <span className="font-semibold text-orange-600">3 attempts</span>,
                        the order may be returned or cancelled with no refund for food
                        already prepared.
                    </p>
                </div>

            </div>

        </section>
    );
}
