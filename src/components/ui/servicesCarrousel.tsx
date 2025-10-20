"use client";

import * as React from "react";
import { Carousel, CarouselContent, CarouselItem } from "./carousel/carousel";
import type { CarouselApi } from "./carousel/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "./button";

interface Slide {
    img: string;
    title?: string;
    number?: string;
    description?: string;
}

interface ServicesCarouselProps {
    slides: Slide[];
}

export const ServicesCarousel: React.FC<ServicesCarouselProps> = ({ slides }) => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [api, setApi] = useState<CarouselApi | null>(null);
    const carouselRef = React.useRef<CarouselApi | null>(null);

    useEffect(() => {
        if (!api) {
            return;
        }
        const handleSelect = () => {
            setCurrentSlide(api.selectedScrollSnap());
        };

        // Set initial position
        setCurrentSlide(api.selectedScrollSnap());

        // Add event listener
        api.on("select", handleSelect);

        // Cleanup
        return () => {
            api.off("select", handleSelect);
        };
    }, [api]);

    return (
        <div className="w-full mx-auto relative">
            {/* Overlay desvanecido en los bordes del contenedor */}
            <div className="absolute inset-0 pointer-events-none z-30">
                {/* Gradiente izquierdo */}
                <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent"></div>
                {/* Gradiente derecho */}
                <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent"></div>
                {/* Gradiente superior */}
                <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-background to-transparent"></div>
                {/* Gradiente inferior */}
                <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-background to-transparent"></div>
            </div>
            
            <Carousel
                plugins={[Autoplay({ delay: 4500, stopOnInteraction: false })]}
                opts={{ loop: true, align: "center"}}
                setApi={setApi}
                ref={carouselRef as React.RefObject<HTMLDivElement | null>}
                className="relative"
            >
                <CarouselContent>
                    {slides.map((slide, idx) => (
                        <CarouselItem
                            key={idx}
                            className="cursor-grab active:cursor-grabbing basis-full md:basis-1/2"
                        >
                            <div
                                className={`relative mx-auto bg-gray rounded-3xl overflow-hidden transition-all duration-500 w-full h-auto min-h-[420px] md:min-h-[400px] z-10`}
                            >
                                {/* Imagen principal */}
                                <img
                                    src={slide.img}
                                    alt={slide.title}
                                    className={`rounded-3xl object-cover w-full h-[420px] md:h-[525px] ${currentSlide === idx ? "opacity-100" : "opacity-50"} transition-all duration-500 ease-in-out`}
                                    loading="lazy"
                                />
                                
                                {/* Etiqueta numerada - posición absoluta esquina superior izquierda */}
                                {/*
                                {(slide.number || (idx + 1).toString().padStart(2, '0')) && (
                                    <div className="absolute top-4 left-4 bg-teal-600 rounded-lg px-3 py-2 z-20">
                                        <span className="text-white font-bold text-lg">
                                            {slide.number || (idx + 1).toString().padStart(2, '0')}
                                        </span>
                                    </div>
                                )}
                                */}

                                {/* Overlay negro para la descripción inferior */}
                                <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-primary via-primary/50 to-transparent z-10"></div>
                                
                                {/* Descripción - posición absoluta en la parte inferior */}
                                {slide.title && (
                                    <div className="absolute bottom-4 left-4 right-4 z-20">
                                    <p className="text-white font-primary text-base md:text-lg font-medium text-left bg-primary rounded-lg px-3 py-1 w-fit mb-2">
                                        {slide.title}
                                    </p>
                                    <p className="text-white font-primary text-base md:text-lg font-medium text-left">
                                            {slide.description}
                                        </p>
                                    </div>
                                )}
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                
                {/* Navegación por puntos - fuera del overlay */}
                <div className="w-full flex justify-between items-center gap-6 mt-6 select-none relative z-40">
                    <div className="flex justify-center items-center gap-2">
                    {slides.map((_, idx) => (
                        <button
                            key={idx}
                            onClick={() => api?.scrollTo(idx)}
                            className={`w-2 h-2 rounded-full hover:cursor-pointer transition-all duration-300 ${currentSlide === idx ? "bg-primary scale-125" : "bg-gray-400"
                                }`}
                            aria-label={`Ir al slide ${idx + 1}`}
                        />
                    ))}
                    </div>
                    {/* navegacion manual por botones */}
                    <div className="flex justify-center items-center gap-2">
                        <Button variant="default" className="hover:cursor-pointer hover:scale-105 transition-all duration-300 ease-in-out rounded-full" onClick={() => api?.scrollPrev()}>
                            <ChevronLeft />
                        </Button>
                        <Button variant="default" className="hover:cursor-pointer hover:scale-105 transition-all duration-300 ease-in-out rounded-full" onClick={() => api?.scrollNext()}>
                            <ChevronRight />
                        </Button>
                    </div>
                </div>
            </Carousel>
        </div>
    );
};