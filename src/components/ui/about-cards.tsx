'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { NumberTicker } from '@/components/ui/number-bounced';
import { useTheme } from 'next-themes';
import { cn } from '@/lib/utils';
import {
  Users,
  Award,
  CheckCircle,
  Clock,
} from 'lucide-react';

interface StatItemProps {
  value: number;
  label: string;
  icon: React.ReactNode;
  delay?: number;
  decimalPlaces?: number;
  color?: string;
}

const StatItem = ({
  value,
  label,
  icon,
  delay = 0,
  decimalPlaces = 0,
  color = 'from-primary to-primary/70',
}: StatItemProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const { resolvedTheme } = useTheme();

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6, delay: delay, ease: 'easeOut' }}
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
            />
            <span className="ml-1 text-sm font-medium opacity-70">+</span>
          </h3>
          <p className="text-muted-foreground text-sm font-medium">{label}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default function AboutUs2() {
  const stats = [
    {
      value: 5000,
      label: 'Pacientes satisfechos',
      icon: <Users className="h-5 w-5" />,
      delay: 0,
      color: 'from-primary to-primary/70',
      decimalPlaces: 0,
    },
    {
      value: 15,
      label: 'Años de experiencia',
      icon: <Clock className="h-5 w-5" />,
      delay: 0.1,
      color: 'from-primary to-primary/70',
      decimalPlaces: 0,
    },
    {
      value: 100,
      label: 'Proyectos completados',
      icon: <CheckCircle className="h-5 w-5" />,
      delay: 0.2,
      color: 'from-primary to-primary/70',
      decimalPlaces: 0,
    },
    {
      value: 24,
      label: 'Premios ganados',
      icon: <Award className="h-5 w-5" />,
      delay: 0.3,
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
