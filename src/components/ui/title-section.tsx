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

export const TitleSection = ({
    title,
    subtitle,
  }: {
    title: string;
    subtitle?: string;
  }) => (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false }}
      transition={{ duration: 0.5 }}
      className="text-white font-sans font-normal flex flex-col items-center justify-center w-full px-6"
    >
      {subtitle && (
        <div
          className={`flex items-center justify-center gap-2 px-4 py-2 rounded-full w-full`}
        >
          <motion.p className="text-[14px] md:text-[18px] text-white font-normal font-josefin-sans bg-primary px-4 py-2 rounded-tr-2xl rounded-bl-2xl"
          variants={textVariants}
          >
            {subtitle}
          </motion.p>
        </div>
      )}
      {/* Título con texto destacado */}
      <motion.h2
        variants={textVariants}
        className={`text-[24px] md:text-[30px] lg:text-[34px] text-foreground font-normal font-josefin-sans first-letter:capitalize text-center`}
      >
        {title.split("\n").map((paragraph, index) => {
          const parts = paragraph.split(/(\*\*.*?\*\*|__.*?__)/g);
          return (
            <motion.span
              key={index}
              variants={textVariants}
              className={`leading-relaxed pt-4`}
            >
              {parts.map((part, i) => {
                if (part.startsWith("**") && part.endsWith("**")) {
                  return (
                    <div key={i} className="flex items-center w-full">
                      <motion.span
                        variants={highlightVariants}
                        whileHover="hover"
                        className={`inline-block pl-4 text-foreground font-extrabold text-[40px] md:text-[46px] lg:text-[49px] font-josefin-sans uppercase cursor-text`}
                      >
                        {part.slice(2, -2)}
                      </motion.span>
                    </div>
                  );
                }
                if (i === 0 && part.trim() != "") {
                  return (
                    <span key={i} className="inline-flex items-center">
                      <motion.span
                        variants={textVariants}
                        className="inline-block"
                      >
                        {part}
                      </motion.span>
                    </span>
                  );
                }
                return (
                  <motion.span
                    key={i}
                    variants={textVariants}
                    className="inline-block"
                  >
                    {part}
                  </motion.span>
                );
              })}
            </motion.span>
          );
        })}
      </motion.h2>
    </motion.div>
  );