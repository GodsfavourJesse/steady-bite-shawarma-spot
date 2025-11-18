import type { Metadata } from "next";
import { createPageTitle } from "@/lib/metadata";
import AboutPageInner from "./AboutPageInner"; // client-side component

export const metadata: Metadata = {
  title: createPageTitle("About"),
};

export default function AboutPage() {
  return <AboutPageInner />;
}
