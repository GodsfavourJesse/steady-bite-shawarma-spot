import type { Metadata } from "next";
import { createPageTitle } from "@/lib/metadata";
import AccountPageInner from "./AccountPageInner";

export const metadata: Metadata = {
    title: createPageTitle("Account"),
};

export default function AccountPage() {
    return <AccountPageInner />;
}