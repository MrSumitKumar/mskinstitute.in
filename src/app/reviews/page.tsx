import { Metadata } from 'next';
import { generateMeta } from '@/lib/seo';
import { ReviewCard } from '@/components/shared';

const reviews = [
  { studentName: 'Rajesh Kumar', course: 'Python Programming', review: 'Great course!', rating: 5 },
  { studentName: 'Priya Singh', course: 'Web Development', review: 'Loved the practical projects.', rating: 5 },
  { studentName: 'Amit Patel', course: 'Data Analytics', review: 'Very helpful for careers.', rating: 5 },
];

export const metadata: Metadata = generateMeta({ title: 'Reviews - MSK Institute' });

export default function ReviewsPage() {
  return (
    <main className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-primary-600 mb-6">Student Reviews</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((r, i) => (
            <ReviewCard key={i} studentName={r.studentName} course={r.course} review={r.review} rating={r.rating} />
          ))}
        </div>
      </div>
    </main>
  );
}
