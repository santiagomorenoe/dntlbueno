import { ServicesCards } from "./ui/services-cards";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { ChevronRight } from "lucide-react";
import { ShineBorder } from "./ui/shine-border";
import { TitleSection } from "./ui/title-section";

const data = [
  {
    title: "Diseño de sonrisa",
    description:
      "Modificación del aspecto de los dientes para conseguir una apariencia armónica. Se corrige la alineación de los dientes, incluyendo tamaño, color y forma de los dientes según lo necesite el paciente",
    img: "/images/s1.png",
  },
  {
    title: "Implantes dentales",
    description:
      "Recupera tu sonrisa completa con nuestros implantes dentales de alta calidad. Ofrecemos únicamente soluciones duraderas.",
    img: "/images/s2.png",
  },
  {
    title: "Ortodoncia",
    description:
      "Logra una sonrisa perfecta con nuestra ortodoncia de vanguardia. Resultados excepcionales y expertos en cuidado bucal.",
    img: "/images/s3.png",
  },
  {
    title: "Turismo médico",
    description:
      "Disfruta de un tratamiento dental en un lugar de vacaciones inspirado. Dedicamos un tiempo exclusivo para ti. ¡Ofrecemos el mejor cuidado y una experiencia memorable!",
    img: "/images/s4.png",
  },
];

export const Services: React.FC = () => {
  return (
    <section className="pt-24 pb-12 w-full bg-background">
      <div className="flex flex-col gap-6 lg:gap-12 max-w-7xl mx-auto px-4">
        <TitleSection title="Servicios **Especializados**" />
        <ServicesCards steps={data} />
        <div className="flex justify-center">
          <Button variant="default" className="hover:cursor-pointer hover:scale-105 transition-all duration-300 ease-in-out">
            Ver todos los servicios
            <ChevronRight />
          </Button>
        </div>
      </div>
    </section>
  );
};
