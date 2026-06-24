'use client';

import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const reviews = [
  {
    name: 'Rajesh Kumar',
    course: 'Python Programming',
    quote: 'MSK Institute helped me launch my coding career with confidence. The practical classes were excellent.',
    rating: 5,
  },
  {
    name: 'Priya Singh',
    course: 'Web Development',
    quote: 'The projects were real-world and the instructors were supportive. Highly recommended for anyone serious about tech.',
    rating: 5,
  },
  {
    name: 'Amit Patel',
    course: 'Data Analytics',
    quote: 'Fantastic curriculum, great mentorship, and placement support that actually works.',
    rating: 5,
  },
  {
    name: 'Sneha Sharma',
    course: 'Java Development',
    quote: 'The training experience was premium and very motivating. I secured a developer role soon after completing the course.',
    rating: 5,
  },
];

export function ReviewCarousel() {
  return (
    <div className="relative overflow-hidden">
      <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-white/100 to-white/0" />
      <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-white/100 to-white/0" />
      <motion.div
        className="flex gap-6 animate-marquee py-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {reviews.concat(reviews).map((review, index) => (
          <div key={`${review.name}-${index}`} className="min-w-[320px] max-w-[320px] rounded-[1.75rem] border border-slate-200/60 bg-white p-6 shadow-[0_20px_60px_rgba(7,43,87,0.08)] transition-transform duration-300 hover:-translate-y-2">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-primary-700 to-accent-500 text-white font-semibold shadow-lg shadow-primary-500/15">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-primary-700">{review.name}</p>
                  <p className="text-sm text-slate-500">{review.course}</p>
                </div>
              </div>
              <div className="flex gap-1">
                {Array.from({ length: 5 }).map((_, starIndex) => (
                  <Star key={starIndex} size={18} className={starIndex < review.rating ? 'fill-accent-500 text-accent-500' : 'text-slate-300'} />
                ))}
              </div>
            </div>
            <p className="text-slate-600 italic">“{review.quote}”</p>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
