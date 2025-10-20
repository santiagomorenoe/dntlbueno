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
      className="relative py-16 md:py-24 min-h-[225px]"
    >
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/images/banner.jpg"
          alt="Banner"
          fill
          className="object-cover w-full h-full"
          style={{ zIndex: 0 }}
        />
        <div className="absolute inset-0 w-full h-full bg-gradient-to-b from-primary to-primary/20" style={{ zIndex: 1 }} />
        <div className="container flex flex-col items-center justify-center h-full mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-center font-josefin-sans text-white"
          >
            {title}
          </motion.h1>
        </div>
      </div>
    </motion.div>
  );
};
