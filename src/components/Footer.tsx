"use client";

import { Instagram, Linkedin, Twitter, Youtube } from "lucide-react";
import { useTranslations } from "next-intl";


const socialIcons = [
  { icon: <Instagram className="h-5 w-5 text-accent" />, href: "#" },
  { icon: <Twitter className="h-5 w-5 text-accent" />, href: "#" },
  { icon: <Linkedin className="h-5 w-5 text-accent" />, href: "#" },
  { icon: <Youtube className="h-5 w-5 text-accent" />, href: "#" },
];

export default function FooterNewsletter() { 
  const t = useTranslations("footer");

  const footerColumns = [
    {
      title: t("columns.0.title"),
      links: [
        t("columns.0.links.0"),
        t("columns.0.links.1"),
        t("columns.0.links.2"),
        t("columns.0.links.3"),
        t("columns.0.links.4"),
      ],
    },
    {
      title: t("columns.1.title"),
      links: [
        t("columns.1.links.0"),
        t("columns.1.links.1"),
        t("columns.1.links.2"),
        t("columns.1.links.3"),
        t("columns.1.links.4"),
      ],
    },
    {
      title: t("columns.2.title"),
      links: [
        t("columns.2.links.0"),
        t("columns.2.links.1"),
        t("columns.2.links.2"),
        t("columns.2.links.3"),
        t("columns.2.links.4"),
      ],
    },
  ];
  
  const legalLinks = [
    t("legalLinks.0"),
    t("legalLinks.1"),
    t("legalLinks.2"),
    t("legalLinks.3"),
  ];

  return (
    <footer className="bg-primary text-foreground relative w-full pt-20 pb-10 z-10 overflow-x-hidden">
      <div
        className="absolute inset-0 w-full h-full z-10"
        style={{
          backgroundImage: `url('/images/logo_mini.png')`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "500px",
          backgroundPosition: "right",
          backgroundColor: "rgba(0,0,0,0.5)",
          opacity: 1,
          maskImage:
            "linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0.1) 95%)",
          WebkitMaskImage:
            "linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0.1) 95%)",
        }}
        aria-hidden="true"
      />
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 grid grid-cols-2 gap-8 md:grid-cols-4 relative z-20">
          <div className="col-span-2 lg:col-span-1">
            <div className="mb-6 flex items-center space-x-2">
              <div className="flex items-center justify-center rounded-full bg-white hover:scale-105 transition-all duration-300 hover:cursor-pointer">
                <img src="/logo.png" alt="logo" className="w-[150px] md:w-[200px] h-[50px] md:h-[50px] object-contain" style={{ filter: "saturate(100) grayscale(200%) contrast(160%) brightness(0.25)) invert(100%) sepia(100%) hue-rotate(180deg)" }} />
              </div>
            </div>
            <p className="text-accent mb-6">
              {t("description")}.
            </p>
            <div className="flex space-x-4">
              {socialIcons.map((item, i) => (
                <a
                  key={i}
                  href={item.href}
                  className="glass-effect hover:bg-primary/10 flex h-10 w-10 items-center justify-center rounded-full transition"
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>
          {footerColumns.map((col) => (
            <div key={col.title}>
              <h4 className="mb-4 text-lg text-accent font-semibold">
                {col.title}
              </h4>
              <ul className="space-y-3">
                {col.links.map((text) => (
                  <li key={text}>
                    <a
                      href="#"
                      className="text-accent/70 hover:text-accent/90 transition"
                    >
                      {text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="border-accent/10 flex flex-col items-center justify-between border-t pt-8 md:flex-row">
          <p className="text-accent mb-4 text-sm md:mb-0">
            {t("copyright")}
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            {legalLinks.map((text) => (
              <a
                key={text}
                href="#"
                className="text-accent hover:text-accent/80 text-sm"
              >
                {text}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
