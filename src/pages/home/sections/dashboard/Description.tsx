import React from "react";

function Description({ className = "" }): React.JSX.Element {
  return (
    <div
      className={` ${className} absolute lg:w-70 md:w-50 w-[70%] text-black font-euclid lg:text-base md:text-sm text-center md:text-left`}
    >
      Step into the future at Synchronicity 2.0, the ultimate 24-hour open
      innovation hackathon. Test your skills, collaborate with like-minded
      innovators, and redefine what's possible. Are you ready to make your mark?
    </div>
  );
}

export default Description;
