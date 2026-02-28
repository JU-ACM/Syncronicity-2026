import { motion } from "motion/react";
import List from "./List";
import tick from "../../../../../assets/membership/svg/charm_circle-tick.svg";

const MembershipPerks = () => {
  return (
    <motion.div
      className="flex flex-col gap-12 w-full"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <h1 className="font-bounded font-black text-[4rem] text-center text-[#10A0CC]">
        Membership Perks
      </h1>

      <div className="flex flex-col gap-4 items-center">
        <List img={tick} text="Ubiquity & eLearn — computing perspectives and learning resources" />
        <List img={tick} text="CareerNews — career insights and opportunities" />
        <List img={tick} text="MemberNet & Student Quick Takes — member and student newsletters" />
        <List img={tick} text="ACM Queue — engineering-focused technical magazine" />
        <List img={tick} text="Communications of the ACM — flagship monthly magazine" />
        <List img={tick} text="Complete access to ACM’s Digital Library and research publications." />
      </div>
    </motion.div>
  );
};

export default MembershipPerks;
