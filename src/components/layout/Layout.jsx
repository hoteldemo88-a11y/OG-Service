import { lazy, Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import ScrollToTop from '@/components/common/ScrollToTop';

const Footer = lazy(() => import('@/components/layout/Footer'));
const FloatingCallButton = lazy(() => import('@/components/common/FloatingCallButton'));
const BottomNav = lazy(() => import('@/components/common/BottomNav'));

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-[100] focus:bg-[#2563eb] focus:text-white focus:px-4 focus:py-2 focus:rounded-lg focus:outline-none">Skip to main content</a>
      <Navbar />
      <main className="flex-1 pb-20 lg:pb-0" id="main-content" role="main">
        <Outlet />
      </main>
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
      <ScrollToTop />
      <Suspense fallback={null}>
        <div className="hidden lg:block"><FloatingCallButton /></div>
      </Suspense>
      <Suspense fallback={null}>
        <BottomNav />
      </Suspense>
    </div>
  );
}
