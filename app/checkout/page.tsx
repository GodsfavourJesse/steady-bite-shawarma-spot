// "use client";

import { Suspense } from "react";
import CheckoutPageInner from "./CheckoutPageInner";
import { Metadata } from "next";
import { createPageTitle } from "@/lib/metadata";

export const metadata: Metadata = {
    title: createPageTitle("Checkout"),
};

export default function CheckoutPageWrapper() {
  return (
    <Suspense fallback={<div>Loading checkout...</div>}>
      <CheckoutPageInner />
    </Suspense>
  );
}
