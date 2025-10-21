"use client";

import { useTranslations } from "next-intl";
import { PageBanner } from "@/components/ui/page-banner";
import { motion } from "framer-motion";
import { Timeline } from "@/components/ui/timeline";
import { Award, Users, Globe, Heart, Sparkles, TrendingUp } from "lucide-react";
import { NumberTicker } from '@/components/ui/number-bounced';
import { TitleSection } from "@/components/ui/title-section";
import Image from "next/image";

export default function AboutPage() {
  const t = useTranslations();

  const stats = [
    {
      value: 10000,
      suffix: "+",
      label: t("about.stats.satisfiedPatients"),
      icon: Users,
    },
    {
      value: 25,
      suffix: "+",
      label: t("about.stats.yearsOfExperience"),
      icon: Award,
    },
    {
      value: 6,
      suffix: "",
      label: t("about.stats.branches"),
      icon: Globe,
    }
  ];

  const timelineItems = [
    {
      title: "Fundación de Dental Bueno",
      description:
        "La Dra. Liliana Bueno funda Dental Bueno con la visión de crear una clínica dental de excelencia que combina tecnología de vanguardia con atención personalizada.",
      year: "1998",
    },
    {
      title: "Expansión Nacional",
      description:
        "Apertura de múltiples sucursales en CDMX y Estado de México, consolidando nuestra presencia como referente en salud dental.",
      year: "2005",
    },
    {
      title: "Liderazgo en Implantes Dentales",
      description:
        "Reconocimiento como líderes nacionales en la colocación de implantes dentales, transformando miles de sonrisas.",
      year: "2010",
    },
    {
      title: "Innovación Tecnológica",
      description:
        "Implementación de las tecnologías más avanzadas en diagnóstico y tratamiento dental, incluyendo diseño de sonrisa digital.",
      year: "2015",
    },
    {
      title: "Red Internacional WIN",
      description:
        "La Dra. Bueno se integra a la red internacional WIN (Woman Implantology Network), consolidando su liderazgo en implantología.",
      year: "2020",
    },
    {
      title: "Presente y Futuro",
      description:
        "Continuamos innovando y expandiendo nuestros servicios, manteniendo el compromiso con la excelencia y la satisfacción de nuestros pacientes.",
      year: "2025",
    },
  ];

  const values = [
    {
      icon: Heart,
      title: "Pasión por tu Sonrisa",
      description:
        "Nuestra mayor pasión es asegurar que tu experiencia dental sea excepcional y de la más alta calidad.",
    },
    {
      icon: Award,
      title: "Excelencia Profesional",
      description:
        "Más de 25 años de experiencia certificada con los mejores especialistas comprometidos con la más alta atención.",
    },
    {
      icon: TrendingUp,
      title: "Innovación Constante",
      description:
        "25 años siendo pioneros en tecnología e innovación dental, constantemente actualizando nuestros métodos y equipos.",
    },
    {
      icon: Users,
      title: "Atención Personalizada",
      description:
        "Cada paciente es único y merece un plan de tratamiento adaptado a sus necesidades específicas y expectativas.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Banner */}
      <PageBanner title={t("common.pages.about")} />

      {/* Main Content */}
      <div className="container mx-auto px-4 space-y-16 py-16">
        {/* Hero Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-4xl mx-auto"
        >
          <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
            <p>
              {t("about.description").split("**").map((part, i) =>
                i % 2 === 1 ? (
                  <strong key={i} className="text-foreground font-semibold">
                    {part}
                  </strong>
                ) : (
                  part
                )
              )}
            </p>
            <p>
              {t("about.description2").split("**").map((part, i) =>
                i % 2 === 1 ? (
                  <strong key={i} className="text-foreground font-semibold">
                    {part}
                  </strong>
                ) : (
                  part
                )
              )}
            </p>
          </div>
        </motion.section>

        {/* Stats Section */}
        <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary/10 via-primary/5 to-transparent p-8 md:p-12">
          <div className="absolute inset-0 bg-primary" />

          <div className="relative z-10 grid grid-cols-2 lg:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/20 text-white">
                  <stat.icon className="h-8 w-8" />
                </div>
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                  <NumberTicker value={stat.value} />
                  <span>{stat.suffix}</span>
                </div>
                <p className="text-sm md:text-base text-white font-medium">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Values Section */}
        <section>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <TitleSection title="Nuestros **Valores**" variant="default" />
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 md:p-8 transition-all duration-300 hover:shadow-lg hover:border-primary/50"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                <div className="relative z-10">
                  <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                    <value.icon className="h-7 w-7" />
                  </div>

                  <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3 transition-colors duration-300 group-hover:text-primary">
                    {value.title}
                  </h3>

                  <p className="text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Timeline Section */}
        <section>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <TitleSection title="Nuestra **Historia**" variant="default" />
            <p className="text-center text-muted-foreground mt-4 max-w-2xl mx-auto">
              Un recorrido de más de 25 años transformando sonrisas y vidas
            </p>
          </motion.div>

          <Timeline items={timelineItems} />
        </section>

        {/* Image placeholder section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative overflow-hidden rounded-3xl bg-muted p-8 md:p-12"
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Dra. Liliana Bueno
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Fundadora y líder de Dental Bueno, la Dra. Liliana Bueno es una
                odontóloga mexicana reconocida y líder de opinión en el grupo
                Straumann, referencia mundial en implantes dentales, biomateriales y
                prótesis.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Miembro del WIN (Woman Implantology Network), la red internacional
                más influyente de mujeres en implantología, la Dra. Bueno ha
                consolidado a Dental Bueno como un referente nacional en medicina
                dental.
              </p>
            </div>

            <div className="relative h-64 md:h-96 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
              <Image 
                src="/images/drBuenoS.jpg"
                alt="Dra. Liliana Bueno"
                fill
                className="w-full h-full object-cover rounded-2xl hover:scale-105 transition-all duration-300 ease-in-out"
                loading="lazy"
              />
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
}
