'use client';

import React from 'react';
import Link from 'next/link';
import { AlertCircle } from 'lucide-react';

interface ErrorProps {
  error: Error;
  reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-red-50 to-accent-50 px-4">
      <div className="text-center max-w-md">
        <div className="mb-6">
          <AlertCircle className="w-16 h-16 text-red-500 mx-auto" />
        </div>
        
        <h1 className="text-4xl font-bold text-primary-600 mb-2">Oops!</h1>
        <h2 className="text-2xl font-bold text-primary-600 mb-4">Something went wrong</h2>
        
        <p className="text-text-secondary text-lg mb-2">
          We encountered an unexpected error. Don't worry, our team has been notified!
        </p>

        {process.env.NODE_ENV === 'development' && (
          <div className="mt-4 p-4 bg-red-100 border border-red-300 rounded text-left text-sm text-red-800 font-mono">
            <p className="font-bold mb-2">Error Details (Dev Only):</p>
            <p>{error.message}</p>
          </div>
        )}
        
        <div className="space-y-3 mt-8">
          <button
            onClick={reset}
            className="btn btn-primary w-full"
          >
            Try Again
          </button>
          
          <Link
            href="/"
            className="btn btn-outline w-full"
          >
            Back to Home
          </Link>
        </div>

        <div className="mt-8 p-4 bg-blue-50 border border-blue-200 rounded">
          <p className="text-sm text-blue-900 mb-2">Need help? Contact us:</p>
          <p className="text-accent-600 font-semibold">8393042166</p>
          <p className="text-text-secondary text-sm">info@mskinstitute.in</p>
        </div>
      </div>
    </div>
  );
}
