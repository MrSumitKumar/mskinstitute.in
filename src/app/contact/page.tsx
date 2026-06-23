import { Metadata } from 'next';
import { generateMeta } from '@/lib/seo';
import { LeadForm } from '@/components/shared';
import { siteConfig } from '@/config/site';

export const metadata: Metadata = generateMeta({
  title: 'Contact - MSK Institute',
  description: 'Contact MSK Institute: phone, email and location',
});

export default function ContactPage() {
  return (
    <main className="min-h-screen py-12">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          <h1 className="text-3xl font-bold text-primary-600 mb-4">Contact Us</h1>

          <section className="mb-6">
            <h3 className="font-semibold mb-2">Phone</h3>
            <p className="text-text-secondary">{siteConfig.phone}</p>
          </section>

          <section className="mb-6">
            <h3 className="font-semibold mb-2">Email</h3>
            <p className="text-text-secondary">{siteConfig.email}</p>
          </section>

          <section className="mb-6">
            <h3 className="font-semibold mb-2">Location</h3>
            <p className="text-text-secondary">{siteConfig.location.fullAddress}</p>
            <div className="mt-4 w-full h-64 bg-gray-100 rounded-lg overflow-hidden">
              <iframe
                title="MSK Institute Location"
                src={`https://www.google.com/maps?q=${encodeURIComponent(siteConfig.location.fullAddress)}&output=embed`}
                width="100%"
                height="100%"
                style={{ border: 0 }}
              />
            </div>
          </section>
        </div>

        <aside>
          <div className="bg-white p-6 border border-border rounded-lg">
            <h3 className="font-semibold mb-4">Enquiry Form</h3>
            <LeadForm />
          </div>
        </aside>
      </div>
    </main>
  );
}
