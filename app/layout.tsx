import type { Metadata } from "next";
import { Poppins, Metal_Mania, Fondamento } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

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
                <Navbar />

                <main className="min-h-screen">{children}</main>

                <footer className="text-center py-6 text-zinc-600 border-t border-zinc-300 text-sm">
                <p>© {new Date().getFullYear()} Steady Bite — Where shawarma dreams come true.</p>
                {/* <a href="">Powered by Schema World Technologies</a> */}
                </footer>
            </body>
        </html>
    );
}
