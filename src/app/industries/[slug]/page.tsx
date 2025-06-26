import { Metadata } from 'next';
import { notFound } from 'next/navigation';

import Header from '@/components/Header';
import  HeroSection  from '@/components/HeroSection';
import { FeaturesSection } from '@/components/FeaturesSection';
import UseCaseSection from '@/components/UseCaseSection';
import StatsSection from '@/components/StatsSection';
import FAQSection from '@/components/FAQSection';
import { CTABanner } from '@/components/CTABanner';


import industriesData from '@/data/industriesfinal.json';

// ----------- Types
type IndustryData = {
  name: string;
  description: string;
  color: string;
  icon: string;
  features: string[];
  useCases: Array<{ title: string; description: string; impact: string }>;
  stats: Array<{ number: string; label: string }>;
  faqs: Array<{ question: string; answer: string }>;
};

// ----------- Static Slug Generation
export function generateStaticParams() {
  return Object.keys(industriesData).map((slug) => ({ slug }));
}

// ----------- Metadata for SEO
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const industry = getIndustryFromSlug(params.slug);
  if (!industry) return {};

  return {
    // metadataBase: new URL('https://conversai.vercel.app'),
    title: `${industry.name} Voice Bot Solutions | ConversAI Labs`,
    description: `Transform your ${industry.name.toLowerCase()} business with AI-powered voice bots. ${industry.description}`,
    keywords: [
      `${industry.name.toLowerCase()} voice bots`,
      `AI automation ${industry.name.toLowerCase()}`,
      'voice AI solutions',
      'customer service automation',
      'conversational AI',
    ],
    openGraph: {
      title: `${industry.name} Voice Bot Solutions`,
      description: `AI-powered automation for the ${industry.name.toLowerCase()} sector.`,
      type: 'website',
      images: [
        {
          url: `/images/industries/${params.slug}-og.jpg`,
          width: 1200,
          height: 630,
          alt: `${industry.name} Voice Bot Solutions`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${industry.name} Voice Bot Solutions`,
      description: `Enhance your ${industry.name.toLowerCase()} services with AI voice automation.`,
      images: [`/images/industries/${params.slug}-twitter.jpg`],
    },
  };
}

// ----------- Main Page Component
export default async function IndustryPage({ params }: { params: { slug: string } }) {
  const industry = getIndustryFromSlug(params.slug);
  if (!industry) return notFound();

  return (
    <>
      <Header />
      <main className="min-h-screen">
        <HeroSection
          industryData={industry}
        />
       
        <FeaturesSection
          industry={industry.name}
          features={industry.features}
          color={industry.color}
        />
        <UseCaseSection
          industry={industry.name}
          useCases={industry.useCases}
        />
        <StatsSection
          industry={industry.name}
          color={industry.color as 'blue' | 'purple' | 'green' | 'indigo' | 'orange' | 'default'}
          stats={industry.stats.map((stat) => ({
            label: stat.label,
            value: stat.number,
          }))}
        />
        <FAQSection industry={industry.name} faqs={industry.faqs} />
        <CTABanner industry={industry.name} color={industry.color} />
      </main>
    </>
  );
}

// ----------- Helper to Fetch Industry Data
function getIndustryFromSlug(slug: string): IndustryData | null {
  const typedData = industriesData as Record<string, IndustryData>;
  const data = typedData[slug];
  if (data) return data;
  return null;
}
