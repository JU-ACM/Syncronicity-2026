import "./WhySection.css";
import { motion } from "framer-motion";

const bubbles = [
  {
    text: "Is this just another hackathon?",
    className: `absolute
      top-[calc(18%+0.5vw)] left-[calc(-50%-1vw)]
      bg-[rgba(16,160,204,1)] text-white font-euclid font-semibold
      text-[clamp(12px,1.2vw,16px)]
      max-w-[220px] px-6 py-4 leading-[1.4]
      rounded-tl-[100px] rounded-tr-[84px] rounded-bl-[100px]
      max-md:text-[11px] max-md:max-w-[110px]
      max-md:top-[15%] max-md:left-[-35%]`,
    initial: { opacity: 0, x: -40, scale: 0.7 },
    delay: 0.6,
  },
  {
    text: "What do I actually gain from participating?",
    className: `absolute
      top-[calc(22%+0.5vw)] right-[calc(-58%-1vw)]
      bg-[rgba(16,160,204,1)] text-white font-euclid font-semibold
      text-[clamp(12px,1.2vw,16px)]
      max-w-[220px] px-6 py-4 leading-[1.4]
      rounded-tl-[84px] rounded-tr-[100px] rounded-br-[100px]
      max-md:text-[11px] max-md:max-w-[110px]
      max-md:top-[22%] max-md:right-[-38%]`,
    initial: { opacity: 0, x: 40, scale: 0.7 },
    delay: 0.85,
  },
  {
    text: "Will this help me beyond exams?",
    className: `absolute
      top-[calc(55%+0.3vw)] left-[calc(-50%-0.8vw)]
      bg-[rgba(16,160,204,1)] text-white font-euclid font-semibold
      text-[clamp(12px,1.2vw,16px)]
      max-w-[220px] px-6 py-4 leading-[1.4]
      rounded-tl-[100px] rounded-bl-[100px] rounded-br-[84px]
      max-md:text-[11px] max-md:max-w-[110px]
      max-md:top-[55%] max-md:left-[-35%]`,
    initial: { opacity: 0, x: -40, scale: 0.7 },
    delay: 1.1,
  },
  {
    text: "Is it worth my time?",
    className: `absolute
      top-[calc(60%+0.3vw)] right-[calc(-45%-0.8vw)]
      bg-[rgba(16,160,204,1)] text-white font-euclid font-semibold
      text-[clamp(12px,1.2vw,16px)]
      max-w-[220px] px-6 py-4 leading-[1.4]
      rounded-tr-[100px] rounded-bl-[84px] rounded-br-[100px]
      max-md:text-[11px] max-md:max-w-[110px]
      max-md:top-[62%] max-md:right-[-36%]`,
    initial: { opacity: 0, x: 40, scale: 0.7 },
    delay: 1.35,
  },
];

const WhySection = () => {
  return (
    <div className="why-section-class w-full min-h-screen bg-no-repeat bg-center bg-cover overflow-x-hidden flex pb-20 md:pt-100 pt-70">
      <section className="w-full min-h-screen flex flex-col items-center justify-center pt-[0vh] md:pt-[16vh] max-md:min-h-fit max-md:justify-start">

        {/* Title */}
        <motion.h1
          className="whyTitle max-w-[1100px] font-montserrat font-black leading-[1.2] text-center text-[rgba(16,160,204,1)] mt-[clamp(-120px,-12vh,-60px)] max-h-[850px]:mt-[3vh] max-md:mt-0 max-md:px-4 max-md:leading-[1.1]"
          initial={{ opacity: 0, y: -36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="text-white">Why you can't miss </span>
          <span className="text-[#10A0CC]">Synchronicity 2.O!</span>
        </motion.h1>

        {/* Robot */}
        <motion.div
          className="relative aspect-3/5 w-[min(320px,70vw)] bg-[url('/src/assets/robot.png')] bg-cover bg-center bg-no-repeat mb-[10vh] max-md:w-[220px] max-md:mb-[1vh] max-h-[700px]:mb-[2vh]"
          initial={{ opacity: 0, y: 40, scale: 0.92 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.75, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
        >
          {bubbles.map((bubble, i) => (
            <motion.div
              key={i}
              className={bubble.className}
              initial={{ ...bubble.initial }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                delay: bubble.delay,
                duration: 0.5,
                ease: [0.34, 1.56, 0.64, 1],
              }}
              whileHover={{
                scale: 1.07,
                transition: { duration: 0.2, ease: "easeOut" },
              }}
            >
              {bubble.text}
            </motion.div>
          ))}
        </motion.div>

        {/* Body text */}
        <motion.p
          className="whyText max-w-[800px] font-euclid text-black text-[20px] leading-[1.2] flex items-center justify-center mt-[clamp(-110px,-12vh,-50px)] max-md:max-w-[80vw] max-md:text-[16px] max-md:mt-2 max-md:text-center"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, delay: 0.2, ease: "easeOut" }}
        >
          Synchronicity 2.0 is where ambition meets opportunity. Compete for massive cash prizes,cool goodies and some Swag Se Swagat. Most importantly, unlock unparalleled networking by connecting directly with renowned industry experts, gain one-on-one insights on the happening trends of tech and showcase your talent. This is your chance to go all out, challenge the boundaries and show them what sets you apart!!
        </motion.p>

      </section>
    </div>
  );
};

export default WhySection;