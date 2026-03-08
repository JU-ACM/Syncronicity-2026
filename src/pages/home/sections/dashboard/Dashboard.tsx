import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";

import herobg from "../../../../assets/dashboard/hero-bg.webp";
import heroimg from "../../../../assets/dashboard/hero-img.webp";
import icpcMockFest from "../../../../assets/dashboard/icpc-mockfest-card.webp";
import syncS1 from "../../../../assets/dashboard/synchronicity-s1-card.webp";
import ListofLinks from "./ListofLinks";
import Description from "./Description";
import { EventCard } from "./EventCard";
import Navbar from "../../../../../components/Navbar";
import FunkyColorButton from "../../../../../components/FunkyColorButton";
import DiscordIcon from "../../../../../components/icons/DiscordIcon";
// import DevfolioIcon from "../../../../../components/icons/DevfolioIcon";

gsap.registerPlugin(ScrollTrigger);

interface DashboardProps {
  animateIn?: boolean; // ← NEW: fires GSAP only when Transition is done
}

export const Dashboard: React.FC<DashboardProps> = ({ animateIn = false }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleLine1Ref = useRef<HTMLSpanElement>(null);
  const titleLine2Ref = useRef<HTMLSpanElement>(null);
  const heroImgRef = useRef<HTMLImageElement>(null);
  const leftCardRef = useRef<HTMLDivElement>(null);
  const rightCardRef = useRef<HTMLDivElement>(null);
  const listLinksRef = useRef<HTMLDivElement>(null);
  const descriptionRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLDivElement>(null);

  // ─── Hide all elements immediately on mount ─────────────────────────────
  // Runs once so nothing flashes visible while the Transition is playing.
  useEffect(() => {
    const targets = [
      navRef.current,
      titleLine1Ref.current,
      titleLine2Ref.current,
      heroImgRef.current,
      leftCardRef.current,
      rightCardRef.current,
      listLinksRef.current,
      descriptionRef.current,
    ].filter(Boolean);
    gsap.set(targets, { opacity: 0 });
  }, []);

  useEffect(() => {
    // Do nothing until the parent signals the transition is complete
    if (!animateIn) return;

    const ctx = gsap.context(() => {
      // ─── Master timeline ─────────────────────────────────────────
      // delay: 0 — the Transition's onComplete IS our timing signal now
      const tl = gsap.timeline({ defaults: { ease: "power3.inOut" } });

      // 1. Navbar fades down from above
      if (navRef.current) {
        tl.fromTo(
          navRef.current,
          { y: -60, opacity: 0 },
          { y: 0, opacity: 1, duration: 1 },
          0
        );
      }

      // 2. Title — ClipPath Wipe Animation
      const titleLines = [titleLine1Ref.current, titleLine2Ref.current].filter(Boolean);
      if (titleLines.length) {
        tl.fromTo(
          titleLines,
          { clipPath: "inset(0 100% 0 0)", xPercent: 50, opacity: 0 },
          {
            opacity: 1,
            clipPath: "inset(0 0% 0 0)",
            xPercent: 0,
            duration: 1.2,
            stagger: 0.5,
            ease: "power3.out",
          },
          0.2
        );
      }

      // 3. Hero robot image — rises from below with elastic
      if (heroImgRef.current) {
        tl.fromTo(
          heroImgRef.current,
          { y: 120, opacity: 0, scale: 0.88 },
          { y: 0, opacity: 1, scale: 1, duration: 1.5, ease: "elastic.out(1, 0.6)" },
          1
        );
      }

      // 4. Left card — slides in from the left
      if (leftCardRef.current) {
        tl.fromTo(
          leftCardRef.current,
          { x: -140, opacity: 0, rotate: -8 },
          { x: 0, opacity: 1, rotate: 0, duration: 0.9, ease: "power4.out" },
          0.75
        );
      }

      // 5. Right card — slides in from the right
      if (rightCardRef.current) {
        tl.fromTo(
          rightCardRef.current,
          { x: 140, opacity: 0, rotate: 8 },
          { x: 0, opacity: 1, rotate: 0, duration: 0.9, ease: "power4.out" },
          0.75
        );
      }

      // 6. ListOfLinks — fades + slides up
      if (listLinksRef.current) {
        tl.fromTo(
          listLinksRef.current,
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6 },
          1.1
        );
      }

      // 7. Description — fades + slides up
      if (descriptionRef.current) {
        tl.fromTo(
          descriptionRef.current,
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6 },
          1.25
        );
      }
    }, containerRef);

    return () => ctx.revert();
  }, [animateIn]); // ← Re-runs only when animateIn flips to true

  //_______________________________________________________________________________________
  // Devfolio useEffect
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://apply.devfolio.co/v2/sdk.js';
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    }
  }, []);
  //_______________________________________________________________________________________

  // CTA buttons use Framer Motion — key prop forces re-mount when animateIn fires,
  // so delayChildren is measured from transition completion, not page load.
  return (
    <div
      ref={containerRef}
      className="
        hero-class w-screen md:w-full h-220
        flex flex-col items-center justify-start
        bg-no-repeat bg-center bg-cover
      "
      style={{ backgroundImage: `url(${herobg})` }}
    >
      <div ref={navRef} className="relative z-500" style={{ width: "100%" }}>
        <Navbar />
      </div>

      <section className="h-full w-full relative">
        {/* Left Event Card */}
        <div ref={leftCardRef} className="absolute hidden xl:block left-15 top-60 cursor-pointer">
          <EventCard
            imageUrl={syncS1}
            title="Synchronicity S1"
            duration="10-hour · on-site"
            eventType="hackathon"
            prizePool="₹17,000 prize pool"
            date="20 January 2024"
            tiltDirection="left"
          />
        </div>

        {/* Title */}
        <p
          className="
            absolute left-1/2 -translate-x-1/2
            md:top-15 top-30
            font-bounded lg:text-8xl md:text-6xl text-4xl
            text-white text-center leading-tight z-0
          "
        >
          <span style={{ display: "block" }}>
            <span ref={titleLine1Ref} style={{ display: "inline-block" }}>
              Synchronicity
            </span>
          </span>
          <span style={{ display: "block" }}>
            <span ref={titleLine2Ref} style={{ display: "inline-block" }} className="text-blue-600">
              Season 2
            </span>
          </span>
        </p>

        {/* ListOfLinks */}
        <div ref={listLinksRef} style={{ position: "absolute", width: "100%", zIndex: 50 }}>
          <ListofLinks className="hidden md:flex xl:left-80 xl:top-79 lg:left-30 lg:top-79 md:left-[10vw] top-60" />
        </div>

        {/* Hero image */}
        <img
          ref={heroImgRef}
          className="absolute left-1/2 -translate-x-1/2 lg:top-45 md:top-35 top-50 lg:w-120 md:w-100 w-70 object-contain"
          src={heroimg}
          alt="robot image"
        />

        {/* Description */}
        <div ref={descriptionRef} style={{ position: "absolute", width: "100%" }}>
          <Description className="xl:right-80 xl:top-79 lg:right-30 lg:top-79 md:right-[10vw] md:translate-x-0 md:left-auto md:top-59 left-1/2 -translate-x-1/2 top-120" />
        </div>

        {/*
          CTA Buttons — key={String(animateIn)} re-mounts the motion.div
          so the stagger always starts fresh from transition completion.
        */}
        <motion.div
          key={String(animateIn)}
          className="absolute w-full flex flex-col gap-3 lg:top-125 md:top-140 top-160 items-center lg:items-end"
          initial="hidden"
          animate={animateIn ? "visible" : "hidden"}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                delayChildren: 0.6, // small breathing room after transition ends
                staggerChildren: 0.1,
              },
            },
          }}
        >
          <motion.div
            variants={{
              hidden: { opacity: 0, scale: 0.92 },
              visible: { opacity: 1, scale: 1, transition: { duration: 0.3, ease: "backOut" } },
            }}
          >
            {/* <FunkyColorButton
              icon={<DevfolioIcon size={28} color="white" />}
              color1="#3770ff"
              color2="#00DB96"
              textColor="white"
              className="font-unbounded font-bold w-78 px-8 py-3 xl:-translate-x-76 lg:-translate-x-28 translate-x-0"
            >
              Apply with Devfolio
            </FunkyColorButton> */}
            <div
              className="apply-button xl:-translate-x-76 lg:-translate-x-28 translate-x-0"
              data-hackathon-slug="synchronicity-s-2"
              data-button-theme="light"
              style={{ height: "44px", width: "312px" }}
            ></div>
          </motion.div>

          <motion.div
            variants={{
              hidden: { opacity: 0, scale: 0.92 },
              visible: { opacity: 1, scale: 1, transition: { duration: 0.3, ease: "backOut" } },
            }}
          >
            <FunkyColorButton
              icon={<DiscordIcon size={28} />}
              color1="#5765F1"
              color2="#00DB96"
              textColor="white"
              onClick={() =>
                window.open("https://discord.gg/zAQB3aFw", "_blank", "noopener,noreferrer")
              }
              className="font-unbounded font-bold w-78 px-8 py-3 xl:-translate-x-76 lg:-translate-x-28 translate-x-0"
            >
              Join Discord
            </FunkyColorButton>
          </motion.div>
        </motion.div>

        {/* Right Event Card */}
        <div ref={rightCardRef} className="absolute hidden xl:block right-15 top-60 cursor-pointer">
          <EventCard
            imageUrl={icpcMockFest}
            title="ICPC Mock Fest"
            duration="3-hour · virtual"
            eventType="coding competition"
            prizePool="200+ participants"
            date="7 October 2025"
            tiltDirection="right"
          />
        </div>
      </section>
    </div>
  );
};