import type { Metadata } from "next";
import { createPageTitle } from "@/lib/metadata";
import SlugPageInner from "./SlugPageInner";

interface CollectionSlugPageProps {
    params: {
        slug: string;
    };
    }

// Dynamic metadata for each product slug
export async function generateMetadata({ params }: CollectionSlugPageProps): Promise<Metadata> {
    const slug = params.slug; // No need to await, Next.js handles the async wrapper internally
    return {
        title: createPageTitle(slug),
    };
}

// Server component passes slug to client component
export default function CollectionSlugPage({ params }: CollectionSlugPageProps) {
    return <SlugPageInner slug={params.slug} />;
}
