import { createPageTitle } from "@/lib/metadata";
import { Metadata } from "next";
import PrivacyPageInner from "./PrivacyPageInner";

export const metadata: Metadata = {
    title: createPageTitle("Privacy Policy"),
}

export default function PrivacyPolicy() {
    return <PrivacyPageInner />
}