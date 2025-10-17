import type { Metadata } from "next";
import { Poppins, Metal_Mania, Fondamento } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { CartProvider } from "@/context/CartContext";
import MobileBottomNav from "@/components/MobileBottomNav";

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
    variable: "--font-poppins",
});

// const metalMania = Metal_Mania({
//   subsets: ["latin"],
//   weight: "400",
//   variable: "--font-metalmania",
// });

const fondamento = Fondamento({
    subsets: ["latin"],
    weight: "400",
    variable: "--font-fondamento",
});

export const metadata: Metadata = {
    title: "Steady Bite",
    description: "Where shawarma dreams come true",
    manifest: "/manifest.json",
    icons : {
        icon: [
            { url: "/favicon.png", type: "image/png", sizes: "32x32"},
            { url: "/favicon.ico", sizes: "any" }
        ],
        apple: "/icons/icon-192x192.png"
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html
            lang="en"
            className={`${poppins.variable} ${fondamento.variable}`}
        >
            <body className="bg-white text-black font-poppins">
                <CartProvider>
                    <Navbar />

                    <main className="min-h-screen">{children}</main>

                    <MobileBottomNav />
                </CartProvider>
            </body>
        </html>
    );
}
