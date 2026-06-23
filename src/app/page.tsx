'use client';

import { Navbar, Footer } from '@/components/layout';
import {
  SectionHeader,
  CourseCard,
  ReviewCard,
  CTASection,
  FAQAccordion,
  LeadForm,
} from '@/components/shared';
import { siteConfig } from '@/config/site';

const testimonials = [
  {
    studentName: 'Rajesh Kumar',
    course: 'Python Programming',
    review:
      'The instructors at MSK Institute are incredibly knowledgeable and patient. I went from complete beginner to developing my own projects in just 3 months.',
    rating: 5,
  },
  {
    studentName: 'Priya Singh',
    course: 'Web Development',
    review:
      'Best decision I made for my career. The practical approach and real-world projects made learning so much easier and fun.',
    rating: 5,
  },
  {
    studentName: 'Amit Patel',
    course: 'Data Analytics',
    review:
      'The curriculum is up-to-date and the instructors make complex topics very understandable. Highly recommended!',
    rating: 5,
  },
];

const faqs = [
  {
    question: 'What are the prerequisites for courses?',
    answer:
      'Most of our courses are designed for beginners. However, for advanced courses like Data Analytics, basic computer knowledge is recommended.',
  },
  {
    question: 'Do you provide certificates?',
    answer:
      'Yes, we provide industry-recognized certificates upon course completion. Students who meet attendance and assignment requirements receive certificates.',
  },
  {
    question: 'What is the course duration?',
    answer:
      'Course durations vary from 2 months (CCC) to 6 months (ADCA, Web Development). Each course page has specific duration details.',
  },
  {
    question: 'Are online classes available?',
    answer:
      'Yes, we offer both in-person and online training. You can choose the mode that best suits your schedule.',
  },
  {
    question: 'Can I get a refund?',
    answer:
      'We have a 7-day refund policy. If you\'re not satisfied with the course within the first week, we offer a full refund.',
  },
  {
    question: 'Do you offer placement assistance?',
    answer:
      'Yes, we provide placement assistance for suitable candidates who meet our criteria. Our team helps with resume building and interview preparation.',
  },
];

export default function Home() {
  const handleLeadFormSubmit = (data: any) => {
    console.log('Lead form submitted:', data);
    // In a real application, you would send this to your backend
  };

  const enrolledCount = 1240;
  const upcomingBatches = [
    { course: 'Python Programming', date: '2026-07-05', seats: 12 },
    { course: 'Web Development', date: '2026-07-10', seats: 8 },
    { course: 'Data Analytics', date: '2026-07-15', seats: 5 },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />

      <main className="flex-grow">
        {/* Hero Section */}
        <section
          id="home"
          className="relative min-h-screen flex items-center justify-center overflow-hidden py-20 md:py-0"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary-600/10 to-accent-500/10" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-primary-600 mb-6 leading-tight">
                  Learn Today, Lead Tomorrow
                </h1>
                <p className="text-lg text-text-secondary mb-8">
                  Master in-demand programming skills at MSK Institute. We provide
                  comprehensive training in Python, Java, Web Development, and more.
                  Join hundreds of successful students who transformed their careers.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="btn btn-primary px-8 py-3 text-lg">
                    Explore Courses
                  </button>
                  <button className="btn btn-outline px-8 py-3 text-lg">
                    Learn More
                  </button>
                </div>
                <p className="text-text-secondary text-sm mt-8">
                  📍 Located in Shikohabad, Uttar Pradesh | 📞 {siteConfig.phone}
                </p>
              </div>
              <div className="hidden md:flex items-center justify-center">
                <div className="w-full max-w-md aspect-square bg-gradient-to-br from-primary-600 to-accent-500 rounded-2xl flex items-center justify-center text-white text-6xl font-bold">
                  MSK
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="section bg-white">
          <div className="container mx-auto px-4">
            <SectionHeader
              title="Why Choose MSK Institute?"
              subtitle="We are committed to providing quality education and professional training"
            />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: 'Expert Instructors',
                  description:
                    'Learn from experienced professionals with real-world industry experience.',
                },
                {
                  title: 'Practical Learning',
                  description:
                    'Hands-on projects and assignments to develop practical skills.',
                },
                {
                  title: 'Job Support',
                  description:
                    'Resume building, interview preparation, and placement assistance.',
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="p-6 border border-border rounded-lg hover:shadow-lg transition-all duration-300"
                >
                  <h3 className="text-xl font-bold text-primary-600 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-text-secondary">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Courses Section */}
        <section id="courses" className="section bg-background">
          <div className="container mx-auto px-4">
            <SectionHeader
              title="Our Courses"
              subtitle="Choose from our comprehensive range of programming and computer education courses"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {siteConfig.courses.map((course) => (
                <CourseCard
                  key={course.id}
                  name={course.name}
                  description={course.description}
                  duration={course.duration}
                  fee={course.fee}
                  onEnroll={() => console.log(`Enrolled in ${course.name}`)}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="section bg-white">
          <div className="container mx-auto px-4">
            <SectionHeader
              title="Student Testimonials"
              subtitle="Hear from our successful students"
            />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <ReviewCard
                  key={index}
                  studentName={testimonial.studentName}
                  course={testimonial.course}
                  review={testimonial.review}
                  rating={testimonial.rating}
                />
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <CTASection
          heading="Ready to Start Your Learning Journey?"
          subheading="Join MSK Institute and transform your career with in-demand skills."
          buttonText="Get Started Today"
          variant="accent"
        />

        {/* FAQ Section */}
        <section id="faq" className="section bg-white">
          <div className="container mx-auto px-4">
            <SectionHeader
              title="Frequently Asked Questions"
              subtitle="Find answers to common questions about our courses and programs"
            />
            <div className="max-w-3xl mx-auto">
              <FAQAccordion items={faqs} />
            </div>
          </div>
        </section>

        {/* Contact/Lead Form Section */}
        <section id="contact" className="section bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <SectionHeader
                  title="Get in Touch"
                  subtitle="Ready to join MSK Institute? Fill out the form and we'll get back to you soon."
                  align="left"
                />
                <div className="space-y-6 mt-8">
                  <div>
                    <h4 className="font-bold text-primary-600 mb-2">
                      📞 Phone
                    </h4>
                    <p className="text-text-secondary">{siteConfig.phone}</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-primary-600 mb-2">
                      📍 Location
                    </h4>
                    <p className="text-text-secondary">
                      {siteConfig.location.fullAddress}
                    </p>
                  </div>
                  <div>
                    <h4 className="font-bold text-primary-600 mb-2">
                      ⏰ Hours
                    </h4>
                    <p className="text-text-secondary">
                      Monday - Friday: 9:00 AM - 6:00 PM
                      <br />
                      Saturday: 10:00 AM - 4:00 PM
                      <br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
              <LeadForm onSubmit={handleLeadFormSubmit} />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
