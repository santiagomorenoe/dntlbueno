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
import { Link } from "@/i18n/routing";  

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
        link: "/",
      },
      {
        active: true,
        navbar_active: true,
        navbar_title: t("about"),
        link: "/about",
      },
      {
        active: true,
        navbar_active: true,
        navbar_title: t("services"),
        link: "/services",
      },
      {
        active: true, 
        navbar_active: true, 
        navbar_title: t("locations"),
        link: "/branches",
      },
      {
        active: true,
        navbar_active: true,
        navbar_title: t("testimonials"),
        link: "/testimonials",
      },
      {
        active: true,
        navbar_active: true,
        navbar_title: t("faq"),
        link: "/faq",
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

  const logo = scrolled ? "/logo.png" : "/images/logo_white.png";

  const navbarBackgroundClass = scrolled
    ? "backdrop-blur-xs bg-background/90 top-0"
    : "bg-background/0 top-0";
  const navbarTextClass = scrolled
    ? "text-primary dark:text-foreground"
    : "text-white dark:text-foreground";
  const mobileMenuBgClass = scrolled
    ? "bg-background/90 backdrop-blur-xs h-dvh"
    : "backdrop-blur-xl bg-background/60 h-dvh";

  const filteredSections = sections.filter((section) => section.navbar_active);

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleItemClick = () => {
    setIsMobileMenuOpen(false);
    setMenuOpen(false);
  };

  const renderLogo = () => {
    if (logo) {
      return (
        <Link href="/" className="w-fit" key="logo-image">
          <div className="w-[150px] md:w-[200px] h-[50px] md:h-[50px] relative ml-5 md:ml-0">
            <Image
              src={logo}
              alt="logo"
              fill
              className="w-full h-full object-contain hover:scale-105 transition-all duration-300 hover:cursor-pointer dark:grayscale"
            />
          </div>
        </Link>
      );
    }
    return (
      <Link
        href="/"
        className="w-fit text-5xl font-bold uppercase text-primary font-inter hover:scale-105 transition-all duration-300"
        key="logo-text"
      >
        Logo
      </Link>
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

        <div className="flex items-center justify-center gap-8">
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
                  <Link href={link.link}>
                    <Button
                      variant="link"
                      className={`hover:scale-105 transition-all duration-300 hover:cursor-pointer font-josefin-sans text-lg ${navbarTextClass}`}
                    >
                      {link.navbar_title}
                    </Button>
                  </Link>
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
            <div className="flex items-center gap-2">
              <LanguageToggle />
              <ThemeToggle />
            </div>
          </motion.div>
        </div>

        {/* Mobile Menu Button */}
        <motion.div
          className={`xl:hidden z-50 rounded-full flex flex-row-reverse gap-4 items-center justify-center hover:cursor-pointer px-6`}
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
                    <Link
                      href={link.link}
                      onClick={handleItemClick}
                      className="text-xl font-medium font-inter text-foreground transition-all duration-200 capitalize"
                    >
                      {link.navbar_title}
                    </Link>
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
