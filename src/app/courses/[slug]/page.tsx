import { getCourseBySlug, getCourseSlugs } from '@/lib/courses';
import { generateMeta } from '@/lib/seo';
import { Metadata } from 'next';
import Image from 'next/image';
import { LeadForm } from '@/components/shared';
import { use } from 'react';

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const course = getCourseBySlug(slug);
  if (!course) {
    return generateMeta({ title: 'Course Not Found - MSK Institute' });
  }

  return generateMeta({
    title: `${course.title} | MSK Institute`,
    description: course.tagline,
  });
}

export default function CourseDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const course = getCourseBySlug(slug);

  if (!course) {
    return (
      <main className="min-h-screen py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl font-bold">Course not found</h1>
        </div>
      </main>
    );
  }

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Course',
    'name': course.title,
    'description': course.overview,
    'provider': {
      '@type': 'Organization',
      'name': 'MSK Institute',
      'sameAs': 'https://mskinstitute.in'
    }
  };

  return (
    <main className="min-h-screen py-12">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          <h1 className="text-3xl font-bold text-primary-600 mb-4">{course.title}</h1>
          <p className="text-text-secondary mb-4">{course.tagline}</p>

          <div className="mb-6">
            <Image src={`/images/courses/${course.slug}.jpg`} alt={course.title} width={1200} height={600} className="rounded-lg object-cover" />
          </div>

          <section className="mb-6">
            <h3 className="font-semibold text-lg mb-2">Overview</h3>
            <p className="text-text-secondary">{course.overview}</p>
          </section>

          <section className="mb-6">
            <h3 className="font-semibold text-lg mb-2">Syllabus</h3>
            <ul className="list-disc pl-5 space-y-1 text-text-secondary">
              {course.syllabus.map((s: string, i: number) => (
                <li key={i}>{s}</li>
              ))}
            </ul>
          </section>

          <section className="mb-6">
            <h3 className="font-semibold text-lg mb-2">Career Opportunities</h3>
            <ul className="list-disc pl-5 space-y-1 text-text-secondary">
              {course.careerOpportunities.map((c: string, i: number) => (
                <li key={i}>{c}</li>
              ))}
            </ul>
          </section>

          <section className="mb-6">
            <h3 className="font-semibold text-lg mb-2">FAQs</h3>
            <div className="space-y-3">
              {course.faqs.map((f: any, i: number) => (
                <details key={i} className="bg-white border border-border rounded-md p-4">
                  <summary className="font-medium text-primary-600">{f.question}</summary>
                  <p className="mt-2 text-text-secondary">{f.answer}</p>
                </details>
              ))}
            </div>
          </section>
        </div>

        <aside className="md:col-span-1">
          <div className="sticky top-24 bg-white p-6 border border-border rounded-lg">
            <div className="mb-4">
              <h4 className="font-semibold text-lg">Course Details</h4>
              <div className="mt-3 space-y-2">
                <div className="flex justify-between text-text-secondary">
                  <span>Duration</span>
                  <span className="font-semibold text-primary-600">{course.duration}</span>
                </div>
                <div className="flex justify-between text-text-secondary">
                  <span>Fee</span>
                  <span className="font-semibold text-accent-500">₹{course.fee}</span>
                </div>
                <div className="flex justify-between text-text-secondary">
                  <span>Mode</span>
                  <span className="font-semibold">{course.mode}</span>
                </div>
                <div className="flex justify-between text-text-secondary">
                  <span>Level</span>
                  <span className="font-semibold">{course.level}</span>
                </div>
              </div>
            </div>

            <LeadForm />
          </div>
        </aside>

      </div>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </main>
  );
}
