'use client';

import React, { useEffect, useMemo, useRef, useState } from 'react';
import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X, Phone, ArrowRight } from 'lucide-react';
import { siteConfig } from '@/config/site';

const navMotion = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: 'easeOut' } },
};

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('Home');
  const drawerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });

    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') || 'home';
      const active = siteConfig.navLinks.find((link) => link.href.replace('#', '') === hash);
      setActiveSection(active?.label || 'Home');
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    const handleOutsideClick = (event: MouseEvent) => {
      if (!drawerRef.current?.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };

    window.addEventListener('mousedown', handleOutsideClick);
    window.addEventListener('keydown', handleEsc);

    return () => {
      window.removeEventListener('mousedown', handleOutsideClick);
      window.removeEventListener('keydown', handleEsc);
    };
  }, [isOpen]);

  const navItems = useMemo(
    () => siteConfig.navLinks,
    []
  );

  return (
    <motion.nav
      className={`sticky top-0 z-50 backdrop-blur-xl transition-all duration-300 ${
        scrolled ? 'bg-white/95 shadow-xl border-b border-slate-200' : 'bg-transparent'
      }`}
      initial="hidden"
      animate="visible"
      variants={navMotion}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between gap-4 py-4 md:py-5">
          <Link href="#home" className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-primary-700 to-primary-500 text-white shadow-xl shadow-primary-500/15">
              <span className="text-xl font-extrabold">MSK</span>
            </div>
            <div className="hidden md:block">
              <p className="text-sm uppercase tracking-[0.32em] text-accent-500 font-semibold">MSK Institute</p>
              <p className="text-sm text-slate-700">Premium Computer Training</p>
            </div>
          </Link>

          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((link) => {
              const isActive = activeSection === link.label;
              return (
                <Link key={link.label} href={link.href} className="group relative inline-flex items-center gap-2">
                  <span className={`text-sm font-medium transition text-slate-700 hover:text-primary-700 ${isActive ? 'text-primary-700' : 'text-slate-600'}`}>
                    {link.label}
                  </span>
                  <span className={`absolute -bottom-2 h-2 w-2 rounded-full transition ${isActive ? 'bg-accent-500 opacity-100' : 'bg-transparent opacity-0 group-hover:opacity-100'}`} />
                </Link>
              );
            })}
          </div>

          <div className="hidden md:flex items-center gap-3">
            <Link
              href="https://wa.me/918393042166"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg"
            >
              <Phone className="h-4 w-4 text-accent-500" />
              WhatsApp
            </Link>
            <Link
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-accent-500 to-orange-400 px-5 py-3 text-sm font-semibold text-white shadow-[0_18px_40px_rgba(244,122,32,0.22)] transition hover:scale-[1.03]"
            >
              Enroll Now
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <button
            onClick={() => setIsOpen((prev) => !prev)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-200 bg-white text-primary-700 shadow-sm transition hover:bg-slate-50 lg:hidden"
            aria-label="Open mobile menu"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="mobile-drawer"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            className="fixed inset-y-0 right-0 z-50 w-full max-w-xs bg-primary-900 text-white shadow-2xl"
          >
            <div ref={drawerRef} className="flex h-full flex-col justify-between px-6 py-8">
              <div>
                <div className="mb-10 flex items-center justify-between">
                  <div>
                    <p className="text-sm uppercase tracking-[0.3em] text-orange-300 font-semibold">MSK Institute</p>
                    <h2 className="mt-2 text-2xl font-bold text-white">Menu</h2>
                  </div>
                  <button onClick={() => setIsOpen(false)} className="rounded-full bg-white/10 p-2 transition hover:bg-white/20">
                    <X size={20} />
                  </button>
                </div>

                <nav className="space-y-5">
                  {navItems.map((link) => (
                    <Link
                      key={link.label}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="block text-2xl font-semibold text-white transition hover:text-orange-300"
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>
              </div>

              <div className="space-y-4 rounded-3xl border border-white/10 bg-white/5 p-5">
                <p className="text-sm uppercase tracking-[0.28em] text-orange-200">Contact</p>
                <a href="tel:8393042166" className="block text-base font-semibold text-white">8393042166</a>
                <a href="mailto:info@mskinstitute.in" className="block text-sm text-slate-200">info@mskinstitute.in</a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
