# MSK Institute - Next.js 15 Web Application

A production-grade website for MSK Institute, a computer education center located in Shikohabad, Uttar Pradesh, India.

## 🎯 Project Overview

This is a modern, responsive website built with Next.js 15, showcasing MSK Institute's courses, services, and enabling student inquiries through a lead capture form.

**Live Brand Tagline:** Learn Today, Lead Tomorrow

## 🛠️ Tech Stack

- **Framework:** Next.js 15 with App Router
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Package Manager:** npm

## 🎨 Brand Theme

**Color Palette:**
- **Primary:** #072B57 (Dark Blue)
- **Accent:** #F47A20 (Orange)
- **Background:** #F8FAFC (Light Gray)
- **Text Primary:** #1A1A2E (Dark Gray)
- **Border:** #E5E7EB

**Design Approach:** Clean, modern, educational, premium. Mobile-first responsive design.

## 📁 Project Structure

```
src/
├── app/                          # Next.js App Router
│   ├── globals.css              # Global styles with Tailwind
│   ├── layout.tsx               # Root layout component
│   └── page.tsx                 # Home page with full sections
├── components/
│   ├── ui/                      # ShadCN UI components (placeholder)
│   ├── layout/
│   │   ├── Navbar.tsx           # Navigation bar with mobile menu
│   │   ├── Footer.tsx           # Footer with links and contact info
│   │   └── index.ts             # Layout components export
│   ├── shared/
│   │   ├── SectionHeader.tsx    # Reusable section title component
│   │   ├── CourseCard.tsx       # Course display card
│   │   ├── ReviewCard.tsx       # Student testimonial card
│   │   ├── LeadForm.tsx         # Contact form with validation
│   │   ├── CTASection.tsx       # Call-to-action banner
│   │   ├── FAQAccordion.tsx     # Expandable FAQ section
│   │   └── index.ts             # Shared components export
│   └── index.ts                 # Components barrel export
├── config/
│   └── site.ts                  # Global site configuration
├── data/
│   └── courses/                 # Course data (JSON files per course)
├── content/                     # Markdown content files
├── features/                    # Feature modules
├── hooks/                       # Custom React hooks
├── lib/                         # Utility functions
├── services/                    # API services
└── types/                       # TypeScript type definitions

public/
├── llms.txt                     # Institute information for LLMs
└── [other static assets]

Configuration Files:
├── tailwind.config.ts           # Tailwind CSS configuration
├── tsconfig.json                # TypeScript configuration
├── next.config.ts               # Next.js configuration
├── package.json                 # Project dependencies
└── postcss.config.mjs          # PostCSS configuration
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Run Development Server**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

3. **Build for Production**
   ```bash
   npm run build
   npm start
   ```

## 📋 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with hot reload |
| `npm run build` | Create optimized production build |
| `npm start` | Start production server |
| `npm run lint` | Run linting (when configured) |

## 📖 Key Features

### 1. **Navbar**
- Logo with institution branding
- Responsive navigation links
- Mobile hamburger menu
- Call-to-action button

### 2. **Hero Section**
- Eye-catching headline and tagline
- Value proposition and call-to-action buttons
- Contact information display
- Gradient background design

### 3. **About Section**
- Institution overview
- Three key value propositions with icons
- Professional card-based layout

### 4. **Courses Section**
- Grid display of all 6 courses
- Course cards with:
  - Course name and description
  - Duration and fee information
  - Enrollment button
  - Hover animations

### 5. **Testimonials Section**
- Student reviews with ratings (1-5 stars)
- Student name and course information
- Avatar placeholders
- Smooth animations

### 6. **Call-to-Action Section**
- Prominent "Ready to Start?" banner
- Two variant styles (primary/accent)
- Action-oriented messaging

### 7. **FAQ Accordion**
- 6 common questions and answers
- Expandable/collapsible design
- Smooth animations with Framer Motion
- Mobile-responsive

### 8. **Contact/Lead Form**
- Form validation (name, phone, course selection)
- Course selection dropdown
- Phone number format validation (10 digits)
- Success feedback message
- Accessible error messages

### 9. **Footer**
- Company information and links
- Course links
- Contact details (phone, email, address)
- Social media links
- Copyright information

## 🎓 Courses Available

1. **Python Programming** - 3 months - ₹8,999
2. **Java Development** - 4 months - ₹10,999
3. **CCC** - 2 months - ₹3,999
4. **ADCA** - 6 months - ₹15,999
5. **Data Analytics** - 5 months - ₹12,999
6. **Web Development** - 6 months - ₹14,999

## 🌐 Responsive Design

- **Mobile First:** Optimized for mobile devices first
- **Breakpoints:** Tailwind CSS responsive prefixes (sm, md, lg, xl)
- **Navigation:** Auto-collapsing menu on mobile
- **Grid Layouts:** Responsive grid systems for all sections

## ♿ Accessibility

- Semantic HTML structure
- ARIA labels on interactive elements
- Keyboard navigation support
- Color contrast compliance
- Form validation with clear error messages

## 🎬 Animations

Powered by **Framer Motion**:
- Page load animations
- Hover effects on interactive elements
- Smooth scroll behavior
- Expandable accordion with transitions
- Scroll-triggered animations

## 📱 Contact Information

**MSK Institute**
- **Phone:** 8393042166
- **Email:** info@mskinstitute.in
- **Location:** Shikohabad, Uttar Pradesh, India
- **Hours:** Mon-Fri 9:00 AM - 6:00 PM | Sat 10:00 AM - 4:00 PM

## 📄 Configuration

### Site Config (`src/config/site.ts`)
All global site configuration is centralized in this file:
- Institute name and contact details
- Course information
- Navigation links
- Footer links
- Social media handles

### Tailwind Config (`tailwind.config.ts`)
- Brand color palette as CSS variables
- Custom spacing and border radius
- Extended theme configuration
- Responsive utilities

### Global Styles (`src/app/globals.css`)
- Base Tailwind imports
- CSS variable definitions
- Typography styles
- Button utility classes
- Section spacing utilities

## 🔒 Type Safety

Full TypeScript support with:
- Typed component props
- Type definitions for courses and configuration
- Type-safe API responses (when integrated)

## 📦 Dependencies

### Core Dependencies
- `next` - React framework with server-side rendering
- `react` & `react-dom` - UI library
- `tailwindcss` & `@tailwindcss/postcss` - CSS framework
- `framer-motion` - Animation library
- `lucide-react` - Icon library
- `clsx` - Utility for conditional classNames

### Dev Dependencies
- `typescript` - Type checking
- `@types/node`, `@types/react`, `@types/react-dom` - Type definitions

## 🚀 Deployment

### Vercel (Recommended)
1. Push code to GitHub
2. Connect repository to Vercel
3. Deploy automatically on push

### Other Platforms
- **Netlify:** Supports Next.js out of the box
- **AWS Amplify:** Full-stack deployment
- **Docker:** Create containerized deployment

## 📝 Environment Variables

Currently, no environment variables are required. If you integrate APIs in the future:

```env
# .env.local
NEXT_PUBLIC_API_URL=your_api_url
```

## 🎯 Future Enhancements

- [ ] Blog section with course guides
- [ ] Student portal for course enrollment
- [ ] Payment integration (Razorpay/Stripe)
- [ ] Admin dashboard for content management
- [ ] Email notifications for form submissions
- [ ] Schedule/batch management
- [ ] Instructor profiles
- [ ] Live chat support
- [ ] Mobile app
- [ ] Multi-language support

## 📄 License

This project is proprietary to MSK Institute.

## 📞 Support

For website maintenance and updates, contact the development team.

---

**Last Updated:** June 24, 2026
**Version:** 1.0.0
**Status:** Production Ready ✅
