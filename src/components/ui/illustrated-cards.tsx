"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface IllustratedCard {
  icon: LucideIcon;
  title: string;
  description: string;
  color?: string;
}

interface IllustratedCardsProps {
  cards: IllustratedCard[];
  className?: string;
}

export function IllustratedCards({ cards, className }: IllustratedCardsProps) {
  return (
    <div className={cn("grid md:grid-cols-2 lg:grid-cols-3 gap-6", className)}>
      {cards.map((card, index) => {
        const Icon = card.icon;
        const colorClass = card.color || "primary";

        return (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -5 }}
            className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:border-primary/50"
          >

            <div className="relative z-10">
              {/* Icon with animated background */}
              <motion.div
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="relative mb-6 inline-flex h-20 w-20 items-center justify-center"
              >
                {/* Animated background circles */}
                <motion.div
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.5, 0.3],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                <motion.div
                  animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.5, 0.7, 0.5],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.5,
                  }}
                />

                {/* Icon */}
                <div className="relative flex h-16 w-16 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                  <Icon className="h-8 w-8" />
                </div>
              </motion.div>

              <h3 className="mb-3 text-xl font-bold text-foreground transition-colors duration-300 group-hover:text-primary">
                {card.title}
              </h3>

              <p className="text-sm text-muted-foreground leading-relaxed">
                {card.description}
              </p>
            </div>

            {/* Decorative corner element */}
            <motion.div
              initial={{ scale: 0, rotate: -45 }}
              whileInView={{ scale: 1, rotate: -45 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 + 0.2 }}
              className="absolute -right-4 -top-4 h-20 w-20 bg-primary/10 rounded-full blur-2xl"
            />
          </motion.div>
        );
      })}
    </div>
  );
}
