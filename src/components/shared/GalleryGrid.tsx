'use client';

import React from 'react';
import Image from 'next/image';

const placeholders = new Array(12).fill(0).map((_, i) => ({
  src: `/images/placeholders/photo-${(i % 6) + 1}.jpg`,
  alt: `Gallery photo ${i + 1}`,
}));

export default function GalleryGrid() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
      {placeholders.map((p, i) => (
        <div key={i} className="w-full h-40 relative rounded-lg overflow-hidden bg-gray-100">
          <Image src={p.src} alt={p.alt} fill sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw" className="object-cover" />
        </div>
      ))}
    </div>
  );
}
