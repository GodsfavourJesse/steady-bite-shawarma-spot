import type { Metadata } from "next";
import { createPageTitle } from "@/lib/metadata";
import CartPageInner from "./CartPageInner"; // client-side component

export const metadata: Metadata = {
  title: createPageTitle("Cart"),
};

export default function CartPage() {
  return <CartPageInner />;
}
