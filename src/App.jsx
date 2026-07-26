import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import LoadingSpinner from '@/components/common/LoadingSpinner';

const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Services = lazy(() => import('./pages/Services'));
const Brands = lazy(() => import('./pages/Brands'));
const BrandDetail = lazy(() => import('./pages/BrandDetail'));
const Contact = lazy(() => import('./pages/Contact'));
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicyPage'));
const Terms = lazy(() => import('./pages/Terms'));
const ThankYou = lazy(() => import('./pages/ThankYou'));
const NotFound = lazy(() => import('./pages/NotFound'));

function PageLoader() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <LoadingSpinner size="lg" />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="services" element={<Services />} />
            <Route path="brands" element={<Brands />} />
            <Route path="brands/:brandId" element={<BrandDetail />} />
            <Route path="contact" element={<Contact />} />
            <Route path="privacy-policy" element={<PrivacyPolicy />} />
            <Route path="terms" element={<Terms />} />
            <Route path="thank-you" element={<ThankYou />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
