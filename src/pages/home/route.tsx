import About from "./sections/about/About";
import { Dashboard } from "./sections/dashboard/Dashboard";
import Events from "./sections/events/Events";
import FAQ from "./sections/faq/FAQ";
import Footer from "./sections/footer/Footer";
import Stats from "./sections/stats/Stats";
import Timeline from "./sections/timeline/Timeline";
import TimelineMobile from "./sections/timeline/TimelineMobile";
import WhySection from "./sections/whySection/WhySection";

export const HomeRoute = () => {
  return (
    <div className="w-full min-h-screen bg-[#131313]">
      <Dashboard />
      <WhySection />
      <Stats />

      <Events />
      <div className="h-[30vh]" />
      <About />
      <div className="hidden md:block">
        <Timeline />
      </div>

      <div className="block md:hidden lg:hidden">
        <TimelineMobile />
      </div>
      <FAQ />
      <Footer />
    </div>
  );
};
