"use client";

import { motion, Variants } from "framer-motion";
import Link from "next/link";

const navVariants: Variants = {
  hidden: { y: -100, opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1,
    transition: { 
      duration: 1, 
      ease: [0.22, 1, 0.36, 1], // Custom ease for "cinematic" feel
      delay: 0.5 
    }
  }
};

const linkVariants = {
  hover: { 
    opacity: 0.7,
    scale: 0.95,
    transition: { duration: 0.2 }
  }
};

export default function Navbar() {
  return (
    <motion.nav 
      variants={navVariants}
      initial="hidden"
      animate="visible"
      className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-6 py-6 md:px-12 mix-blend-difference text-[#EDEDED]"
    >
      {/* Brand Logo */}
      <div className="font-syncopate font-bold text-xl tracking-widest uppercase cursor-pointer">
        Anish
      </div>

      {/* Navigation Links */}
      <div className="hidden md:flex gap-8 font-inter text-sm tracking-wide">
        {["WORK", "ABOUT", "CONTACT"].map((item) => (
          <Link key={item} href={`#${item.toLowerCase()}`}>
            <motion.span 
              variants={linkVariants}
              whileHover="hover"
              className="cursor-pointer block"
            >
              {item}
            </motion.span>
          </Link>
        ))}
      </div>

      {/* Mobile Menu Icon (Placeholder) */}
      <div className="md:hidden font-inter text-sm cursor-pointer">
        MENU
      </div>
    </motion.nav>
  );
}
