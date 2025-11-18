import type { Metadata } from "next";
import { createPageTitle } from "@/lib/metadata";
import ImportantPageInner from "./ImportantPageInner";

export const metadata: Metadata = {
    title: createPageTitle("Important"),
};

export default function ImportantPage() {
    return <ImportantPageInner />;
}