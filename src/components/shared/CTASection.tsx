'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface CTASectionProps {
  heading: string;
  subheading?: string;
  buttonText?: string;
  buttonAction?: () => void;
  variant?: 'primary' | 'accent';
  className?: string;
}

export function CTASection({
  heading,
  subheading,
  buttonText = 'Get Started',
  buttonAction,
  variant = 'primary',
  className = '',
}: CTASectionProps) {
  const bgClass = variant === 'accent' ? 'bg-accent-500' : 'bg-primary-600';
  const buttonClass =
    variant === 'accent' ? 'btn-outline' : 'bg-white text-primary-600';

  return (
    <motion.section
      className={`${bgClass} text-white py-16 md:py-24 ${className}`}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="container px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{heading}</h2>
          {subheading && (
            <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
              {subheading}
            </p>
          )}
          <button
            onClick={buttonAction}
            className={`btn ${buttonClass} text-lg px-8 py-3`}
          >
            {buttonText}
          </button>
        </motion.div>
      </div>
    </motion.section>
  );
}
