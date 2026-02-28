import CountUp from "./CountUp";
import DecryptedText from "./DecryptedText";

const CountUp35 = () => {
  return (
    <div className="flex flex-col justify-center bg-[#00DB96] items-center h-full w-full rounded-xl font-euclid text-white px-[2vw] gap-[0.5vw]">
      <p className=" font-bold text-[3vw] leading-none">
        <CountUp from={0} to={35} separator="," direction="up" duration={1} />
        k+
      </p>
      <DecryptedText
        parentClassName="w-full font-medium text-[1vw] text-center px-4"
        text="Special Interest Groups across computing."
        animateOn="view"
        revealDirection="start"
        duration={2000}
        maxIterations={20}
      />
    </div>
  );
};

export default CountUp35;
