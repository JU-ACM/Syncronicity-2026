import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import cloud1 from "../src/assets/clouds/cloud-1.webp"
import cloud2 from "../src/assets/clouds/cloud-2.webp"
import cloud3 from "../src/assets/clouds/cloud-3.webp"

gsap.registerPlugin(ScrollTrigger);

const Clouds = () => {
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
          const { isDesktop } = context.conditions;

          const parallax = gsap.timeline({
            scrollTrigger: {
              trigger: ".hero-class",
              start: "top top",
              end: "bottom top",
              scrub: 0.5,
            },
          });

          // Layer 0: Extreme Background
          parallax.to(layer0Ref.current, { translateY: isDesktop ? 100 : 30, force3D: true }, 0);
          // Layer 1: Base Background
          parallax.to(layer1Ref.current, { translateY: isDesktop ? 50 : 15, force3D: true }, 0);
          // Layer 2: Mid-Background
          parallax.to(layer2Ref.current, { translateY: isDesktop ? -200 : -60, force3D: true }, 0);
          // Layer 3: Mid-Foreground
          parallax.to(layer3Ref.current, { translateY: isDesktop ? -400 : -120, force3D: true }, 0);
          // Layer 4: Foreground
          parallax.to(layer4Ref.current, { translateY: isDesktop ? -800 : -250, force3D: true }, 0);
          // Layer 5: Extreme Foreground
          parallax.to(layer5Ref.current, { translateY: isDesktop ? -1500 : -500, force3D: true }, 0);
        }
      );
    },
    { scope: cloudsContainerRef }
  );

  return (
    <div ref={cloudsContainerRef}>
      {/* --- LAYER 0: Extreme Background (1.3x of 15.4vw) --- */}
      <div ref={layer0Ref}>
        <img
          src={cloud3}
          className="absolute z-0 md:w-[20vw] w-[9.75rem] left-1/2 -translate-x-1/2 bottom-0 -translate-y-2 md:translate-y-0"
          alt="cloud-3"
        />
      </div>

      {/* --- LAYER 1: Base / Background (1.3x of 22vw) --- */}
      <div ref={layer1Ref}>
        <img
          src={cloud1}
          className="absolute z-10 md:w-[28.6vw] w-52 right-0 bottom-0 md:translate-y-5 translate-y-5 md:translate-x-10"
          alt="cloud-1"
        />
        <img
          src={cloud2}
          className="absolute z-10 md:w-[28.6vw] w-52 md:right-40 right-25 bottom-0 md:translate-y-5 translate-y-5"
          alt="cloud-2"
        />
        <img
          src={cloud3}
          className="absolute z-10 md:w-[28.6vw] w-52 left-0 bottom-0 md:-translate-x-10 md:translate-y-10 translate-y-5"
          alt="cloud-3"
        />
        <img
          src={cloud1}
          className="absolute z-10 md:w-[28.6vw] w-52 md:left-40 left-20 bottom-0 md:translate-y-10 translate-y-7"
          alt="cloud-1"
        />
      </div>

      {/* --- LAYER 2: Mid-Background (1.3x of 33vw) --- */}
      <div ref={layer2Ref}>
        <img
          src={cloud2}
          className="absolute z-50 md:w-[42.9vw] w-[19.5rem] left-0 bottom-0 md:translate-y-30 translate-y-20 -translate-x-10"
          alt="cloud-2"
        />
        <img
          src={cloud3}
          className="absolute z-50 md:w-[42.9vw] w-[19.5rem] right-0 bottom-0 md:translate-y-30 translate-y-20 translate-x-10"
          alt="cloud-3"
        />
      </div>

      {/* --- LAYER 3: Mid-Foreground (1.3x of 35.2vw) --- */}
      <div ref={layer3Ref}>
        <img
          src={cloud1}
          className="absolute z-60 md:w-[45.7vw] w-[22.75rem] left-1/2 -translate-x-1/2 bottom-0 md:translate-y-40 translate-y-25"
          alt="cloud-3"
        />
      </div>

      {/* --- LAYER 4: Foreground (1.3x of 44vw) --- */}
      <div ref={layer4Ref}>
        <img
          src={cloud1}
          className="absolute z-70 md:w-[57.2vw] w-[29.25rem] left-0 bottom-0 md:translate-y-70 translate-y-40 -translate-x-20"
          alt="cloud-1"
        />
        <img
          src={cloud2}
          className="absolute z-70 md:w-[57.2vw] w-[29.25rem] right-0 bottom-0 md:translate-y-70 translate-y-40 translate-x-40"
          alt="cloud-2"
        />
      </div>

      {/* --- LAYER 5: Extreme Foreground (1.3x of 55vw) --- */}
      <div ref={layer5Ref}>
        <img
          src={cloud1}
          className="absolute z-80 md:w-[71.5vw] w-[39rem] md:left-60 left-20 bottom-0 md:translate-y-110 translate-y-60"
          alt="cloud-1"
        />
      </div>
    </div>
  );
};

export default Clouds;