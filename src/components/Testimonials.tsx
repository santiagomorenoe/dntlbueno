"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ChevronRight, Star } from "lucide-react";
import { Marquee } from "@/components/ui/maquee";
import { TitleSection } from "./ui/title-section";
import { Button } from "./ui/button";

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
  [key: string]: any;
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
const testimonials = [
    {
      name: "Eric González",
      role: "Paciente de la sucursal de Polanco",
      img: "https://randomuser.me/api/portraits/men/22.jpg",
      description: (
        <p>
          La experiencia fue impecable, desde la primera consulta hasta el
          seguimiento final.
          <Highlight>
            Me brindaron confianza en cada paso.
          </Highlight>{" "}
          Definitivamente recomiendo sus servicios.
        </p>
      ),
    },
    {
      name: "Maya Rodriguez",
      role: "Paciente de la sucursal de Cuautitlan Izcalli",
      img: "https://randomuser.me/api/portraits/women/33.jpg",
      description: (
        <p>
          Quedé impresionada con la tecnología y la dedicación del equipo.
          <Highlight>
            Todo el proceso fue transparente y claro.
          </Highlight>{" "}
          Me sentí acompañada en todo momento.
        </p>
      ),
    },
    {
      name: "Rafael Pérez",
      role: "Paciente de la sucursal de Bosques",
      img: "https://randomuser.me/api/portraits/men/32.jpg",
      description: (
        <p>
          Nunca había recibido una atención tan detallada y humana.
          <Highlight>
            Cada pregunta fue respondida con paciencia y claridad.
          </Highlight>{" "}
          El resultado superó mis expectativas.
        </p>
      ),
    },
    {
      name: "Ana López",
      role: "Paciente de la sucursal de Coacalco",
      img: "https://randomuser.me/api/portraits/women/44.jpg",
      description: (
        <p>
          Me encantó la rapidez y la organización de todo el servicio.
          <Highlight>
            Sentí que realmente se adaptaron a mis necesidades.
          </Highlight>{" "}
          Ahora confío plenamente en ellos.
        </p>
      ),
    },
    {
      name: "Juan Pérez",
      role: "Paciente de la sucursal de Valle Dorado",
      img: "https://randomuser.me/api/portraits/men/55.jpg",
      description: (
        <p>
          Lo que más destaco es la combinación de profesionalismo y calidez.
          <Highlight>
            No solo resolvieron mi problema, sino que me hicieron sentir cómodo.
          </Highlight>{" "}
          Fue una gran decisión elegirlos.
        </p>
      ),
    },
    {
      name: "María Gómez",
      role: "Paciente de la sucursal de Pirules",
      img: "https://randomuser.me/api/portraits/women/67.jpg",
      description: (
        <p>
          La atención al detalle es sorprendente.
          <Highlight>
            Cada aspecto del servicio estuvo cuidado al máximo.
          </Highlight>{" "}
          Es difícil encontrar tanta dedicación hoy en día.
        </p>
      ),
    },
    {
      name: "Carlos Rodríguez",
      role: "Paciente de la sucursal de Coacalco",
      img: "https://randomuser.me/api/portraits/men/78.jpg",
      description: (
        <p>
          Me impresionó la innovación que aplican en su trabajo.
          <Highlight>
            Ofrecen soluciones modernas con un toque humano.
          </Highlight>{" "}
          Fue una experiencia que recomendaría sin dudar.
        </p>
      ),
    },
    {
      name: "Laura Hernández",
      role: "Paciente de la sucursal de Polanco",
      img: "https://randomuser.me/api/portraits/women/89.jpg",
      description: (
        <p>
          Lo que más me gustó fue la cercanía del equipo.
          <Highlight>
            Nunca sentí que era solo “un cliente más”.
          </Highlight>{" "}
          Se nota que disfrutan lo que hacen.
        </p>
      ),
    },
    {
      name: "Pedro García",
      role: "Paciente de la sucursal de Cuautitlan Izcalli",
      img: "https://randomuser.me/api/portraits/men/92.jpg",
      description: (
        <p>
          La experiencia fue excelente en todos los aspectos.
          <Highlight>
            Me ofrecieron confianza y resultados sobresalientes.
          </Highlight>{" "}
          Superaron mis expectativas desde el inicio.
        </p>
      ),
    },
    {
      name: "Sofía López",
      role: "Paciente de la sucursal de Bosques",
      img: "https://randomuser.me/api/portraits/women/29.jpg",
      description: (
        <p>
          La profesionalidad y el trato humano marcaron la diferencia.
          <Highlight>
            Me explicaron cada detalle con mucha claridad.
          </Highlight>{" "}
          Sin duda volveré a contar con sus servicios.
        </p>
      ),
    },
  ];  

export default function Testimonials() {
  return (
    <div className="w-full bg-background overflow-hidden">
      <section className="relative max-w-7xl mx-auto py-10 w-full">
        {/* Decorative elements */}
        <div className="absolute top-20 -left-20 z-10 h-64 w-64 rounded-full bg-blue-500/5 blur-3xl" />
        <div className="absolute -right-20 bottom-20 z-10 h-64 w-64 rounded-full bg-blue-500/5 blur-3xl" />

        <TitleSection title="Nuestros **pacientes**" />

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
            <Button variant="default" className="hover:cursor-pointer hover:scale-105 transition-all duration-300 ease-in-out">
                Ver todos los testimonios
                <ChevronRight />
            </Button>
        </div>
      </section>
    </div>
  );
}
