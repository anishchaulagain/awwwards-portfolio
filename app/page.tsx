"use client";

import { useState, useRef } from "react";
import Preloader from "@/components/Preloader";
import PortraitCanvas from "@/components/PortraitCanvas";
import StoryOverlay from "@/components/StoryOverlay";
import Navbar from "@/components/Navbar";

import Work from "@/components/Work";
import About from "@/components/About";
import Contact from "@/components/Contact";

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <main className="bg-black min-h-screen">
       <Navbar />
       {/* Preloader blocks the view until images are ready */}
      <div>
         {!isLoaded && <Preloader onComplete={() => setIsLoaded(true)} />}

      {/* Scroll Container defining the timeline length */}
       <div ref={containerRef} className="relative h-[600vh]">
          
          {/* Sticky Canvas Layer */}
          <PortraitCanvas scrollContainerRef={containerRef} />
          
          {/* Text Layer (Fixed positions controlled by scroll) */}
          <StoryOverlay scrollContainerRef={containerRef} />
          
       </div>
  
       
      </div>
      <Work />
       <About />
       <Contact />
      

       
    </main>
  );
}
