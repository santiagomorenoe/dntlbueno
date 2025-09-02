
import { useTranslations } from 'next-intl';
import Hero from '@/components/Hero';
import { Navbar } from '@/components/Navbar';
import { ContentData } from '@/types';
import { About } from '@/components/About';
import { Services } from '@/components/Services';
import Testimonials from '@/components/Testimonials';
import Faq from '@/components/Faq';
import FooterNewsletter from '@/components/Footer';
import { Locations } from '@/components/Locations';
 

export default function Home() {
  const t = useTranslations();

  return (
    <div className="min-h-screen">

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
