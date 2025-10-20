"use client";

import { useTranslations } from "next-intl";
import { PageBanner } from "@/components/ui/page-banner";
import Testimonials from "@/components/Testimonials";
import { VideoReels } from "@/components/ui/video-reels";
import { CTASection } from "@/components/ui/cta-section";
import { TitleSection } from "@/components/ui/title-section";
import { ArrowRight, Star } from "lucide-react";
import { motion } from "framer-motion";

export default function TestimonialsPage() {
  const t = useTranslations("common.pages");

  // Video reels data
  const videoReels = [
    {
      id: "1",
      thumbnail: "/images/t1.jpg",
      title: "Transformación de sonrisa - María García",
      views: "12K vistas",
    },
    {
      id: "2",
      thumbnail: "/images/t2.jpg",
      title: "Experiencia en implantes - Carlos Rodríguez",
      views: "8.5K vistas",
    },
    {
      id: "3",
      thumbnail: "/images/t3.jpg",
      title: "Ortodoncia invisible - Ana López",
      views: "15K vistas",
    },
    {
      id: "4",
      thumbnail: "/images/t4.jpg",
      title: "Diseño de sonrisa - Juan Pérez",
      views: "10K vistas",
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Banner */}
      <PageBanner title={t("testimonials")} />

      {/* Main Content */}
      <div className="container mx-auto px-4 space-y-16 py-16">
        {/* Testimonials Section */}
        <Testimonials />

        {/* Video Reels Section */}
        <section>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-10"
          >
            <TitleSection title="Historias **Reales**" variant="default" />
            <p className="text-center text-muted-foreground mt-4 max-w-2xl mx-auto">
              Descubre las experiencias reales de nuestros pacientes a través de sus
              propias palabras. Videos cortos que muestran transformaciones increíbles.
            </p>
          </motion.div>

          <VideoReels reels={videoReels} />
        </section>

        {/* Stats Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary/10 via-primary/5 to-transparent p-8 md:p-12"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(var(--primary),0.1),transparent_70%)]" />

          <div className="relative z-10">
            <div className="text-center mb-8">
              <TitleSection title="Nuestros **Números**" variant="default" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { value: "10,000+", label: "Pacientes Satisfechos" },
                { value: "4.9/5", label: "Calificación Promedio", icon: Star },
                { value: "98%", label: "Recomendación" },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="flex items-center justify-center mb-2">
                    {stat.icon && <stat.icon className="h-6 w-6 text-primary fill-primary mr-2" />}
                    <div className="text-4xl md:text-5xl font-bold text-foreground">
                      {stat.value}
                    </div>
                  </div>
                  <p className="text-muted-foreground font-medium">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* CTA Section */}
        <CTASection
          title="Descubre por qué nos recomiendan"
          description="Únete a miles de pacientes satisfechos que han transformado su sonrisa con nosotros. Tu historia de éxito podría ser la siguiente."
          buttonText="Agenda tu consulta gratuita"
          buttonIcon={ArrowRight}
          buttonHref="#contact"
        />
      </div>
    </div>
  );
}
