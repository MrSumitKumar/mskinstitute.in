'use client';

import dynamic from 'next/dynamic';
import { generateMeta } from '@/lib/seo';
import { SectionHeader } from '@/components/shared';

const GalleryGrid = dynamic(() => import('@/components/shared/GalleryGrid'), { loading: () => <p>Loading gallery...</p> });

export default function GalleryPage() {
  return (
    <main className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        <SectionHeader title="Gallery" subtitle="Moments from our classroom and events" />
        <GalleryGrid />
      </div>
    </main>
  );
}
