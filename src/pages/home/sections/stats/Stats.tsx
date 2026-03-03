import CountUp100k from "./components/CountUp100k";
import CountUp35 from "./components/CountUp35";
import CountUp70 from "./components/CountUp70";
import { motion } from "motion/react";

const Stats = () => {
  return (
    <div className="relative h-screen w-full">
      {/* clouds */}
      <img className="absolute z-50 top-10 -left-50 -translate-y-1/2 w-200 h-auto" src="src/assets/clouds/cloud-1.png" alt="cloud-1" />

      {/* CONTENT LAYER */}
      <div className="relative z-0 flex flex-col gap-6 py-20 px-40 h-full">
        <motion.h1
          className="font-bounded text-[4rem] text-center p-4 text-[#10A0CC]"
          initial={{
            opacity: 0,
          }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.4 }}
        >
          Stats
        </motion.h1>

        <div className="flex h-[70vh] w-full gap-6 justify-center items-center">
          <div className="mask-big w-2/3 h-full">
            <CountUp100k />
          </div>

          <div className="flex flex-col gap-6 h-full w-1/3">
            <div className="mask-mid w-full h-[57%]">
              <CountUp70 />
            </div>
            <div className="mask-mid w-full h-[43%]">
              <CountUp35 />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
