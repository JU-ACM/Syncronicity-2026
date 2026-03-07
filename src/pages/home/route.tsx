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
// import About from "./sections/about/About";
import SponsorsComingSoon from "./sections/about/SponsorsComingSoon";
import GoToTop from "../../../components/GoToTop";
import FixedNavbar from "../../../components/FixedNavbar";
import Marquee1 from "../../../components/marquee/Marquee1";
import Marquee2 from "../../../components/marquee/Marquee2";
import LogoIconMono from "../../../components/icons/LogoIconMono";
import { useEffect, useState } from "react";

export const HomeRoute = () => {
  const lenis = useLenis();

  // 1. Create a state to hold the dynamic size
  const [marqueeIconSize, setMarqueeIconSize] = useState(50);

  // 2. Setup the resize listener
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      
      // Define your breakpoints
      if (width < 768) {
        setMarqueeIconSize(30); // Mobile
      } else if (width < 1024) {
        setMarqueeIconSize(40); // Tablet
      } else {
        setMarqueeIconSize(50); // Desktop
      }
    };

    // Run once on mount to get initial size
    handleResize();

    // Listen for window resize events
    window.addEventListener("resize", handleResize);

    // Cleanup listener on unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="w-full min-h-screen bg-[#B2D9E7] overflow-hidden">
      <FixedNavbar />
      <GoToTop lenis={lenis} />
      <div className="relative min-h-screen w-full">
        <Dashboard />
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
        <div className="absolute translate-y-9 lg:-rotate-2 md:-rotate-2 -rotate-4 bottom-0 z-19 flex justify-end w-full ">
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
