"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface ServiceCardProps {
  title: string;
  description: string;
  icon?: LucideIcon;
  delay?: number;
  className?: string;
}

export function ServiceCard({
  title,
  description,
  icon: Icon,
  delay = 0,
  className,
}: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -5 }}
      className={cn(
        "group relative overflow-hidden rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:shadow-lg hover:border-primary/50",
        className
      )}
    >
      {/* Background gradient on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      <div className="relative z-10">
        {Icon && (
          <motion.div
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.1 }}
            className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground"
          >
            <Icon className="h-6 w-6" />
          </motion.div>
        )}

        <h3 className="mb-2 text-xl font-semibold text-foreground transition-colors duration-300 group-hover:text-primary">
          {title}
        </h3>

        <p className="text-sm text-muted-foreground leading-relaxed">
          {description}
        </p>
      </div>

      {/* Decorative corner accent */}
      <motion.div
        initial={{ scale: 0, rotate: -45 }}
        whileInView={{ scale: 1, rotate: -45 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: delay + 0.2 }}
        className="absolute -right-2 -top-2 h-16 w-16 bg-primary/10 rounded-full blur-2xl"
      />
    </motion.div>
  );
}
