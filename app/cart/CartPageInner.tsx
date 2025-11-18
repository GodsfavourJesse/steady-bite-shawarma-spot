"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

// Lazy load to optimize performance
const CartMobile = dynamic(() => import("@/components/cartComponents/CartMobile"), { ssr: false });
const CartDesktop = dynamic(() => import("@/components/cartComponents/CartDesktop"), { ssr: false });

export default function CartContainer() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 768);
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

  return isMobile ? <CartMobile /> : <CartDesktop />;
}
