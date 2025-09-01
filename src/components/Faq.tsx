"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Mail } from "lucide-react";
import { cn } from "@/lib/utils";
import { TitleSection } from "./ui/title-section";
import { WhatsAppIcon } from "./Navbar";
import { Button } from "./ui/button";

interface FAQItemProps {
  question: string;
  answer: string;
  index: number;
}

function FAQItem({ question, answer, index }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.3,
        delay: index * 0.15,
        ease: "easeOut",
      }}
      className={cn(
        "group border-border/60 rounded-lg border",
        "transition-all duration-200 ease-in-out",
        isOpen ? "bg-card/30 shadow-sm" : "hover:bg-card/50"
      )}
    >
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between gap-4 px-6 py-4 hover:cursor-pointer"
      >
        <h3
          className={cn(
            "text-left text-base font-medium transition-colors duration-200",
            "text-foreground/80",
            isOpen && "text-foreground"
          )}
        >
          {question}
        </h3>
        <motion.div
          animate={{
            rotate: isOpen ? 180 : 0,
            scale: isOpen ? 1.1 : 1,
          }}
          transition={{
            duration: 0.3,
            ease: "easeInOut",
          }}
          className={cn(
            "shrink-0 rounded-full p-0.5",
            "transition-colors duration-200",
            isOpen ? "text-primary" : "text-muted-foreground"
          )}
        >
          <ChevronDown className="h-4 w-4" />
        </motion.div>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{
              height: "auto",
              opacity: 1,
              transition: {
                height: {
                  duration: 0.4,
                  ease: [0.04, 0.62, 0.23, 0.98],
                },
                opacity: {
                  duration: 0.25,
                  delay: 0.1,
                },
              },
            }}
            exit={{
              height: 0,
              opacity: 0,
              transition: {
                height: {
                  duration: 0.3,
                  ease: "easeInOut",
                },
                opacity: {
                  duration: 0.25,
                },
              },
            }}
          >
            <div className="border-border/40 border-t px-6 pt-2 pb-4">
              <motion.p
                initial={{ y: -8, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -8, opacity: 0 }}
                transition={{
                  duration: 0.3,
                  ease: "easeOut",
                }}
                className="text-muted-foreground text-sm leading-relaxed"
              >
                {answer}
              </motion.p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function Faq3() {
  const faqs: Omit<FAQItemProps, "index">[] = [
    {
      question: "¿Qué hace único a Dental Bueno?",
      answer:
        "Dental Bueno se destaca por ser una clínica odontológica que ofrece servicios de calidad a un precio accesible. Contamos con un equipo de profesionales altamente capacitados y con la última tecnología en procedimientos dentales.",
    },
    {
      question: "¿Qué servicios ofrece Dental Bueno?",
      answer:
        "Ofrecemos una amplia gama de especialidades y contamos con la última tecnología en procedimientos dentales, para que puedas tener un tratamiento odontológico completo y personalizado.",
    },
    {
      question: "¿Cómo puedo agendar una cita?",
      answer:
        "Puedes agendar una cita a través de nuestro sitio web o contactando a nuestro centro de atención al cliente.",
    },
    {
      question: "¿Qué horarios de atención tiene Dental Bueno?",
      answer:
        "Nuestro horario de atención es de lunes a viernes de 8:00 a 18:00 horas.",
    },
    {
      question: "¿Qué métodos de pago aceptan?",
      answer: "Aceptamos pagos en efectivo, tarjetas de crédito y débito.",
    },
  ];

  return (
    <section className="bg-background relative w-full overflow-hidden py-16">
      <div
        className="absolute inset-0 w-full h-full z-10 invert dark:invert-0"
        style={{  
          backgroundImage: `url('/images/teethPattern.svg')`,
          backgroundRepeat: "repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.1,
          maskImage:
            "linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0.1) 90%)",
          WebkitMaskImage:
            "linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0.1) 90%)",
        }}
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-4 z-20">
        <TitleSection title="Preguntas **Frecuentes**" />

        <div className="mx-auto max-w-2xl space-y-2">
          {faqs.map((faq, index) => (
            <FAQItem key={index} {...faq} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className={cn("mx-auto mt-12 max-w-md rounded-lg p-6 text-center")}
        >
          <div className="bg-primary/10 text-primary mb-4 inline-flex items-center justify-center rounded-full p-2">
            <Mail className="h-4 w-4" />
          </div>
          <p className="text-foreground mb-1 text-sm font-medium">
            Aún tienes preguntas?
          </p>
          <p className="text-muted-foreground mb-4 text-xs">
            Estamos aquí para ayudarte
          </p>
          <Button
            variant="outline"
            className="hover:text-foreground hover:scale-105 hover:cursor-pointer"
          >
            Contactar
            <WhatsAppIcon />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
