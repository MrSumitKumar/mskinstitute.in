'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { getAllCourses } from '@/lib/courses';
import { fadeUp } from '@/lib/animations';
import { ChevronRight } from 'lucide-react';

const courseColorMap: Record<string, string> = {
  'python': 'from-sky-500 to-blue-600',
  'java': 'from-emerald-500 to-teal-600',
  'ccc': 'from-orange-400 to-orange-600',
  'adca': 'from-slate-900 to-slate-600',
  'data-analytics': 'from-violet-500 to-fuchsia-600',
  'web-development': 'from-pink-500 to-rose-600',
};

export function CourseTabs() {
  const courses = getAllCourses();
  const [activeTab, setActiveTab] = useState(courses[0]?.slug || '');
  const activeCourse = courses.find((course) => course.slug === activeTab) ?? courses[0];

  return (
    <section className="rounded-[2rem] bg-primary-950/95 py-12 px-6 sm:px-10 text-white overflow-hidden relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(244,122,32,0.24),_transparent_32%)]" />
      <div className="relative space-y-10">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-orange-300 font-semibold mb-2">Explore courses</p>
            <h2 className="text-3xl md:text-4xl font-bold">Your next career move starts here</h2>
            <p className="mt-3 max-w-2xl text-sm text-orange-100/90">Select a course to see the full syllabus, career paths, and why this program is the right fit for you.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            {courses.map((course) => (
              <button
                key={course.slug}
                type="button"
                onClick={() => setActiveTab(course.slug)}
                className={`rounded-full border px-4 py-2 text-sm transition ${activeTab === course.slug ? 'border-orange-400 bg-orange-400/15 text-white' : 'border-white/20 text-slate-200 hover:border-orange-300 hover:text-white'}`}
              >
                {course.title}
              </button>
            ))}
          </div>
        </div>

        {activeCourse && (
          <motion.div
            key={activeCourse.slug}
            className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="glass-card border-white/15 p-8">
              <div className={`inline-flex rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-white mb-6 border border-white/10 shadow-sm shadow-slate-950/20`}>Course spotlight</div>
              <h3 className="text-3xl font-bold text-white mb-4">{activeCourse.title}</h3>
              <p className="text-sm text-slate-200 leading-relaxed mb-6">{activeCourse.overview}</p>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-3xl bg-slate-950/80 p-5 border border-white/10">
                  <p className="text-xs uppercase tracking-[0.25em] text-orange-300 font-semibold mb-2">Duration</p>
                  <p className="text-xl font-bold text-white">{activeCourse.duration}</p>
                </div>
                <div className="rounded-3xl bg-slate-950/80 p-5 border border-white/10">
                  <p className="text-xs uppercase tracking-[0.25em] text-orange-300 font-semibold mb-2">Level</p>
                  <p className="text-xl font-bold text-white">{activeCourse.level}</p>
                </div>
              </div>
            </div>

            <div className="rounded-[1.5rem] border border-white/10 bg-white/10 p-8 shadow-[0_24px_80px_rgba(7,43,87,0.18)] backdrop-blur-xl">
              <div className={`rounded-3xl bg-gradient-to-br ${courseColorMap[activeCourse.slug] ?? 'from-slate-700 to-slate-800'} p-6 text-white mb-6`}>
                <p className="text-sm uppercase tracking-[0.25em] font-semibold">Course Fee</p>
                <p className="mt-3 text-4xl font-bold">₹{activeCourse.fee}</p>
                <p className="mt-2 text-sm text-orange-100/90">Includes certificate, projects, and career support.</p>
              </div>

              <div className="space-y-5">
                <div>
                  <h4 className="text-lg font-semibold text-white mb-3">What you'll learn</h4>
                  <ul className="space-y-3 text-slate-100">
                    {activeCourse.syllabus.slice(0, 4).map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <span className="mt-1 h-2.5 w-2.5 rounded-full bg-accent-400" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-white mb-3">Career paths</h4>
                  <div className="grid gap-3 sm:grid-cols-2">
                    {activeCourse.careerOpportunities.map((role, index) => (
                      <div key={index} className="rounded-3xl bg-slate-900/80 p-4 border border-white/10">
                        <p className="text-sm text-orange-100 uppercase tracking-[0.2em] mb-2">Role</p>
                        <p className="font-semibold">{role}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
