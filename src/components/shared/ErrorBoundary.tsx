'use client';

import React from 'react';

interface ErrorBoundaryProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

export class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: unknown) {
    console.error('Section error boundary:', error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="rounded-3xl bg-white/90 border border-orange-100 p-8 shadow-xl">
          <h3 className="text-xl font-semibold text-primary-600 mb-2">Something went wrong</h3>
          <p className="text-text-secondary mb-4">
            We&apos;re having trouble loading this section. Please refresh or try again later.
          </p>
        </div>
      );
    }

    return this.props.children;
  }
}
