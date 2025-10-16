"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Filter } from "lucide-react";
import { products } from "@/app/data/products";

export default function Collection() {
  const [availability, setAvailability] = useState(false);
  const [maxPrice, setMaxPrice] = useState(6000);
  const [sort, setSort] = useState("featured");
  const [showFilters, setShowFilters] = useState(false);

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
    <section className="max-w-7xl mx-auto px-4 py-10 mb-10">
      {/* Header - Sticky on Mobile */}
      <div
        className="
          flex items-center justify-between mb-8
          sticky top-0 z-20 bg-white p-3
          md:static md:bg-transparent md:p-0 md:z-auto
        "
      >
        <motion.h2
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-2xl md:text-3xl font-semibold text-zinc-800"
        >
          Explore Our <span className="text-[#DB751D]">Delicious Menu</span>
        </motion.h2>

        {/* Mobile Filter Button */}
        <button
          onClick={() => setShowFilters(!showFilters)}
          className="md:hidden flex items-center gap-2 bg-orange-500 text-white px-3 py-2 rounded-xl text-sm shadow hover:bg-orange-600 transition"
        >
          <Filter size={16} />
          Filters
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Sidebar Filters */}
        <AnimatePresence>
          {(showFilters || typeof window !== "undefined") && (
            <motion.aside
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -50, opacity: 0 }}
              transition={{ type: "spring", stiffness: 100, damping: 15 }}
              className={`
                md:col-span-1 bg-white/80 backdrop-blur-sm border border-orange-100 rounded-2xl p-5 shadow-sm
                ${showFilters ? "block" : "hidden md:block"}
                md:sticky md:top-24 md:h-[80vh] md:overflow-y-auto
              `}
            >
              <div className="space-y-8">
                {/* Availability */}
                <div>
                  <h3 className="font-bold text-lg mb-3 text-gray-700">Availability</h3>
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

                {/* Max Price */}
                <div>
                  <h3 className="font-bold text-lg mb-3 text-gray-700">
                    Max Price <span className="text-[#DB751D]">(₦{maxPrice})</span>
                  </h3>
                  <input
                    type="range"
                    min="1000"
                    max="6000"
                    value={maxPrice}
                    onChange={(e) => setMaxPrice(Number(e.target.value))}
                    className="w-full accent-[#DB751D]"
                  />
                </div>

                {/* Sort By */}
                <div>
                  <h3 className="font-bold text-lg mb-3 text-gray-700">Sort By</h3>
                  <select
                    value={sort}
                    onChange={(e) => setSort(e.target.value)}
                    className="border border-gray-300 rounded-lg p-2 text-sm w-full focus:border-[#DB751D] focus:ring-[#DB751D] outline-none"
                  >
                    <option value="featured">Featured</option>
                    <option value="low-high">Price: Low → High</option>
                    <option value="high-low">Price: High → Low</option>
                    <option value="discount">Biggest Discount</option>
                  </select>
                </div>
              </div>
            </motion.aside>
          )}
        </AnimatePresence>

        {/* Product Grid */}
        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="md:col-span-3 md:h-[80vh] md:overflow-y-auto md:pr-2"
        >
          {filteredProducts.length > 0 ? (
            <motion.div
              layout
              className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-6 pb-6"
            >
              {filteredProducts.map((item) => (
                <motion.div
                  key={item.id}
                  layout
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <Link href={`/collection/${item.slug}`}>
                    <div className="rounded-2xl overflow-hidden bg-white shadow-sm border border-gray-100 hover:shadow-lg transition cursor-pointer">
                      <div className="relative">
                        <Image
                          src={item.images[0]}
                          alt={item.name}
                          width={400}
                          height={300}
                          className="w-full h-44 sm:h-48 object-cover"
                        />
                        <span className="absolute top-2 left-2 bg-[#DB751D] text-white text-xs px-2 py-1 rounded-full shadow">
                          Save {item.discount}%
                        </span>
                      </div>
                      <div className="p-4">
                        <h3 className="font-semibold text-gray-800 text-[15px] line-clamp-1">
                          {item.name}
                        </h3>
                        <div className="flex items-center text-sm text-yellow-500 mt-1">
                          ⭐ {item.rating} ({item.reviews})
                        </div>
                        <div className="flex items-center gap-2 mt-2">
                          <span className="font-bold text-[#DB751D] text-[15px]">
                            ₦{item.price.toLocaleString()}
                          </span>
                          <span className="text-gray-400 line-through text-sm">
                            ₦{item.oldPrice.toLocaleString()}
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
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <p className="text-center text-gray-500 mt-20">
              No products match your filters 😔
            </p>
          )}
        </motion.main>
      </div>
    </section>
  );
}
