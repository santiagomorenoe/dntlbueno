"use client";

import { motion, Variants } from "framer-motion";

const containerVariants: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
    rotateX: 45,
  },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: {
      type: "spring",
      damping: 12,
      stiffness: 100,
      duration: 0.5,
    },
  },
};

const textVariants: Variants = {
  hidden: {
    opacity: 0,
    x: -20,
    filter: "blur(10px)",
  },
  visible: {
    opacity: 1,
    x: 0,
    filter: "blur(0px)",
    transition: {
      type: "tween",
      duration: 0.4,
      ease: "easeOut",
    },
  },
};

const highlightVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.8,
    rotate: -5,
  },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 15,
      mass: 1,
    },
  },
};

interface TitleSectionProps {
  title: string; 
  variant: "default" | "white"
  className?: string;
}

export const TitleSection: React.FC<TitleSectionProps> = ({ title, variant = "default", className }) => {
  const textColor = variant === "white" ? "text-white" : "text-primary";
  const highlightColor = variant === "white" ? "text-white" : "text-secondary";
  return (
    <motion.div
      variants={containerVariants}
      initial="visible"
      whileInView="visible"
      viewport={{ once: false }}
      className={`text-center flex flex-col items-center justify-center font-josefin-sans relative w-full max-w-4xl mx-auto px-4 md:px-8 ${className}`}
    >
      {/* Título con dos colores */}
      <motion.div
        variants={itemVariants}
        className={`text-[28px] sm:text-[32px] md:text-[36px] first-letter:capitalize ${textColor} w-full break-words`}
        whileHover={{ scale: 1.04 }}
      >
        {title.split("\n").map((paragraph: string, index: number) => {
          const parts = paragraph.split(/(\*\*.*?\*\*|__.*?__)/g);
          return (
            <motion.div key={index} variants={textVariants} className="w-full">
              {parts.map((part: string, i: number) => {
                if (part.startsWith("**") && part.endsWith("**")) {
                  return (
                    <motion.span
                      key={i}
                      variants={highlightVariants}
                      className={`block text-[36px] md:text-[48px] uppercase ${highlightColor} font-extralight font-inter`}
                    >
                      {part.slice(2, -2)}
                    </motion.span>
                  );
                }
                return part;
              })}
            </motion.div>
          );
        })}
      </motion.div>
    </motion.div>
  );
};

export const DescriptionSection = ({ description, className }: { description: string, className?: string }) => {
  return (
    <motion.div
      variants={containerVariants}
      initial="visible"
      whileInView="visible"
      viewport={{ once: false }}
      className={`text-left flex flex-col items-center justify-center text-white/80 font-inter relative w-full max-w-4xl mx-auto px-4 md:px-8 ${className}`}
    >
      {/* Título con dos colores */}
      <motion.div
        variants={itemVariants}
        className={`w-full break-words`}
        whileHover={{ scale: 1.04 }}
      >
        {description.split("\n").map((paragraph: string, index: number) => {
          const parts = paragraph.split(/(\*\*.*?\*\*|__.*?__)/g);
          return (
            <motion.div key={index} variants={textVariants} className="w-full">
              {parts.map((part: string, i: number) => {
                if (part.startsWith("**") && part.endsWith("**")) {
                  return (
                    <motion.span
                      key={i}
                      variants={highlightVariants}
                      className={`text-base md:text-lg lg:text-xl leading-relaxed text-white font-josefin-sans`}
                    >
                      {part.slice(2, -2)}
                    </motion.span>
                  );
                }
                return part;
              })}
            </motion.div>
          );
        })}
      </motion.div>
    </motion.div>
  );
};