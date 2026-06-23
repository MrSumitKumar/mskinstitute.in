'use client';

import dynamic from 'next/dynamic';
import { generateMeta } from '@/lib/seo';
import { SectionHeader } from '@/components/shared';

const WorkshopForm = dynamic(() => import('@/components/shared/WorkshopForm'), { loading: () => <p>Loading...</p> });

const workshops = [
  { id: 'ws-1', title: 'Free Python Workshop', date: '2026-07-05', seats: 30 },
  { id: 'ws-2', title: 'Intro to Web Development', date: '2026-07-12', seats: 25 },
];

export default function WorkshopsPage() {
  return (
    <main className="min-h-screen py-12">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          <SectionHeader title="Workshops" subtitle="Join our short workshops to get hands-on experience" />

          <div className="space-y-4">
            {workshops.map((w) => (
              <div key={w.id} className="bg-white border border-border rounded-lg p-4 flex items-center justify-between">
                <div>
                  <h4 className="font-semibold text-primary-600">{w.title}</h4>
                  <p className="text-text-secondary text-sm">Date: {w.date}</p>
                </div>
                <div className="text-right">
                  <p className="text-text-secondary text-sm">Seats left</p>
                  <p className="font-semibold">{w.seats}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <aside>
          <div className="bg-white p-6 border border-border rounded-lg">
            <h3 className="font-semibold mb-4">Register for Workshop</h3>
            <WorkshopForm />
          </div>
        </aside>
      </div>
    </main>
  );
}
