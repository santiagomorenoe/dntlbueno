"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface TimelineItem {
  title: string;
  description: string;
  year?: string;
}

interface TimelineProps {
  items: TimelineItem[];
  className?: string;
}

export function Timeline({ items, className }: TimelineProps) {
  return (
    <div className={cn("relative space-y-8 before:absolute before:left-4 before:top-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-primary before:via-primary/50 before:to-transparent md:before:left-1/2 md:before:-translate-x-0.5", className)}>
      {items.map((item, index) => {
        const isEven = index % 2 === 0;
        
        return (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="relative grid gap-6 md:grid-cols-2 md:gap-10"
          >
            {/* Left side content (desktop only) - shows for odd indices */}
            <div className={cn(
              "hidden md:block",
              isEven ? "md:order-1" : "md:order-2"
            )}>
              {!isEven && (
                <div className="space-y-2 md:text-right">
                  {item.year && (
                    <span className="text-sm font-semibold text-primary">
                      {item.year}
                    </span>
                  )}
                  <h3 className="text-xl font-bold text-foreground">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              )}
            </div>

            {/* Center dot */}
            <div className="absolute left-4 top-2 -translate-x-1/2 md:left-1/2 md:-translate-x-1/2 md:order-1">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 + 0.2 }}
              >
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg">
                  <CheckCircle2 className="h-4 w-4" />
                </div>
              </motion.div>
            </div>

            {/* Mobile content + Right side content (desktop) */}
            <div className={cn(
              "pl-12 md:pl-0",
              isEven ? "md:order-2" : "md:order-1"
            )}>
              <div className="space-y-2 md:text-left">
                {/* Mobile: always show */}
                <div className="md:hidden">
                  {item.year && (
                    <span className="text-sm font-semibold text-primary">
                      {item.year}
                    </span>
                  )}
                  <h3 className="text-xl font-bold text-foreground">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
                
                {/* Desktop: only show for even indices */}
                <div className="hidden md:block">
                  {isEven && (
                    <>
                      {item.year && (
                        <span className="text-sm font-semibold text-primary">
                          {item.year}
                        </span>
                      )}
                      <h3 className="text-xl font-bold text-foreground">
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {item.description}
                      </p>
                    </>
                  )}
                </div>
              </div>
            </div>

            {/* Empty placeholder for proper grid alignment */}
            <div className={cn(
              "hidden md:block",
              isEven ? "md:order-1" : "md:order-2"
            )}>
              {!isEven && <div />}
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
