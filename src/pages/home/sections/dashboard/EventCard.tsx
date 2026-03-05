import React, { useMemo, useRef, useEffect } from 'react';
import { gsap } from 'gsap';

interface EventCardProps {
  title?: string;
  duration?: string;
  eventType?: string;
  prizePool?: string;
  date?: string;
  imageUrl?: string;
  className?: string;
  tiltDirection?: 'left' | 'right';
}

const EventCard: React.FC<EventCardProps> = ({
  title = "Synchronicity S2",
  duration = "10-hour · on-site",
  eventType = "hackathon",
  prizePool = "₹23,000 prize pool",
  date = "11 April 2025",
  imageUrl,
  className = "",
  tiltDirection = 'left'
}) => {
  const stars = useMemo(() =>
    Array.from({ length: 20 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      duration: 2 + Math.random() * 3
    }))
  , []);

  // Refs for GSAP targets
  const wrapperRef = useRef<HTMLDivElement>(null);
  const imageBoxRef = useRef<HTMLDivElement>(null);
  const borderRef = useRef<HTMLDivElement>(null);
  const tlRef = useRef<gsap.core.Timeline | null>(null);
  const floatAnimRef = useRef<gsap.core.Tween | null>(null);

  // Memoize states to prevent unnecessary re-evaluations
  const initialRotation = useMemo(() => (
    tiltDirection === 'left'
      ? { rotateX: 25, rotateY: 30 }
      : { rotateX: 25, rotateY: -30 }
  ), [tiltDirection]);

  const imageTranslate = useMemo(() => (
    tiltDirection === 'left'
      ? { x: 8, y: -8 }
      : { x: -8, y: -8 }
  ), [tiltDirection]);

  const shadowClassValue = tiltDirection === 'left'
    ? '-7px 10px 12px 0px rgba(0,0,0,0.22)'
    : '7px 10px 12px 0px rgba(0,0,0,0.22)';

  // ── Initialization & Floating Animation ────────────────────────────────
  useEffect(() => {
    // 1. Set Initial State
    gsap.set(wrapperRef.current, {
      rotateX: initialRotation.rotateX,
      rotateY: initialRotation.rotateY,
      y: 0,
      transformStyle: 'preserve-3d'
    });

    gsap.set(imageBoxRef.current, {
      x: imageTranslate.x,
      y: imageTranslate.y,
      boxShadow: shadowClassValue
    });

    gsap.set(borderRef.current, { autoAlpha: 1 });

    // 2. Start Floating Animation
    // We animate the 'y' property up and down infinitely.
    floatAnimRef.current = gsap.to(wrapperRef.current, {
      y: "-=15", // move up 15px relative to current position
      duration: 2,
      ease: "sine.inOut",
      yoyo: true, // go back down
      repeat: -1, // infinite loop
    });

    // Cleanup function to kill the floating animation if component unmounts
    return () => {
      if (floatAnimRef.current) floatAnimRef.current.kill();
    };
  }, [initialRotation, imageTranslate, shadowClassValue]);

  // ── Mouse enter ──────────────────────────────────────────────────────────
  const handleMouseEnter = () => {
    // Stop the floating animation and timeline if they are running
    if (floatAnimRef.current) floatAnimRef.current.pause();
    if (tlRef.current) tlRef.current.kill();

    const tl = gsap.timeline();
    tlRef.current = tl;

    // 1. Image translation & shadow resolve
    tl.to(imageBoxRef.current, {
      x: 0, y: 0,
      boxShadow: '0px 0px 0px 0px rgba(0,0,0,0)',
      duration: 0.4,
      ease: 'power2.out'
    }, 0);

    // 2. Fade out the gradient border
    tl.to(borderRef.current, {
      autoAlpha: 0,
      duration: 0.4,
      ease: 'power2.out'
    }, 0);

    // 3. Wrapper animation: smooth flatten and lift.
    // We lift it higher (-50) to create a distinct hover state separate from the float.
    tl.to(wrapperRef.current, {
      rotateX: 0,
      rotateY: tiltDirection === 'left' ? 360 : -360,
      rotateZ: 0,
      y: -50, 
      duration: 0.8,
      ease: 'power3.out'
    }, 0);
  };

  // ── Mouse leave ──────────────────────────────────────────────────────────
  const handleMouseLeave = () => {
    if (tlRef.current) tlRef.current.kill();

    const tl = gsap.timeline({
      // When the "return to normal" animation finishes, restart the floating animation
      onComplete: () => {
         if (floatAnimRef.current) {
            // We need to reset the starting point of the float to the current 'y' (0)
            // otherwise it will jump back to wherever it was paused.
            floatAnimRef.current.invalidate().restart();
         }
      }
    });
    tlRef.current = tl;

    // 1. Revert wrapper to exact initial properties smoothly 
    tl.to(wrapperRef.current, {
      rotateX: initialRotation.rotateX,
      rotateY: initialRotation.rotateY,
      y: 0, // Return to base Y level before starting float again
      duration: 0.8,
      ease: 'power3.out'
    }, 0);

    // 2. Fade border back in
    tl.to(borderRef.current, {
      autoAlpha: 1,
      duration: 0.6,
      ease: 'power2.out'
    }, 0.1); 

    // 3. Restore image translation & shadow
    tl.to(imageBoxRef.current, {
      x: imageTranslate.x,
      y: imageTranslate.y,
      boxShadow: shadowClassValue,
      duration: 0.6,
      ease: 'power2.out'
    }, 0.1); 
  };

  return (
    <div
      className={`w-45 h-80 ${className} min-w-[200px]`}
      style={{ perspective: '4000px' }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        ref={wrapperRef}
        className="relative w-full h-full"
        style={{ willChange: 'transform' }}
      >
        <div className="absolute inset-0 p-[3px]">
          <div
            ref={borderRef}
            className={`absolute inset-0 rounded-2xl to-gray-500 via-gray-100/30 from-white/0 ${
              tiltDirection === 'left' ? 'bg-linear-to-bl' : 'bg-linear-to-br'
            }`}
          />
          
          <div className="relative z-10 h-full w-full rounded-xl bg-gradient-to-br from-cyan-50 to-cyan-100 p-4 flex flex-col">
            
            <div
              ref={imageBoxRef}
              className="relative w-full h-48 mb-4 rounded-lg overflow-hidden bg-gradient-to-br from-purple-900 via-purple-700 to-purple-500"
              style={{ willChange: 'transform, box-shadow' }}
            >
              {imageUrl ? (
                <img src={imageUrl} alt={title} className="w-full h-full object-cover" />
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
                          animation: `twinkle ${star.duration}s infinite`
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

            <div className="font-euclid flex-1 flex flex-col justify-center text-center">
              <h2 className="text-xl font-semibold text-teal-700 mb-2">{title}</h2>
              <p className="text-sm text-teal-600 mb-1">{duration}</p>
              <p className="text-sm text-teal-600 mb-2">{eventType}</p>
              <p className="text-base font-semibold text-teal-700 mb-1">{prizePool}</p>
              <p className="text-sm text-teal-600">{date}</p>
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