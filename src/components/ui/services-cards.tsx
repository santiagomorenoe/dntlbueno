"use client";

import React from "react";
import { motion } from "framer-motion";
import { useState } from "react";

interface CardData {
  title: string;
  description: string;
  img: string;
}

interface ServicesCardsProps {
  steps: CardData[];
}

export const ServicesCards: React.FC<ServicesCardsProps> = ({ steps }) => {
  const [isHovered, setIsHovered] = useState<number | null>(null);

  return (
    <div className="w-full flex flex-col gap-6 md:flex-row flex-wrap md:gap-12 justify-center items-stretch">
      {steps.map((step, idx) => (
        <div
          key={idx}
          className="relative rounded-3xl overflow-hidden flex-1 flex flex-col items-center px-6 py-8 min-w-[260px] max-w-[350px] mx-auto md:mx-0 hover:scale-105 transition-all duration-300 ease-in-out"
          onMouseEnter={() => setIsHovered(idx)}
          onMouseLeave={() => setIsHovered(null)}
          style={{ minHeight: 260 }}
        >
          {/* Background Pattern Container */}
          <div
            className="absolute top-0 inset-0 w-full h-full z-10 bg-cyan-100 dark:bg-blue-950"
            style={{
              backgroundImage: `url('/images/pattern2.svg')`,
              backgroundRepeat: "repeat",
              backgroundSize: "900px",
              backgroundPosition: "left",
              opacity: 0.7,
              maskImage:
                "linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0.1) 50%)",
              WebkitMaskImage:
                "linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0.1) 50%)",
            }}
            aria-hidden="true"
          />
          {/* Imagen principal animada */}
          <motion.img
            src={step.img}
            alt={step.title}
            className={`w-24 h-24 mb-6 z-10 duration-300 ease-in-out ${
              isHovered && idx === isHovered ? "scale-[1.1]" : ""
            }`}
            initial={{ y: 40, opacity: 0, scale: 0.8 }}
            whileInView={{ y: 0, opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 120,
              damping: 14,
              delay: 0.1,
            }}
            viewport={{ once: false, amount: 0.7 }}
          />
          {/* Título animado */}
          <motion.h3
            className="text-2xl font-semibold text-foreground mb-3 text-center z-10"
            initial={{ x: -40, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 16,
              delay: 0.2,
            }}
            viewport={{ once: false, amount: 0.7 }}
          >
            {step.title}
          </motion.h3>
          {/* Descripción animada */}
          <motion.p
            className="text-base text-foreground/75 text-center z-10"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.7 }}
          >
            {step.description}
          </motion.p>
        </div>
      ))}
    </div>
  );
};
