"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="relative bg-black text-[#EDEDED] py-32 px-6 md:px-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 md:gap-32">
        
        {/* Left Column: Title */}
        <div className="md:w-1/3">
          <motion.h2 
             initial={{ opacity: 0, x: -50 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.8 }}
             className="font-syncopate text-3xl md:text-5xl font-bold uppercase tracking-wide leading-snug sticky top-24"
          >
            The<br/>Alchemist<br/>of Code
          </motion.h2>
        </div>

        {/* Right Column: Content */}
        <div className="md:w-2/3 font-inter text-lg md:text-2xl text-gray-300 leading-relaxed space-y-12">
          <motion.p
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.8, delay: 0.2 }}
          >
            I am a creative developer obsessed with the space between design and engineering. My work is not just about writing code; it's about crafting experiences that feel alive.
          </motion.p>
          
          <motion.p
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.8, delay: 0.3 }}
          >
            With a background in traditional design and a proficiency in modern web technologies, I bridge the gap—turning static concepts into fluid, interactive realities.
          </motion.p>

          {/* Stats / Details Grid */}
          <div className="grid grid-cols-2 gap-8 pt-12 border-t border-white/10">
             <div>
               <h4 className="text-sm text-gray-500 uppercase tracking-widest mb-2">Location</h4>
               <p className="text-white">Kathmandu, Nepal</p>
             </div>
             <div>
               <h4 className="text-sm text-gray-500 uppercase tracking-widest mb-2">Focus</h4>
               <p className="text-white">Interaction, WebGL, Motion</p>
             </div>
          </div>
        </div>

      </div>
    </section>
  );
}
