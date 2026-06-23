'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface CourseCardProps {
  name: string;
  duration: string;
  fee: string;
  badge?: string;
  description?: string;
  onEnroll?: () => void;
  image?: string;
}

export function CourseCard({
  name,
  duration,
  fee,
  badge,
  description,
  onEnroll,
  image,
}: CourseCardProps) {
  return (
    <motion.div
      className="bg-white rounded-lg shadow-md hover:shadow-xl p-6 h-full flex flex-col transition-all duration-300 border border-border"
      whileHover={{ y: -5 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="flex items-start justify-between mb-3">
        <h3 className="text-xl font-bold text-primary-600 flex-1">{name}</h3>
        {badge && (
          <span className="bg-accent-500 text-white text-xs font-semibold px-3 py-1 rounded-full whitespace-nowrap ml-2">
            {badge}
          </span>
        )}
      </div>

      {image ? (
        <div className="w-full h-40 relative mb-4 rounded-md overflow-hidden">
          <Image src={image} alt={name} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover" />
        </div>
      ) : null}

      {description && (
        <p className="text-text-secondary text-sm mb-4 flex-grow">
          {description}
        </p>
      )}

      <div className="space-y-2 mb-6 pt-4 border-t border-border">
        <div className="flex justify-between items-center">
          <span className="text-text-secondary text-sm">Duration:</span>
          <span className="font-semibold text-primary-600">{duration}</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-text-secondary text-sm">Fee:</span>
          <span className="font-bold text-accent-500">{fee}</span>
        </div>
      </div>

      <button
        onClick={onEnroll}
        className="btn btn-accent w-full mt-auto"
      >
        Enroll Now
      </button>
    </motion.div>
  );
}
