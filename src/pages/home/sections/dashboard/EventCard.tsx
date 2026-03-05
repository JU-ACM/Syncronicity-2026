import React, { useMemo, useRef, useEffect } from "react";
import { gsap } from "gsap";

interface EventCardProps {
  title?: string;
  duration?: string;
  eventType?: string;
  prizePool?: string;
  date?: string;
  imageUrl?: string;
  className?: string;
  tiltDirection?: "left" | "right";
}

const EventCard: React.FC<EventCardProps> = ({
  title = "Synchronicity S2",
  duration = "10-hour · on-site",
  eventType = "hackathon",
  prizePool = "₹23,000 prize pool",
  date = "11 April 2025",
  imageUrl,
  className = "",
  tiltDirection = "left",
}) => {
  const stars = useMemo(
    () =>
      Array.from({ length: 20 }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        top: Math.random() * 100,
        duration: 2 + Math.random() * 3,
      })),
    [],
  );

  // Refs for GSAP targets
  const floatContainerRef = useRef<HTMLDivElement>(null); // Handles the float for both
  const badgeRef = useRef<HTMLDivElement>(null); // Targets the badge specifically for fade
  const wrapperRef = useRef<HTMLDivElement>(null); // Handles the 3D card rotation
  const imageBoxRef = useRef<HTMLDivElement>(null);
  const borderRef = useRef<HTMLDivElement>(null);
  const tlRef = useRef<gsap.core.Timeline | null>(null);
  const floatAnimRef = useRef<gsap.core.Tween | null>(null);

  // Memoize states to prevent unnecessary re-evaluations
  const initialRotation = useMemo(
    () =>
      tiltDirection === "left"
        ? { rotateX: 25, rotateY: 30 }
        : { rotateX: 25, rotateY: -30 },
    [tiltDirection],
  );

  const imageTranslate = useMemo(
    () => (tiltDirection === "left" ? { x: 8, y: -8 } : { x: -8, y: -8 }),
    [tiltDirection],
  );

  const shadowClassValue =
    tiltDirection === "left"
      ? "-7px 10px 8px 0px rgba(0,0,0,0.25)"
      : "7px 10px 8px 0px rgba(0,0,0,0.25)";

  // ── Initialization & Floating Animation ────────────────────────────────
  useEffect(() => {
    // 1. Set Initial State
    gsap.set(wrapperRef.current, {
      rotateX: initialRotation.rotateX,
      rotateY: initialRotation.rotateY,
      y: 0,
      transformStyle: "preserve-3d",
    });

    gsap.set(imageBoxRef.current, {
      x: imageTranslate.x,
      y: imageTranslate.y,
      boxShadow: shadowClassValue,
    });

    gsap.set(borderRef.current, { autoAlpha: 1 });
    gsap.set(badgeRef.current, { autoAlpha: 1 }); // Ensure badge is visible

    // 2. Start Floating Animation on the outer container
    floatAnimRef.current = gsap.to(floatContainerRef.current, {
      y: "-=15",
      duration: 2,
      ease: "sine.inOut",
      yoyo: true,
      repeat: -1,
    });

    return () => {
      if (floatAnimRef.current) floatAnimRef.current.kill();
    };
  }, [initialRotation, imageTranslate, shadowClassValue]);

  // ── Mouse enter ──────────────────────────────────────────────────────────
  const handleMouseEnter = () => {
    if (floatAnimRef.current) floatAnimRef.current.pause();
    if (tlRef.current) tlRef.current.kill();

    const tl = gsap.timeline();
    tlRef.current = tl;

    // Fade out the floating badge using autoAlpha
    tl.to(
      badgeRef.current,
      {
        autoAlpha: 0,
        duration: 0.3,
        ease: "power2.out",
      },
      0,
    );

    tl.to(
      imageBoxRef.current,
      {
        x: 0,
        y: 0,
        boxShadow: "0px 0px 0px 0px rgba(0,0,0,0)",
        duration: 0.4,
        ease: "power2.out",
      },
      0,
    );

    tl.to(
      borderRef.current,
      {
        autoAlpha: 0,
        duration: 0.4,
        ease: "power2.out",
      },
      0,
    );

    // Lift the 3D card wrapper
    tl.to(
      wrapperRef.current,
      {
        rotateX: 0,
        rotateY: tiltDirection === "left" ? 360 : -360,
        rotateZ: 0,
        y: -50,
        duration: 0.8,
        ease: "power3.out",
      },
      0,
    );
  };

  // ── Mouse leave ──────────────────────────────────────────────────────────
  const handleMouseLeave = () => {
    if (tlRef.current) tlRef.current.kill();

    const tl = gsap.timeline({
      onComplete: () => {
        if (floatAnimRef.current) {
          floatAnimRef.current.invalidate().restart();
        }
      },
    });
    tlRef.current = tl;

    // Fade the badge back in
    tl.to(
      badgeRef.current,
      {
        autoAlpha: 1,
        duration: 0.6,
        ease: "power2.out",
      },
      0.2,
    );

    tl.to(
      wrapperRef.current,
      {
        rotateX: initialRotation.rotateX,
        rotateY: initialRotation.rotateY,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
      },
      0,
    );

    tl.to(
      borderRef.current,
      {
        autoAlpha: 1,
        duration: 0.6,
        ease: "power2.out",
      },
      0.1,
    );

    tl.to(
      imageBoxRef.current,
      {
        x: imageTranslate.x,
        y: imageTranslate.y,
        boxShadow: shadowClassValue,
        duration: 0.6,
        ease: "power2.out",
      },
      0.1,
    );
  };

  return (
    <div
      className={`w-45 h-92 ${className} mt-8`}
      style={{ perspective: "4000px" }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* --- OUTER CONTAINER: Handles the up/down float for everything inside --- */}
      <div ref={floatContainerRef} className="relative w-full h-full">
        {/* --- THE BADGE: Outside the 3D wrapper so it doesn't rotate, but still floats --- */}
        {/* Wrapper Div strictly for skew perspective to keep layout simple */}
        <div
          style={{
            transform:
              tiltDirection === "left" ? "skewX(15deg)" : "skewX(-15deg)",
          }}
          className="absolute -top-5 left-1/2 z-50"
        >
          <div
            ref={badgeRef}
            // translateX(-50%) handles the horizontal centering
            className="whitespace-nowrap px-4 py-1.5 rounded-lg bg-[#155DFC] text-white font-euclid font-medium text-xs shadow-[0_0_15px_rgba(45,212,191,0.5)] backdrop-blur-md pointer-events-none"
            style={{ transform: "translateX(-50%)" }}
          >
            Check Exciting Events
          </div>
        </div>

        {/* --- THE 3D CARD: Handles the rotation and layout --- */}
        <div
          ref={wrapperRef}
          className="relative w-full h-full"
          style={{ willChange: "transform" }}
        >
          <div className="absolute inset-0 p-0.75">
            <div
              ref={borderRef}
              className={`absolute inset-0 rounded-2xl to-gray-500 via-gray-100/30 from-white/0 ${
                tiltDirection === "left" ? "bg-linear-to-bl" : "bg-linear-to-br"
              }`}
            />

            <div className="relative z-10 h-full w-full rounded-xl bg-gradient-to-br from-cyan-50 to-cyan-100 p-[8px] flex flex-col">
              <div
                ref={imageBoxRef}
                className="relative w-full aspect-3/4 mb-1 rounded-lg overflow-hidden bg-gradient-to-br from-purple-900 via-purple-700 to-purple-500"
                style={{ willChange: "transform, box-shadow" }}
              >
                {imageUrl ? (
                  <img
                    src={imageUrl}
                    alt={title}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="relative w-full h-full flex items-center justify-center">
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-purple-700 to-purple-500">
                      {stars.map((star) => (
                        <div
                          key={star.id}
                          className="absolute w-1 h-1 bg-white rounded-full opacity-70"
                          style={{
                            left: `${star.left}%`,
                            top: `${star.top}%`,
                            animation: `twinkle ${star.duration}s infinite`,
                          }}
                        />
                      ))}
                    </div>
                    <div className="relative z-10 w-32 h-32 rounded-full border-2 border-white/30 flex items-center justify-center">
                      <div className="text-6xl">🚀</div>
                    </div>
                  </div>
                )}
              </div>

              <div className="font-euclid flex-1 flex flex-col gap-1 justify-center text-center">
                <h2 className="text-lg font-semibold text-teal-700 mb-1">
                  {title}
                </h2>
                <p className="text-sm text-teal-600">{duration}</p>
                <p className="text-sm text-teal-600">{eventType}</p>
                <p className="text-base font-semibold text-teal-700">
                  {prizePool}
                </p>
                <p className="text-sm text-teal-600">{date}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 1; }
        }
      `}</style>
    </div>
  );
};

export { EventCard };
