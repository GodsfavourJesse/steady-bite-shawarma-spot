"use client";

import { useParams } from "next/navigation";
import { products } from "@/app/data/products";
import ProductDetailsDesktop from "@/components/productComponents/ProductDetailsDesktop";
import ProductDetailsMobile from "@/components/productComponents/ProductDetailsMobile";

export default function ProductPage() {
    const { slug } = useParams();
    const product = products.find((p) => p.slug === slug);

    if (!product)
        return (
            <div className="p-10 text-center text-red-600 text-lg font-semibold">
                Product not found
            </div>
        );

    return (
        <>
            <ProductDetailsMobile product={product} />
            <ProductDetailsDesktop product={product} />
        </>
    );
}
