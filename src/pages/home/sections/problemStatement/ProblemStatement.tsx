import { Data } from "./problemData";
import React from "react";
import Card from "./Card";
import { motion } from "framer-motion";

// import herobg from "../../../../assets/dashboard/hero-bg.png";

const ProblemStatement: React.FC = () => {
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
        {Data.map((eventSection) => (
          <div key={eventSection.event} className="mb-12 md:mb-20">
            <motion.p
              initial={{ opacity: 0, x: -50 }}
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
      </div>
    </div>
  );
};

export default ProblemStatement;
