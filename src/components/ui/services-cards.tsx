"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { useState } from "react";

interface CardData {
  title: string;
  description: string;
  img: string;
}

interface ServicesCardsProps {
  steps: CardData[];
}

const textVariants: Variants = {
  hidden: { opacity: 0, y: -40 },
  visible: (idx: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut", delay: 0.3 * idx, staggerChildren: 0.1 },
  }),
}

export const ServicesCards: React.FC<ServicesCardsProps> = ({ steps }) => {
  const [isHovered, setIsHovered] = useState<number | null>(null);

  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:flex-row flex-wrap md:gap-12 justify-center items-stretch">
      {steps.map((step, idx) => (
        <div
          key={idx}
          className="relative rounded-3xl overflow-hidden flex-1 flex flex-col items-center px-6 py-8 min-w-[300px] max-w-[350px] mx-auto md:mx-0 hover:scale-105 transition-all duration-300 ease-in-out bg-background"
          onMouseEnter={() => setIsHovered(idx)}
          onMouseLeave={() => setIsHovered(null)}
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
            }}
            aria-hidden="true"
          />
          {/* Imagen principal animada */}
          <motion.img
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 * idx }}
            src={step.img}
            alt={step.title}
            className={`w-32 h-30 mb-6 z-10 duration-300 ease-in-out ${
              isHovered && idx === isHovered ? "scale-[1.1]" : ""
            }`}
          />
          {/* Título animado */}
          <motion.h3
            className="text-2xl font-semibold text-foreground mb-3 text-center z-10"
            variants={textVariants}
            initial="hidden"
            whileInView="visible"
            custom={idx}
          >
            {step.title}
          </motion.h3>
          {/* Descripción animada */}
          <motion.p
            className="text-base text-foreground/75 text-left pl-2 z-10"
            variants={textVariants}
            initial="hidden"
            whileInView="visible"
            custom={idx}
          >
            {step.description}
          </motion.p>
        </div>
      ))}
    </div>
  );
};
