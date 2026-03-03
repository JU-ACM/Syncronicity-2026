import { motion } from "motion/react";
import offer from "../../../../../assets/membership/svg/bxs_offer.svg";
import List from "./List";


const Discount = () => {
  return (
    <div
      className="flex flex-col gap-6 w-full"
    >
      <motion.h1
        className="font-bounded font-black text-[2.25rem] text-center text-[#10A0CC]"
        initial={{
          opacity: 0,
        }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.4 }}
      >
        Additional Discount & Free Offers
      </motion.h1>

      <div className="flex flex-col gap-3 items-center">
        <div className="flex flex-col gap-4 items-center">
        <List img={offer} text="Reduced Article Processing Charges (APCs) for publishing peer-reviewed open-access articles in ACM publications" />
        <List img={offer} text="Free ACM email forwarding with reliable spam filtering" />
      </div>
      </div>
    </div>
  );
};

export default Discount;
