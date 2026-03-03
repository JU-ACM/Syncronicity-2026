import CloudBL from "./components/clouds/CloudBL";
import CloudBR from "./components/clouds/CloudBR";
import CloudTL from "./components/clouds/CloudTL";
import CloudTR from "./components/clouds/CloudTR";
import CountUp100k from "./components/CountUp100k";
import CountUp35 from "./components/CountUp35";
import CountUp70 from "./components/CountUp70";
import { motion } from "motion/react";

const Stats = () => {
  return (
    <div className="relative bg-transparent h-screen w-full">
      {/* CLOUD LAYER */}
      <div
        className="h-[135vh] bg-transparent
       absolute -top-[18vh] z-200 inset-0 overflow-x-hidden"
      >
        <CloudTL />
        <CloudTR />
        <CloudBL />
        <CloudBR />
      </div>

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
