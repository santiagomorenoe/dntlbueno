"use client";

import React from "react";

import { ServicesCards } from "./ui/services-cards";
import { Button } from "./ui/button";
import { ChevronRight } from "lucide-react";
import { TitleSection } from "./ui/title-section";
import { useTranslations } from "next-intl";
import { ServicesCarousel } from "./ui/servicesCarrousel";


export const Services: React.FC = () => {
  const t = useTranslations("services");

  const data = [
    {
      title: t("services.0.title"),
      description: t("services.0.description"),
      img: "/images/s1.jpg",
    },
    {
      title: t("services.1.title"),
      description: t("services.1.description"),
      img: "/images/s3.jpg",
    },
    {
      title: t("services.2.title"),
      description: t("services.2.description"),
      img: "/images/s2.jpg",
    },
    {
      title: t("services.3.title"),
      description: t("services.3.description"),
      img: "/images/s4.jpg",
    }
  ];

  return (
    <section className="pt-24 md:pt-32 pb-12 w-full bg-background" id="services">
      <div className="flex flex-col md:flex-row gap-6 lg:gap-12 max-w-7xl mx-auto px-4">
        <div className="w-full md:w-1/4 md:sticky top-24 h-fit">
          <TitleSection title={t("title")} variant="default" />
          <div className="flex justify-center mt-4">
        <Button variant="default" className="hover:cursor-pointer hover:scale-105 transition-all duration-300 ease-in-out">
          {t("btnText")}
          <ChevronRight />
        </Button>
      </div>
        </div>
        <div className="w-full md:w-3/4">
          <ServicesCarousel slides={data.map((item) => ({
            title: item.title,
            description: item.description,
            img: item.img,
          }))} />
        </div>

      </div>
    </section>
  );
};
