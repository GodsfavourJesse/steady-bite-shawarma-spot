// app/page.tsx
import Banner from "@/components/Banner";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Sales from "@/components/Sale";
import SearchBox from "@/components/SearchBox";
import MobileHero from "@/components/MobileHero";
import Sponsors from "@/components/Sponsors";
import Footer from "@/components/Footer";

export default function HomePage() {
    return (
        <main className="relative w-full min-h-screen mb-10">
            {/* Background Image */}
            <div
                className="md:hidden absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: "url('/banner-2.jpg')" }}
            ></div>

            {/* Soft blur overlay */}
            <div className="md:hidden absolute inset-0 bg-black/30 backdrop-blur-sm"></div>

            {/* Content */}
            <div className="relative flex flex-col gap-6">
                <div className="md:hidden flex flex-col gap-2 px-[5%] pt-[2%]">
                    <Header />
                    <SearchBox />
                </div>

                <div className=" relative w-full flex flex-col px-[4%] pt-[3%] gap-6 bg-white rounded-t-[25px]">
                    <Hero />
                    <MobileHero />
                    <Sales />
                    <Banner />
                    <Sponsors />
                    <Footer />
                </div>
            </div>
        </main>
    );
}
