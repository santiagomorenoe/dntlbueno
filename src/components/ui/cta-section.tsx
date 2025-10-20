"use client";

import { motion } from "framer-motion";
import { Button } from "./button";
import { LucideIcon } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface CTASectionProps {
  title: string;
  description: string;
  buttonText: string;
  buttonHref?: string;
  buttonIcon?: LucideIcon;
  onButtonClick?: () => void;
  variant?: "primary" | "secondary" | "gradient";
  className?: string;
}

export function CTASection({
  title,
  description,
  buttonText,
  buttonHref,
  buttonIcon: ButtonIcon,
  onButtonClick,
  variant = "gradient",
  className,
}: CTASectionProps) {
  const buttonContent = (
    <Button
      size="lg"
      variant={variant === "primary" ? "default" : "secondary"}
      className="font-semibold hover:scale-105 transition-transform duration-300"
      onClick={onButtonClick}
    >
      {buttonText}
      {ButtonIcon && <ButtonIcon className="ml-2 h-5 w-5" />}
    </Button>
  );

  const variantStyles = {
    primary: "bg-primary text-primary-foreground",
    secondary: "bg-secondary text-secondary-foreground",
    gradient: "bg-gradient-to-br from-primary to-primary/80",
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={cn(
        "relative overflow-hidden rounded-3xl p-8 md:p-12 text-center",
        variantStyles[variant],
        className
      )}
    >
      {/* Decorative background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_50%)]" />

      {/* Content */}
      <div className="relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-3xl md:text-4xl font-bold text-white mb-4"
        >
          {title}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-white/90 text-lg mb-8 max-w-2xl mx-auto"
        >
          {description}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          {buttonHref ? <Link href={buttonHref}>{buttonContent}</Link> : buttonContent}
        </motion.div>
      </div>

      {/* Decorative animated elements */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -right-10 -top-10 h-60 w-60 rounded-full bg-white/10 blur-3xl"
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
        className="absolute -bottom-10 -left-10 h-60 w-60 rounded-full bg-white/10 blur-3xl"
      />
    </motion.section>
  );
}
