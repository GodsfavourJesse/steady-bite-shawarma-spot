import { createPageTitle } from "@/lib/metadata";
import { Metadata } from "next";
import NotificationPageInner from "./NotificationsPageInner";

export const metadata: Metadata = {
    title: createPageTitle("Notifications"),
}

export default function Notifications() {
    return <NotificationPageInner />
}