"use client";

import React from "react";

import { ServicesCards } from "./ui/services-cards";
import { Button } from "./ui/button";
import { ChevronRight } from "lucide-react";
import { TitleSection } from "./ui/title-section";
import { useTranslations } from "next-intl";


export const Services: React.FC = () => {
  const t = useTranslations("services");

  const data = [
    {
      title: t("services.0.title"),
      description: t("services.0.description"),
      img: "/images/s1.png",
    },
    {
      title: t("services.1.title"),
      description: t("services.1.description"),
      img: "/images/s2.png",
    },
    {
      title: t("services.2.title"),
      description: t("services.2.description"),
      img: "/images/s3.png",
    },
    {
      title: t("services.3.title"),
      description: t("services.3.description"),
      img: "/images/s4.png",
    },
    {
      title: t("services.4.title"),
      description: t("services.4.description"),
      img: "/images/s5.png",
    },
    {
      title: t("services.5.title"),
      description: t("services.5.description"),
      img: "/images/s6.png",
    },
    {
      title: t("services.6.title"),
      description: t("services.6.description"),
      img: "/images/s7.png",
    },
    {
      title: t("services.7.title"),
      description: t("services.7.description"),
      img: "/images/s8.png",
    },
  ];

  return (
    <section className="pt-24 pb-12 w-full bg-background overflow-x-hidden">
      <div className="flex flex-col gap-6 lg:gap-12 max-w-7xl mx-auto px-4">
        <TitleSection title={t("title")} />
        <ServicesCards steps={data} />
        <div className="flex justify-center">
          <Button variant="default" className="hover:cursor-pointer hover:scale-105 transition-all duration-300 ease-in-out">
            {t("btnText")}
            <ChevronRight />
          </Button>
        </div>
      </div>
    </section>
  );
};
