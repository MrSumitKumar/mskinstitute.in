import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/config/site";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: `${siteConfig.name} - ${siteConfig.tagline}`,
  description: siteConfig.description,
  keywords: ["computer education", "programming", "courses", "training", siteConfig.name],
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.description,
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body suppressHydrationWarning className="min-h-full flex flex-col bg-background">
        {/* JSON-LD Organization + LocalBusiness for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'EducationalOrganization',
              name: siteConfig.name,
              url: 'https://mskinstitute.in',
              telephone: siteConfig.phone,
              address: {
                '@type': 'PostalAddress',
                addressLocality: siteConfig.location.city,
                addressRegion: siteConfig.location.state,
                addressCountry: siteConfig.location.country,
              },
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'LocalBusiness',
              name: siteConfig.name,
              telephone: siteConfig.phone,
              address: {
                '@type': 'PostalAddress',
                streetAddress: siteConfig.location.fullAddress,
                addressLocality: siteConfig.location.city,
                addressRegion: siteConfig.location.state,
                addressCountry: siteConfig.location.country,
              },
              url: 'https://mskinstitute.in',
            }),
          }}
        />
        {children}
      </body>
    </html>
  );
}
