import React from "react";

function Description({ className = "" }): React.JSX.Element {
  return (
    <div
      className={` ${className} absolute lg:w-70 md:w-50 w-[70%] text-black font-euclid lg:text-base md:text-sm text-[0.95rem] text-center md:text-left hover:scale-105 transition-all duration-300`}
    >
      Step into the future at Synchronicity S2, the ultimate 24-hour open
      innovation hackathon. Test your skills, collaborate with like-minded
      innovators, and redefine what's possible. Are you ready to make your mark?
    </div>
  );
}

export default Description;
