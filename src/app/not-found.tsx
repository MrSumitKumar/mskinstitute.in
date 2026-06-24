'use client';

import Link from 'next/link';
import { AlertCircle } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 to-accent-50 px-4">
      <div className="text-center max-w-md">
        <div className="mb-6">
          <AlertCircle className="w-16 h-16 text-accent-500 mx-auto" />
        </div>
        
        <h1 className="text-6xl font-bold text-primary-600 mb-2">404</h1>
        <h2 className="text-3xl font-bold text-primary-600 mb-4">Page Not Found</h2>
        
        <p className="text-text-secondary text-lg mb-8">
          The page you're looking for doesn't exist. But we've got plenty of learning opportunities waiting for you!
        </p>
        
        <div className="space-y-3">
          <Link
            href="/"
            className="btn btn-primary w-full"
          >
            Back to Home
          </Link>
          
          <Link
            href="/courses"
            className="btn btn-accent w-full"
          >
            Browse Courses
          </Link>
        </div>

        <div className="mt-12 p-6 bg-white rounded-lg border border-border">
          <h3 className="font-semibold text-primary-600 mb-3">Quick Links</h3>
          <div className="grid grid-cols-2 gap-2 text-sm">
            <Link href="/about" className="text-accent-600 hover:underline">About</Link>
            <Link href="/contact" className="text-accent-600 hover:underline">Contact</Link>
            <Link href="/reviews" className="text-accent-600 hover:underline">Reviews</Link>
            <Link href="/gallery" className="text-accent-600 hover:underline">Gallery</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
