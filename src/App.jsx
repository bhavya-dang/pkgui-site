import { lazy, Suspense } from "react";
import { Analytics } from "@vercel/analytics/react";
import Header from "../components/Header.jsx";
import Hero from "../components/Hero.jsx";
import Footer from "../components/Footer.jsx";
import NoiseBackground from "../components/NoiseBackground.jsx";

const Features = lazy(() => import("../components/Features.jsx"));
const Installation = lazy(() => import("../components/Installation.jsx"));
const Keybindings = lazy(() => import("../components/Keybindings.jsx"));
const Roadmap = lazy(() => import("../components/Roadmap.jsx"));

function SectionFallback() {
  return <div className="py-20 lg:py-28" />;
}

function App() {
  return (
    <div className="min-h-screen bg-[var(--bg)] text-[var(--text)]">
      <NoiseBackground />
      <Header />
      <Hero />
      <div className="px-5 sm:px-8 lg:px-10">
        <div className="border-t border-[var(--border)]" />
      </div>
      <Suspense fallback={<SectionFallback />}>
        <Features />
      </Suspense>
      <div className="px-5 sm:px-8 lg:px-10">
        <div className="border-t border-[var(--border)]" />
      </div>
      <Suspense fallback={<SectionFallback />}>
        <Installation />
      </Suspense>
      <div className="px-5 sm:px-8 lg:px-10">
        <div className="border-t border-[var(--border)]" />
      </div>
      <Suspense fallback={<SectionFallback />}>
        <Keybindings />
      </Suspense>
      <div className="px-5 sm:px-8 lg:px-10">
        <div className="border-t border-[var(--border)]" />
      </div>
      <Suspense fallback={<SectionFallback />}>
        <Roadmap />
      </Suspense>
      <Footer />
      <Analytics />
    </div>
  );
}

export default App;
