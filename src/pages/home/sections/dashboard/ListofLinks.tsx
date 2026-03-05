import React from "react";
import FunkyButton from "../../../../../components/FunkyButton";
import { useLenis } from "lenis/react";
// import { Home, Info, Calendar, Bell } from 'lucide-react'; // Optional icons

function ListofLinks({ className = "" }): React.JSX.Element {
  const lenis = useLenis();
  return (
    <div
      className={` ${className} absolute z-10 flex flex-col gap-4 lg:w-70 md:w-50`}
    >
      <FunkyButton
        variant="blue"
        className="w-full h-full"
        onClick={() => console.log("Navigating to Home...")}
        // icon={<Home size={19} strokeWidth={2.3} />} // Uncomment to add an icon
      >
        Home
      </FunkyButton>

      <FunkyButton
        variant="blue"
        className="w-full h-full"
        onClick={() => console.log("Navigating to About ACM-JU...")}
      >
        About
      </FunkyButton>

      <FunkyButton
        variant="blue"
        className="w-full h-full"
        onClick={() => console.log("Navigating to Events...")}
      >
        Events
      </FunkyButton>

      <FunkyButton
        variant="blue"
        className="w-full h-full"
        onClick={() => {
          console.log("Scrolling to Timeline...");
          lenis?.scrollTo(".timeline-class", {
            offset: 0, 
            duration: 1.2, 
          });
        }}
      >
        Timeline
      </FunkyButton>
    </div>
  );
}

export default ListofLinks;
