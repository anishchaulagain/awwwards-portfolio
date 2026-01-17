"use client";

import { RefObject } from "react";
import { useScroll, useTransform, motion } from "framer-motion";

interface StoryOverlayProps {
  scrollContainerRef: RefObject<HTMLDivElement | null>;
}

export default function StoryOverlay({ scrollContainerRef }: StoryOverlayProps) {
  const { scrollYProgress } = useScroll({
    target: scrollContainerRef,
    offset: ["start start", "end end"]
  });

  // Helper for fade in/out logic
  // ranges: [enterStart, enterEnd, exitStart, exitEnd]
  const createOpacity = (ranges: number[]) => {
    return useTransform(scrollYProgress, ranges, [0, 1, 1, 0]);
  };
  
  const createY = (ranges: number[]) => {
      // Optional: slight parallax movement up
      // range [start, end] -> y [20, -20]
      return useTransform(scrollYProgress, [ranges[0], ranges[3]], [50, -50]);
  };

  /* 
     Retiming to fit everything within 0 - 1.0 (Full scroll) 
     Distributed: Intro (start), Philosophy (middle), Manifesto (end)
  */

  // Intro: 0.05 - 0.25
  const introOpacity = createOpacity([0.05, 0.10, 0.20, 0.25]);
  
  // Philosophy: 0.35 - 0.60
  const philOpacity = createOpacity([0.35, 0.40, 0.55, 0.60]);
  
  // Manifesto: 0.70 - 0.95
  const maniOpacity = createOpacity([0.70, 0.75, 0.90, 0.95]); 
  
  // Final: Unused currently
  // const finalOpacity = useTransform(scrollYProgress, [0.52, 0.55], [0, 1]);

  return (
    <div className="fixed inset-0 pointer-events-none z-10 flex flex-col justify-center w-full h-full">
      {/* 5-25% INTRO -> Center */}
      <motion.div 
        style={{ opacity: introOpacity, y: createY([0.05, 0.25]) }}
        className="absolute inset-0 flex flex-col items-center justify-center text-center px-4"
      >
        <div className="drop-shadow-[0_0_25px_rgba(255,255,255,0.3)]">
           
            <h1 className="text-4xl md:text-8xl font-semibold tracking-[-0.02em] text-white font-[family-name:var(--font-inter)] leading-none">
            ANISH <span className="text-[#f59e0b] drop-shadow-[0_0_15px_rgba(245,158,11,0.5)]">CHAULAGAIN</span>
            </h1>
        </div>
        <p className="mt-8 text-sm md:text-xl font-medium tracking-wide text-white/80 ">
          Creative Developer | Motion Designer | Computer Engineer
        </p>
        <p className="mt-8 text-sm md:text-xl font-medium tracking-wide text-white/80 ">
          Founder @VynSoftTechnologies
        </p>
      </motion.div>

      {/* 35-60% PHILOSOPHY -> Left */}
      <motion.div 
        style={{ opacity: philOpacity, y: createY([0.35, 0.60]) }}
        className="absolute inset-0 flex items-center justify-start px-6 md:px-24"
      >
        <div className="flex flex-col text-left max-w-4xl pt-12 md:pt-0">
          <h2 className="text-5xl md:text-8xl font-bold tracking-tight text-white mb-6 leading-[0.9]">
            Engineering<br />
            <span className="text-[#f59e0b]">Motion.</span>
          </h2>
          <p className="font-[family-name:var(--font-inter)] text-lg md:text-2xl text-white/80 font-medium max-w-2xl leading-relaxed">
            Designing perception through <span className="text-[#f59e0b]">code</span>.<br/> 
            Where craft meets <span className="text-[#f59e0b]">intellect</span>.
          </p>
        </div>
      </motion.div>

      {/* 70-95% MANIFESTO -> Right (Bento Grid) */}
      <motion.div 
        style={{ opacity: maniOpacity, y: createY([0.70, 0.95]) }}
        className="absolute inset-0 flex flex-col items-center md:items-end justify-center px-4 md:px-24"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl w-full">
            
            {/* Main Title Block */}
            <div className="md:col-span-2 bg-white/5 backdrop-blur-xl border border-white/10 p-6 rounded-2xl shadow-2xl flex flex-col justify-center">
                 <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white leading-tight">
                    Defined by <span className="text-white/40">Clarity.</span>
                </h2>
            </div>
            
            {/* Role / Company Block */}
            <div className="bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-2xl shadow-xl flex flex-col justify-between group hover:bg-white/10 transition-colors duration-500">
                 <div className="text-[#f59e0b] mb-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>
                 </div>
                 <div>
                     <h3 className="text-white text-lg font-semibold">Founder</h3>
                     <p className="text-white/60 text-sm">@VynSoftTechnologies</p>
                 </div>
            </div>

             {/* Stacks Block */}
             <div className="bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-2xl shadow-xl flex flex-col justify-between group hover:bg-white/10 transition-colors duration-500">
                <div className="text-[#f59e0b] mb-2">
                     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
                </div>
                 <div>
                    <h3 className="text-white text-lg font-semibold">Core Stack</h3>
                    <p className="text-white/60 text-sm">Next.js • React • TS</p>
                 </div>
            </div>

             {/* Detail/Metric Block */}
            <div className="md:col-span-2 bg-gradient-to-r from-white/5 to-transparent backdrop-blur-md border border-white/10 p-6 rounded-2xl shadow-xl flex items-center justify-between">
                <div>
                     <h3 className="text-white text-xl font-medium">Precision</h3>
                     <p className="text-white/50 text-sm">Pixel Perfect Execution</p>
                </div>
                <div className="text-4xl text-white/10 font-bold">100%</div>
            </div>

        </div>
      </motion.div>
      
      {/* Optional: Scroll Progress Indicator */}
      <motion.div 
        style={{ scaleX: scrollYProgress }}
        className="absolute bottom-0 left-0 h-1.5 bg-white origin-left w-full opacity-100"
      />
    </div>
  );
}
