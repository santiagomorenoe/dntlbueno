"use client";

import { useTranslations } from "next-intl";
import { PageBanner } from "@/components/ui/page-banner";
import { Locations } from "@/components/Locations";
import { PhotoGallery } from "@/components/ui/photo-gallery";
import { CTASection } from "@/components/ui/cta-section";
import { TitleSection } from "@/components/ui/title-section";
import { MapPin, Users, Clock } from "lucide-react";
import { motion } from "framer-motion";
import { IllustratedCards } from "@/components/ui/illustrated-cards";
import Image from "next/image";

export default function BranchesPage() {
  const t = useTranslations("common.pages");

  // Gallery photos data
  const galleryPhotos = [
    {
      id: "1",
      src: "/images/clinic/polanco-exterior.jpg",
      alt: "Sucursal Polanco - Exterior",
      category: "Instalaciones",
    },
    {
      id: "2",
      src: "/images/clinic/polanco-reception.jpg",
      alt: "Sucursal Polanco - Recepción",
      category: "Instalaciones",
    },
    {
      id: "3",
      src: "/images/clinic/coacalco-treatment.jpg",
      alt: "Sucursal Coacalco - Sala de tratamiento",
      category: "Instalaciones",
    },
    {
      id: "4",
      src: "/images/team/dra-bueno.jpg",
      alt: "Dra. Liliana Bueno",
      category: "Equipo",
    },
    {
      id: "5",
      src: "/images/team/team-polanco.jpg",
      alt: "Equipo Polanco",
      category: "Equipo",
    },
    {
      id: "6",
      src: "/images/clinic/cuautitlan-exterior.jpg",
      alt: "Sucursal Cuautitlán Izcalli",
      category: "Instalaciones",
    },
    {
      id: "7",
      src: "/images/team/team-coacalco.jpg",
      alt: "Equipo Coacalco",
      category: "Equipo",
    },
    {
      id: "8",
      src: "/images/clinic/bosques-reception.jpg",
      alt: "Sucursal Bosques - Recepción moderna",
      category: "Instalaciones",
    },
    {
      id: "9",
      src: "/images/clinic/equipment-1.jpg",
      alt: "Tecnología de última generación",
      category: "Instalaciones",
    },
    {
      id: "10",
      src: "/images/team/team-cuautitlan.jpg",
      alt: "Equipo Cuautitlán",
      category: "Equipo",
    },
    {
      id: "11",
      src: "/images/clinic/waiting-room.jpg",
      alt: "Sala de espera moderna y cómoda",
      category: "Instalaciones",
    },
    {
      id: "12",
      src: "/images/team/specialists.jpg",
      alt: "Nuestros especialistas",
      category: "Equipo",
    },
  ];

  // Features cards
  const featureCards = [
    {
      icon: MapPin,
      title: "Ubicaciones Estratégicas",
      description:
        "6 sucursales ubicadas en puntos clave de CDMX y Estado de México para tu conveniencia.",
    },
    {
      icon: Clock,
      title: "Horarios Flexibles",
      description:
        "Horarios extendidos de lunes a viernes para adaptarnos a tu agenda y necesidades.",
    },
    {
      icon: Users,
      title: "Equipos Especializados",
      description:
        "Cada sucursal cuenta con especialistas certificados en todas las áreas dentales.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Banner */}
      <PageBanner title={t("branches")} />

      {/* Main Content */}
      <div className="container mx-auto px-4 space-y-16 py-16">
        {/* Locations Map */}
        <Locations />

        {/* Features Section */}
        <section>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-10"
          >
            <TitleSection
              title="Nuestras **Ventajas**"
              variant="default"
            />
            <p className="text-center text-muted-foreground mt-4 max-w-2xl mx-auto">
              Instalaciones modernas diseñadas para tu comodidad y equipadas con la
              mejor tecnología dental
            </p>
          </motion.div>

          <IllustratedCards cards={featureCards} />
        </section>

        {/* Photo Gallery Section 
        <section>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-10"
          >
            <TitleSection
              title="Conoce nuestras **Instalaciones**"
              variant="default"
            />
            <p className="text-center text-muted-foreground mt-4 max-w-2xl mx-auto">
              Descubre nuestras modernas instalaciones y conoce al equipo de
              profesionales que harán realidad tu sonrisa perfecta
            </p>
          </motion.div>

          <PhotoGallery photos={galleryPhotos} />
        </section>
        */}

        {/* Info Section */}
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
                Tecnología de Vanguardia en Cada Sucursal
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Todas nuestras sucursales están equipadas con la tecnología más
                avanzada en diagnóstico y tratamiento dental. Desde sistemas de
                radiografía digital hasta equipos de diseño de sonrisa 3D.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Nuestro compromiso es brindarte la misma calidad de atención y
                tecnología en todas nuestras ubicaciones, sin importar cuál elijas
                visitar.
              </p>
            </div>

            <div className="relative h-64 md:h-96 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
            <Image src="/images/branchesimg.jpg" alt="Dra. Liliana Bueno" fill className="w-full h-full object-cover rounded-2xl hover:scale-105 transition-all duration-300 ease-in-out" loading="lazy" />
            </div>
          </div>
        </motion.section>

        {/* CTA Section */}
        <CTASection
          title="Encuentra la sucursal más cercana a ti"
          description="Visítanos en cualquiera de nuestras 6 ubicaciones estratégicas en CDMX y Estado de México. Agenda tu cita hoy mismo."
          buttonText="Ver mapa de sucursales"
          buttonIcon={MapPin}
          buttonHref="/branches"
        />
      </div>
    </div>
  );
}
