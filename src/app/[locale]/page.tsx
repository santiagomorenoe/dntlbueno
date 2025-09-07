import { useTranslations } from "next-intl";
import Hero from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import Faq from "@/components/Faq";
import FooterNewsletter from "@/components/Footer";
import { Locations } from "@/components/Locations";

export default function Home() {
  const t = useTranslations();

  return (
    <div className="min-h-screen relative">
      {/* leyenda del desarrollador */}
      <div className="text-center text-xs text-foreground bg-background/90 backdrop-blur-sm sticky top-24 z-50 w-fit mx-auto">
        <p className="italic">
          Producto de demostración. Hecho por {" "}
          <a href="/images/cv_santiago_moreno.pdf" target="_blank" className="text-primary underline ">
            Santi Moreno
          </a>{" "}
          con ❤️
        </p>
      </div>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Testimonials />
      <Locations />
      <Faq />
      <FooterNewsletter />
    </div>
  );
}
