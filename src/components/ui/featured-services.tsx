"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

interface FeaturedServicesProps {
  services: string[];
  className?: string;
}

export function FeaturedServices({ services, className }: FeaturedServicesProps) {
  return (
    <div className={cn("relative overflow-hidden rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent p-8 md:p-10", className)}>
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(var(--primary),0.2),transparent_50%)]" />
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(var(--primary),0.15),transparent_50%)]"
        />
      </div>

      {/* Content */}
      <div className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-6 flex items-center gap-2"
        >
          <motion.div
            animate={{
              rotate: [0, 15, 0, -15, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Sparkles className="h-6 w-6 text-primary" />
          </motion.div>
          <h3 className="text-2xl font-bold text-primary">
            Servicios Destacados
          </h3>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="group relative overflow-hidden rounded-xl bg-card border border-border p-4 transition-all duration-300 hover:border-primary hover:shadow-md"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              <div className="relative z-10 flex items-center gap-3">
                <div className="flex h-2 w-2 rounded-full bg-primary" />
                <p className="font-medium text-foreground transition-colors duration-300 group-hover:text-primary">
                  {service}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Decorative elements */}
      <motion.div
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-primary/20 blur-3xl"
      />
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
        className="absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-primary/20 blur-3xl"
      />
    </div>
  );
}
