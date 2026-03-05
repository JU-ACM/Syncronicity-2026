import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Clouds = () => {
  // 1. Create refs for the main container and each individual layer
  const cloudsContainerRef = useRef(null);
  const layer0Ref = useRef(null);
  const layer1Ref = useRef(null);
  const layer2Ref = useRef(null);
  const layer3Ref = useRef(null);
  const layer4Ref = useRef(null);
  const layer5Ref = useRef(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add(
        {
          isMobile: "(max-width: 768px)",
          isDesktop: "(min-width: 769px)",
        },
        (context) => {
          if (!context.conditions) return;
          const { isMobile, isDesktop } = context.conditions;

          const parallax = gsap.timeline({
            scrollTrigger: {
              trigger: ".hero-class",
              start: "top top", // Starts when the container hits the top of the viewport
              end: "bottom top", // Ends when the bottom of the container hits the top
              scrub: 0.5, // Matches the smooth scrub feel from your Hero component
            },
          });

          // --- Layer 0: Extreme Background ---
          parallax.to(
            layer0Ref.current,
            {
              // Mobile moves less distance to keep smaller images on screen
              translateY: isDesktop ? 100 : 30,
              force3D: true,
            },
            0
          );

          // --- Layer 1: Base Background ---
          parallax.to(
            layer1Ref.current,
            {
              translateY: isDesktop ? 50 : 15,
              force3D: true,
            },
            0
          );

          // --- Layer 2: Mid-Background ---
          parallax.to(
            layer2Ref.current,
            {
              translateY: isDesktop ? -200 : -60,
              force3D: true,
            },
            0
          );

          // --- Layer 3: Mid-Foreground ---
          parallax.to(
            layer3Ref.current,
            {
              translateY: isDesktop ? -400 : -120,
              force3D: true,
            },
            0
          );

          // --- Layer 4: Foreground ---
          parallax.to(
            layer4Ref.current,
            {
              translateY: isDesktop ? -800 : -250,
              force3D: true,
            },
            0
          );

          // --- Layer 5: Extreme Foreground ---
          parallax.to(
            layer5Ref.current,
            {
              translateY: isDesktop ? -1500 : -500,
              force3D: true,
            },
            0
          );
        }
      );
    },
    { scope: cloudsContainerRef }
  );

  return (
    <div ref={cloudsContainerRef}>
      {/* --- LAYER 0: Extreme Background (-z-10 | w-50 to w-60) --- */}
      <div ref={layer0Ref}>
        <img
          src="src/assets/clouds/cloud-3.png"
          className="absolute z-0 md:w-70 w-30 left-1/2 -translate-x-1/2 bottom-0 -translate-y-2"
          alt="cloud-3"
        />
      </div>

      {/* --- LAYER 1: Base / Background (z-auto & z-0 | w-100) --- */}
      <div ref={layer1Ref}>
        <img
          src="src/assets/clouds/cloud-1.png"
          className="absolute z-10 md:w-100 w-40 right-0 bottom-0 md:translate-y-10 translate-y-5 md:translate-x-40"
          alt="cloud-1"
        />
        <img
          src="src/assets/clouds/cloud-2.png"
          className="absolute z-10 md:w-100 w-40 md:right-70 right-25 bottom-0 md:translate-y-10 translate-y-5"
          alt="cloud-2"
        />
        <img
          src="src/assets/clouds/cloud-3.png"
          className="absolute z-10 md:w-100 w-40 left-0 bottom-0 md:-translate-x-40 md:translate-y-10 translate-y-5"
          alt="cloud-3"
        />
        <img
          src="src/assets/clouds/cloud-1.png"
          className="absolute z-10 md:w-100 w-40 md:left-80 left-20 bottom-0 md:translate-y-10 translate-y-7"
          alt="cloud-1"
        />
      </div>

      {/* --- LAYER 2: Mid-Background (z-50 | w-150) --- */}
      <div ref={layer2Ref}>
        <img
          src="src/assets/clouds/cloud-2.png"
          className="absolute z-50 md:w-150 w-60 left-0 bottom-0 md:translate-y-30 translate-y-20 -translate-x-10"
          alt="cloud-2"
        />
        <img
          src="src/assets/clouds/cloud-3.png"
          className="absolute z-50 md:w-150 w-60 right-0 bottom-0 md:translate-y-30 translate-y-20 translate-x-10"
          alt="cloud-3"
        />
      </div>

      {/* --- LAYER 3: Mid-Foreground (z-60 | w-160) --- */}
      <div ref={layer3Ref}>
        <img
          src="src/assets/clouds/cloud-1.png"
          className="absolute z-60 md:w-160 w-70 left-1/2 -translate-x-1/2 bottom-0 md:translate-y-50 translate-y-25"
          alt="cloud-3"
        />
      </div>

      {/* --- LAYER 4: Foreground (z-70 | w-200) --- */}
      <div ref={layer4Ref}>
        <img
          src="src/assets/clouds/cloud-1.png"
          className="absolute z-70 md:w-200 w-90 left-0 bottom-0 md:translate-y-90 translate-y-40 -translate-x-20"
          alt="cloud-1"
        />
        <img
          src="src/assets/clouds/cloud-2.png"
          className="absolute z-70 md:w-200 w-90 right-0 bottom-0 md:translate-y-90 translate-y-40 translate-x-40"
          alt="cloud-2"
        />
      </div>

      {/* --- LAYER 5: Extreme Foreground (z-80 | w-200) --- */}
      <div ref={layer5Ref}>
        <img
          src="src/assets/clouds/cloud-1.png"
          className="absolute z-80 md:w-250 w-120 md:left-100 left-20 bottom-0 md:translate-y-150 translate-y-60"
          alt="cloud-1"
        />
      </div>
    </div>
  );
};

export default Clouds;