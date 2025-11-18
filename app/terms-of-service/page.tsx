import { createPageTitle } from "@/lib/metadata";
import { Metadata } from "next";
import TermsPageInner from "./TermsPageInner";

export const metadata: Metadata = {
    title: createPageTitle("Terms of Service"),
}

export default function TermsOfService() {
    return <TermsPageInner />
}