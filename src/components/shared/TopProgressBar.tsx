'use client';

import { useEffect, useState } from 'react';

export default function TopProgressBar() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const pageHeight = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(pageHeight > 0 ? Math.min(100, Math.max(0, (scrollPosition / pageHeight) * 100)) : 0);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed inset-x-0 top-0 z-50 h-1 bg-white/0">
      <div
        className="h-full rounded-full bg-gradient-to-r from-accent-500 to-orange-400 transition-all duration-150"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}
