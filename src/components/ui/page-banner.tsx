"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface PageBannerProps {
  title: string;
}

export const PageBanner: React.FC<PageBannerProps> = ({ title }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="relative w-full h-[300px] overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/images/banner.jpg"
          alt="Banner"
          fill
          className="object-cover w-full h-full"
        />
      </div>
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 w-full h-full bg-gradient-to-b from-primary/80 via-primary/60 to-primary/20 z-10" />
      
      {/* Content Container */}
      <div className="relative z-20 w-full h-full flex items-center justify-center pt-30 pb-30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-center font-josefin-sans text-white leading-tight px-4 break-words"
          >
            {title}
          </motion.h1>
        </div>
      </div>
    </motion.div>
  );
};
