import { Route, Routes } from "react-router-dom";
import "./App.css";
import { HomeRoute } from "./pages/home/route";
import Stats from "./pages/home/sections/stats/Stats";
import Membership from "./pages/home/sections/membership/Membership";

import { ReactLenis } from "lenis/react";
import { useEffect } from "react";
import Lenis from "lenis";

import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      wheelMultiplier: 1,
      touchMultiplier: 2,
      smoothWheel: true,
    });

    const update = (time: number) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(update);
    gsap.ticker.lagSmoothing(0);

    lenis.on("scroll", ScrollTrigger.update);

    return () => {
      gsap.ticker.remove(update);
      lenis.destroy();
    };
  }, []);

  return (
    <ReactLenis root>
      <div className="flex items-center justify-center h-screen w-full bg-amber-50">
        <h1 className="font-euclid text-8xl font-bold">Section 1</h1>
      </div>

      <Stats />
      <Membership />

	  <div className="flex items-center justify-center h-screen w-full bg-amber-50">
        <h1 className="font-euclid text-8xl font-bold">Section 2</h1>
      </div>

      <Routes>
        <Route path="/home" element={<HomeRoute />} />
      </Routes>
    </ReactLenis>
  );
}

export default App;
