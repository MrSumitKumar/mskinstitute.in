'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

export function MobileEnrollBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const footerOffset = document.body.scrollHeight - window.innerHeight - 140;
      const shouldShow = window.innerWidth < 768 && window.scrollY > 220 && window.scrollY < footerOffset;
      setVisible(shouldShow);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  if (!visible) {
    return null;
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 p-4 bg-white/95 border-t border-slate-200 shadow-xl backdrop-blur-xl md:hidden">
      <div className="flex items-center justify-between gap-3">
        <div>
          <p className="text-sm font-semibold text-primary-600">Ready to enroll?</p>
          <p className="text-sm text-slate-500">Secure your seat today.</p>
        </div>
        <Link
          href="#contact"
          className="inline-flex items-center rounded-full bg-accent-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-orange-200/50 transition-transform duration-300 hover:-translate-y-0.5"
        >
          Enroll Now
        </Link>
      </div>
    </div>
  );
}
