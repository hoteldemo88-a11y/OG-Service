import { Link } from 'react-router-dom';
import { Phone, ArrowRight, Shield, Award, Users, Clock, Target, Eye, Heart } from 'lucide-react';
import SEO from '@/components/common/SEO';
import Container from '@/components/common/Container';
import SectionHeading from '@/components/common/SectionHeading';
import Breadcrumb from '@/components/common/Breadcrumb';
import { SITE } from '@/constants';

const values = [
  { icon: Shield, title: 'Trust & Transparency', description: 'We believe in honest pricing and transparent service. No hidden charges, no surprises.' },
  { icon: Award, title: 'Quality Excellence', description: 'We use only genuine spare parts and follow industry-best practices for every service.' },
  { icon: Users, title: 'Customer First', description: 'Your satisfaction is our priority. We go above and beyond to ensure you are happy.' },
  { icon: Heart, title: 'Passion for Service', description: 'Our team is passionate about delivering the best RO service experience in Bangalore.' },
];

const timeline = [
  { year: '2014', title: 'Founded', description: 'Started with a small team of 3 technicians in Koramangala, Bangalore.' },
  { year: '2016', title: 'Expanded Services', description: 'Expanded to cover all major areas in Bangalore with 15+ technicians.' },
  { year: '2018', title: 'Brand Partnerships', description: 'Official service partnerships with Kent, Aquaguard, and Pureit.' },
  { year: '2020', title: 'Digital Transformation', description: 'Launched online booking and real-time service tracking.' },
  { year: '2022', title: '10,000+ Customers', description: 'Crossed 10,000 happy customers milestone with 4.8 Google rating.' },
  { year: '2024', title: 'Market Leader', description: 'Became Bangalore\'s most trusted RO service provider with 50+ technicians.' },
];

const stats = [
  { value: '10,000+', label: 'Happy Customers', icon: Users },
  { value: '10+', label: 'Years Experience', icon: Clock },
  { value: '50+', label: 'Expert Technicians', icon: Award },
  { value: '4.8', label: 'Google Rating', icon: Star },
];

function Star(props) {
  return (<svg {...props} viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>);
}

export default function About() {
  return (
    <>
      <SEO title="About Us | Bangalore's Most Trusted RO Service Provider" description="Learn about RO Service Center - Bangalore's most trusted RO water purifier service provider with 10+ years of experience and 10,000+ happy customers." url="/about" />

      {/* Hero */}
      <section className="relative pt-24 sm:pt-32 pb-16 sm:pb-20 bg-[#f8fafc] overflow-hidden">
        <Container className="relative z-10">
          <Breadcrumb items={[{ label: 'About Us' }]} />
          <div className="max-w-2xl mt-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#eff6ff] border border-[#bfdbfe] mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#22c55e] animate-pulse" />
              <span className="text-[12px] font-medium text-[#2563eb]">Since 2014</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-[#0f172a] leading-[1.1] mb-6 text-center lg:text-left">
              About RO Service Center
            </h1>
            <p className="text-base sm:text-lg text-[#64748b] leading-relaxed text-center lg:text-left">
              Bangalore's most trusted RO water purifier service provider. We are committed to delivering pure, safe drinking water to every home in Bangalore.
            </p>
          </div>
        </Container>
      </section>

      {/* Story */}
      <section className="py-16 sm:py-20 bg-white">
        <Container>
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div className="text-center lg:text-left">
              <span className="inline-block px-4 py-1.5 text-xs font-semibold tracking-wider uppercase text-[#2563eb] bg-[#eff6ff] rounded-full mb-4">Our Story</span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0f172a] mb-6 text-center lg:text-left">A Decade of Trust & Excellence in Bangalore</h2>
              <div className="space-y-4 text-[#64748b] text-[14px] sm:text-base leading-relaxed text-center lg:text-left">
                <p>Founded in 2014 in Koramangala, Bangalore, RO Service Center started with a simple mission: to provide reliable, affordable, and high-quality RO water purifier service to every household in Bangalore.</p>
                <p>What began as a small team of 3 passionate technicians has now grown into Bangalore's most trusted RO service provider, with over 50 expert technicians covering every major area in the city.</p>
                <p>Our commitment to using genuine spare parts, transparent pricing, and customer-first approach has earned us a 4.8-star Google rating and the trust of over 10,000 families across Bangalore.</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, i) => {
                const Icon = stat.icon;
                return (
                  <div key={stat.label} className={`p-5 sm:p-6 rounded-2xl ${i % 2 === 0 ? 'bg-[#eff6ff]' : 'bg-[#f0fdf4]'}`}>
                    <Icon className="w-7 h-7 sm:w-8 sm:h-8 text-[#2563eb] mb-3" />
                    <div className="text-2xl sm:text-3xl font-extrabold text-[#0f172a] mb-1">{stat.value}</div>
                    <div className="text-xs sm:text-sm text-[#64748b]">{stat.label}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </Container>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-16 sm:py-20 bg-[#f8fafc]">
        <Container>
          <div className="grid md:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16">
            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-[#e2e8f0] text-center lg:text-left">
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-[#eff6ff] rounded-2xl flex items-center justify-center mb-4 sm:mb-5 mx-auto lg:mx-0"><Target className="w-6 h-6 sm:w-7 sm:h-7 text-[#2563eb]" /></div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#0f172a] mb-3 text-center lg:text-left">Our Mission</h3>
              <p className="text-[#64748b] text-sm sm:text-base leading-relaxed text-center lg:text-left">To provide every household in Bangalore with access to pure, safe drinking water through reliable and affordable RO water purifier service.</p>
            </div>
            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-[#e2e8f0] text-center lg:text-left">
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-[#f0fdf4] rounded-2xl flex items-center justify-center mb-4 sm:mb-5 mx-auto lg:mx-0"><Eye className="w-6 h-6 sm:w-7 sm:h-7 text-[#22c55e]" /></div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#0f172a] mb-3 text-center lg:text-left">Our Vision</h3>
              <p className="text-[#64748b] text-sm sm:text-base leading-relaxed text-center lg:text-left">To become Bangalore's most trusted and preferred RO water purifier service provider, known for our commitment to quality, transparency, and customer satisfaction.</p>
            </div>
          </div>
          <SectionHeading badge="Our Values" title="What We Stand For" subtitle="Our core values guide everything we do" icon={Heart} />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <div key={value.title} className="bg-white p-5 sm:p-6 rounded-2xl border border-[#e2e8f0] hover:shadow-lg transition-all text-center lg:text-left">
                  <div className="w-11 h-11 sm:w-12 sm:h-12 bg-[#eff6ff] rounded-xl flex items-center justify-center mb-4 mx-auto lg:mx-0"><Icon className="w-5 h-5 sm:w-6 sm:h-6 text-[#2563eb]" /></div>
                  <h4 className="font-bold text-[#0f172a] mb-2 text-[15px] text-center lg:text-left">{value.title}</h4>
                  <p className="text-[#64748b] text-sm leading-relaxed text-center lg:text-left">{value.description}</p>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Timeline */}
      <section className="py-16 sm:py-20 bg-white">
        <Container>
          <SectionHeading badge="Our Journey" title="Our Experience Timeline" subtitle="A decade of growth and excellence in Bangalore" icon={Clock} />
          <div className="relative max-w-3xl mx-auto">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-[#e2e8f0] -translate-x-1/2" />
            {timeline.map((item) => (
              <div key={item.year} className="relative flex items-start gap-4 sm:gap-6 mb-8 sm:mb-10">
                <div className="absolute left-4 md:left-1/2 w-3.5 h-3.5 sm:w-4 sm:h-4 bg-[#2563eb] rounded-full border-4 border-white shadow -translate-x-1/2 z-10" />
                <div className="ml-12 md:ml-0 md:w-1/2 md:text-left">
                  <span className="inline-block px-3 py-1 bg-[#eff6ff] text-[#2563eb] text-xs sm:text-sm font-bold rounded-lg mb-2">{item.year}</span>
                  <h4 className="font-bold text-[#0f172a] mb-1 text-[15px]">{item.title}</h4>
                  <p className="text-[#64748b] text-xs sm:text-sm">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-20 bg-gradient-to-r from-[#2563eb] to-[#0ea5e9] text-white">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">Ready to Experience the Best RO Service in Bangalore?</h2>
            <p className="text-white/80 text-sm sm:text-lg mb-8">Join 10,000+ happy customers who trust us for their RO water purifier service.</p>
            <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4">
              <a href={`tel:${SITE.phoneRaw}`} className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 bg-white text-[#2563eb] font-semibold btn-ribbon hover:bg-white/90 transition-all shadow-lg">
                <Phone className="w-5 h-5" />Call Now: {SITE.phoneFormatted}
              </a>
              <Link to="/contact" className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 bg-white/10 backdrop-blur-sm text-white font-semibold btn-ribbon hover:bg-white/20 transition-all border border-white/20">
                Contact Us <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
