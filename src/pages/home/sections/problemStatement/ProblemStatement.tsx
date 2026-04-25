import { Data } from "./problemData";
import React from "react";
import Card from "./Card";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState, useEffect, useRef } from "react";



const OpenInnovationCard: React.FC<{
  categorySlug: string;
  problemId: number;
  description: string;
  tags: string[];
}> = ({ categorySlug, problemId, description, tags }) => {
  const navigate = useNavigate();
  const cardRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (cardRef.current) observer.unobserve(cardRef.current);
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -50px 0px" }
    );
    if (cardRef.current) observer.observe(cardRef.current);
    return () => {
      if (cardRef.current) observer.unobserve(cardRef.current);
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className={`relative w-full py-10 md:py-14 cursor-pointer group
                  transition-all duration-700 ease-out transform
                  ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      onClick={() => navigate(`/problem/${categorySlug}/${problemId}`)}
    >
      {/* ── Title row with fading dividers ── */}
      <div className="flex items-center gap-4 mb-10 md:mb-12">
        <div className="flex-1 h-px bg-[linear-gradient(to_right,transparent,rgba(37,99,235,0.4))]" />
        <h2 className="font-bounded font-bold text-blue-600 text-4xl sm:text-5xl md:text-6xl lg:text-7xl whitespace-nowrap">
          Open Innovation
        </h2>
        <div className="flex-1 h-px bg-[linear-gradient(to_left,transparent,rgba(37,99,235,0.4))]" />
      </div>

      {/* ── Body ── */}
      <div className="flex items-start justify-between gap-4">
        <div className="flex flex-col gap-5 flex-1">
          <p className="text-base md:text-lg font-euclid text-slate-500 leading-relaxed group-hover:text-slate-600 transition-colors duration-300">
            {description}
          </p>

          <div className="flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="text-xs md:text-sm px-3 py-1 bg-white border border-slate-200 text-slate-600 rounded-full font-euclid font-medium
                           group-hover:border-indigo-200 group-hover:bg-indigo-50 group-hover:text-indigo-700 transition-all duration-300"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="text-gray-600 shrink-0 self-start md:self-center transition-all duration-300 group-hover:text-indigo-600 group-hover:translate-x-1 group-hover:-translate-y-1">
          <ArrowUpRight size={72} strokeWidth={1.5} />
        </div>
      </div>
    </div>
  );
};

const ProblemStatement: React.FC = () => {
  return (
    <div className="problem-statement-class min-h-screen w-full bg-cover bg-center bg-no-repeat px-4 sm:px-6 lg:px-8 py-16 md:py-24">
      <div className="text-center max-w-7xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px 0px -20% 0px" }}
          transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
          className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl leading-[1.05] tracking-[-0.01em] wrap-break-word font-bounded font-bold"
        >
          <span className="text-white">Solve Real-World</span>
          <br />
          <span className="text-blue-600">Challenges !!</span>
        </motion.p>
      </div>

      <div className="max-w-5xl mx-auto mt-16 md:mt-24">
        {Data.map((eventSection) => {
          const isOpenInnovation = eventSection.categorySlug === "open-innovation";

          return (
            <div key={eventSection.event} className="mb-12 md:mb-20">
              {!isOpenInnovation && (
                <motion.p
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "0px 0px -20% 0px" }}
                  transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
                  className="text-2xl sm:text-3xl md:text-4xl text-blue-600 font-unbounded font-bold mb-4"
                >
                  {eventSection.event}
                </motion.p>
              )}

              {isOpenInnovation ? (
                eventSection.problems.map((problem) => (
                  <OpenInnovationCard
                    key={problem.id}
                    categorySlug={eventSection.categorySlug}
                    problemId={problem.id}
                    description={problem.description}
                    tags={problem.tags ?? []}
                  />
                ))
              ) : (
                eventSection.problems.map((problem) => (
                  <Card
                    key={`${eventSection.event}-${problem.id}`}
                    id={problem.id}
                    title={problem.title}
                    description={problem.description}
                    tags={problem.tags ?? []}
                    categorySlug={eventSection.categorySlug}
                  />
                ))
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProblemStatement;



//----OPEN INNOVATION LEFT----//

// import { Data } from "./problemData";
// import React from "react";
// import Card from "./Card";
// import { motion } from "framer-motion";
// import { ArrowUpRight } from "lucide-react";
// import { useNavigate } from "react-router-dom";
// import { useState, useEffect, useRef } from "react";

// const OpenInnovationCard: React.FC<{
//   categorySlug: string;
//   problemId: number;
//   title: string;
//   description: string;
//   tags: string[];
// }> = ({ categorySlug, problemId, title, description, tags }) => {
//   const navigate = useNavigate();
//   const cardRef = useRef<HTMLDivElement>(null);
//   const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setIsVisible(true);
//           if (cardRef.current) observer.unobserve(cardRef.current);
//         }
//       },
//       { threshold: 0.15, rootMargin: "0px 0px -50px 0px" }
//     );
//     if (cardRef.current) observer.observe(cardRef.current);
//     return () => { if (cardRef.current) observer.unobserve(cardRef.current); };
//   }, []);

//   return (
//     <div
//       ref={cardRef}
//       className={`relative w-full py-6 md:py-8 cursor-pointer group
//                   transition-all duration-700 ease-out transform
//                   ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-30"}`}
//       onClick={() => navigate(`/problem/${categorySlug}/${problemId}`)}
//     >
//       <div
//         className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out bg-[linear-gradient(to_right,transparent_0%,rgba(239,246,255,0.6)_20%,rgba(239,246,255,0.6)_80%,transparent_100%)]"
//       />

//       <div className="relative z-10 flex items-start justify-between gap-4">
//         <div className="flex items-start gap-4 md:gap-6 w-full">
//           <div className="text-gray-700/20 font-semibold font-bounded text-5xl sm:text-6xl md:text-7xl lg:text-8xl shrink-0 group-hover:text-blue-600 transition-colors duration-300">
//             {problemId}
//           </div>

//           <div className="w-full max-w-2xl pt-2">
//             <h4 className="text-base md:text-lg font-semibold font-euclid text-gray-600 mb-2 group-hover:text-indigo-600 transition-colors duration-300">
//               {title}
//             </h4>
//             <p className="text-sm md:text-base font-euclid text-slate-500 mb-4 leading-relaxed group-hover:text-slate-600 transition-colors duration-300">
//               {description}
//             </p>

//             <div className="flex flex-wrap gap-2">
//               {tags.map((tag, index) => (
//                 <span
//                   key={index}
//                   className="text-xs md:text-sm px-3 py-1 bg-white border border-slate-200 text-slate-600 rounded-full font-euclid font-medium
//                              group-hover:border-indigo-200 group-hover:bg-indigo-50 group-hover:text-indigo-700 transition-all duration-300"
//                 >
//                   {tag}
//                 </span>
//               ))}
//             </div>
//           </div>
//         </div>

//         <div className="text-gray-600 shrink-0 self-start md:self-center transition-all duration-300 group-hover:text-indigo-600 group-hover:translate-x-1 group-hover:-translate-y-1">
//           <ArrowUpRight size={72} strokeWidth={1.5} />
//         </div>
//       </div>
//     </div>
//   );
// };

// const ProblemStatement: React.FC = () => {
//   return (
//     <div className="problem-statement-class min-h-screen w-full bg-cover bg-center bg-no-repeat px-4 sm:px-6 lg:px-8 py-16 md:py-24">
//       <div className="text-center max-w-7xl mx-auto">
//         <motion.p
//           initial={{ opacity: 0, y: 36 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true, margin: "0px 0px -20% 0px" }}
//           transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
//           className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl leading-[1.05] tracking-[-0.01em] wrap-break-word font-bounded font-bold"
//         >
//           <span className="text-white">Solve Real-World</span>
//           <br />
//           <span className="text-blue-600">Challenges !!</span>
//         </motion.p>
//       </div>

//       <div className="max-w-5xl mx-auto mt-16 md:mt-24">
//         {Data.map((eventSection) => {
//           const isOpenInnovation = eventSection.categorySlug === "open-innovation";

//           return (
//             <div key={eventSection.event} className="mb-12 md:mb-20">
//               <motion.p
//                 initial={{ opacity: 0, x: 50 }}
//                 whileInView={{ opacity: 1, x: 0 }}
//                 viewport={{ once: true, margin: "0px 0px -20% 0px" }}
//                 transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
//                 className={`text-2xl sm:text-3xl md:text-4xl font-unbounded font-bold mb-4 ${isOpenInnovation ? "text-blue-600" : "text-blue-600"
//                   }`}
//               >
//                 {eventSection.event}
//               </motion.p>

//               {isOpenInnovation ? (
//                 eventSection.problems.map((problem) => (
//                   <OpenInnovationCard
//                     key={problem.id}
//                     categorySlug={eventSection.categorySlug}
//                     problemId={problem.id}
//                     description={problem.description}
//                     title={problem.title}
//                     tags={problem.tags ?? []}
//                   />
//                 ))
//               ) : (
//                 eventSection.problems.map((problem) => (
//                   <Card
//                     key={`${eventSection.event}-${problem.id}`}
//                     id={problem.id}
//                     title={problem.title}
//                     description={problem.description}
//                     tags={problem.tags ?? []}
//                     categorySlug={eventSection.categorySlug}
//                   />
//                 ))
//               )}
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default ProblemStatement;