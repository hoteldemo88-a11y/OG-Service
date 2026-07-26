import { lazy, Suspense } from 'react';
import SEO from '@/components/common/SEO';
import LazySection from '@/components/common/LazySection';
import HeroSection from '@/components/sections/HeroSection';
const BrandShowcase = lazy(() => import('@/components/sections/BrandShowcase'));
const ServicesSection = lazy(() => import('@/components/sections/ServicesSection'));
const WhyChooseUs = lazy(() => import('@/components/sections/WhyChooseUs'));
const CommonProblems = lazy(() => import('@/components/sections/CommonProblems'));
const ServiceProcess = lazy(() => import('@/components/sections/ServiceProcess'));
const TestimonialsSection = lazy(() => import('@/components/sections/TestimonialsSection'));
const FAQSection = lazy(() => import('@/components/sections/FAQSection'));
const ContactCTA = lazy(() => import('@/components/sections/ContactCTA'));

export default function Home() {
  return (
    <>
      <SEO
        title="RO Service in Bangalore | Same Day Doorstep RO Repair & Service"
        description="Expert RO water purifier repair, installation, and maintenance in Bangalore. Same day doorstep service by certified technicians with genuine spare parts. Call 080502 91180."
        url="/"
      />
      <HeroSection />
      <LazySection>
        <Suspense fallback={null}>
          <BrandShowcase />
        </Suspense>
      </LazySection>
      <LazySection>
        <Suspense fallback={null}>
          <ServicesSection />
        </Suspense>
      </LazySection>
      <LazySection>
        <Suspense fallback={null}>
          <WhyChooseUs />
        </Suspense>
      </LazySection>
      <LazySection>
        <Suspense fallback={null}>
          <CommonProblems />
        </Suspense>
      </LazySection>
      <LazySection>
        <Suspense fallback={null}>
          <ServiceProcess />
        </Suspense>
      </LazySection>
      <LazySection>
        <Suspense fallback={null}>
          <TestimonialsSection />
        </Suspense>
      </LazySection>
      <LazySection>
        <Suspense fallback={null}>
          <FAQSection />
        </Suspense>
      </LazySection>
      <LazySection rootMargin="400px">
        <Suspense fallback={null}>
          <ContactCTA />
        </Suspense>
      </LazySection>
    </>
  );
}
