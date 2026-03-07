import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

// Calculated circle percentage positions from the new 402x1414 SVG coordinates
// cx / 402 * 100  |  cy / 1414 * 100
const timelineSteps = [
  {
    id: "step-1",
    number: "1",
    title: "Registration",
    duration: "5th Sept to 20th November",
    description:
      "All Aboard! Save your spot at India's largest student-run hackathon.",
    maxW: "",
    positionClasses: "top-[20.72%] left-[20%] -translate-y-1/2",
    layout: "left",
    lineProgress: 0.21,
    circlePos: { left: "14%", top: "20.72%" },
  },
  {
    id: "step-2",
    number: "2",
    title: "Registration",
    duration: "5th Sept to 20th November",
    description:
      "All Aboard! Save your spot at India's largest student-run hackathon.",
    maxW: "",
    positionClasses: "top-[32.40%] right-[14%] -translate-y-1/2",
    layout: "right",
    lineProgress: 0.345,
    circlePos: { left: "93.53%", top: "31.40%" },
  },
  {
    id: "step-3",
    number: "3",
    title: "Registration",
    duration: "5th Sept to 20th November",
    description:
      "All Aboard! Save your spot at India's largest student-run hackathon.",
    maxW: "max-w-60", // Converted max-w-60 to arbitrary value for consistency
    positionClasses: "top-[53.41%] right-[32%] -translate-y-1/2",
    layout: "right",
    lineProgress: 0.615,
    circlePos: { left: "75.87%", top: "51.41%" },
  },
  {
    id: "step-4",
    number: "4",
    title: "Registration",
    duration: "5th Sept to 20th November",
    description:
      "All Aboard! Save your spot at India's largest student-run hackathon.",
    positionClasses: "top-[64.79%] right-[18%] -translate-y-1/2",
    layout: "right",
    lineProgress: 0.68,
    circlePos: { left: "88.80%", top: "63.79%" },
  },
  {
    id: "step-5",
    number: "5",
    title: "Registration",
    duration: "5th Sept to 20th November",
    description:
      "All Aboard! Save your spot at India's largest student-run hackathon.",
    positionClasses: "top-[81.68%] left-[18%] -translate-y-1/2",
    layout: "left",
    lineProgress: 0.83,
    circlePos: { left: "10.3%", top: "81.68%" },
  },
];

export default function TimelineMobile() {
  const containerRef = useRef<HTMLDivElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const planeRef = useRef<HTMLDivElement>(null);
  const planeIconRef = useRef<SVGSVGElement>(null); // <-- Added ref for the plane SVG
  const checkpointsRef = useRef<(HTMLDivElement | null)[]>([]);
  const circlesRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (!pathRef.current || !planeRef.current) return;

      const pathLength = pathRef.current.getTotalLength();

      // Set initial state of the line mask
      gsap.set(pathRef.current, {
        strokeDasharray: pathLength,
        strokeDashoffset: pathLength,
      });

      // Initialize plane starting position
      gsap.set(planeRef.current, {
        motionPath: {
          path: pathRef.current,
          align: pathRef.current,
          alignOrigin: [-0.1, 0.5],
          autoRotate: true,
        },
      });

      // Set initial state of the HTML circles
      circlesRef.current.forEach((circle) => {
        if (circle) {
          gsap.set(circle, {
            xPercent: -50,
            yPercent: -50,
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

      const animateCheckpoint = (
        el: HTMLDivElement | null,
        isReversing: boolean,
      ) => {
        if (!el) return;
        gsap.to(el, {
          opacity: isReversing ? 0.2 : 1,
          color: isReversing ? "white" : "#00DB96",
          duration: 0.4,
          ease: "power2.out",
          overwrite: "auto",
        });
      };

      const animateCircle = (
        el: HTMLDivElement | null,
        isReversing: boolean,
      ) => {
        if (!el) return;
        gsap.to(el, {
          scale: isReversing ? 0 : 1,
          opacity: isReversing ? 0 : 1,
          backgroundColor: isReversing ? "white" : "#00DB96",
          duration: 0.2,
          ease: isReversing ? "power2.in" : "back.out(2)",
          overwrite: "auto",
        });
      };

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          end: "bottom 60%",
          scrub: 1,
          onUpdate: (self) => {
            // <-- Animate the inner plane SVG based on scroll direction
            if (planeIconRef.current) {
              gsap.to(planeIconRef.current, {
                rotation: self.direction === 1 ? 0 : 180, // Flip 180deg if reversing
                duration: 0.4, // Smooth turning duration
                transformOrigin: "center center",
                overwrite: "auto",
              });
            }
          },
        },
      });

      // Animate the line mask
      tl.to(
        pathRef.current,
        {
          strokeDashoffset: 0,
          ease: "none",
          duration: 1,
        },
        0,
      );

      // Animate the plane DIV along the SVG path
      tl.to(
        planeRef.current,
        {
          motionPath: {
            path: pathRef.current,
            align: pathRef.current,
            autoRotate: true,
            alignOrigin: [-0.1, 0.5],
          },
          ease: "none",
          duration: 1,
        },
        0,
      );

      // Trigger text/circle animations at specific path progress points
      checkpointsRef.current.forEach((checkpoint, index) => {
        const progress = timelineSteps[index].lineProgress;
        const circle = circlesRef.current[index];

        if (checkpoint || circle) {
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
            progress,
          );
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="timeline-class relative w-full overflow-hidden m-0 p-0 text-white font-sans bg-[#131313] py-10">
      {/* Container mapped to exact SVG aspect ratio and full width.
        Will natively scale down/up based on the device width.
      */}
      <div
        ref={containerRef}
        className="relative w-full aspect-[402/1414]"
      >
        <h2 className="absolute top-20 left-0 w-full text-center text-4xl font-unbounded font-black z-20 tracking-tight pointer-events-none">
          Timeline
        </h2>

        {/* SVG BACKGROUND */}
        <svg
          className="absolute inset-0 w-full h-full z-0 pointer-events-none"
          viewBox="0 0 402 1414"
        >
          <defs>
            <mask id="mobile-line-mask">
              <path
                ref={pathRef}
                d="M422.724 -22C422.724 -22 470.461 35.9483 471.952 88.9622C477.355 280.994 22.5953 83.2228 57.4152 300.125C89.4677 499.789 388.363 244.098 375.147 449.111C363.739 626.068 59.6665 736.8 46.609 606.706C31.3452 454.631 356.987 657.934 356.987 902.047C356.987 1099.33 23.9453 919.265 40.6048 1147.89C57.2643 1376.51 342.812 1333.76 460.845 1281.81"
                fill="none"
                stroke="white"
                strokeWidth="6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </mask>
          </defs>

          {/* Dotted path that gets revealed */}
          <path
            d="M422.724 -22C422.724 -22 470.461 35.9483 471.952 88.9622C477.355 280.994 22.5953 83.2228 57.4152 300.125C89.4677 499.789 388.363 244.098 375.147 449.111C363.739 626.068 59.6665 736.8 46.609 606.706C31.3452 454.631 356.987 657.934 356.987 902.047C356.987 1099.33 23.9453 919.265 40.6048 1147.89C57.2643 1376.51 342.812 1333.76 460.845 1281.81"
            fill="none"
            stroke="white"
            strokeWidth="2"
            strokeDasharray="7 7"
            mask="url(#mobile-line-mask)"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>

        {/* HTML Airplane overlay */}
        <div
          ref={planeRef}
          className="absolute z-20 w-[30px] h-[28px] pointer-events-none origin-center"
        >
          {/* <-- Added ref={planeIconRef} here --> */}
          <svg
            ref={planeIconRef}
            viewBox="0 0 47 43"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2.08745 0.0483447C2.60726 -0.0542382 3.14587 0.00751602 3.63003 0.223278L3.63674 0.230006L45.4809 19.1531C45.9336 19.3571 46.3178 19.6905 46.5875 20.1085C46.8569 20.5264 46.9999 21.0136 47 21.5113C46.999 22.0103 46.8558 22.4994 46.5842 22.9175C46.3124 23.3357 45.9224 23.6638 45.4675 23.8662L3.63674 42.7859C3.14905 42.995 2.60791 43.0531 2.08745 42.9507C1.56743 42.8482 1.09187 42.5887 0.71925 42.2106L0.642121 42.1366C-0.0671558 41.3581 -0.186896 40.243 0.273243 39.2939C0.282232 39.2744 0.292975 39.2562 0.303424 39.2367L6.27589 24.3136C6.41741 24.0479 6.62815 23.8239 6.88286 23.6643C7.13713 23.5051 7.42842 23.4165 7.72793 23.4053L40.0249 22.2682C40.1238 22.268 40.2218 22.2489 40.3133 22.211C40.4053 22.1728 40.4909 22.1169 40.5614 22.0462C40.6317 21.9756 40.6877 21.8894 40.7257 21.7973C40.7633 21.7056 40.7826 21.6071 40.7827 21.5079C40.7827 21.408 40.7639 21.3076 40.7257 21.2153C40.6878 21.1234 40.6313 21.0401 40.5614 20.9697C40.4909 20.899 40.4053 20.8431 40.3133 20.8048C40.2217 20.7668 40.124 20.7445 40.0249 20.7443L7.72122 19.6005C7.42168 19.5893 7.13045 19.5007 6.87616 19.3415C6.62144 19.1818 6.4107 18.9579 6.26918 18.6922L0.300071 3.77913L0.27995 3.7354C0.0438805 3.25987 -0.0406137 2.72328 0.0385028 2.198C0.117889 1.67241 0.356479 1.18282 0.722604 0.798539C1.08919 0.414131 1.56716 0.151247 2.08745 0.0483447Z"
              fill="white"
            />
          </svg>
        </div>

        {/* CHECKPOINTS & CIRCLES */}
        {timelineSteps.map((step, index) => (
          <div key={step.id}>
            {/* Dots */}
            <div
              ref={(el) => {
                circlesRef.current[index] = el;
              }}
              className="absolute w-6 h-6 rounded-full z-10 pointer-events-none"
              style={{
                left: step.circlePos.left,
                top: step.circlePos.top,
              }}
            />

            {/* Checkpoint Text Container */}
            <div
              ref={(el) => {
                checkpointsRef.current[index] = el;
              }}
              className={`absolute z-10 flex items-center w-70 ${
                step.positionClasses
              } ${
                step.layout === "left"
                  ? "flex-row"
                  : "flex-row-reverse text-right"
              } ${
                step.layout === "left"
                  ? ""
                  : step.maxW
              }`}
            >
              {/* Huge Number */}
              <div
                className={`text-6xl font-bounded font-black leading-none tracking-tighter shrink-0 ${step.layout === "left" ? "mr-4" : "ml-4"}`}
              >
                {step.number}
              </div>

              {/* Text Information Box */}
              <div className={`flex flex-col gap-1 w-full ${ step.layout === "left" ? "items-start" : "items-end" } `}>
                <h3 className="m-0 text-lg font-unbounded font-semibold whitespace-nowrap">
                  {step.title}
                </h3>
                <hr className="w-full border-t border-gray-600 my-[2px]" />
                <span className="text-[11px] font-euclid font-medium tracking-wide">
                  {step.duration}
                </span>
                <span
                  className="text-[12px] font-euclid text-gray-400 leading-snug"
                >
                  {step.description}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}