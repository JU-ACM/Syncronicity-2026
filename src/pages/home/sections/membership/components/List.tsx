import { motion } from "motion/react";

const List = ({ text, img }: { text: string; img: string }) => {
  return (
    <motion.div
      initial={{ opacity: 0}}
      whileInView={{ opacity: 1}}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <div className="flex gap-6 items-center justify-start">
        <div className="h-5 w-5">
          <img src={img} alt="" />
        </div>
        <p className="text-[1.25rem] font-euclid">
          {text}
        </p>
      </div>
    </motion.div>
  );
};

export default List;
