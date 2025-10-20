import Hero from "@/components/Hero";
import { Locations } from "@/components/Locations";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import Faq from "@/components/Faq";

export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <Services />
      <Testimonials />
      <Locations />
      <Faq />
    </div>
  );
}
