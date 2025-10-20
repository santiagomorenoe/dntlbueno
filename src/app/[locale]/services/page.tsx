"use client";

import { useTranslations } from "next-intl";
import { PageBanner } from "@/components/ui/page-banner";
import { FeaturedServices } from "@/components/ui/featured-services";
import { ServiceCard } from "@/components/ui/service-card";
import { ServiceCategory } from "@/components/ui/service-category";
import { motion } from "framer-motion";
import {
  Stethoscope,
  Sparkles,
  Smile,
  FileText,
  Activity,
  ShieldCheck,
  Pill,
  Lock,
  LucideIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { TitleSection } from "@/components/ui/title-section";

const iconMap: { [key: string]: LucideIcon } = {
  0: Stethoscope,
  1: Sparkles,
  2: Smile,
  3: FileText,
  4: Activity,
  5: ShieldCheck,
  6: Pill,
  7: Lock,
};

export default function ServicesPage() {
  const t = useTranslations("services");

  // Get featured services dadadadadada deployyyyy
  const featuredServices = [
    t("services_page.servicios.destacados.0"),
    t("services_page.servicios.destacados.1"),
    t("services_page.servicios.destacados.2"),
    t("services_page.servicios.destacados.3"),
  ];

  // Get general services
  const generalServicesCount = 8; // Based on the JSON structure
  const generalServices = Array.from({ length: generalServicesCount }, (_, i) => ({
    title: t(`services_page.servicios.general_services.services.${i}.title`),
    description: t(`services_page.servicios.general_services.services.${i}.description`),
  }));

  // Specialized services configuration
  const specializedCategories = [
    {
      key: "endodoncia",
      serviceCount: 4,
    },
    {
      key: "ortodoncia",
      serviceCount: 5,
    },
    {
      key: "cirugia",
      serviceCount: 9,
    },
    {
      key: "radiologia",
      serviceCount: 3,
    },
    {
      key: "protesis",
      serviceCount: 6,
    },
    {
      key: "periodoncia",
      serviceCount: 3,
    },
    {
      key: "odontopediatria",
      serviceCount: 10,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Banner */}
      <PageBanner title={t("title")} />

      {/* Main Content */}
      <div className="container mx-auto px-4 space-y-16 py-16">
        {/* Featured Services Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <FeaturedServices services={featuredServices} />
        </motion.section>

        {/* General Services Section */}
        <section>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-10"
          >
            <TitleSection
              title={`${t("services_page.servicios.general_services.title")} **Integrales**`}
              variant="default"
            />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {generalServices.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                description={service.description}
                icon={iconMap[index]}
                delay={index * 0.1}
              />
            ))}
          </div>
        </section>

        {/* Specialized Services Section */}
        <section>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-10"
          >
            <TitleSection title="Especialidades **Médicas**" variant="default" />
          </motion.div>

          <div className="space-y-6">
            {specializedCategories.map((category, categoryIndex) => {
              const services = Array.from({ length: category.serviceCount }, (_, i) => ({
                title: t(
                  `services_page.servicios.specialized_services.${category.key}.services.${i}.title`
                ),
                description: t(
                  `services_page.servicios.specialized_services.${category.key}.services.${i}.description`
                ),
              }));

              return (
                <ServiceCategory
                  key={category.key}
                  title={t(
                    `services_page.servicios.specialized_services.${category.key}.title`
                  )}
                  description={t(
                    `services_page.servicios.specialized_services.${category.key}.description`
                  )}
                  services={services}
                  delay={categoryIndex * 0.1}
                />
              );
            })}
          </div>
        </section>

        {/* CTA Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary to-primary/80 p-8 md:p-12 text-center"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_50%)]" />

          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              ¿Listo para transformar tu sonrisa?
            </h2>
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
              Agenda tu cita hoy y descubre cómo podemos ayudarte a lograr la sonrisa
              de tus sueños con nuestros servicios de alta calidad.
            </p>
            <Button
              size="lg"
              variant="secondary"
              className="font-semibold"
              asChild
            >
              <Link href="#contact">Agendar Cita</Link>
            </Button>
          </div>

          {/* Decorative elements */}
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute -right-10 -top-10 h-60 w-60 rounded-full bg-white/10 blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
            className="absolute -bottom-10 -left-10 h-60 w-60 rounded-full bg-white/10 blur-3xl"
          />
        </motion.section>
      </div>
    </div>
  );
}
