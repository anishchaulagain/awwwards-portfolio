"use client";

import { motion } from "framer-motion";

const projects = [
  {
    id: 1,
    title: "VAPORWAVE",
    category: "Web Experience",
    year: "2025"
  },
  {
    id: 2,
    title: "NEBULA",
    category: "Product Design",
    year: "2024"
  },
  {
    id: 3,
    title: "CHRONOS",
    category: "Interaction",
    year: "2024"
  },
  {
    id: 4,
    title: "AETHER",
    category: "Branding",
    year: "2023"
  }
];

export default function Work() {
  return (
    <section id="work" className="relative min-h-screen bg-black text-[#EDEDED] py-24 px-6 md:px-12">
      {/* Header */}
      <div className="mb-24 flex flex-col md:flex-row justify-between items-end border-b border-white/20 pb-8">
        <h2 className="font-syncopate text-4xl md:text-8xl font-bold uppercase tracking-tighter">
          Selected<br/>Work
        </h2>
        <span className="font-inter text-sm md:text-base text-gray-400 mb-2">
          (2023 — 2025)
        </span>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-24">
        {projects.map((project) => (
          <motion.div 
            key={project.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="group cursor-pointer"
          >
            {/* Image Placeholder */}
            <div className="w-full aspect-[4/3] bg-neutral-900 mb-6 overflow-hidden relative">
               <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
               {/* In a real app, <Image /> would go here */}
            </div>

            {/* Info */}
            <div className="flex justify-between items-start font-inter border-t border-white/10 pt-4">
              <div>
                <h3 className="text-2xl md:text-3xl font-medium mb-1 group-hover:text-gray-300 transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-500">{project.category}</p>
              </div>
              <span className="text-sm text-gray-500">{project.year}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
