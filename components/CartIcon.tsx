"use client";
import { ShoppingCart } from "lucide-react";
import { useCart } from "@/context/CartContext";
import Link from "next/link";

export default function CartIcon() {
  const { cart } = useCart();
  const totalItems = cart.reduce((acc: number, item: any) => acc + item.quantity, 0);

  return (
    <Link href="/cart" className="relative inline-flex items-center">
      <ShoppingCart className="w-6 h-6" />
      {totalItems > 0 && (
        <span className="absolute -top-2 -right-2 bg-green-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
          {totalItems}
        </span>
      )}
    </Link>
  );
}
