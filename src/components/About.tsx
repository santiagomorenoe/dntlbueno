"use client";

import type React from "react";
import AboutUs2 from "./ui/about-cards";
import { DescriptionSection, TitleSection } from "./ui/title-section";
import { useTranslations } from "next-intl";

const data = {
  pattern: "/images/teethPattern.svg",
  img: "/images/draBueno.jpg",
};

export const About: React.FC = () => {
  const t = useTranslations("about");
  return (
    <section className="relative pt-32 pb-12 px-4 md:px-8 lg:px-16 overflow-hidden bg-gradient-to-b from-primary to-primary" id="about">
    {/* Overlay con patrón */}
    <div
      className="absolute inset-0 w-full h-full z-20 bg-black/70"
      style={{
        backgroundImage: `url('${data.pattern}')`,
        backgroundRepeat: "repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        opacity: 0.2,
        maskImage:
          "linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0.1) 50%)",
        WebkitMaskImage:
          "linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0.1) 50%)",
      }}
      aria-hidden="true"
    />
  
    {/* Gradiente de fondo */}
    <div className="absolute inset-0 z-0">
      <div className="from-primary/20 via-background to-background absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))]"></div>
    </div>
  
    {/* Contenido principal */}
    <div className="relative z-30 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-strech md:gap-8 lg:gap-12">
        {/* Columna de contenido */}
        <div className="w-full md:w-1/2 flex flex-col justify-center space-y-6 mb-8 md:mb-0">
          <div className="h-fit">
          <TitleSection title={t("title")} variant="white" />
          </div>

          <DescriptionSection description={t("description")} className="text-white" />
          <DescriptionSection description={t("description2")} className="text-white" />
          
          <div className="mt-6">
            <AboutUs2 />
          </div>
        </div>
  
        {/* Columna de imagen */}
        <div className="w-full md:w-1/2 relative md:min-h-[400px] lg:min-h-[500px]">
          <div className="relative h-full overflow-hidden rounded-tr-[40px] md:rounded-tr-[60px] lg:rounded-tr-[90px] rounded-bl-[40px] md:rounded-bl-[60px] lg:rounded-bl-[90px] group">
            <img
              src={data.img}
              alt="niña siendo atendida por un especialista de la clínica"
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              loading="eager"
            />
            {/* Overlay sutil en hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
  );
};
