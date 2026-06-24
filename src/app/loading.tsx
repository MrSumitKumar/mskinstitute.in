import { Loader } from 'lucide-react';

export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center">
        <Loader className="w-12 h-12 text-accent-500 animate-spin mx-auto mb-4" />
        <h1 className="text-2xl font-bold text-primary-600 mb-2">Loading...</h1>
        <p className="text-text-secondary">Please wait while we prepare the content for you.</p>
      </div>
    </div>
  );
}
