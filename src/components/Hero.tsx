"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { ArrowDown, Calendar, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { HeroVideoDialog } from "./ui/video-dialog";
import { useTranslations } from "next-intl";

const titleVariants: Variants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut", delay: 1 },
  },
};

const handleScrollDown = () => {
  const nextSection = "#about";
  if (nextSection) {
    const element = document.querySelector(nextSection);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }
};

export default function Hero() {
  const t = useTranslations("home.title");
  const t2 = useTranslations("home.cta");
  return (
    <div className="bg-background h-dvh relative w-full overflow-hidden" id="home">
      <div className="absolute inset-0 z-0 overflow-hidden mx-5 mt-0 mb-5 rounded-[30px] border-2 border-primary/20">
        <div className="absolute inset-0 bg-black/45 backdrop-blur-xs z-10" />
        <motion.img
          className="w-full h-full object-cover"
          src="https://images.pexels.com/photos/3779706/pexels-photo-3779706.jpeg?_gl=1*t013mu*_ga*NDUzMjE1OTc0LjE3NTY1Mzg1NDg.*_ga_8JE65Q40S6*czE3NTY1Mzg1NDgkbzEkZzEkdDE3NTY1Mzg1ODkkajE5JGwwJGgw"
          alt="Hero Image"
          loading="lazy"
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 1, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          
        />
      </div>
      <div className="relative z-10 container h-full mx-auto px-4 py-12 sm:px-6 lg:px-8 lg:py-32 lg:mt-[50px]">
        <div className="mx-auto max-w-6xl h-full flex flex-col items-center justify-center">
          <div className="flex flex-col items-center justify-center w-full mx-auto">
            {/* Heading */}
            <motion.div
              className="pt-4 lg:mt-0 flex flex-row gap-2 items-center justify-center text-center bg-gradient-to-l from-white via-white/50 to-white/90 text-transparent bg-clip-text"
              variants={titleVariants}
              initial="hidden"
              animate="visible"
            >
              <div>
                <span className="text-4xl md:text-7xl font-semibold font-josefin-sans">
                  Dental
                </span>
              </div>
              <div className="pb-2 md:pb-4">
                <span className="text-4xl md:text-7xl font-inter font-light uppercase tracking-tight">
                  Bueno
                </span>
              </div>
            </motion.div>
          </div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="from-white via-white/60 to-white/75 bg-gradient-to-tl bg-clip-text mx-auto mt-6 max-w-[90%] text-center font-bold text-lg font-inter text-transparent"
          >
            {t("third")}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <Button
              size="lg"
              className="group bg-primary text-white dark:text-white hover:shadow-primary/30 relative overflow-hidden rounded-full px-6 shadow-lg transition-all duration-300 hover:cursor-pointer hover:scale-105 w-full md:w-fit"
            >
              <span className="relative z-10 flex items-center">
                {t2("secondary")}
                <MapPin className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="border-border bg-background/50 flex items-center gap-2 rounded-full backdrop-blur-sm hover:cursor-pointer hover:scale-105 w-full md:w-fit hover:text-foreground"
            >
              <Calendar className="h-4 w-4" />
              {t2("primary")}
            </Button>
          </motion.div>

          {/* Feature Image */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.5,
              type: "spring",
              stiffness: 30,
            }}
            className="hidden md:block relative mx-auto mt-8"
          >
            <HeroVideoDialog
              className="w-full max-w-[90.5%] mx-auto z-[10000]"
              animationStyle="top-in-bottom-out"
              videoSrc="https://www.youtube.com/embed/yvKDsUxq8V0?si=eawyBvja-A5fuFGL"
              thumbnailSrc="/images/overview.jpg"
              thumbnailAlt="Hero Video"
            />
          </motion.div>
          <motion.div
            variants={{
              hidden: { opacity: 0, y: -40 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
            }}
            className="flex flex-col items-center justify-center md:hidden pt-10"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{ willChange: "transform" }}
            whileInView="visible"
            initial="hidden"
            aria-label="Scroll down"
            onClick={handleScrollDown}
          >
            <motion.span
              className="border-2 border-white rounded-full p-1 hover:bg-white/20 transition-all duration-300 hover:cursor-pointer"
              whileHover={{ y: 10 }}
              whileTap={{ scale: 0.95 }}
              animate={{
                y: [0, 20, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
                repeatType: "reverse",
              }}
            >
              <ArrowDown className="w-8 h-8 text-white" />
            </motion.span>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
