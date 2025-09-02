import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { routing } from "@/i18n/routing";
import { Josefin_Sans, Inter } from "next/font/google";
import "./globals.css";

const josefinSans = Josefin_Sans({
  subsets: ["latin"],
  variable: "--font-josefin-sans",
  weight: ["400", "500", "600", "700"],
  display: "swap",
  preload: true,
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  title: "Dental Bueno",
  description: "Sistema dental profesional",
};

interface LocaleLayoutProps {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}

export default async function LocaleLayout({
  children,
  params,
}: LocaleLayoutProps) {
  const { locale } = await params;

  // Validar que el locale sea soportado
  if (!routing.locales.includes(locale as "en" | "es")) {
    notFound();
  }

  // Obtener mensajes para el locale actual
  const messages = await getMessages();

  const metadata: Metadata = {
    title: 'Santi Moreno',
    description: 'Santi Moreno, software developer, student of AI engineering and founder of Syntora.',
    openGraph: {
      title: 'Santi Moreno',
      description: 'Santi Moreno, software developer, student of AI engineering and founder of Syntora.',
      images: '/og.jpg',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Santi Moreno',
      description: 'Santi Moreno, software developer, student of AI engineering and founder of Syntora.',
      images: '/og.jpg',
    },
    icons: {
      icon: '/Vector.svg',
    }
  }

  return (
    <html lang={locale} suppressHydrationWarning>
      <head>
        <link rel="icon" href="/images/logo_mini.png" />
      </head>
      <body className={`${josefinSans.variable} ${inter.variable}`}>
        <NextIntlClientProvider messages={messages}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
