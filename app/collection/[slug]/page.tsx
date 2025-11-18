// app/collection/[slug]/page.tsx
import type { Metadata } from "next";
import { createPageTitle } from "@/lib/metadata";
import SlugPageInner from "./SlugPageInner";

interface CollectionPageProps {
  params: { slug: string };
}

// Dynamic metadata based on slug
export async function generateMetadata({ params }: CollectionPageProps): Promise<Metadata> {
  return {
    title: createPageTitle(params.slug),
  };
}

// Server component passes slug to client component
export default function CollectionSlugPage({ params }: CollectionPageProps) {
  return <SlugPageInner slug={params.slug} />;
}
