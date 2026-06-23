'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

interface ReviewCardProps {
  studentName: string;
  course: string;
  review: string;
  rating: number;
  image?: string;
}

export function ReviewCard({
  studentName,
  course,
  review,
  rating,
  image,
}: ReviewCardProps) {
  return (
    <motion.div
      className="bg-white rounded-lg shadow-md p-6 border border-border"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      {/* Stars */}
      <div className="flex gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            size={20}
            className={
              i < rating
                ? 'fill-accent-500 text-accent-500'
                : 'text-border'
            }
          />
        ))}
      </div>

      {/* Review Text */}
      <p className="text-text-secondary mb-4 italic">"{review}"</p>

      {/* Student Info */}
      <div className="flex items-center gap-3 pt-4 border-t border-border">
        {image ? (
          <img
            src={image}
            alt={studentName}
            className="w-12 h-12 rounded-full object-cover"
          />
        ) : (
          <div className="w-12 h-12 rounded-full bg-primary-600 flex items-center justify-center text-white font-bold">
            {studentName.charAt(0)}
          </div>
        )}
        <div>
          <p className="font-semibold text-primary-600">{studentName}</p>
          <p className="text-sm text-text-secondary">{course}</p>
        </div>
      </div>
    </motion.div>
  );
}
