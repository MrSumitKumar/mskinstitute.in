'use client';

import { ReactNode } from 'react';
import { Navbar } from '@/components/layout';
import { Footer } from '@/components/layout';
import TopProgressBar from '@/components/shared/TopProgressBar';
import ScrollTopButton from '@/components/shared/ScrollTopButton';
import { MobileEnrollBar } from '@/components/shared/MobileEnrollBar';

export function AppShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen relative overflow-x-hidden">
      <TopProgressBar />
      <Navbar />
      <main>{children}</main>
      <Footer />
      <ScrollTopButton />
      <MobileEnrollBar />
    </div>
  );
}
