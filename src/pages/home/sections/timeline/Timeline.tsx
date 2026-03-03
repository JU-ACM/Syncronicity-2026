import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

const timelineSteps = [
  {
    id: "step-1",
    number: "1",
    title: "Registration",
    duration: "5th Sept to 20th November",
    description:
      "All Aboard! Save your spot at India's largest student-run hackathon.",
    positionClasses: "top-[14%] left-[18%]",
    layout: "left",
    lineProgress: 0.162,
  },
  {
    id: "step-2",
    number: "2",
    title: "Registration",
    duration: "5th Sept to 20th November",
    description:
      "All Aboard! Save your spot at India's largest student-run hackathon.",
    positionClasses: "top-[26.5%] right-[20%]",
    layout: "right",
    lineProgress: 0.322,
  },
  {
    id: "step-3",
    number: "3",
    title: "Registration",
    duration: "5th Sept to 20th November",
    description:
      "All Aboard! Save your spot at India's largest student-run hackathon.",
    positionClasses: "top-[50%] right-[35%]",
    layout: "right",
    lineProgress: 0.608,
  },
  {
    id: "step-4",
    number: "4",
    title: "Registration",
    duration: "5th Sept to 20th November",
    description:
      "All Aboard! Save your spot at India's largest student-run hackathon.",
    positionClasses: "top-[60%] right-[24%]",
    layout: "right",
    lineProgress: 0.657,
  },
  {
    id: "step-5",
    number: "5",
    title: "Final 24 Hours Hackathon",
    duration: "5th Sept to 20th November",
    description:
      "All Aboard! Save your spot at India's largest student-run hackathon.",
    positionClasses: "top-[75.5%] left-[14%]",
    layout: "left",
    lineProgress: 0.812,
  },
];

export default function Timeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const planeRef = useRef<SVGGElement>(null);
  const checkpointsRef = useRef<(HTMLDivElement | null)[]>([]);
  const svgCirclesRef = useRef<(SVGCircleElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (!pathRef.current || !planeRef.current) return;

      const pathLength = pathRef.current.getTotalLength();

      // Set initial state of the line
      gsap.set(pathRef.current, {
        strokeDasharray: pathLength,
        strokeDashoffset: pathLength,
      });

      // Set initial state of the SVG circles
      svgCirclesRef.current.forEach((circle) => {
        if (circle) {
          gsap.set(circle, {
            scale: 0,
            opacity: 0,
            transformOrigin: "center center", 
          });
        }
      });

      // Set initial state of the checkpoints
      checkpointsRef.current.forEach((checkpoint) => {
        if (checkpoint) {
          gsap.set(checkpoint, { opacity: 0.2, color: "white" });
        }
      });

      // Callback function for text blocks
      const animateCheckpoint = (el: HTMLDivElement | null, isReversing: boolean) => {
        if (!el) return;
        gsap.to(el, {
          opacity: isReversing ? 0.2 : 1,
          color: isReversing ? "white" : "#CCF6F7",
          duration: 0.4, 
          ease: "power2.out",
          overwrite: "auto", 
        });
      };

      // Callback function for SVG Circles
      const animateCircle = (el: SVGCircleElement | null, isReversing: boolean) => {
        if (!el) return;
        gsap.to(el, {
          scale: isReversing ? 0 : 1,
          opacity: isReversing ? 0 : 1,
          duration: 0.4, 
          ease: isReversing ? "power2.in" : "back.out(2)", 
          overwrite: "auto",
        });
      };

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 70%",
          end: "bottom 70%",
          scrub: 1,
        },
      });

      // Animate the line
      tl.to(
        pathRef.current,
        {
          strokeDashoffset: 0,
          ease: "none",
          duration: 1,
        },
        0 // Insert at the very beginning of the timeline
      );

      // --- NEW: Animate the plane along the path ---
      tl.to(
        planeRef.current,
        {
          motionPath: {
            path: pathRef.current,
            align: pathRef.current,
            autoRotate: true,
            alignOrigin: [-0.1, 0.5], // Centers the plane precisely on the path
          },
          ease: "none",
          duration: 1, // Must match the line drawing duration exactly
        },
        0 // Insert at the same time as the line drawing (0) so they stay in sync
      );

      // Trigger the fixed-duration animations along the timeline
      checkpointsRef.current.forEach((checkpoint, index) => {
        const progress = timelineSteps[index].lineProgress;
        const circle = svgCirclesRef.current[index];

        if (checkpoint || circle) {
          // A single dummy tween to trigger BOTH functions exactly at the progress point
          tl.to(
            {},
            {
              duration: 0.01,
              onStart: () => {
                animateCheckpoint(checkpoint, false);
                animateCircle(circle, false);
              },
              onReverseComplete: () => {
                animateCheckpoint(checkpoint, true);
                animateCircle(circle, true);
              },
            },
            progress
          );
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="relative w-full overflow-hidden m-0 p-0 text-white font-sans bg-[#131313]">
      <div
        ref={containerRef}
        className="relative w-full aspect-[1440/2913]"
      >
        <h2 className="absolute top-10 left-0 w-full text-center text-5xl font-unbounded font-black z-20 tracking-tight pointer-events-none">
          Timeline
        </h2>

        {/* SVG BACKGROUND */}
        <svg
          className="absolute inset-0 w-full h-full z-0 pointer-events-none"
          preserveAspectRatio="none"
          viewBox="0 0 1440 2913"
        >
          {/* Plane Group - Now equipped with a Ref */}
          <g className="plane" ref={planeRef}>
            <path d="M2.08745 0.0483447C2.60726 -0.0542382 3.14587 0.00751602 3.63003 0.223278L3.63674 0.230006L45.4809 19.1531C45.9336 19.3571 46.3178 19.6905 46.5875 20.1085C46.8569 20.5264 46.9999 21.0136 47 21.5113C46.999 22.0103 46.8558 22.4994 46.5842 22.9175C46.3124 23.3357 45.9224 23.6638 45.4675 23.8662L3.63674 42.7859C3.14905 42.995 2.60791 43.0531 2.08745 42.9507C1.56743 42.8482 1.09187 42.5887 0.71925 42.2106L0.642121 42.1366C-0.0671558 41.3581 -0.186896 40.243 0.273243 39.2939C0.282232 39.2744 0.292975 39.2562 0.303424 39.2367L6.27589 24.3136C6.41741 24.0479 6.62815 23.8239 6.88286 23.6643C7.13713 23.5051 7.42842 23.4165 7.72793 23.4053L40.0249 22.2682C40.1238 22.268 40.2218 22.2489 40.3133 22.211C40.4053 22.1728 40.4909 22.1169 40.5614 22.0462C40.6317 21.9756 40.6877 21.8894 40.7257 21.7973C40.7633 21.7056 40.7826 21.6071 40.7827 21.5079C40.7827 21.408 40.7639 21.3076 40.7257 21.2153C40.6878 21.1234 40.6313 21.0401 40.5614 20.9697C40.4909 20.899 40.4053 20.8431 40.3133 20.8048C40.2217 20.7668 40.124 20.7445 40.0249 20.7443L7.72122 19.6005C7.42168 19.5893 7.13045 19.5007 6.87616 19.3415C6.62144 19.1818 6.4107 18.9579 6.26918 18.6922L0.300071 3.77913L0.27995 3.7354C0.0438805 3.25987 -0.0406137 2.72328 0.0385028 2.198C0.117889 1.67241 0.356479 1.18282 0.722604 0.798539C1.08919 0.414131 1.56716 0.151247 2.08745 0.0483447Z" fill="white"/>
          </g>

          <g clipPath="url(#clip0_528_161)">
            <circle ref={(el) => { svgCirclesRef.current[0] = el; }} cx="178" cy="474" r="30" fill="white" />
            <circle ref={(el) => { svgCirclesRef.current[1] = el; }} cx="1242" cy="835" r="30" fill="white" />
            <circle ref={(el) => { svgCirclesRef.current[2] = el; }} cx="1019" cy="1444" r="30" fill="white" />
            <circle ref={(el) => { svgCirclesRef.current[3] = el; }} cx="1179" cy="1807" r="30" fill="white" />
            <circle ref={(el) => { svgCirclesRef.current[4] = el; }} cx="126" cy="2258" r="30" fill="white" />
          </g>

          <defs>
            <clipPath id="clip0_528_161">
              <rect width="1440" height="2913" fill="white" />
            </clipPath>
            <mask id="line-mask">
              <path
                ref={pathRef}
                d="M1440 237C1082.23 366.772 89.2979 159.252 184.003 529.5C290.784 946.957 1286.53 412.357 1242.5 841C1204.5 1210.98 191.503 1442.5 148.003 1170.5C97.1526 852.54 1182 1277.61 1182 1788C1182 2200.47 72.5001 1824 128 2302C179.706 2747.32 1008.91 2700.2 1440 2603.83"
                fill="none"
                stroke="white"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </mask>
          </defs>

          <path
            d="M1440 237C1082.23 366.772 89.2979 159.252 184.003 529.5C290.784 946.957 1286.53 412.357 1242.5 841C1204.5 1210.98 191.503 1442.5 148.003 1170.5C97.1526 852.54 1182 1277.61 1182 1788C1182 2200.47 72.5001 1824 128 2302C179.706 2747.32 1008.91 2700.2 1440 2603.83"
            fill="none"
            stroke="white"
            strokeWidth="4"
            strokeDasharray="14 14"
            mask="url(#line-mask)"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>

        {/* CHECKPOINTS */}
        {timelineSteps.map((step, index) => (
          <div
            key={step.id}
            ref={(el) => {
              checkpointsRef.current[index] = el;
            }}
            className={`absolute z-10 flex items-center w-max ${
              step.positionClasses
            } ${
              step.layout === "left"
                ? "flex-row"
                : "flex-row-reverse text-right"
            }`}
          >
            {/* The Huge Number */}
            <div className="text-9xl font-bounded font-black leading-none tracking-tighter mr-4 ml-4">
              {step.number}
            </div>

            {/* The Content Box */}
            <div className="flex flex-col gap-1.5">
              <h3 className="m-0 text-2xl font-unbounded font-semibold">
                {step.title}
              </h3>
              <hr className="w-full border-t border-gray-600 my-1" />
              <span className="text-sm font-unbounded font-medium tracking-wide">
                {step.duration}
              </span>
              <span className="text-base font-euclid text-gray-400 leading-relaxed">
                {step.description}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}