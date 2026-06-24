import { getAllCourses } from '@/lib/courses';
import { generateMeta } from '@/lib/seo';
import { CourseCard } from '@/components/shared';
import { Metadata } from 'next';

export const metadata: Metadata = generateMeta({
  title: 'Courses - MSK Institute',
  description: 'Explore all courses offered at MSK Institute',
});

export default function CoursesPage() {
  const courses = getAllCourses();

  return (
    <main className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        <section className="mb-12">
          <h1 className="text-3xl font-bold text-primary-600 mb-4">Our Courses</h1>
          <p className="text-text-secondary">Browse available courses and choose one that fits your goals.</p>
        </section>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course: any) => (
              <CourseCard
                key={course.slug}
                title={course.title}
                description={course.tagline}
                duration={course.duration}
                fee={`₹${course.fee}`}
                badge={course.badge}
                slug={course.slug}
                highlights={course.syllabus?.slice(0, 3) || []}
              />
            ))}
          </div>
      </div>
    </main>
  );
}
