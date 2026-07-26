import SEO from '@/components/common/SEO';
import HeroSection from '@/components/sections/HeroSection';
import BrandShowcase from '@/components/sections/BrandShowcase';
import ServicesSection from '@/components/sections/ServicesSection';
import WhyChooseUs from '@/components/sections/WhyChooseUs';
import CommonProblems from '@/components/sections/CommonProblems';
import ServiceProcess from '@/components/sections/ServiceProcess';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import FAQSection from '@/components/sections/FAQSection';
import ContactCTA from '@/components/sections/ContactCTA';

export default function Home() {
  return (
    <>
      <SEO
        title="RO Service in Bangalore | Same Day Doorstep RO Repair & Service"
        description="Expert RO water purifier repair, installation, and maintenance in Bangalore. Same day doorstep service by certified technicians with genuine spare parts. Call +91 98765 43210."
        url="/"
      />
      <HeroSection />
      <BrandShowcase />
      <ServicesSection />
      <WhyChooseUs />
      <CommonProblems />
      <ServiceProcess />
      <TestimonialsSection />
      <FAQSection />
      <ContactCTA />
    </>
  );
}
