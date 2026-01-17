"use client";

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="relative bg-black text-[#EDEDED] py-32 px-6 md:px-12 flex flex-col items-center justify-center min-h-[80vh] border-t border-white/10">
      
      <motion.p 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="font-inter text-gray-500 uppercase tracking-widest mb-8"
      >
        Start a project
      </motion.p>

      <motion.a 
        href="mailto:hello@anish.com"
        initial={{ scale: 0.9, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className="font-syncopate text-4xl md:text-8xl lg:text-9xl font-bold uppercase text-center hover:text-white transition-colors duration-300 relative group z-10"
      >
        <span className="relative z-10">Say Hello</span>
        <span className="absolute inset-0 text-gray-800 blur-lg z-0 opacity-0 group-hover:opacity-50 transition-opacity duration-500">Say Hello</span>
      </motion.a>

      <div className="mt-24 flex gap-12 font-inter text-sm md:text-base uppercase tracking-widest">
        {["LinkedIn", "Twitter", "Instagram", "GitHub"].map((social, i) => (
             <motion.a 
               key={social}
               href="#"
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ delay: i * 0.1 }}
               className="hover:text-gray-400 transition-colors"
             >
               {social}
             </motion.a>
        ))}
      </div>

      <div className="absolute bottom-8 text-xs text-gray-700 font-inter">
        © 2026 Anish Chaulagain.
      </div>
    </section>
  );
}
