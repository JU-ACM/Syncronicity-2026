import { ReactLenis, useLenis } from "lenis/react";

import { Dashboard } from "./sections/dashboard/Dashboard";
import Clouds from "../../../components/Clouds";
import Events from "./sections/events/Events";
import FAQ from "./sections/faq/FAQ";
import Footer from "./sections/footer/Footer";
import Stats from "./sections/stats/Stats";
import ProblemStatement from "./sections/problemStatement/ProblemStatement";
import Timeline from "./sections/timeline/Timeline";
import TimelineMobile from "./sections/timeline/TimelineMobile";
import WhySection from "./sections/whySection/WhySection";
// import About from "./sections/about/About";
import SponsorsComingSoon from "./sections/about/SponsorsComingSoon";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export const HomeRoute = () => {
  const lenis = useLenis();
  const { pathname } = useLocation();

  useEffect(() => {
    requestAnimationFrame(() => {
      lenis?.scrollTo(0, { immediate: true });
    });
  }, [pathname]);

  useEffect(() => {
    if (!lenis) return;

    const onKeyDown = (e: KeyboardEvent) => {
      const keys = [
        "ArrowDown",
        "ArrowUp",
        "PageDown",
        "PageUp",
        "Home",
        "End",
      ];
      if (!keys.includes(e.key)) return;

      e.preventDefault();

      const scrollAmount = window.innerHeight * 0.8;

      if (e.key === "ArrowDown" || e.key === "PageDown") {
        lenis.scrollTo(lenis.scroll + scrollAmount, { duration: 1.2 });
      }

      if (e.key === "ArrowUp" || e.key === "PageUp") {
        lenis.scrollTo(lenis.scroll - scrollAmount, { duration: 1.2 });
      }

      if (e.key === "Home") {
        lenis.scrollTo(0, { duration: 1.4 });
      }

      if (e.key === "End") {
        lenis.scrollTo(document.body.scrollHeight, { duration: 1.4 });
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [lenis]);

  return (
    <ReactLenis
      root
      options={{
        easing: (t) => 1 - Math.pow(1 - t, 3),
        duration: 1.2,
        smoothWheel: true,
        syncTouch: false,
        touchMultiplier: 1.5,
        wheelMultiplier: 1.5,
      }}
    >
      <div className="w-full min-h-screen bg-[#131313] overflow-hidden">
        <div className="relative min-h-screen w-full">
          <Dashboard />
          <Clouds />
        </div>

        <div className="bg-linear-to-b from-[#9ECCDC] via-[#CAE7F1] to-[#B2D7E3]">
          <WhySection />
          <ProblemStatement />
          <Stats />

          <Events />
          <div className="h-[30vh]" />
        </div>

        <SponsorsComingSoon />

        <div className="hidden md:block">
          <Timeline />
        </div>

        <div className="block md:hidden lg:hidden">
          <TimelineMobile />
        </div>

        <FAQ />
        <Footer />
      </div>
    </ReactLenis>
  );
};
