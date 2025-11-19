import { lazy, Suspense } from "react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

// Lazy load section components for better performance
const HistorySection = lazy(() => import("@/components/about/HistorySection"));
const DifferenceSection = lazy(() => import("@/components/about/DifferenceSection"));
const PhilosophySection = lazy(() => import("@/components/about/PhilosophySection"));
const ClosingSection = lazy(() => import("@/components/about/ClosingSection"));

// Loading component
const SectionLoader = () => (
  <div className="h-32 animate-pulse bg-[rgba(239,231,210,0.05)] rounded-lg mb-20"></div>
);

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-[#0A0B0A] text-[#EFE7D2] p-4 md:p-6">
      <div className="flex flex-col gap-4 h-full">
        <Navbar />

        {/* Main Content */}
        <div className="flex-1 rounded-3xl overflow-hidden bg-black border border-[rgba(239,231,210,0.08)]">
          <div className="p-8 md:p-12 lg:p-16 max-w-7xl mx-auto">
            {/* History Section */}
            <Suspense fallback={<SectionLoader />}>
              <HistorySection />
            </Suspense>
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-[rgba(239,231,210,0.3)] to-transparent mx-auto mb-20"></div>

            {/* What Makes Us Different */}
            <Suspense fallback={<SectionLoader />}>
              <DifferenceSection />
            </Suspense>
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-[rgba(239,231,210,0.3)] to-transparent mx-auto mb-20"></div>

            {/* Our Philosophy */}
            <Suspense fallback={<SectionLoader />}>
              <PhilosophySection />
            </Suspense>
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-[rgba(239,231,210,0.3)] to-transparent mx-auto mb-20"></div>

            {/* Closing Statement and Back Button */}
            <Suspense fallback={<SectionLoader />}>
              <ClosingSection />
            </Suspense>
          </div>
        </div>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
}
