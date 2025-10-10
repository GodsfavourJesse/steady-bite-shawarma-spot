"use client"

export default function Sponsors() {
    return (
        <div className="w-full h-[250px] flex flex-col items-center justify-center gap-4 mt-10 md:mt-0 border border-t-gray-100">
            <h2 className="text-xl text-bold">We accept</h2>

            <div className="flex items-center justify-center gap-2">
                <img 
                    src="/opay.png" 
                    alt="opay"
                    className="w-20" 
                />
                <img 
                    src="/paypal.png" 
                    alt="paypal"
                    className="w-20" 
                />
            </div>
        </div>
    )
}