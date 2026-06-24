/**
 * Global site configuration for MSK Institute
 */

export const siteConfig = {
  // Institute Information
  name: 'MSK Institute',
  tagline: 'Learn Today, Lead Tomorrow',
  description: 'Professional computer education institute in Shikohabad, Uttar Pradesh',
  
  // Contact Information
  phone: '8393042166',
  email: 'info@mskinstitute.in',
  location: {
    city: 'Shikohabad',
    state: 'Uttar Pradesh',
    country: 'India',
    fullAddress: 'Shikohabad, Uttar Pradesh, India',
  },

  // Courses Offered
  courses: [
    {
      id: 'python',
      slug: 'python-beginner',
      name: 'Python Programming',
      description: 'Master Python from basics to advanced concepts',
      duration: '3 months',
      fee: '₹8,999',
      badge: 'Popular',
      highlights: ['Hands-on projects', 'Certificate included', 'Interview prep'],
    },
    {
      id: 'java',
      slug: 'java-programming',
      name: 'Java Development',
      description: 'Learn object-oriented programming with Java',
      duration: '4 months',
      fee: '₹10,999',
      badge: 'Trending',
      highlights: ['Core Java', 'Real-world apps', 'Career support'],
    },
    {
      id: 'ccc',
      slug: 'ccc',
      name: 'CCC (Computer Concepts)',
      description: 'Government recognized computer literacy course',
      duration: '2 months',
      fee: '₹3,999',
      badge: 'Beginner',
      highlights: ['Certification ready', 'Skill building', 'Short duration'],
    },
    {
      id: 'adca',
      slug: 'adca',
      name: 'ADCA (Advanced Diploma in Computer Applications)',
      description: 'Comprehensive computer applications training',
      duration: '6 months',
      fee: '₹15,999',
      badge: 'Premium',
      highlights: ['Advanced tools', 'Practical labs', 'Career-focused'],
    },
    {
      id: 'data-analytics',
      slug: 'data-analytics',
      name: 'Data Analytics',
      description: 'Learn data analysis with Python and SQL',
      duration: '5 months',
      fee: '₹12,999',
      badge: 'High Demand',
      highlights: ['Data projects', 'Dashboard building', 'Job-ready skills'],
    },
    {
      id: 'web-development',
      slug: 'web-development',
      name: 'Web Development',
      description: 'Full-stack web development with modern technologies',
      duration: '6 months',
      fee: '₹14,999',
      badge: 'New Batch',
      highlights: ['Responsive UI', 'Backend APIs', 'Startup-ready'],
    },
  ],

  // Social Media Links
  social: {
    facebook: '#',
    twitter: '#',
    linkedin: '#',
    instagram: '#',
    youtube: '#',
  },

  // Navigation Links
  navLinks: [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Courses', href: '#courses' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contact', href: '#contact' },
  ],

  // Footer Links
  footerLinks: {
    company: [
      { label: 'About Us', href: '#about' },
      { label: 'Our Mission', href: '#mission' },
      { label: 'Testimonials', href: '#testimonials' },
      { label: 'Blog', href: '#blog' },
    ],
    courses: [
      { label: 'All Courses', href: '#courses' },
      { label: 'Python', href: '#python' },
      { label: 'Java', href: '#java' },
      { label: 'Web Development', href: '#web-dev' },
    ],
    support: [
      { label: 'Contact Us', href: '#contact' },
      { label: 'FAQ', href: '#faq' },
      { label: 'Privacy Policy', href: '#privacy' },
      { label: 'Terms of Service', href: '#terms' },
    ],
  },
};

export type SiteConfig = typeof siteConfig;
