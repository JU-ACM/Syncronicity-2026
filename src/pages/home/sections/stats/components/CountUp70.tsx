import CountUp from "./CountUp";
import DecryptedText from "./DecryptedText";

const CountUp70 = () => {
  return (
    <div className="flex flex-col justify-center bg-[#83ACFF] items-center h-full w-full rounded-xl font-euclid text-white px-[2vw] gap-[0.5vw]">
      <p className=" font-bold text-[6vw] leading-none">
        <CountUp
          from={0}
          to={70}
          separator=","
          direction="up"
          duration={1}
          className="count-up-text"
        />
        +
      </p>
      <DecryptedText
        parentClassName="w-full font-medium text-[1vw] text-center"
        text="Years of advancing computing through community and innovation."
        animateOn="view"
        revealDirection="start"
        duration={2000}
        maxIterations={20}
      />
    </div>
  );
};

export default CountUp70;
