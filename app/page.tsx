// app/page.tsx
import Banner from "@/components/Banner";
import Hero from "@/components/Hero";
import Sales from "@/components/Sale";

export default function HomePage() {
    return (
        <main className="px-[5%] pt-[2%] flex flex-col gap-8">
            <Hero />
            <Sales />
            <Banner />
        </main>
    );
}
