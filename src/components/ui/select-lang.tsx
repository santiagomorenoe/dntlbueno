"use client"

import { useLocale } from 'next-intl';
import { useRouter, usePathname } from '@/i18n/routing';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./dropdown-menu";
import { Button } from "./button";
import { Languages } from 'lucide-react';

const locales = [
  { code: 'en', name: 'English', flag: '🇬🇧' },
  { code: 'es', name: 'Español', flag: '🇪🇸' }
];

export function LanguageToggle() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();



  const handleLocaleChange = (newLocale: string) => {
    router.push(pathname, { locale: newLocale });
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon" className="rounded-lg hover:scale-105 transition-all duration-300 hover:cursor-pointer hover:bg-primary hover:text-white">
          <Languages className="h-[1.2rem] w-[1.2rem]" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="rounded-lg">
        {locales.map((loc) => (
          <DropdownMenuItem 
            key={loc.code}
            onClick={() => handleLocaleChange(loc.code)}
            className={locale === loc.code ? 'bg-primary text-white' : ''}
          >
            <span className="mr-2">{loc.flag}</span>
            <span>{loc.name}</span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}