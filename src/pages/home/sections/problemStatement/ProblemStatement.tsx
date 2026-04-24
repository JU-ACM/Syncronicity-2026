import { Data } from "./problemData";
import React from "react";
import Card from "./Card";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

// import herobg from "../../../../assets/dashboard/hero-bg.png";

const ProblemStatement: React.FC = () => {
  const navigate = useNavigate();

  const openInnovationSection = Data.find(
    (s) => s.categorySlug === "open-innovation"
  );
  const trackSections = Data.filter((s) => s.categorySlug !== "open-innovation");

  return (
    <div className="problem-statement-class min-h-screen w-full bg-cover bg-center bg-no-repeat px-4 sm:px-6 lg:px-8 py-16 md:py-24 ">
      <div className="text-center max-w-7xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px 0px -20% 0px" }}
          transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
          className="
                text-3xl sm:text-4xl md:text-6xl lg:text-7xl
                leading-[1.05]
                tracking-[-0.01em]
                
                wrap-break-word
                font-bounded font-bold
                "
        >
          <span className="text-white">Solve Real-World</span>
          <br />
          <span className="text-blue-600">Challenges !!</span>
        </motion.p>
      </div>

      <div className="max-w-5xl mx-auto mt-16 md:mt-24">
        {trackSections.map((eventSection) => (
          <div key={eventSection.event} className="mb-12 md:mb-20">
            <motion.p
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "0px 0px -20% 0px" }}
              transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
              className="text-2xl sm:text-3xl md:text-4xl text-blue-600 font-unbounded font-bold mb-4"
            >
              {eventSection.event}
            </motion.p>
            {eventSection.problems.map((problem) => (
              <Card
                key={`${eventSection.event}-${problem.id}`}
                id={problem.id}
                title={problem.title}
                description={problem.description}
                tags={problem.tags ?? []}
                categorySlug={eventSection.categorySlug}
              />
            ))}
          </div>
        ))}

        {openInnovationSection?.problems?.[0] && (
          <div className="mt-24 md:mt-32">
            <div className="flex items-center gap-6 md:gap-10">
              <div className="h-[2px] flex-1 bg-blue-600/15" />
              <h3 className="text-blue-600 font-bounded font-black tracking-tight leading-none text-[44px] sm:text-[56px] md:text-[72px] lg:text-[80px]">
                Open Innovation
              </h3>
              <div className="h-[2px] flex-1 bg-blue-600/15" />
            </div>

            <div
              role="button"
              tabIndex={0}
              onClick={() =>
                navigate(
                  `/problem/${openInnovationSection.categorySlug}/${openInnovationSection.problems[0].id}`
                )
              }
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  navigate(
                    `/problem/${openInnovationSection.categorySlug}/${openInnovationSection.problems[0].id}`
                  );
                }
              }}
              className="group cursor-pointer mt-10 md:mt-12"
            >
              <div className="relative">
                <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out bg-[linear-gradient(to_right,transparent_0%,rgba(239,246,255,0.6)_20%,rgba(239,246,255,0.6)_80%,transparent_100%)]" />

                <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-8">
                  <div className="w-full max-w-3xl">
                    <p className="font-euclid text-sm md:text-base text-slate-500 leading-relaxed">
                    {openInnovationSection.problems[0].description}
                  </p>

                  <div className="flex flex-wrap gap-2 mt-6">
                    {(openInnovationSection.problems[0].tags ?? []).map(
                      (tag, index) => (
                        <span
                          key={index}
                          className="text-xs md:text-sm px-3 py-1 bg-white border border-slate-200 text-slate-600 rounded-full font-euclid font-medium group-hover:border-indigo-200 group-hover:bg-indigo-50 group-hover:text-indigo-700 transition-all duration-300"
                        >
                          {tag}
                        </span>
                      )
                    )}
                  </div>
                  </div>

                  <div className="text-gray-600 shrink-0 self-end md:self-center transition-all duration-300 group-hover:text-indigo-600 group-hover:translate-x-1 group-hover:-translate-y-1">
                    <ArrowUpRight size={72} strokeWidth={1.5} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProblemStatement;
