import SEO from '@/components/common/SEO';
import Container from '@/components/common/Container';
import { SITE } from '@/constants';

const brandList = [
  'Kent RO', 'AO Smith', 'Aquaguard', 'Eureka Forbes', 'LG', 'Pureit', 'HUL',
  'Havells', 'Livpure', 'Blue Star', 'Whirlpool', 'Samsung',
];

const serviceDisclaimer = [
  'We are an independent service provider offering repair and maintenance services for water purifiers of all brands.',
  'We are not the official or authorized service centre of any brand mentioned on this website.',
  'Spare parts used in our services may be genuine, compatible, or aftermarket parts based on availability and customer preference.',
  'Our service warranty is provided by us and is independent of any manufacturer warranty.',
  'Availing our services may affect your existing manufacturer warranty. Please check with the respective brand before proceeding.',
  'Prices and services mentioned are indicative and may vary based on the actual condition of the product and parts required.',
];

export default function Disclaimer() {
  return (
    <>
      <SEO title="Disclaimer" description="Important disclaimer for RO Service Centre (QuickRoFix). We are an independent third-party service provider and are not affiliated with any water purifier brand." url="/disclaimer" />

      <section className="relative pt-24 sm:pt-32 pb-12 sm:pb-16 bg-[#f8fafc]">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0f172a] mt-6 mb-2">Disclaimer</h1>
            <div className="flex items-center gap-2 text-[#94a3b8] text-sm sm:text-base mb-4">
              <span>Last Updated: January 1, 2024</span>
              <span className="w-1 h-1 rounded-full bg-[#cbd5e1]" />
              <span>RO Service Centre / QuickRoFix</span>
            </div>
            <div className="w-12 h-1 bg-gradient-to-r from-[#2563eb] to-[#60a5fa] rounded-full mb-6" />
          </div>
        </Container>
      </section>

      <section className="py-12 sm:py-16 bg-white">
        <Container>
          <div className="max-w-4xl mx-auto">

            {/* Important Notice */}
            <div className="bg-[#fef3c7] rounded-2xl p-6 sm:p-8 border border-[#fde68a] mb-8 sm:mb-10">
              <h2 className="text-lg sm:text-xl font-bold text-[#92400e] mb-3">Important Notice</h2>
              <p className="text-[#78350f] text-sm sm:text-base leading-relaxed">
                RO Service Centre / QuickRoFix is an <strong>individual / independent third-party service provider</strong>. We are <strong>NOT</strong> the official service centre, authorized dealer, or company-owned service provider of any brand.
              </p>
            </div>

            {/* About Our Business */}
            <div className="mb-8 sm:mb-10">
              <div className="flex items-start gap-3 mb-3 sm:mb-4">
                <span className="flex-shrink-0 w-7 h-7 rounded-lg bg-[#eff6ff] border border-[#bfdbfe] flex items-center justify-center text-[11px] font-bold text-[#2563eb]">01</span>
                <h2 className="text-lg sm:text-xl font-bold text-[#0f172a] pt-0.5">About Our Business</h2>
              </div>
              <div className="pl-10 space-y-3">
                <p className="text-[#64748b] text-sm sm:text-base leading-[1.8]">
                  RO Service Centre, operating under the trade name <strong className="text-[#334155]">QuickRoFix</strong>, is an individual proprietorship business providing water purifier repair, maintenance, and installation services. We operate as an independent service provider and are not owned, operated, or controlled by any water purifier manufacturing company.
                </p>
                <p className="text-[#64748b] text-sm sm:text-base leading-[1.8]">
                  Our technicians are trained professionals with experience in servicing various water purifier brands, but they are employed by us and not by any manufacturing company.
                </p>
              </div>
            </div>

            {/* Brand Affiliation Disclaimer */}
            <div className="mb-8 sm:mb-10">
              <div className="flex items-start gap-3 mb-3 sm:mb-4">
                <span className="flex-shrink-0 w-7 h-7 rounded-lg bg-[#eff6ff] border border-[#bfdbfe] flex items-center justify-center text-[11px] font-bold text-[#2563eb]">02</span>
                <h2 className="text-lg sm:text-xl font-bold text-[#0f172a] pt-0.5">Brand Affiliation Disclaimer</h2>
              </div>
              <div className="pl-10">
                <p className="text-[#64748b] text-sm sm:text-base leading-[1.8] mb-4">
                  We are <strong className="text-[#334155]">NOT affiliated with any brand</strong>. This includes but is not limited to:
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mb-4">
                  {brandList.map((brand) => (
                    <div key={brand} className="flex items-center gap-2 bg-[#f8fafc] rounded-lg px-3 py-2 border border-[#f1f5f9]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#ef4444] shrink-0" />
                      <span className="text-[13px] font-medium text-[#334155]">{brand}</span>
                    </div>
                  ))}
                </div>
                <p className="text-[#64748b] text-sm sm:text-base leading-[1.8]">
                  All brand names, product names, logos, and trademarks mentioned on this website are the property of their respective owners. The use of these names is solely for identification purposes and does not imply any endorsement, sponsorship, or affiliation.
                </p>
              </div>
            </div>

            {/* Service Disclaimer */}
            <div className="mb-8 sm:mb-10">
              <div className="flex items-start gap-3 mb-3 sm:mb-4">
                <span className="flex-shrink-0 w-7 h-7 rounded-lg bg-[#eff6ff] border border-[#bfdbfe] flex items-center justify-center text-[11px] font-bold text-[#2563eb]">03</span>
                <h2 className="text-lg sm:text-xl font-bold text-[#0f172a] pt-0.5">Service Disclaimer</h2>
              </div>
              <div className="pl-10 space-y-2.5">
                {serviceDisclaimer.map((item, i) => (
                  <div key={i} className="flex items-start gap-2.5">
                    <span className="flex-shrink-0 w-5 h-5 rounded bg-[#eff6ff] border border-[#bfdbfe] flex items-center justify-center text-[10px] font-bold text-[#2563eb] mt-0.5">{i + 1}</span>
                    <p className="text-[#64748b] text-sm sm:text-base leading-[1.8]">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Liability Disclaimer */}
            <div className="mb-8 sm:mb-10">
              <div className="flex items-start gap-3 mb-3 sm:mb-4">
                <span className="flex-shrink-0 w-7 h-7 rounded-lg bg-[#eff6ff] border border-[#bfdbfe] flex items-center justify-center text-[11px] font-bold text-[#2563eb]">04</span>
                <h2 className="text-lg sm:text-xl font-bold text-[#0f172a] pt-0.5">Liability Disclaimer</h2>
              </div>
              <div className="pl-10 space-y-3">
                <p className="text-[#64748b] text-sm sm:text-base leading-[1.8]">
                  While we strive to provide the best possible service, RO Service Centre / QuickRoFix shall not be held liable for any indirect, incidental, or consequential damages arising from the use of our services.
                </p>
                <p className="text-[#64748b] text-sm sm:text-base leading-[1.8]">
                  The information provided on this website is for general informational purposes only and should not be construed as professional advice. We make no representations or warranties of any kind about the completeness, accuracy, or reliability of the information.
                </p>
              </div>
            </div>

            {/* Contact */}
            <div className="mt-10 sm:mt-12 bg-[#f8fafc] rounded-2xl p-6 sm:p-8 border border-[#e2e8f0]">
              <h3 className="font-bold text-[#0f172a] mb-3">Questions?</h3>
              <p className="text-[#64748b] text-sm leading-relaxed mb-3">If you have any questions about this disclaimer or our services, please contact us:</p>
              <div className="space-y-2">
                <a href={`tel:${SITE.phoneRaw}`} className="flex items-center gap-2 text-[#2563eb] font-semibold text-sm hover:underline">
                  {SITE.phoneFormatted}
                </a>
                <a href={`mailto:${SITE.email}`} className="flex items-center gap-2 text-[#2563eb] font-semibold text-sm hover:underline">
                  {SITE.email}
                </a>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
