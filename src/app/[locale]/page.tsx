
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
 
const data: ContentData = {
  navbar: {
    btnText: 'Agenda tu cita',
  },
  sections: [
    {
      active: true,
      navbar_active: true,
      navbar_title: 'Inicio',
    },
    {
      active: true,
      navbar_active: true,
      navbar_title: 'Servicios',
    },  
    {
      active: true,
      navbar_active: true,
      navbar_title: 'Nosotros',
    },
    {
      active: true,
      navbar_active: true,
      navbar_title: 'Testimonios',
    },
    {
      active: true,
      navbar_active: true,
      navbar_title: 'Blog',
    }
  ],
};

export default function Home() {
  const t = useTranslations();

  return (
    <div className="min-h-screen">

      <Navbar data={data.navbar} sections={data.sections} />
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
