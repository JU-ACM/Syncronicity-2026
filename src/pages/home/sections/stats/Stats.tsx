import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import CountUp from "./components/CountUp";
import DecryptedText from "./components/DecryptedText";

const statsData = [
  {
    id: 1,
    value: 1660,
    suffix: "+",
    desc: "Impressions",
    accentColor: "text-[#5A70FF]",
  },
  {
    id: 2,
    value: 200,
    suffix: "+",
    desc: "Selected Candidates",
    accentColor: "text-[#83ACFF]",
  },
  {
    id: 3,
    value: 50,
    suffix: "+",
    desc: "Participants from over 50 colleges across India, including IITs, BITs, IIITs and NITs",
    accentColor: "text-[#00DB96]",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", bounce: 0.4, duration: 0.8 }
  },
};

export default function Stats() {
  return (
    // Reduced minimum height and padding on mobile for the ~60vh constraint
    <section className="stats-class relative w-full min-h-[60vh] md:min-h-[70vh] flex flex-col justify-center items-center py-10 md:py-20 px-4 md:px-12 bg-transparent overflow-hidden">

      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col gap-8 md:gap-16">

        {/* Section Header */}
        <motion.h2
          className="font-bounded text-3xl md:text-5xl lg:text-6xl text-center font-bold text-white tracking-tight"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          Our <span className="text-[#10A0CC]">Stats</span>
        </motion.h2>

        {/* Stats Grid - 2 columns on mobile, 3 columns on desktop */}
        <motion.div
          className="grid grid-cols-2 lg:grid-cols-3 lg:grid-rows-2 gap-3 md:gap-6 lg:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {statsData.map((stat, index) => {
            const isMainCard = index === 0;

            return (
              <motion.div
                key={stat.id}
                variants={cardVariants}
                className={`relative flex flex-col justify-center items-center w-full bg-[#F2F7FA] h-full
                  ${isMainCard
                    // Main card: spans 2 columns on mobile, 2 rows/cols on desktop
                    ? "col-span-2 lg:col-span-2 lg:row-span-2 h-[160px] md:h-[300px] lg:h-[480px] p-6 md:p-12 rounded-[1.5rem] md:rounded-[2rem]"
                    // Small cards: 1 column each on mobile, side-by-side
                    : "col-span-1 lg:col-span-1 lg:row-span-1 h-[140px] md:h-[224px] p-4 md:p-8 rounded-2xl md:rounded-[2rem]"
                  }
                `}
              >
                <div className="relative z-10 flex flex-col items-center text-center gap-1 md:gap-4">
                  {/* Scaled down text for mobile, retaining original sizes for md/lg */}
                  <h3 className={`font-bounded font-black tracking-tighter leading-none ${stat.accentColor} 
                    ${isMainCard ? "text-5xl md:text-8xl lg:text-9xl" : "text-3xl md:text-6xl lg:text-7xl"}
                  `}>
                    <CountUp
                      from={0}
                      to={stat.value}
                      separator=","
                      direction="up"
                      duration={1.5}
                    />
                    {stat.suffix}
                  </h3>

                  {/* Scaled down descriptions with tighter line height for mobile */}
                  <DecryptedText
                    parentClassName={`text-slate-600 font-euclid font-medium leading-tight md:leading-relaxed text-center mx-auto
                      ${isMainCard ? "text-xs md:text-lg lg:text-xl max-w-md mt-1 md:mt-2" : "text-[10px] md:text-base max-w-[120px] md:max-w-sm mt-1"}
                    `}
                    text={stat.desc}
                    animateOn="view"
                    revealDirection="start"
                    duration={2000}
                    maxIterations={20}
                  />
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}