"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const TOTAL_FRAMES = 160;

export default function Preloader({ onComplete }: { onComplete: () => void }) {
  const [percent, setPercent] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let imagesLoaded = 0;
    const images: HTMLImageElement[] = [];

    const updateProgress = () => {
      imagesLoaded++;
      const p = Math.floor((imagesLoaded / TOTAL_FRAMES) * 100);
      setPercent(p);
      
      if (imagesLoaded === TOTAL_FRAMES) {
        // Add a small delay for "feel"
        setTimeout(() => {
          setIsLoading(false);
          setTimeout(onComplete, 800); // Wait for exit animation
        }, 500);
      }
    };

    for (let i = 1; i <= TOTAL_FRAMES; i++) {
        const img = new Image();
        const paddedIndex = i.toString().padStart(3, "0");
        img.src = `/frames/ezgif-frame-${paddedIndex}.jpg`;
        img.onload = updateProgress;
        img.onerror = updateProgress; // Proceed even if fail, maybe log it
        images.push(img);
    }

    // Pass images to window context or similar if needed for immediate access without reload
    // But browser cache should handle it for the Canvas component.
    (window as any).preloadCache = images;

  }, [onComplete]);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black text-[#EDEDED]"
        >
          <div className="flex flex-col items-center gap-4">
            <span className="font-mono text-xs tracking-widest uppercase opacity-50">
                Loading Experience
            </span>
            <span className="text-4xl font-light tracking-widest font-[family-name:var(--font-syncopate)]">
                {percent}%
            </span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
