import type { Metadata } from "next";
import { createPageTitle } from "@/lib/metadata";
import ContactPageInner from "./ContactPageInner"; // client-side component

export const metadata: Metadata = {
  title: createPageTitle("Contact"),
};

export default function ContactPage() {
  return <ContactPageInner />;
}
