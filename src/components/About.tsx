"use client";

import type React from "react";
import { motion, Variants } from "framer-motion";
import AboutUs2 from "./ui/about-cards";
import { TitleSection } from "./ui/title-section";

const titleVariants: Variants = {
  hidden: { opacity: 0, x: -100 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: "easeOut", delay: 0.3 * i },
  }),
};

const data = {
  title: "Sonrisa con **B de Bueno**",
  btnText: "¡Agenda tu cita!",
  description:
    "Ofrecemos una amplia gama de especialidades y contamos con la última tecnología en procedimientos dentales, para que puedas tener un tratamiento odontológico completo y personalizado.",
  pattern: "/images/teethPattern.svg",
  img: "/images/about.jpg",
};

export const About: React.FC = () => {
  return (
    <section className="relative py-12 md:py-20 px-4 md:px-8 lg:px-16 overflow-hidden bg-gradient-to-b from-primary to-primary">
      <div
        className="absolute inset-0 w-full h-full z-20 bg-black/70"
        style={{
          backgroundImage: `url('${data.pattern}')`,
          backgroundRepeat: "repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.2,
          maskImage:
            "linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0.1) 50%)",
          WebkitMaskImage:
            "linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0.1) 50%)",
        }}
        aria-hidden="true"
      />

      <div className="absolute inset-0 z-0">
        <div className="from-primary/20 via-background to-background absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))]"></div>
      </div>

      <div className="relative z-30 max-w-7xl mx-auto">
        <div className="lg:flex lg:items-center lg:gap-12 xl:gap-20">
          <div className="max-w-2xl lg:w-1/2 mb-12 lg:mb-0">
            <TitleSection title={data.title}  className="text-white" />

            <p
              className="text-lg lg:text-xl mb-8 leading-relaxed text-white"
            >
              {data.description}
            </p>
            
            <AboutUs2 />
          </div>

          <div className="relative overflow-hidden lg:w-1/2 hover:scale-105 transition-all duration-300 hover:cursor-text">
            <motion.img
              src={data.img}
              alt="niña siendo atendida por un especialista de la clinica"
              width={1200}
              height={875}
              className="w-full h-[350px] md:h-[450px] lg:h-[550px] object-cover rounded-tr-[90px] rounded-bl-[90px] rounded-tl-none rounded-br-none"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
