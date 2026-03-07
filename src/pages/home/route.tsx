import { useLenis } from "lenis/react";
import { Dashboard } from "./sections/dashboard/Dashboard";
import Clouds from "../../../components/Clouds";
import CityScape from "../../../components/CityScape";
import Events from "./sections/events/Events";
import FAQ from "./sections/faq/FAQ";
import Footer from "./sections/footer/Footer";
import Stats from "./sections/stats/Stats";
import ProblemStatement from "./sections/problemStatement/ProblemStatement";
import Timeline from "./sections/timeline/Timeline";
import TimelineMobile from "./sections/timeline/TimelineMobile";
import WhySection from "./sections/whySection/WhySection";
import SponsorsComingSoon from "./sections/about/SponsorsComingSoon";
import GoToTop from "../../../components/GoToTop";
import FixedNavbar from "../../../components/FixedNavbar";
import Marquee1 from "../../../components/marquee/Marquee1";
import Marquee2 from "../../../components/marquee/Marquee2";
import LogoIconMono from "../../../components/icons/LogoIconMono";
import Transition from "../../../components/Transition";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export const HomeRoute = () => {
  const lenis = useLenis();
  const location = useLocation();

  // ─── Transition orchestration state ───────────────────────────────────────
  // true  → page is fully painted, Transition may begin
  const [pageReady, setPageReady] = useState(false);
  // true  → Transition has finished sliding away, Dashboard may animate in
  const [transitionDone, setTransitionDone] = useState(false);

  // Signal readiness after the first full paint
  useEffect(() => {
    // requestAnimationFrame fires after the browser has painted the first frame.
    // A nested rAF guarantees the second paint (all images/fonts requested) too.
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        setPageReady(true);
      });
    });
  }, []);

  // ─── Scroll-to on navigate ─────────────────────────────────────────────────
  useEffect(() => {
    if (location.state?.scrollTo && lenis) {
      setTimeout(() => {
        lenis.scrollTo(location.state.scrollTo, { offset: 0, immediate: true });
        window.history.replaceState({}, document.title);
      }, 500);
    }
  }, [location, lenis]);

  // ─── Responsive marquee icon size ─────────────────────────────────────────
  const [marqueeIconSize, setMarqueeIconSize] = useState(50);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 768) setMarqueeIconSize(30);
      else if (width < 1024) setMarqueeIconSize(40);
      else setMarqueeIconSize(50);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="w-full min-h-screen bg-[#B2D9E7] overflow-hidden">
      {/*
        Transition receives:
          isReady      → only start once the page has painted
          onComplete   → fires when the slide-up finishes; unlocks Dashboard animations
      */}
      <Transition
        className="absolute z-99999"
        isReady={pageReady}
        onComplete={() => setTransitionDone(true)}
      />

      <FixedNavbar />
      <GoToTop lenis={lenis} />

      <div className="relative min-h-screen w-full">
        {/*
          Dashboard receives `animateIn` — it waits for this to be true
          before firing any GSAP timelines.
        */}
        <Dashboard animateIn={transitionDone} />
        <Clouds />
      </div>

      <div className="bg-linear-to-b from-[#9ECCDC] via-[#CAE7F1] to-[#B2D7E3]">
        <WhySection />
        <ProblemStatement />
        <Stats />
        <Events />
        <div className="h-[20vh] md:h-[80vh]" />
      </div>

      <div className="hidden md:block relative z-50 w-full">
        <Timeline />
        <CityScape className="absolute h-[50vh] z-10 top-0 w-full" />
      </div>

      <div className="block md:hidden lg:hidden relative z-50">
        <TimelineMobile />
        <CityScape className="absolute z-10 top-0 w-full" />
      </div>

      <SponsorsComingSoon />

      <div className="bg-[#131313] relative w-full">
        <FAQ />
        <div className="absolute lg:translate-y-15 md:translate-y-15 translate-y-10 lg:rotate-4 md:rotate-4 rotate-9 bottom-0 z-800 w-full">
          <Marquee1
            texts={["Thanks For Visiting", "See You at Synchronicity 2.0"]}
            Icon={LogoIconMono}
            iconSize={marqueeIconSize}
            iconColor="white"
            textColor="text-white"
            bgColor="bg-[#155DFC]"
          />
        </div>
        <div className="absolute translate-y-9 lg:-rotate-2 md:-rotate-2 -rotate-4 bottom-0 z-19 flex justify-end w-full">
          <Marquee2
            texts={["Synchronicity 2.0"]}
            Icon={LogoIconMono}
            iconSize={marqueeIconSize}
            iconColor="white"
            textColor="text-white"
            bgColor="bg-[#00DB96]"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};
