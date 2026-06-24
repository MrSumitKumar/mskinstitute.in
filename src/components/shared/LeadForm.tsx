'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, AlertCircle, Loader } from 'lucide-react';
import { siteConfig } from '@/config/site';
import { submitLead, validateLeadData, type LeadFormData } from '@/services/leads';

interface LeadFormProps {
  source?: 'form' | 'contact' | 'courses' | 'workshop';
  onSubmit?: (data: LeadFormData) => void;
  className?: string;
}

interface FormData {
  name: string;
  phone: string;
  course: string;
  message: string;
}

export function LeadForm({ source = 'form', onSubmit, className = '' }: LeadFormProps) {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    course: '',
    message: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{ type: 'success' | 'error' | null; message: string }>({
    type: null,
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitStatus({ type: null, message: '' });

    // Validate form
    const validation = validateLeadData(formData);
    if (!validation.valid) {
      setErrors(validation.errors);
      return;
    }

    setIsSubmitting(true);

    try {
      // Prepare lead data
      const leadData: LeadFormData = {
        name: formData.name.trim(),
        phone: formData.phone.replace(/\D/g, ''),
        course: formData.course,
        message: formData.message.trim(),
        source,
      };

      // Submit lead
      const result = await submitLead(leadData);

      if (result.success) {
        setSubmitStatus({
          type: 'success',
          message: "We'll contact you within 24 hours!",
        });
        setFormData({ name: '', phone: '', course: '', message: '' });
        setErrors({});

        if (onSubmit) {
          onSubmit(leadData);
        }

        // Reset success message after 5 seconds
        setTimeout(() => {
          setSubmitStatus({ type: null, message: '' });
        }, 5000);
      } else {
        setSubmitStatus({
          type: 'error',
          message: result.message,
        });
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus({
        type: 'error',
        message: 'Something went wrong. Please try again or contact us directly.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      className={`space-y-4 ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      {submitStatus.type === 'success' && (
        <motion.div
          className="p-4 bg-green-50 border border-green-200 rounded-lg flex items-center gap-3 text-green-700"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
        >
          <CheckCircle className="w-5 h-5 flex-shrink-0" />
          <span>{submitStatus.message}</span>
        </motion.div>
      )}

      {submitStatus.type === 'error' && (
        <motion.div
          className="p-4 bg-red-50 border border-red-200 rounded-lg flex items-center gap-3 text-red-700"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
        >
          <AlertCircle className="w-5 h-5 flex-shrink-0" />
          <span>{submitStatus.message}</span>
        </motion.div>
      )}

      {/* Name Field */}
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-primary-600 mb-2">
          Full Name *
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-500 ${
            errors.name ? 'border-red-500' : 'border-border'
          }`}
          placeholder="John Doe"
          disabled={isSubmitting}
        />
        {errors.name && (
          <p className="text-red-500 text-sm mt-1">{errors.name}</p>
        )}
      </div>

      {/* Phone Field */}
      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-primary-600 mb-2">
          Phone Number *
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-500 ${
            errors.phone ? 'border-red-500' : 'border-border'
          }`}
          placeholder="8393042166"
          disabled={isSubmitting}
        />
        {errors.phone && (
          <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
        )}
      </div>

      {/* Course Selection */}
      <div>
        <label htmlFor="course" className="block text-sm font-medium text-primary-600 mb-2">
          Select Course *
        </label>
        <select
          id="course"
          name="course"
          value={formData.course}
          onChange={handleChange}
          className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-500 ${
            errors.course ? 'border-red-500' : 'border-border'
          }`}
          disabled={isSubmitting}
        >
          <option value="">Choose a course...</option>
          {siteConfig.courses.map((course) => (
            <option key={course.id} value={course.id}>
              {course.name}
            </option>
          ))}
        </select>
        {errors.course && (
          <p className="text-red-500 text-sm mt-1">{errors.course}</p>
        )}
      </div>

      {/* Message Field */}
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-primary-600 mb-2">
          Message (Optional)
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={4}
          className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-500"
          placeholder="Tell us more about your interest..."
          disabled={isSubmitting}
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="btn btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
      >
        {isSubmitting ? (
          <>
            <Loader className="w-4 h-4 animate-spin" />
            Sending...
          </>
        ) : (
          'Get Started'
        )}
      </button>
    </motion.form>
  );
}
