"use client";

import { Facebook, Instagram, Youtube } from "lucide-react";
import { useTranslations } from "next-intl";


export const WhatsAppIcon = ({ color = "var(--white)" }) => (
<svg
  fill={color}
  viewBox="0 0 32 32"
  xmlns="http://www.w3.org/2000/svg"
  className="h-5 w-5"
  width={20}
  height={20}
>
  <title>whatsapp</title>
  <path d="M26.576 5.363c-2.69-2.69-6.406-4.354-10.511-4.354-8.209 0-14.865 6.655-14.865 14.865 0 2.732 0.737 5.291 2.022 7.491l-0.038-0.070-2.109 7.702 7.879-2.067c2.051 1.139 4.498 1.809 7.102 1.809h0.006c8.209-0.003 14.862-6.659 14.862-14.868 0-4.103-1.662-7.817-4.349-10.507l0 0zM16.062 28.228h-0.005c-0 0-0.001 0-0.001 0-2.319 0-4.489-0.64-6.342-1.753l0.056 0.031-0.451-0.267-4.675 1.227 1.247-4.559-0.294-0.467c-1.185-1.862-1.889-4.131-1.889-6.565 0-6.822 5.531-12.353 12.353-12.353s12.353 5.531 12.353 12.353c0 6.822-5.53 12.353-12.353 12.353h-0zM22.838 18.977c-0.371-0.186-2.197-1.083-2.537-1.208-0.341-0.124-0.589-0.185-0.837 0.187-0.246 0.371-0.958 1.207-1.175 1.455-0.216 0.249-0.434 0.279-0.805 0.094-1.15-0.466-2.138-1.087-2.997-1.852l0.010 0.009c-0.799-0.74-1.484-1.587-2.037-2.521l-0.028-0.052c-0.216-0.371-0.023-0.572 0.162-0.757 0.167-0.166 0.372-0.434 0.557-0.65 0.146-0.179 0.271-0.384 0.366-0.604l0.006-0.017c0.043-0.087 0.068-0.188 0.068-0.296 0-0.131-0.037-0.253-0.101-0.357l0.002 0.003c-0.094-0.186-0.836-2.014-1.145-2.758-0.302-0.724-0.609-0.625-0.836-0.637-0.216-0.010-0.464-0.012-0.712-0.012-0.395 0.010-0.746 0.188-0.988 0.463l-0.001 0.002c-0.802 0.761-1.3 1.834-1.3 3.023 0 0.026 0 0.053 0.001 0.079l-0-0.004c0.131 1.467 0.681 2.784 1.527 3.857l-0.012-0.015c1.604 2.379 3.742 4.282 6.251 5.564l0.094 0.043c0.548 0.248 1.25 0.513 1.968 0.74l0.149 0.041c0.442 0.14 0.951 0.221 1.479 0.221 0.303 0 0.601-0.027 0.889-0.078l-0.031 0.004c1.069-0.223 1.956-0.868 2.497-1.749l0.009-0.017c0.165-0.366 0.261-0.793 0.261-1.242 0-0.185-0.016-0.366-0.047-0.542l0.003 0.019c-0.092-0.155-0.34-0.247-0.712-0.434z"></path>
</svg>
);

const socialIcons = [
  { icon: <WhatsAppIcon />, href: "http://api.whatsapp.com/send?phone=525561430262" },
  { icon: <Instagram className="h-5 w-5 text-white" />, href: "https://www.instagram.com/dental_bueno/" },
  { icon: <Facebook className="h-5 w-5 text-white" />, href: "https://www.facebook.com/DentalBueno" },
  { icon: <Youtube className="h-5 w-5 text-white" />, href: "https://www.youtube.com/@dentalbueno6603/videos" },
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
        t("columns.0.links.5"),
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
    }
  ];
  
  const legalLinks = [
    t("legalLinks.0"),
    t("legalLinks.1"),
    t("legalLinks.2"),
    t("legalLinks.3"),
  ];

  return (
    <footer className="bg-primary text-white relative w-full pt-20 pb-10 z-10 overflow-x-hidden">
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
        <div className="mb-16 grid grid-cols-2 gap-8 md:grid-cols-3 relative z-20">
          <div className="col-span-2 lg:col-span-1">
            <div className="mb-6 flex items-center space-x-2">
              <div className="flex items-center justify-center rounded-full hover:scale-105 transition-all duration-300 hover:cursor-pointer">
                <img src="/images/logo_white.png" alt="logo" className="w-[200px] md:w-[200px] h-[auto] object-contain" style={{ filter: "saturate(100) grayscale(200%) contrast(160%) brightness(0.25)) invert(100%) sepia(100%) hue-rotate(180deg)" }} />
              </div>
            </div>
            <p className="text-white mb-6 text-sm md:text-base max-w-xs">
              {t("description")}.
            </p>
            <div className="flex space-x-4">
              {socialIcons.map((item, i) => (
                <a
                  key={i}
                  target="_blank"
                  href={item.href}
                  className="glass-effect hover:bg-white/10 flex h-10 w-10 items-center justify-center rounded-full transition"
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>
          {footerColumns.map((col) => (
            <div key={col.title}>
              <h4 className="mb-4 text-lg text-white font-semibold">
                {col.title}
              </h4>
              <ul className="space-y-3">
                {col.links.map((text) => (
                  <li key={text}>
                    <a
                      href="#"
                      className="text-white/70 hover:text-white/90 transition"
                    >
                      {text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="border-white/10 flex flex-col items-center justify-between border-t pt-8 md:flex-row">
          <p className="text-white mb-4 text-sm md:mb-0">
            {t("copyright")}
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            {legalLinks.map((text,idx) => (
              <a
                key={idx}
                href="#"
                className="text-white hover:text-white/80 text-sm"
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
