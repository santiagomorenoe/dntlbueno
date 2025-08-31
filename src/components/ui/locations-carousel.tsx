"use client";

import * as React from "react";
import { Carousel, CarouselContent, CarouselItem } from "./carousel/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";
import Image from "next/image";
import { MapPinIcon, ClockIcon } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "./button";

interface Slide {
  img: string;
  title: string;
  address?: string;
  schedule?: string;
}

interface LocationsCarouselProps {
  slides: Slide[];
}

export const LocationsCarousel: React.FC<LocationsCarouselProps> = ({
  slides,
}) => {
  const ref = useRef(null);
  useInView(ref, { once: false, amount: 0.3 });
  const [selected, setSelected] = React.useState(0);
  const [emblaApi, setEmblaApi] = React.useState<any>(null);
  const carouselRef = React.useRef<any>(null);

  // Funciones seguras para navegación
  const handlePrev = () => {
    if (emblaApi) emblaApi.scrollPrev();
  };
  const handleNext = () => {
    if (emblaApi) emblaApi.scrollNext();
  };
  const handleDot = (i: number) => {
    if (emblaApi) emblaApi.scrollTo(i);
  };

  return (
    <div className="w-full max-w-xl mx-auto">
      <Carousel
        plugins={[Autoplay({ delay: 6000, stopOnInteraction: false })]}
        opts={{ loop: true, align: "center" }}
        setApi={(api) => {
          setEmblaApi(api);
          if (api) {
            api.on("select", () => setSelected(api.selectedScrollSnap()));
          }
        }}
        ref={carouselRef}
        className="relative"
      >
        <CarouselContent>
          {slides.map((slide, idx) => (
            <CarouselItem
              key={idx}
              className="cursor-grab active:cursor-grabbing"
            >
              <div
                className={`flex flex-col justify-center items-center bg-primary rounded-3xl overflow-hidden transition-all duration-500 w-full h-auto min-h-[520px] md:min-h-[600px] py-6 px-4 ${
                  selected === idx
                    ? "opacity-100 z-10"
                    : "opacity-0 pointer-events-none z-0"
                }`}
                aria-hidden={selected !== idx}
              >
                <div className="w-full flex flex-col items-center justify-center">
                  {/* Título */}
                  <h3 className="text-center text-white dark:text-foreground font-josefin-sans font-bold text-2xl md:text-3xl uppercase mb-4">
                    {slide.title}
                  </h3>
                </div>
                {/* Imagen principal */}
                <div className="w-full flex justify-center">
                  <Image
                    src={slide.img}
                    alt={slide.title}
                    width={840}
                    height={820}
                    className="rounded-2xl object-cover w-full max-w-[480px] h-[280px] hover:scale-105 transition-all duration-300"
                    loading="lazy"
                    style={{
                      maskImage:
                        "linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0.1) 98%)",
                      WebkitMaskImage:
                        "linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0.1) 98%)",
                    }}
                  />
                </div>
                {/* Etiqueta tipo */}
                <div className="w-full grid grid-cols-2  items-start justify-center px-10 gap-4 mt-10">
                  {/* Features */}
                  <div className="text-left font-inter text-base md:text-lg font-medium flex flex-col items-start gap-2 text-foreground">
                    <div className="flex items-center flex-row gap-2 text-white dark:text-foreground">
                      <MapPinIcon className="w-4 h-4" /> Dirección:
                    </div>
                    <div>
                    {slide.address && (
                      <span className="text-white dark:text-foreground">
                        {slide.address}
                      </span>
                    )}
                    </div>
                  </div>
                  <div className="text-left font-inter text-base md:text-lg font-medium flex flex-col items-start gap-2">
                    {slide.schedule && (
                      <div className="flex items-center flex-row gap-2 text-white dark:text-foreground">
                        <ClockIcon className="w-4 h-4"/> Horario:
                      </div>
                    )}
                    {slide.schedule && (
                      <span className="text-white dark:text-foreground">
                        {slide.schedule}
                      </span>
                    )}
                  </div>
                </div>
                {/* Navegación personalizada (no modificar) */}
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="w-full flex items-center justify-center mt-10 max-w-[50%] mx-auto z-10">
          <div className="flex w-full rounded-full py-4 px-4 items-center justify-between bg-primary hover:scale-105 transition-all duration-300">
            <motion.button
              whileHover={{ scale: 1.4 }}
              whileTap={{ scale: 0.7 }}
              className="rounded-full border-none text-foreground mx-2 hover:cursor-pointer"
              onClick={handlePrev}
              type="button"
            >
              <ArrowLeft className="w-5 h-5" color="#FFF" />
            </motion.button>
            {/* Navegación por puntos */}
            <div className="w-fit flex justify-center items-center gap-2 select-none bg-white rounded-full px-4 py-3 hover:scale-105 transition-all duration-300">
              {slides.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => handleDot(idx)}
                  className={`w-2 h-2 rounded-full hover:cursor-pointer transition-all duration-300 ${
                    selected === idx ? "bg-primary scale-125" : "bg-primary/30"
                  }`}
                  aria-label={`Ir al slide ${idx + 1}`}
                />
              ))}
            </div>
            <motion.button
              whileHover={{ scale: 1.4 }}
              whileTap={{ scale: 0.7 }}
              className="rounded-full border-none text-foreground mx-2 hover:cursor-pointer"
              onClick={handleNext}
              type="button"
            >
              <ArrowRight className="w-5 h-5" color="#FFF" />
            </motion.button>
          </div>
        </div>
      </Carousel>
    </div>
  );
};
