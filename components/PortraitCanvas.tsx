"use client";

import { useEffect, useRef, useState, RefObject } from "react";
import { useScroll, useTransform, useMotionValueEvent } from "framer-motion";

const TOTAL_FRAMES = 160;

interface PortraitCanvasProps {
  scrollContainerRef: RefObject<HTMLDivElement | null>;
}

export default function PortraitCanvas({ scrollContainerRef }: PortraitCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [isReady, setIsReady] = useState(false);

  // We rely on the Preloader having cached these, but we store references here for synchronous access
  useEffect(() => {
    const loadedImages: HTMLImageElement[] = [];
    let loadedCount = 0;

    for (let i = 1; i <= TOTAL_FRAMES; i++) {
        const img = new Image();
        const paddedIndex = i.toString().padStart(3, "0");
        img.src = `/frames/ezgif-frame-${paddedIndex}.jpg`;
        img.onload = () => {
            loadedCount++;
            if (loadedCount === TOTAL_FRAMES) setIsReady(true);
        };
        loadedImages.push(img);
    }
    setImages(loadedImages);
  }, []);

  const { scrollYProgress } = useScroll({
    target: scrollContainerRef,
    offset: ["start start", "end end"]
  });
  
  // Transform scroll (0-1) to frame index (0-159)
  const currentIndex = useTransform(scrollYProgress, [0, 1], [0, TOTAL_FRAMES - 1]);

  const renderFrame = (index: number) => {
    const canvas = canvasRef.current;
    if (!canvas || images.length === 0) return;
    


    const rawIndex = Math.floor(index);
    // Clamp index
    const safeIndex = Math.max(0, Math.min(TOTAL_FRAMES - 1, rawIndex));
    const img = images[safeIndex];

    if (!img) return;

    // Canvas sizing with DPI scaling
    const dpr = window.devicePixelRatio || 1;
    canvas.width = window.innerWidth * dpr;
    canvas.height = window.innerHeight * dpr;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Scale context to ensure drawing operations use logical pixels but render at high DPI
    ctx.scale(dpr, dpr);

    // Use logical dimensions for calculations
    const w = window.innerWidth;
    const h = window.innerHeight;
    const imgW = img.width;
    const imgH = img.height;
    
    if (!imgW || !imgH) return; 

    // Calculate scale to cover the logical viewport
    const scale = Math.max(w / imgW, h / imgH);
    const x = (w - imgW * scale) / 2;
    const y = (h - imgH * scale) / 2;
    
    // Enable high quality smoothing
    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = "high";

    ctx.clearRect(0, 0, w, h);
    ctx.drawImage(img, x, y, imgW * scale, imgH * scale);
  };

  useMotionValueEvent(currentIndex, "change", (latest) => {
    requestAnimationFrame(() => renderFrame(latest));
  });

  // Initial render when ready
  useEffect(() => {
    if (isReady) renderFrame(0);
  }, [isReady]);
  
  // Handle resize
  useEffect(() => {
    const handleResize = () => renderFrame(currentIndex.get());
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isReady, images]);

  return (
    <div className="sticky top-0 h-screen w-full overflow-hidden bg-black">
      <canvas
        ref={canvasRef}
        className="block h-full w-full object-cover"
        style={{ width: "100%", height: "100%", filter: "blur(0.5px) contrast(1.05) brightness(1.05)" }}
      />
      {/* Optional Gradient Overlay for "Fade" effect at bottom if needed, but spec says "Absolute Black" */}
    </div>
  );
}
