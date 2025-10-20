"use client";

import { motion } from "framer-motion";

interface PageBannerProps {
  title: string;
}

export const PageBanner: React.FC<PageBannerProps> = ({ title }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="relative bg-primary dark:bg-primary/20 py-16 md:py-24"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-center text-white"
        >
          {title}
        </motion.h1>
      </div>
    </motion.div>
  );
};
