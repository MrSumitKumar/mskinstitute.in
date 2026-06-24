'use client';

import { motion } from 'framer-motion';
import {
  CourseCard,
  FAQAccordion,
  LeadForm,
  CourseTabs,
  ReviewCarousel,
  ErrorBoundary,
  SectionHeader,
  CTASection,
} from '@/components/shared';
import { siteConfig } from '@/config/site';
import { ChevronRight, Sparkles, ShieldCheck, Briefcase, Globe, BookOpen, Users, Phone } from 'lucide-react';

const features = [
  {
    icon: <Sparkles className="h-5 w-5" />,
    title: 'Industry Certificates',
    description: 'Recognized by top companies for real job-ready learning.',
  },
  {
    icon: <BookOpen className="h-5 w-5" />,
    title: 'Practical Training',
    description: '70% hands-on labs, project work, and live practice sessions.',
  },
  {
    icon: <Users className="h-5 w-5" />,
    title: 'Expert Instructors',
    description: '5+ years industry experience with personalized mentorship.',
  },
  {
    icon: <Globe className="h-5 w-5" />,
    title: 'Offline + Online',
    description: 'Flexible batches for classroom and remote learners.',
  },
  {
    icon: <Briefcase className="h-5 w-5" />,
    title: 'Job Assistance',
    description: 'Resume reviews, interview prep and placement support.',
  },
  {
    icon: <ShieldCheck className="h-5 w-5" />,
    title: 'Fast Track Batches',
    description: 'Weekday and weekend options for busy learners.',
  },
];

const faqs = [
  { question: 'Which course is best for beginners?', answer: 'Python Programming and CCC are ideal for beginners who want a strong foundation and fast career growth.' },
  { question: 'Do you provide certificates?', answer: 'Yes, every completing student receives a recognized certificate and project portfolio.' },
  { question: 'Is Python good for getting a job?', answer: 'Absolutely — Python is in high demand across web development, data science, automation, and more.' },
  { question: 'What is the fee for CCC course?', answer: 'The CCC course fee is ₹3,999 with easy installment options available on request.' },
  { question: 'Do you offer online classes?', answer: 'Yes, our courses are available both online and offline with live interactive coaching.' },
  { question: 'Is there a free demo class?', answer: 'Yes — book a free demo class to experience the teaching style before you enroll.' },
  { question: 'How long is the Python course?', answer: 'The Python course runs for 3 months with weekly classroom and lab sessions.' },
  { question: 'Do you help with job placement?', answer: 'Yes, we provide placement guidance, resume support, interview training and employer connections.' },
];

const batches = [
  { course: 'Python Programming', start: '5 Jul 2026', time: '6:00 PM', mode: 'Hybrid', seats: 4, capacity: 20 },
  { course: 'Web Development', start: '12 Jul 2026', time: '5:00 PM', mode: 'Offline', seats: 7, capacity: 20 },
  { course: 'Data Analytics', start: '18 Jul 2026', time: '7:00 PM', mode: 'Online', seats: 4, capacity: 15 },
];

const heroHighlights = ['Certificate Provided', 'Job Assistance', 'Offline + Online'];

export default function Home() {
  const handleLeadFormSubmit = (data: any) => {
    console.log('Lead form submitted:', data);
  };

  return (
    <main className="bg-white text-slate-950">
      <section id="home" className="relative overflow-hidden bg-white px-4 py-16 sm:py-20 lg:py-24">
        <div className="pointer-events-none absolute right-0 top-0 h-96 w-96 rounded-full bg-orange-300/15 blur-3xl" />
        <div className="pointer-events-none absolute left-0 top-24 h-72 w-72 rounded-full bg-sky-700/10 blur-3xl" />
        <div className="container mx-auto grid gap-12 lg:grid-cols-[1.1fr_0.9fr] items-center">
          <div className="space-y-8">
            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }}>
              <span className="inline-flex items-center rounded-full bg-orange-500/10 px-4 py-2 text-sm font-semibold text-orange-600 shadow-sm shadow-orange-200/50">🏆 #1 Computer Institute in Shikohabad</span>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, delay: 0.08 }}>
              <h1 className="max-w-3xl text-4xl font-extrabold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl leading-tight">Launch Your <span className="bg-gradient-to-r from-orange-500 via-orange-400 to-orange-200 bg-clip-text text-transparent">Tech Career</span> with MSK Institute</h1>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, delay: 0.16 }}>
              <p className="max-w-2xl text-lg leading-8 text-slate-600">Join 500+ students learning Python, Java, Data Analytics & more with hands-on practical training in Shikohabad.</p>
            </motion.div>
            <motion.div className="flex flex-col gap-4 sm:flex-row" initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, delay: 0.24 }}>
              <a href="#courses" className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-orange-500 to-orange-400 px-6 py-3 text-base font-semibold text-white shadow-button transition hover:scale-[1.03]">Explore Courses <ChevronRight className="ml-2 h-5 w-5" /></a>
              <a href="#contact" className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-6 py-3 text-base font-semibold text-slate-900 shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg">Free Demo Class <span className="ml-2">▷</span></a>
            </motion.div>
            <motion.div className="grid grid-cols-1 gap-3 sm:grid-cols-3" initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, delay: 0.32 }}>
              {heroHighlights.map((item) => (
                <div key={item} className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-4 py-3 text-sm font-medium text-slate-700 shadow-sm"><span className="text-green-600">✅</span>{item}</div>
              ))}
            </motion.div>
          </div>

          <div className="relative">
            <div className="absolute -right-12 top-0 h-24 w-24 rounded-full bg-orange-300/20 blur-3xl" />
            <motion.div className="relative rounded-[2rem] bg-slate-950/95 p-8 shadow-[0_30px_80px_rgba(7,43,87,0.16)]" initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, delay: 0.28 }}>
              <div className="space-y-6 text-white">
                <div className="flex items-center justify-between rounded-3xl bg-white/10 p-5">
                  <div>
                    <p className="text-xs uppercase tracking-[0.28em] text-orange-300">Students enrolled</p>
                    <p className="text-3xl font-bold">500+</p>
                  </div>
                  <div className="rounded-3xl bg-slate-800/90 px-4 py-2 text-sm">Live Stats</div>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-3xl bg-white/10 p-5">
                    <p className="text-xs uppercase tracking-[0.25em] text-slate-300">Courses available</p>
                    <p className="mt-3 text-2xl font-semibold">15+</p>
                  </div>
                  <div className="rounded-3xl bg-white/10 p-5">
                    <p className="text-xs uppercase tracking-[0.25em] text-slate-300">Placement rate</p>
                    <p className="mt-3 text-2xl font-semibold">98%</p>
                  </div>
                </div>
                <div className="rounded-[1.75rem] bg-gradient-to-r from-sky-600 to-orange-500 p-5 text-sm text-white shadow-lg shadow-orange-400/15">
                  <p className="font-semibold">Why students choose us</p>
                  <p className="mt-2 text-slate-100/90">Practical training, certificate support, and real career opportunities.</p>
                </div>
              </div>
              <div className="absolute -left-10 top-8 h-24 w-24 rounded-full bg-orange-400/20 blur-2xl" />
            </motion.div>
          </div>
        </div>
      </section>

      <section id="stats" className="bg-gradient-to-r from-primary-700 to-slate-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid gap-6 md:grid-cols-4">
            {[
              { label: 'Students', value: '500+' },
              { label: 'Courses', value: '15+' },
              { label: 'Years', value: '5+' },
              { label: 'Success Rate', value: '98%' },
            ].map((item) => (
              <motion.div key={item.label} className="rounded-[1.5rem] border border-white/10 bg-white/10 p-8 text-center shadow-card" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }} viewport={{ once: true }}>
                <p className="text-5xl font-extrabold text-orange-300">{item.value}</p>
                <p className="mt-3 text-sm uppercase tracking-[0.3em] text-white/80">{item.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="courses" className="bg-[#f8fafc] py-20">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <span className="text-orange-500 uppercase tracking-[0.3em] text-sm font-semibold">Our Courses</span>
            <h2 className="mt-4 text-4xl font-bold text-slate-950">Master In-Demand Skills</h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">Choose a premium learning path and build the skills employers want most.</p>
          </div>
          <div className="grid gap-8 lg:grid-cols-3">
            {siteConfig.courses.map((course) => (
              <CourseCard
                key={course.id}
                title={course.name}
                description={course.description}
                duration={course.duration}
                fee={course.fee}
                badge={course.badge}
                slug={course.slug}
                highlights={course.highlights}
              />
            ))}
          </div>
        </div>
      </section>

      <section id="why" className="bg-white py-20">
        <div className="container mx-auto px-4 grid gap-12 lg:grid-cols-[0.9fr_1.1fr] items-center">
          <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.55 }} viewport={{ once: true }} className="relative rounded-[2rem] bg-slate-950/95 p-10 text-white overflow-hidden">
            <div className="absolute -right-16 top-4 h-48 w-48 rounded-full bg-orange-400/10 blur-3xl" />
            <div className="absolute -left-14 bottom-8 h-40 w-40 rounded-full bg-slate-800/80 blur-3xl" />
            <div className="space-y-6">
              <div className="rounded-[1.75rem] bg-white/10 p-6 shadow-[0_18px_40px_rgba(7,43,87,0.18)]">
                <p className="text-sm uppercase tracking-[0.3em] text-orange-200 font-semibold">Certificate</p>
                <p className="mt-4 text-2xl font-semibold">Premium completion certification</p>
              </div>
              <div className="rounded-[1.75rem] bg-white/10 p-6 shadow-[0_18px_40px_rgba(7,43,87,0.18)]">
                <p className="text-sm uppercase tracking-[0.3em] text-orange-200 font-semibold">Practical Training</p>
                <p className="mt-4 text-2xl font-semibold">Live labs and project-based sessions.</p>
              </div>
            </div>
          </motion.div>
          <div className="space-y-8">
            <div className="text-center lg:text-left">
              <span className="text-orange-500 uppercase tracking-[0.3em] text-sm font-semibold">Why Choose MSK</span>
              <h2 className="mt-4 text-4xl font-bold text-slate-950">A premium learning experience built for success</h2>
              <p className="mt-4 max-w-xl text-lg text-slate-600">We combine modern curriculum, dedicated instructors, and career-first support to help you launch a high-value tech career.</p>
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              {features.map((feature) => (
                <motion.div key={feature.title} className="flex gap-4 rounded-3xl border border-slate-200/80 bg-white p-6 shadow-card" initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.45 }} viewport={{ once: true }}>
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-100 text-orange-600">{feature.icon}</div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-950">{feature.title}</h3>
                    <p className="mt-2 text-sm text-slate-600">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#eff5ff] py-20 px-4">
        <div className="container mx-auto">
          <CourseTabs />
        </div>
      </section>

      <section className="bg-white py-20 px-4">
        <div className="container mx-auto">
          <div className="mb-12 text-center">
            <span className="text-orange-500 uppercase tracking-[0.3em] text-sm font-semibold">What Our Students Say</span>
            <h2 className="mt-4 text-4xl font-bold text-slate-950">Real feedback from successful learners</h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">High satisfaction, strong results, and career-changing experiences.</p>
          </div>
          <ReviewCarousel />
        </div>
      </section>

      <section className="bg-[#f8fafc] py-20 px-4">
        <div className="container mx-auto">
          <div className="mb-10 grid gap-6 lg:grid-cols-[1.2fr_0.8fr] items-center rounded-[2rem] bg-white p-8 shadow-card">
            <div>
              <span className="text-orange-500 uppercase tracking-[0.3em] text-sm font-semibold">Upcoming Batches</span>
              <h2 className="mt-4 text-4xl font-bold text-slate-950">Reserve your seat before batches fill up</h2>
              <p className="mt-4 max-w-xl text-lg text-slate-600">Flexible timings and limited seats make early enrollment the best choice.</p>
            </div>
            <div className="space-y-4">
              {batches.map((batch) => {
                const fill = ((batch.capacity - batch.seats) / batch.capacity) * 100;
                const isAlmostFull = batch.seats <= 5;
                return (
                  <div key={batch.course} className={`rounded-3xl border p-6 transition ${isAlmostFull ? 'border-orange-200 bg-orange-50/60' : 'border-slate-200 bg-white'}`}>
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                      <div>
                        <p className="text-sm uppercase tracking-[0.3em] text-slate-500">{batch.course}</p>
                        <h3 className="mt-2 text-xl font-semibold text-slate-950">{batch.start} · {batch.time}</h3>
                      </div>
                      <div className="flex flex-col items-start gap-2 sm:items-end">
                        <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">{batch.mode}</span>
                        <span className="text-sm font-semibold text-slate-700">{batch.seats} seats left</span>
                      </div>
                    </div>
                    <div className="mt-4 h-3 overflow-hidden rounded-full bg-slate-200">
                      <div className="h-full rounded-full bg-gradient-to-r from-orange-500 to-orange-400" style={{ width: `${fill}%` }} />
                    </div>
                    <div className="mt-4 flex items-center justify-between gap-3">
                      {isAlmostFull && <span className="rounded-full bg-red-100 px-3 py-1 text-sm font-semibold text-red-700">Almost Full 🔥</span>}
                      <a href="#contact" className="rounded-full bg-accent-500 px-5 py-3 text-sm font-semibold text-white shadow-button transition hover:-translate-y-0.5">Book Seat</a>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-gradient-to-r from-primary-900 to-slate-950 px-4 py-20 text-white">
        <div className="absolute inset-y-0 left-0 w-1/2 bg-[radial-gradient(circle_at_top_left,_rgba(244,122,32,0.15),_transparent_35%)]" />
        <div className="container relative mx-auto grid gap-8 lg:grid-cols-[0.8fr_1.2fr] items-center">
          <div className="space-y-6">
            <span className="inline-flex items-center rounded-full bg-orange-400/15 px-4 py-2 text-sm uppercase tracking-[0.3em] font-semibold text-orange-200">🎯 Free Workshop</span>
            <h2 className="text-4xl font-bold tracking-tight">Free Workshop Every Saturday</h2>
            <p className="max-w-xl text-lg text-slate-200">Python Basics | Web Development | Career Guidance — limited seats available, first come first served.</p>
            <a href="#contact" className="inline-flex items-center rounded-full bg-orange-500 px-6 py-3 text-base font-semibold text-white shadow-button transition hover:scale-[1.03]">Register for Free →</a>
          </div>
          <div className="rounded-[2rem] border border-white/10 bg-white/10 p-10 shadow-[0_40px_80px_rgba(15,23,42,0.2)] backdrop-blur-xl">
            <div className="mb-6 flex items-center justify-between rounded-3xl bg-slate-950/90 p-5">
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-orange-200">Workshop</p>
                <p className="mt-2 text-2xl font-semibold text-white">Calendar Preview</p>
              </div>
              <div className="rounded-full bg-orange-500 px-3 py-2 text-sm font-semibold text-white">Sat</div>
            </div>
            <div className="grid grid-cols-3 gap-3 text-center text-slate-200">
              {['10AM', '12PM', '2PM'].map((slot) => (
                <div key={slot} className="rounded-3xl bg-slate-950/80 p-4">{slot}</div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="faq" className="bg-white py-20 px-4">
        <div className="container mx-auto">
          <div className="mb-12 text-center">
            <span className="text-orange-500 uppercase tracking-[0.3em] text-sm font-semibold">Ask Us Anything</span>
            <h2 className="mt-4 text-4xl font-bold text-slate-950">Frequently Asked Questions</h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">All the answers you need before booking your course.</p>
          </div>
          <ErrorBoundary>
            <FAQAccordion items={faqs} />
          </ErrorBoundary>
        </div>
      </section>

      <section className="bg-gradient-to-r from-primary-900 to-slate-950 px-4 py-20 text-white">
        <div className="container mx-auto grid gap-8 lg:grid-cols-2">
          <div className="rounded-[2rem] bg-white/10 p-10 shadow-card backdrop-blur-xl">
            <span className="text-sm uppercase tracking-[0.3em] text-orange-300 font-semibold">Ready to start?</span>
            <h2 className="mt-4 text-4xl font-bold">Talk to our counsellor. Get course guidance for free.</h2>
            <p className="mt-4 max-w-xl text-slate-200">Our experts will help you pick the right course, batch, and career path.</p>
          </div>
          <div className="grid gap-5">
            <a href="tel:8393042166" className="glass-card flex items-center gap-4 rounded-3xl border border-white/10 bg-white/15 p-6 text-white transition hover:-translate-y-1 hover:bg-white/20">
              <div className="flex h-14 w-14 items-center justify-center rounded-3xl bg-orange-500 text-white"><Phone className="h-6 w-6" /></div>
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-orange-200">Call Us</p>
                <p className="mt-1 text-xl font-semibold">8393042166</p>
              </div>
            </a>
            <a href="https://wa.me/918393042166" target="_blank" rel="noreferrer" className="glass-card flex items-center gap-4 rounded-3xl border border-white/10 bg-white/15 p-6 text-white transition hover:-translate-y-1 hover:bg-white/20">
              <div className="flex h-14 w-14 items-center justify-center rounded-3xl bg-emerald-500 text-white">💬</div>
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-orange-200">WhatsApp</p>
                <p className="mt-1 text-xl font-semibold">Chat Now</p>
              </div>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
