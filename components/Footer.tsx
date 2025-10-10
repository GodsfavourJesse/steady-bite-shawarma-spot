"use client"

export default function Footer() {
    return (
        <div className="w-full h-[100px] flex items-center justify-center text-center text-zinc-600 text-sm">
            <p className="text-[14px]">© {new Date().getFullYear()} Steady Bite — Where shawarma dreams come true.</p>
        </div>
    );
}