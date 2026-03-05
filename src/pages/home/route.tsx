import { Dashboard } from "./sections/dashboard/Dashboard";
import Events from "./sections/events/Events";
import FAQ from "./sections/faq/FAQ";
import Footer from "./sections/footer/Footer";
import Stats from "./sections/stats/Stats";
import ProblemStatement from './sections/problemStatement/ProblemStatement'
import Timeline from "./sections/timeline/Timeline";
import TimelineMobile from "./sections/timeline/TimelineMobile";
import WhySection from "./sections/whySection/WhySection";
import Clouds from "./sections/dashboard/Clouds";
// import About from "./sections/about/About";
import SponsorsComingSoon from "./sections/about/SponsorsComingSoon";

export const HomeRoute = () => {
  return (
    <div className="w-full min-h-screen bg-[#131313]">
      <Dashboard />
      <div className="absolute top-[120vh] w-full">
        <Clouds />

      </div>
      <div className="bg-linear-to-b from-[#9ECCDC] via-[#CAE7F1] to-[#B2D7E3]">
        <WhySection />
        <ProblemStatement />
        <Stats />

        <Events />
        <div className="h-[30vh]" />
      </div>

      {/* <About /> */}

      <div className="hidden md:block">
        <Timeline />
      </div>

      <div className="block md:hidden lg:hidden">
        <TimelineMobile />
      </div>
      <SponsorsComingSoon />
      <FAQ />
      <Footer />
    </div>
  );
};
