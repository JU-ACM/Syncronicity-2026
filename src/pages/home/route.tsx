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

export const HomeRoute = () => {
  const lenis = useLenis();

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

      <div className="hidden md:block relative z-50">
        <Timeline />
        <CityScape className="absolute h-[50vh] z-10 top-0 w-full" />
      </div>

      <div className="block md:hidden lg:hidden relative z-50">
        <TimelineMobile />
        <CityScape className="absolute z-10 top-0 w-full" />
      </div>
      <SponsorsComingSoon />
      <div className="bg-[#131313]">
        <FAQ />
      </div>
      <Footer />
    </div>
  );
};
