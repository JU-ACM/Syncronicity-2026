import { Navigate, Route, Routes, useLocation } from "react-router-dom";
// import './App.css'
import { HomeRoute } from "./pages/home/route";
import { EventRoute } from "./pages/event/route";
import { ProblemRoute } from "./pages/problem/route";
import NotFound from "./pages/notFound/NotFound";
import CustomCursor from "../components/customCursor/CustomCursor";

import "./index.css";
import ReactLenis, { useLenis } from "lenis/react";
import { useEffect } from "react";

function App() {
  const lenis = useLenis();
  const { pathname } = useLocation();

  useEffect(() => {
    requestAnimationFrame(() => {
      lenis?.scrollTo(0, { immediate: true });
    });
  }, [pathname, lenis]);

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
    <>
      <ReactLenis
        root
        options={{
          easing: (t: number) => 1 - Math.pow(1 - t, 3),
          duration: 1.2,
          smoothWheel: true,
          syncTouch: false,
          touchMultiplier: 1.5,
          wheelMultiplier: 1.5,
        }}
      >
        <CustomCursor />

        <Routes>
          <Route path="/" element={<Navigate to="/home" replace />} />
          <Route path="/home" element={<HomeRoute />} />
          <Route path="/event/*" element={<EventRoute />} />
          <Route path="/problem/*" element={<ProblemRoute />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </ReactLenis>
    </>
  );
}

export default App;
