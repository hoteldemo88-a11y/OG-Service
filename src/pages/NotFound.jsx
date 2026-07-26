import { Link } from 'react-router-dom';
import { Home, ArrowLeft, Droplets } from 'lucide-react';
import SEO from '@/components/common/SEO';
import Container from '@/components/common/Container';

export default function NotFound() {
  return (
    <>
      <SEO title="Page Not Found" description="The page you are looking for does not exist." />

      <section className="min-h-screen flex items-center justify-center bg-[#f8fafc] py-20">
        <Container>
          <div className="max-w-lg mx-auto text-center">
            <div className="mb-8 px-4">
              <div className="w-20 h-20 sm:w-24 sm:h-24 bg-[#eff6ff] rounded-2xl sm:rounded-3xl flex items-center justify-center mx-auto mb-5 sm:mb-6">
                <Droplets className="w-10 h-10 sm:w-12 sm:h-12 text-[#2563eb]" />
              </div>
              <h1 className="text-6xl sm:text-7xl lg:text-8xl font-extrabold text-[#2563eb] mb-2">404</h1>
              <h2 className="text-xl sm:text-2xl font-bold text-[#0f172a] mb-3">Page Not Found</h2>
              <p className="text-[#64748b] text-sm sm:text-base leading-relaxed">Oops! The page you are looking for seems to have vanished like pure water. Let's get you back on track.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 justify-center px-4">
              <Link to="/" className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-3.5 bg-[#2563eb] text-white font-semibold btn-ribbon hover:bg-[#1d4ed8] transition-all">
                <Home className="w-4 h-4" />Back to Home
              </Link>
              <button onClick={() => window.history.back()} className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-3.5 border-2 border-[#e2e8f0] text-[#334155] font-semibold btn-ribbon hover:bg-[#f1f5f9] transition-all">
                <ArrowLeft className="w-4 h-4" />Go Back
              </button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
