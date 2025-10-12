"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { products } from "@/app/data/products";

export default function Collection() {
  const [availability, setAvailability] = useState(false);
  const [maxPrice, setMaxPrice] = useState(6000);
  const [sort, setSort] = useState("featured");

  const filteredProducts = useMemo(() => {
    let result = products;
    if (availability) result = result.filter((p) => p.inStock);
    result = result.filter((p) => p.price <= maxPrice);

    if (sort === "low-high") result = [...result].sort((a, b) => a.price - b.price);
    else if (sort === "high-low") result = [...result].sort((a, b) => b.price - a.price);
    else if (sort === "discount") result = [...result].sort((a, b) => b.discount - a.discount);

    return result;
  }, [availability, maxPrice, sort]);

  return (
    <section className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">
      {/* Sidebar Filters */}
      <aside className="md:col-span-1 space-y-8 border-r border-gray-200 pr-4">
        <div>
          <h3 className="font-bold text-lg mb-3">Availability</h3>
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={availability}
              onChange={(e) => setAvailability(e.target.checked)}
              className="accent-[#DB751D]"
            />
            <span>In stock only</span>
          </label>
        </div>

        <div>
          <h3 className="font-bold text-lg mb-3">Max Price (₦{maxPrice})</h3>
          <input
            type="range"
            min="1000"
            max="6000"
            value={maxPrice}
            onChange={(e) => setMaxPrice(Number(e.target.value))}
            className="w-full accent-[#DB751D]"
          />
        </div>

        <div>
          <h3 className="font-bold text-lg mb-3">Sort By</h3>
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="border rounded-md p-2 text-sm w-full"
          >
            <option value="featured">Featured</option>
            <option value="low-high">Price: Low → High</option>
            <option value="high-low">Price: High → Low</option>
            <option value="discount">Biggest Discount</option>
          </select>
        </div>
      </aside>

      {/* Product Grid */}
      <main className="md:col-span-3">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((item) => (
            <Link href={`/collection/${item.slug}`} key={item.id}>
              <div className="border border-gray-200 rounded-xl shadow-sm overflow-hidden hover:shadow-lg transition cursor-pointer">
                <div className="relative">
                  <Image
                    src={item.images[0]}
                    alt={item.name}
                    width={400}
                    height={300}
                    className="w-full h-48 object-cover"
                  />
                  <span className="absolute top-2 left-2 bg-red-600 text-white text-xs px-2 py-1 rounded">
                    Save {item.discount}%
                  </span>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-gray-800">{item.name}</h3>
                  <div className="flex items-center text-sm text-yellow-500">
                    ⭐ {item.rating} ({item.reviews})
                  </div>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="font-bold text-[#DB751D]">₦{item.price}</span>
                    <span className="text-gray-400 line-through text-sm">
                      ₦{item.oldPrice}
                    </span>
                  </div>
                  <p
                    className={`text-xs mt-2 ${
                      item.inStock ? "text-green-600" : "text-red-600"
                    }`}
                  >
                    {item.inStock ? "In stock" : "Out of stock"}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </section>
  );
}
