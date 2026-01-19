"use client";

import { ParallaxScroll } from "@/components/ui/parallax-scroll";

// Sample project images - replace with your actual images
const images = [
  "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80",
  "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&q=80",
  "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80",
  "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&q=80",
  "https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=800&q=80",
  "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&q=80",
  "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&q=80",
  "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&q=80",
  "https://images.unsplash.com/photo-1550439062-609e1531270e?w=800&q=80",
];

export default function Work() {
  return (
    <section id="work" className="relative bg-black text-[#EDEDED] py-24 px-6 md:px-12 overflow-hidden">
      {/* Header */}
      <div className="mb-16 text-center">
        <span 
          className="text-sm md:text-base uppercase font-medium tracking-[0.4em] block mb-4"
          style={{ color: '#FF6B35' }}
        >
          My Work
        </span>
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white max-w-4xl mx-auto leading-tight">
          A curated collection of projects that showcase creativity & innovation
        </h2>
      </div>

      {/* Parallax Grid */}
      <ParallaxScroll images={images} />
    </section>
  );
}
