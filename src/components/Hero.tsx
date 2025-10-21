"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { ArrowDown, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/app/hooks/use-is-mobile";
import { useTranslations } from "next-intl";
import { WhatsAppIcon } from "./Footer";

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

const handleScrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: "smooth", block: "start" });
  }
};

export default function Hero() {
  const t = useTranslations("home.title");
  const t2 = useTranslations("home.cta");
  const isMobile = useIsMobile();
  return (
    <div className="bg-background h-[calc(100vh-100px)] relative w-full overflow-hidden" id="home">
      <div className="absolute inset-0 z-0 overflow-hidde rounded-[30px]">
        <div className="absolute inset-0 bg-black/45 z-10" />
        <motion.img
          className="w-full h-full object-cover"
          src={isMobile ? "/images/hero_mobile.jpg" : "/images/hero_desk.jpg"}
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
            <div
              className="pt-4 lg:mt-0 flex flex-row gap-2 items-center justify-center text-center bg-gradient-to-l from-white via-white/50 to-white/90 text-transparent bg-clip-text"
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
            </div>
          </div>
          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="from-white via-white/60 to-white/75 bg-gradient-to-tl bg-clip-text mx-auto max-w-[95%] text-center font-bold text-lg font-inter text-transparent"
          >
            {t("third")}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-10 flex flex-col items-center justify-center gap-4 md:flex-row"
          >
            <Button
              size="lg"
              variant="default"
              className="group hover:cursor-pointer hover:scale-105 w-full md:w-fit rounded-full"
              onClick={() => {
                handleScrollToSection("locations");
              }}
            >
              <span className="relative z-10 flex items-center">
                {t2("secondary")}
                <MapPin className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            </Button>

            <Button
              variant="destructive"
              size="lg"
              className="hover:cursor-pointer hover:scale-105 rounded-full bg-accent text-black hover:bg-accent/80"
              onClick={() => {
                window.open("https://wa.me/5585073745", "_blank");
              }}
            >
              <WhatsAppIcon color="var(--black)" />
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
          </motion.div>
          <motion.div
            variants={{
              hidden: { opacity: 0, y: -40 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
            }}
            className="flex flex-col items-center justify-center pt-10"
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
