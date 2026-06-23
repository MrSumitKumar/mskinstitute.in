import { Metadata } from 'next';
import { generateMeta } from '@/lib/seo';
import { SectionHeader } from '@/components/shared';

export const metadata: Metadata = generateMeta({
  title: 'About - MSK Institute',
  description: 'About MSK Institute: mission, story, team and facilities',
});

export default function AboutPage() {
  return (
    <main className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        <SectionHeader title="About MSK Institute" subtitle="Our story, mission and team" />

        <section className="mb-8">
          <h3 className="text-xl font-semibold text-primary-600 mb-2">Our Story</h3>
          <p className="text-text-secondary">MSK Institute was founded to provide accessible, high-quality computer education to students of Shikohabad and surrounding regions. We focus on hands-on training and practical projects.</p>
        </section>

        <section className="mb-8">
          <h3 className="text-xl font-semibold text-primary-600 mb-2">Mission</h3>
          <p className="text-text-secondary">To empower learners with industry-relevant skills and career support to succeed in the tech economy.</p>
        </section>

        <section className="mb-8">
          <h3 className="text-xl font-semibold text-primary-600 mb-2">Facilities</h3>
          <ul className="list-disc pl-5 text-text-secondary">
            <li>Modern computer labs</li>
            <li>High-speed internet</li>
            <li>Experienced instructors</li>
            <li>Placement assistance</li>
          </ul>
        </section>

        <section>
          <h3 className="text-xl font-semibold text-primary-600 mb-4">Team</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[{
              name: 'Mr. Mohit Kumar',
              role: 'Founder & Head Instructor'
            },{
              name: 'Ms. Sangeeta Sharma',
              role: 'Coordinator'
            },{
              name: 'Mr. Ramesh Verma',
              role: 'Placement Officer'
            }].map((member, i) => (
              <div key={i} className="bg-white border border-border rounded-lg p-4 text-center">
                <div className="w-24 h-24 rounded-full bg-primary-600 text-white mx-auto flex items-center justify-center font-bold text-2xl mb-3">{member.name.charAt(0)}</div>
                <h4 className="font-semibold text-primary-600">{member.name}</h4>
                <p className="text-text-secondary">{member.role}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
