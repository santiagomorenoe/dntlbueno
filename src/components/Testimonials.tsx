"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ChevronRight, Star } from "lucide-react";
import { Marquee } from "@/components/ui/maquee";
import { TitleSection } from "./ui/title-section";
import { Button } from "./ui/button";
import { useTranslations } from "next-intl";


export function Highlight({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "bg-blue-500/10 p-1 py-0.5 font-bold text-blue-500",
        className
      )}
    >
      {children}
    </span>
  );
}

export interface TestimonialCardProps {
  name: string;
  role: string;
  img?: string;
  description: React.ReactNode;
  className?: string;
  [key: string]: unknown;
}

export function TestimonialCard({
  description,
  name,
  img,
  role,
  className,
  ...props // Capture the rest of the props
}: TestimonialCardProps) {
  return (
    <div
      className={cn(
        "mb-4 flex w-full cursor-pointer break-inside-avoid flex-col items-center justify-between gap-6 rounded-xl p-4",
        // theme styles
        "border-border bg-card/50 border shadow-sm",
        // hover effect
        "transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md",
        className
      )}
      {...props}
    >
      <div className="text-muted-foreground text-sm font-normal select-none">
        {description}
        <div className="flex flex-row py-1">
          <Star className="size-4 fill-blue-500 text-blue-500" />
          <Star className="size-4 fill-blue-500 text-blue-500" />
          <Star className="size-4 fill-blue-500 text-blue-500" />
          <Star className="size-4 fill-blue-500 text-blue-500" />
          <Star className="size-4 fill-blue-500 text-blue-500" />
        </div>
      </div>

      <div className="flex w-full items-center justify-start gap-5 select-none">
        <img
          width={40}
          height={40}
          src={img || ""}
          alt={name}
          className="size-10 rounded-full ring-1 ring-blue-500/20 ring-offset-2"
        />

        <div>
          <p className="text-foreground font-medium">{name}</p>
          <p className="text-muted-foreground text-xs font-normal">{role}</p>
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  const t = useTranslations("testimonials.patients");
  const t2 = useTranslations("testimonials");
  const testimonials = [
    {
      name: t("0.name"),
      role: t("0.role"),
      img: "https://randomuser.me/api/portraits/men/22.jpg",
      description: (
        <p>
          {t("0.description")}
          <Highlight>{t("0.highlight")}</Highlight>
          {t("0.description")}
        </p>
      ),
    },
    {
      name: t("1.name"),
      role: t("1.role"),
      img: "https://randomuser.me/api/portraits/women/33.jpg",
      description: (
        <p>
          {t("1.description")}
          <Highlight>{t("1.highlight")}</Highlight>{" "}
          {t("1.description")}
        </p>
      ),
    },
    {
      name: t("2.name"),
      role: t("2.role"),
      img: "https://randomuser.me/api/portraits/men/32.jpg",
      description: (
        <p>
          {t("2.description")}
          <Highlight>{t("2.highlight")}</Highlight>{" "}
          {t("2.description")}
        </p>
      ),
    },
    {
      name: t("3.name"),
      role: t("3.role"),
      img: "https://randomuser.me/api/portraits/women/44.jpg",
      description: (
        <p>
          {t("3.description")}
          <Highlight>{t("3.highlight")}</Highlight>{" "}
          {t("3.description")}
        </p>
      ),
    },
    {
      name: t("4.name"),
      role: t("4.role"),
      img: "https://randomuser.me/api/portraits/men/55.jpg",
      description: (
        <p>
          {t("4.description")}
          <Highlight>{t("4.highlight")}</Highlight>{" "}
          {t("4.description")}
        </p>
      ),
    },
    {
      name: t("5.name"),
      role: t("5.role"),
      img: "https://randomuser.me/api/portraits/women/67.jpg",
      description: (
        <p>
          {t("5.description")}
          <Highlight>{t("5.highlight")}</Highlight>{" "}
          {t("5.description")}
        </p>
      ),
    },
    {
      name: t("6.name"),
      role: t("6.role"),
      img: "https://randomuser.me/api/portraits/men/78.jpg",
      description: (
        <p>
          {t("6.description")}
          <Highlight>{t("6.highlight")}</Highlight>{" "}
          {t("6.description")}
        </p>
      ),
    },
    {
      name: t("7.name"),
      role: t("7.role"),
      img: "https://randomuser.me/api/portraits/women/89.jpg",
      description: (
        <p>
          {t("7.description")}
          <Highlight>{t("7.highlight")}</Highlight>{" "}
          {t("7.description")}
        </p>
      ),
    },
    {
      name: t("8.name"),
      role: t("8.role"),
      img: "https://randomuser.me/api/portraits/men/92.jpg",
      description: (
        <p>
          {t("8.description")}
          <Highlight>{t("8.highlight")}</Highlight>{" "}
          {t("8.description")}
        </p>
      ),
    },
    {
      name: t("9.name"),
      role: t("9.role"),
      img: "https://randomuser.me/api/portraits/women/29.jpg",
      description: (
        <p>
          {t("9.description")}
          <Highlight>{t("9.highlight")}</Highlight>{" "}
          {t("9.description")}
        </p>
      ),
    },
  ];

  return (
    <div className="w-full bg-background overflow-hidden">
      <section className="relative max-w-7xl mx-auto pt-24 md:pt-32 pb-12 w-full" id="testimonials">
        {/* Decorative elements */}
        <div className="absolute top-20 -left-20 z-10 h-64 w-64 rounded-full bg-blue-500/5 blur-3xl" />
        <div className="absolute -right-20 bottom-20 z-10 h-64 w-64 rounded-full bg-blue-500/5 blur-3xl" />

        <TitleSection title={t2("title")} />

        <div className="relative max-h-screen overflow-hidden">
          <div className="gap-4 md:columns-2 xl:columns-3">
            {Array(Math.ceil(testimonials.length / 3))
              .fill(0)
              .map((_, i) => (
                <Marquee
                  vertical
                  key={i}
                  className={cn({
                    "[--duration:60s]": i === 1,
                    "[--duration:30s]": i === 2,
                    "[--duration:70s]": i === 3,
                  })}
                >
                  {testimonials.slice(i * 3, (i + 1) * 3).map((card, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        delay: Math.random() * 0.8,
                        duration: 1.2,
                      }}
                    >
                      <TestimonialCard {...card} />
                    </motion.div>
                  ))}
                </Marquee>
              ))}
          </div>
          <div className="from-background pointer-events-none absolute inset-x-0 bottom-0 h-1/4 w-full bg-gradient-to-t from-20%"></div>
          <div className="from-background pointer-events-none absolute inset-x-0 top-0 h-1/4 w-full bg-gradient-to-b from-20%"></div>
        </div>

        <div className="flex justify-center">
          <Button
            variant="default"
            className="hover:cursor-pointer hover:scale-105 transition-all duration-300 ease-in-out"
          >
            {t2("btnText")}
            <ChevronRight />
          </Button>
        </div>
      </section>
    </div>
  );
}
