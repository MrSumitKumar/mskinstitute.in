import dynamic from 'next/dynamic';
import { Metadata } from 'next';
import { generateMeta } from '@/lib/seo';
import { SectionHeader } from '@/components/shared';

const GalleryGrid = dynamic(() => import('@/components/shared/GalleryGrid'), { ssr: false, loading: () => <p>Loading gallery...</p> });

export const metadata: Metadata = generateMeta({ title: 'Gallery - MSK Institute' });

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
