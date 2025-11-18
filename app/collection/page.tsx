import type { Metadata } from "next";
import { createPageTitle } from "@/lib/metadata";
import CollectionPageInner from "./CollectionPageInner"; // client-side component

export const metadata: Metadata = {
  title: createPageTitle("Collection"),
};

export default function CollectionPage() {
  return <CollectionPageInner />;
}
