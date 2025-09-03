"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { useState } from "react";
import Image from "next/image";

interface CardData {
  title: string;
  description: string;
  img: string;
}

interface ServicesCardsProps {
  steps: CardData[];
}

// Optimized variants with reduced motion and better iOS compatibility
const textVariants: Variants = {
  hidden: { 
    opacity: 0, 
    y: -20, // Reduced from -40 for smoother animation
  },
  visible: (idx: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4, // Reduced from 0.5
      ease: [0.25, 0.46, 0.45, 0.94], // Custom cubic-bezier for smoother iOS performance
      delay: 0.2 * idx, // Reduced from 0.3
    },
  }),
};

// Simplified image variants with better iOS performance
const imgVariants: Variants = {
  initial: { 
    opacity: 0,
    scale: 0.95, // Start slightly smaller for smoother entrance
  },
  animate: {
    opacity: 1,
    scale: 1,
    transition: { 
      delay: 0.2, // Reduced from 0.3
      duration: 0.5, // Reduced from 0.6
      ease: [0.25, 0.46, 0.45, 0.94], // Custom easing instead of spring
    },
  },
};

export const ServicesCards: React.FC<ServicesCardsProps> = ({ steps }) => {
  const [isHovered, setIsHovered] = useState<number | null>(null);

  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:flex-row flex-wrap md:gap-12 justify-center items-stretch">
      {steps.map((step, idx) => (
        <motion.div
          key={idx}
          className="relative rounded-3xl overflow-hidden flex-1 flex flex-col items-center px-6 py-8 min-w-[300px] max-w-[350px] mx-auto md:mx-0 bg-background"
          onMouseEnter={() => setIsHovered(idx)}
          onMouseLeave={() => setIsHovered(null)}
          // Replaced CSS hover with Framer Motion for better iOS performance
          whileHover={{ 
            scale: 1.02, // Reduced from 1.05 for subtler effect
            transition: { duration: 0.2, ease: "easeOut" }
          }}
          // Add hardware acceleration hint
          style={{ 
            willChange: "transform",
            backfaceVisibility: "hidden", // Prevents flickering on iOS
            WebkitBackfaceVisibility: "hidden",
          }}
        >
          {/* Background Pattern Container */}
          <div
            className="absolute top-0 inset-0 w-full h-full z-10"
            style={{
              backgroundImage: `url('/images/pattern2.svg')`,
              backgroundRepeat: "repeat",
              backgroundSize: "900px",
              backgroundPosition: "left",
              opacity: 0.5,
              maskImage:
                "linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0.1) 100%)",
              WebkitMaskImage:
                "linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0.1) 100%)",
              // iOS optimization
              transform: "translateZ(0)", // Force hardware acceleration
              WebkitTransform: "translateZ(0)",
            }}
            aria-hidden="true"
          />
          
          {/* Imagen principal animada */}
          <motion.div
            className="w-32 h-30 mb-6 z-10 relative"
            variants={imgVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-50px" }} // Only animate once, start earlier
            style={{
              willChange: "transform, opacity",
              backfaceVisibility: "hidden",
              WebkitBackfaceVisibility: "hidden",
            }}
          >
            <motion.div
              className="w-full h-full"
              // Replaced CSS hover with Framer Motion
              animate={{ 
                scale: isHovered === idx ? 1.08 : 1, // Reduced from 1.1
              }}
              transition={{ 
                duration: 0.25, 
                ease: "easeOut",
              }}
              style={{
                willChange: "transform",
                backfaceVisibility: "hidden",
                WebkitBackfaceVisibility: "hidden",
              }}
            >
              <Image
                src={step.img}
                alt={step.title}
                className="w-full h-full object-cover"
                loading="lazy"
                fill
                // Add iOS-specific optimizations
                style={{
                  transform: "translateZ(0)", // Force hardware acceleration
                  WebkitTransform: "translateZ(0)",
                }}
              />
            </motion.div>
          </motion.div>
          
          {/* Título animado */}
          <motion.h3
            className="text-2xl font-semibold text-foreground mb-3 text-center z-10"
            variants={textVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-30px" }}
            custom={idx}
            style={{
              willChange: "transform, opacity",
              backfaceVisibility: "hidden",
              WebkitBackfaceVisibility: "hidden",
            }}
          >
            {step.title}
          </motion.h3>
          
          {/* Descripción animada */}
          <motion.p
            className="text-base text-foreground/75 text-left pl-2 z-10"
            variants={textVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-30px" }}
            custom={idx + 0.5} // Slight delay offset from title
            style={{
              willChange: "transform, opacity",
              backfaceVisibility: "hidden",
              WebkitBackfaceVisibility: "hidden",
            }}
          >
            {step.description}
          </motion.p>
        </motion.div>
      ))}
    </div>
  );
};