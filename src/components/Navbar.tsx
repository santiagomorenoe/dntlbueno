"use client";

import type React from "react";
import { useState, useEffect } from "react";
import { X, Menu, Phone } from "lucide-react";
import Image from "next/image";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { Button } from "./ui/button";
import { ThemeToggle } from "./ui/theme-toggle";
import { LanguageToggle } from "./ui/select-lang";
import { ContentData } from "@/types";
import { useTranslations } from "next-intl";
export const WhatsAppIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="25"
    height="24"
    viewBox="0 0 25 24"
    fill="none"
  >
    <path
      d="M3.5 21L5.15 17.2C3.88766 15.408 3.32267 13.217 3.56104 11.0381C3.79942 8.85915 4.82479 6.84211 6.44471 5.36549C8.06463 3.88887 10.1677 3.05418 12.3594 3.01807C14.551 2.98195 16.6805 3.7469 18.3482 5.16934C20.0159 6.59179 21.1071 8.57395 21.4172 10.7438C21.7272 12.9137 21.2347 15.1222 20.0321 16.9547C18.8295 18.7873 16.9994 20.118 14.8854 20.6971C12.7713 21.2762 10.5186 21.0639 8.55 20.1L3.5 21Z"
      stroke="var(--color-foreground)"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M9.5 10C9.5 10.1326 9.55268 10.2598 9.64645 10.3536C9.74021 10.4473 9.86739 10.5 10 10.5C10.1326 10.5 10.2598 10.4473 10.3536 10.3536C10.4473 10.2598 10.5 10.1326 10.5 10V9C10.5 8.86739 10.4473 8.74021 10.3536 8.64645C10.2598 8.55268 10.1326 8.5 10 8.5C9.86739 8.5 9.74021 8.55268 9.64645 8.64645C9.55268 8.74021 9.5 8.86739 9.5 9V10ZM9.5 10C9.5 11.3261 10.0268 12.5979 10.9645 13.5355C11.9021 14.4732 13.1739 15 14.5 15M14.5 15H15.5C15.6326 15 15.7598 14.9473 15.8536 14.8536C15.9473 14.7598 16 14.6326 16 14.5C16 14.3674 15.9473 14.2402 15.8536 14.1464C15.7598 14.0527 15.6326 14 15.5 14H14.5C14.3674 14 14.2402 14.0527 14.1464 14.1464C14.0527 14.2402 14 14.3674 14 14.5C14 14.6326 14.0527 14.7598 14.1464 14.8536C14.2402 14.9473 14.3674 15 14.5 15Z"
      stroke="var(--color-foreground)"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const navbarVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const linkVariants: Variants = {
  hidden: { opacity: 0, x: -20 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.3,
      ease: "easeOut",
    },
  }),
};

export const Navbar: React.FC = () => {
  const t = useTranslations("common.navigation");
  const data: ContentData = {
    navbar: {
      btnText: t("scheduling"),
    },
    sections: [
      {
        active: true,
        navbar_active: true,
        navbar_title: t("home"),
        link: "#home",
      },
      {
        active: true,
        navbar_active: true,
        navbar_title: t("about"),
        link: "#about",
      },
      {
        active: true,
        navbar_active: true,
        navbar_title: t("services"),
        link: "#services",
      },
      {
        active: true,
        navbar_active: true,
        navbar_title: t("testimonials"),
        link: "#testimonials",
      },
      {
        active: true,
        navbar_active: true,
        navbar_title: t("faq"),
        link: "#faq",
      },
    ],
  };

  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { btnText } = data.navbar;
  const sections = data.sections;

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [menuOpen]);

  const logo = "/logo.png";

  const navbarBackgroundClass = scrolled
    ? "backdrop-blur-xs bg-background/90 top-0"
    : "bg-background/0 top-6";
  const navbarTextClass = scrolled
    ? "text-primary"
    : "text-white dark:text-foreground";
  const mobileMenuBgClass = scrolled
    ? "bg-background/90 backdrop-blur-xs h-dvh"
    : "backdrop-blur-xs bg-background/80 h-dvh";

  const filteredSections = sections.filter((section) => section.navbar_active);

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleItemClick = () => {
    setIsMobileMenuOpen(false);
  };

  // Función para scroll suave a las secciones
  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  // Función para manejar clicks en items de navegación
  const handleNavItemClick = (link: string) => {
    if (link.startsWith("#")) {
      scrollToSection(link);
    }
    handleItemClick();
  };

  const renderLogo = () => {
    if (logo) {
      return (
        <a href="#home" className="w-fit" key="logo-image">
          <div className="w-[150px] md:w-[200px] h-[50px] md:h-[50px] relative ml-5 md:ml-0">
            <Image
              src={logo}
              alt="logo"
              fill
              className="w-full h-full object-contain hover:scale-105 transition-all duration-300 hover:cursor-pointer dark:grayscale"
            />
          </div>
        </a>
      );
    }
    return (
      <a
        href="#home"
        className="w-fit text-5xl font-bold uppercase text-primary font-inter hover:scale-105 transition-all duration-300"
        key="logo-text"
      >
        Logo
      </a>
    );
  };

  return (
    <div>
      <motion.div
        className={`w-full fixed left-0 right-0 flex items-center justify-between px-5 sm:px-8 lg:px-16 z-50 transition-all duration-300 ease-in-out ${
          menuOpen ? "" : navbarBackgroundClass
        } py-4 md:py-5`}
        initial="hidden"
        animate="visible"
        variants={navbarVariants}
      >
        {renderLogo()}

        <div className="flex items-center gap-8">
          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center">
            <ul className="flex space-x-4 lg:space-x-6">
              {filteredSections.map((link, index) => (
                <motion.li
                  key={`nav-link-${index}-${link.navbar_title}`}
                  custom={index}
                  variants={linkVariants}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    variant="link"
                    className="hover:scale-105 transition-all duration-300 hover:cursor-pointer text-foreground"
                  >
                    <a
                      href={link.link}
                      onClick={() => handleNavItemClick(link.link)}
                      className={`${navbarTextClass}`}
                    >
                      {link.navbar_title}
                    </a>
                  </Button>
                </motion.li>
              ))}
            </ul>
          </nav>

          {/* Desktop Button */}
          <motion.div
            className="hidden xl:flex xl:items-center"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.3 }}
          >
            <Button
              className="hover:scale-105 transition-all duration-300 hover:cursor-pointer hover:text-foreground"
              variant="outline"
            >
              <WhatsAppIcon />
              {btnText}
            </Button>
            <div className="flex items-center gap-2 mr-0 ml-5">
              <LanguageToggle />
              <ThemeToggle />
            </div>
          </motion.div>
        </div>

        {/* Mobile Menu Button */}
        <motion.div
          className={`xl:hidden z-50 rounded-full flex flex-row-reverse gap-4 items-center hover:cursor-pointer px-6`}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          <motion.span
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            animate={{
              rotate: menuOpen ? 180 : 0,
              transition: {
                duration: 0.3,
                ease: "easeOut",
              },
            }}
            className="bg-primary rounded-full w-fit h-fit p-2 hover:scale-105 transition-all duration-300 hover:cursor-pointer"
            onClick={handleMenuToggle}
          >
            {menuOpen ? (
              <X className="text-white" />
            ) : (
              <Menu className="text-white" />
            )}
          </motion.span>
          <div className="inline-flex flex-row justify-center mx-auto items-center gap-2 my-4">
            <LanguageToggle />
            <ThemeToggle />
          </div>
        </motion.div>
      </motion.div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className={`fixed inset-0 w-full ${mobileMenuBgClass} z-40 xl:hidden`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col items-center justify-center h-full">
              <ul className="space-y-8 md:space-y-10 text-center mb-12 md:mb-14 w-full px-6">
                {filteredSections.map((link, index) => (
                  <motion.li
                    key={`mobile-link-${index}-${link.navbar_title}`}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="transform transition-transform duration-300 hover:scale-105"
                  >
                    <a
                      href={link.link}
                      onClick={() => handleNavItemClick(link.link)}
                      className="text-xl font-medium font-inter text-foreground transition-all duration-200 capitalize"
                    >
                      {link.navbar_title}
                    </a>
                  </motion.li>
                ))}
              </ul>
              <motion.div
                className="w-full flex justify-center mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <Button
                  variant="default"
                  size="lg"
                  className="hover:scale-105 transition-all duration-300 hover:cursor-pointer"
                >
                  <Phone className="mr-2 h-4 w-4" />
                  {btnText}
                </Button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
