"use client";

export default function SkeletonCard() {
  return (
    <div className="relative bg-white/10 rounded-3xl overflow-hidden shadow animate-pulse min-w-[150px] max-w-[160px] h-[240px] md:min-w-[260px] md:max-w-[280px]">
      <div className="w-full h-[160px] bg-gray-300/30" />
      <div className="p-3 space-y-2">
        <div className="w-2/3 h-3 bg-gray-300/30 rounded" />
        <div className="w-1/3 h-3 bg-gray-300/30 rounded" />
      </div>
    </div>
  );
}
