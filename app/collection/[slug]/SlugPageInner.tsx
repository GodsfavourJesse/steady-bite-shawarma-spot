// app/collection/[slug]/SlugPageInner.tsx
"use client";

import { products } from "@/app/data/products";
import ProductDetailsDesktop from "@/components/productComponents/ProductDetailsDesktop";
import ProductDetailsMobile from "@/components/productComponents/ProductDetailsMobile";

interface SlugPageInnerProps {
    slug: string;
}

export default function SlugPageInner({ slug }: SlugPageInnerProps) {
    const product = products.find((p) => p.slug === slug);

    if (!product) {
        return (
            <div className="p-10 text-center text-red-600 text-lg font-semibold">
                Product not found
            </div>
        );
    }

    return (
        <>
            <ProductDetailsMobile product={product} />
            <ProductDetailsDesktop product={product} />
        </>
    );
}
