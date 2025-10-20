"use client";

import { useTranslations } from "next-intl";
import { PageBanner } from "@/components/ui/page-banner";
import Faq from "@/components/Faq";
import { IllustratedCards } from "@/components/ui/illustrated-cards";
import { CTASection } from "@/components/ui/cta-section";
import { TitleSection } from "@/components/ui/title-section";
import { Calendar, Clock, CreditCard, FileText, Phone, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function FaqPage() {
  const t = useTranslations("common.pages");

  // Help topics cards
  const helpTopics = [
    {
      icon: Calendar,
      title: "Agendar Citas",
      description:
        "Puedes agendar tu cita a través de nuestro sitio web, por teléfono o WhatsApp. También ofrecemos citas de emergencia el mismo día.",
    },
    {
      icon: Clock,
      title: "Horarios y Ubicaciones",
      description:
        "Todas nuestras sucursales están abiertas de lunes a viernes de 8:00 a 18:00 horas. Contamos con 6 ubicaciones estratégicas.",
    },
    {
      icon: CreditCard,
      title: "Formas de Pago",
      description:
        "Aceptamos efectivo, tarjetas de crédito y débito. También ofrecemos planes de financiamiento sin intereses para tratamientos mayores.",
    },
    {
      icon: FileText,
      title: "Documentos Necesarios",
      description:
        "Para tu primera consulta, solo necesitas una identificación oficial. Si cuentas con estudios previos, tráelos contigo.",
    },
    {
      icon: Phone,
      title: "Contacto de Emergencia",
      description:
        "En caso de emergencias dentales, contáctanos de inmediato al teléfono de la sucursal más cercana. Atendemos urgencias.",
    },
    {
      icon: MessageCircle,
      title: "Seguimiento Post-Tratamiento",
      description:
        "Después de cada tratamiento, te daremos seguimiento para asegurar tu recuperación óptima y responder cualquier duda.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Banner */}
      <PageBanner title={t("faq")} />

      {/* Main Content */}
      <div className="container mx-auto px-4 space-y-16 py-16">
        {/* FAQ Component */}
        <Faq />

        {/* Help Topics Section */}
        <section>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-10"
          >
            <TitleSection
              title="Temas de **Ayuda**"
              variant="default"
            />
            <p className="text-center text-muted-foreground mt-4 max-w-2xl mx-auto">
              Información útil sobre los temas más consultados por nuestros pacientes
            </p>
          </motion.div>

          <IllustratedCards cards={helpTopics} />
        </section>

        {/* Info Cards Section */}
        <section className="grid md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative overflow-hidden rounded-2xl border border-border bg-card p-8"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent" />

            <div className="relative z-10">
              <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Phone className="h-7 w-7" />
              </div>

              <h3 className="text-xl font-bold text-foreground mb-3">
                Consulta Telefónica
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Habla directamente con nuestros especialistas y resuelve tus dudas antes de tu visita.
              </p>

              <div className="relative h-32 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                <p className="text-sm text-muted-foreground text-center px-4">
                  [Ilustración de consulta telefónica]
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative overflow-hidden rounded-2xl border border-border bg-card p-8"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent" />

            <div className="relative z-10">
              <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <MessageCircle className="h-7 w-7" />
              </div>

              <h3 className="text-xl font-bold text-foreground mb-3">
                Asistente Virtual
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Chatea con nuestro asistente virtual disponible 24/7 para respuestas inmediatas.
              </p>

              <div className="relative h-32 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                <p className="text-sm text-muted-foreground text-center px-4">
                  [Ilustración de chatbot]
                </p>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Tips Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative overflow-hidden rounded-3xl bg-accent text-black p-8 md:p-12"
        >
          <div className="mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-black mb-4">
              Consejos para tu Primera Visita
            </h3>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                number: "01",
                title: "Llega 10 minutos antes",
                description: "Así tendrás tiempo de completar el registro sin prisas.",
              },
              {
                number: "02",
                title: "Trae tus estudios previos",
                description: "Radiografías o estudios anteriores nos ayudarán a brindarte mejor atención.",
              },
              {
                number: "03",
                title: "Prepara tus preguntas",
                description: "Anota cualquier duda sobre tu salud dental que quieras resolver.",
              },
              {
                number: "04",
                title: "Comunica tus necesidades",
                description: "Cuéntanos tus expectativas y metas para tu sonrisa ideal.",
              },
            ].map((tip, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="flex gap-4"
              >
                <div className="flex-shrink-0 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-black font-bold">
                  {tip.number}
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">{tip.title}</h4>
                  <p className="text-sm text-muted-foreground">{tip.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* CTA Section */}
        <CTASection
          title="¿Aún tienes dudas? Habla con un asesor"
          description="Nuestro equipo está listo para responder todas tus preguntas y ayudarte a elegir el mejor tratamiento para ti. También puedes contactar a nuestro asistente virtual disponible 24/7."
          buttonText="Contactar con un asesor"
          buttonIcon={Phone}
          buttonHref="#contact"
        />
      </div>
    </div>
  );
}
