"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface Service {
  title: string;
  description: string;
}

interface ServiceCategoryProps {
  title: string;
  description: string;
  services: Service[];
  icon?: string;
  delay?: number;
}

export function ServiceCategory({
  title,
  description,
  services,
  delay = 0,
}: ServiceCategoryProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="group relative overflow-hidden rounded-3xl border border-border bg-card shadow-md transition-all duration-300 hover:shadow-xl"
    >
      {/* Header */}
      <div
        onClick={() => setIsExpanded(!isExpanded)}
        className="cursor-pointer p-6 md:p-8"
      >
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3 transition-colors duration-300 group-hover:text-primary">
              {title}
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              {description}
            </p>
          </div>

          <motion.div
            animate={{ rotate: isExpanded ? 180 : 0 }}
            transition={{ duration: 0.3 }}
            className="flex-shrink-0 mt-1"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
              <ChevronDown className="h-5 w-5" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Expandable Services List */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="border-t border-border bg-muted/20 p-6 md:p-8">
              <div className="grid gap-4 md:grid-cols-2">
                {services.map((service, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className="group/item relative overflow-hidden rounded-xl border border-border bg-card p-5 transition-all duration-300 hover:border-primary/50 hover:shadow-md"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 transition-opacity duration-300 group-hover/item:opacity-100" />

                    <div className="relative z-10">
                      <h3 className="mb-2 font-semibold text-foreground transition-colors duration-300 group-hover/item:text-primary">
                        {service.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Decorative background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100 pointer-events-none" />
    </motion.div>
  );
}
