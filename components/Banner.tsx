"use client";

export default function Banner() {
    return (
        <div className="w-full h-[100vh] relative flex items-center justify-center overflow-hidden">
            {/* 🔹 Background Image */}
            <img
                src="/Group.png"
                alt="banner"
                className="w-full h-[90vh] object-cover"
            />

            {/* 🔹 Glassmorphism Overlay on Right */}
            <div
                className="absolute right-0 bottom-0 md:bottom-[37px]
                h-[50vh] md:h-[90vh] w-full sm:w-[60%] md:w-[35%] 
                bg-white/10 md:bg-white/20 backdrop-blur-md border-t md:border-l border-white/30
                flex flex-col justify-center items-center md:items-start text-center md:text-left
                px-6 md:px-12 text-white transition-all duration-500"
            >
                <h1 className="font-poppins md:font-fondamento text-3xl sm:text-4xl md:text-6xl font-semibold mb-4 leading-tight drop-shadow-md text-white">
                    Huge savings <br /> on Bunk <br /> Orders.
                </h1>

                <p className="font-poppins md:font-fondamento text-base sm:text-lg md:text-xl mb-6 text-white">
                    Save up to <span className="font-semibold text-[#482405]">30%</span> on bunk orders!
                </p>

                <button className="w-[150px] bg-[#DB751D] hover:bg-[#c96919] text-white px-6 py-3 font-medium transition duration-300 shadow-lg">
                    Buy Now
                </button>
            </div>
        </div>
    );
}
