import CountUp from "./CountUp";
import DecryptedText from "./DecryptedText";

const CountUp100k = () => {
  return (
    <div className=" flex flex-col justify-center bg-[#5A70FF] items-center h-full w-full rounded-xl font-euclid text-white px-[5vw] gap-[1vw]">
      <p className=" font-bold text-[8.5vw] leading-none">
        <CountUp from={0} to={100} separator="," direction="up" duration={0.5} />
        k+
      </p>
      <DecryptedText
        parentClassName="w-full text-center font-medium text-[1.25vw]"
        text="Students and professionals contributing to a worldwide computing ecosystem."
        animateOn="view"
        revealDirection="start"
        duration={2000}
        maxIterations={20}
      />
    </div>
  );
};

export default CountUp100k;
