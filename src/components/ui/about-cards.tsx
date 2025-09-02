'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { NumberTicker } from '@/components/ui/number-bounced';
import { useTheme } from 'next-themes';
import { cn } from '@/lib/utils';
import {
  Users,
  Award,
  Map,
  Clock,
} from 'lucide-react';
import { useTranslations } from 'next-intl';

interface StatItemProps {
  value: number;
  label: string;
  icon: React.ReactNode;
  delay?: number;
  decimalPlaces?: number;
  color?: string;
  startValue?: number;
}

const StatItem = ({
  value,
  label,
  icon,
  delay = 0,
  decimalPlaces = 0,
  color = 'from-primary to-primary/70',
  startValue = 100,
}: StatItemProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const { resolvedTheme } = useTheme();

  return (
    <div
      ref={ref}
      className={cn(
        'group border-border/30 bg-card/20 relative overflow-hidden rounded-xl border p-6',
        resolvedTheme === 'dark'
          ? 'shadow-xl shadow-black/5'
          : 'shadow-lg shadow-black/[0.03]',
      )}
    >
      <div
        className={cn(
          'absolute -top-6 -right-6 h-24 w-24 rounded-full bg-gradient-to-br opacity-20 blur-2xl transition-all duration-500 group-hover:opacity-30 group-hover:blur-3xl',
          color,
        )}
      />

      <div className="flex items-center gap-4">
        <div
          className={cn(
            'flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br text-white',
            color,
          )}
        >
          {icon}
        </div>

        <div className="flex flex-col">
          <h3 className="flex items-baseline text-3xl font-bold tracking-tight">
            <NumberTicker
              value={value}
              decimalPlaces={decimalPlaces}
              className="tabular-nums"
              startValue={startValue}
            />
            <span className="ml-1 text-sm font-medium text-white/80">+</span>
          </h3>
          <p className="text-white/80 text-sm font-medium">{label}</p>
        </div>
      </div>
    </div>
  );
};

export default function AboutUs2() {
  const t = useTranslations("about.stats");
  const stats = [
    {
      value: 999,
      startValue: 800,
      label: t('satisfiedPatients'),
      icon: <Users className="h-5 w-5" />,
      delay: 0.1,
      color: 'from-primary to-primary/70',
      decimalPlaces: 0,
    },
    {
      value: 15,
      startValue: 12,
      label: t('yearsOfExperience'),
      icon: <Clock className="h-5 w-5" />,
      delay: 0.2,
      color: 'from-primary to-primary/70',
      decimalPlaces: 0,
    },
    {
      value: 5,
      startValue: 3,
      label: t('branches'),
      icon: <Map className="h-5 w-5" />,
      delay: 0.3,
      color: 'from-primary to-primary/70',
      decimalPlaces: 0,
    },
    {
      value: 24,
      startValue: 22,
      label: t('awardsWon'),
      icon: <Award className="h-5 w-5" />,
      delay: 0.4,
      color: 'from-primary to-primary/70',
      decimalPlaces: 0,
    },
  ];

  return (
        <div>
          <div className="grid gap-5 sm:grid-cols-1 lg:grid-cols-2 w-full">
            {stats.map((stat, index) => (
              <StatItem
                key={index}
                value={stat.value}
                label={stat.label}
                icon={stat.icon}
                delay={stat.delay || index * 0.1}
                decimalPlaces={stat.decimalPlaces}
                color={stat.color}
              />
            ))}
        </div>
      </div>
  );
}
