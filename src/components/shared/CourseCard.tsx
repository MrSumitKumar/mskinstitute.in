'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

interface CourseCardProps {
  title: string;
  duration: string;
  fee: string;
  badge?: string;
  description?: string;
  slug?: string;
  highlights?: string[];
  image?: string;
  gradientClass?: string;
}

const bannerMap: Record<string, string> = {
  python: 'from-sky-500 to-blue-600',
  java: 'from-emerald-500 to-teal-600',
  ccc: 'from-orange-400 to-orange-600',
  adca: 'from-slate-900 to-slate-600',
  'data-analytics': 'from-violet-500 to-fuchsia-600',
  'web-development': 'from-pink-500 to-rose-600',
};

export function CourseCard({
  title,
  duration,
  fee,
  badge,
  description,
  slug,
  highlights = [],
  image,
  gradientClass,
}: CourseCardProps) {
  const bannerStyle = gradientClass || (slug ? bannerMap[slug] : 'from-slate-900 to-slate-700');

  return (
    <motion.div
      className="group relative overflow-hidden rounded-3xl border border-white/80 bg-white/90 shadow-card backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-cardHover"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45 }}
      viewport={{ once: true }}
    >
      <div className={`h-40 w-full bg-gradient-to-br ${bannerStyle} p-6 text-white`}>
        <div className="flex items-start justify-between">
          <span className="rounded-full bg-white/15 px-3 py-1 text-xs uppercase tracking-[0.24em] font-semibold">{badge || 'Trending'}</span>
          <span className="rounded-full bg-white/15 px-3 py-1 text-xs uppercase tracking-[0.24em] font-semibold">{duration}</span>
        </div>
        <div className="mt-10 text-2xl font-bold leading-tight">{title}</div>
      </div>

      <div className="p-6 space-y-4">
        <p className="text-sm text-slate-600 min-h-[3rem]">{description}</p>

        <div className="space-y-2">
          {highlights.map((item) => (
            <div key={item} className="flex items-center gap-3 text-sm text-slate-600">
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" />
              <span>{item}</span>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-between gap-4 pt-4 border-t border-slate-200/80">
          <div>
            <span className="text-sm text-slate-500">From</span>
            <p className="text-xl font-semibold text-accent-500">{fee}</p>
          </div>
          <Link
            href={slug ? `/courses/${slug}` : '#'}
            className="inline-flex items-center gap-2 rounded-full bg-accent-500 px-4 py-3 text-sm font-semibold text-white shadow-button transition duration-300 hover:scale-[1.02]"
          >
            View Details
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
