import { createPageTitle } from "@/lib/metadata";
import { Metadata } from "next";
import DeliveryPageInner from "./DeliveryPageInner";

export const metadata: Metadata = {
    title: createPageTitle("Delivery Policy"),
}

export default function DeliveryPage() {
    return <DeliveryPageInner />
}