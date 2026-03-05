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
        onClick={() => {
          console.log("Scrolling to Home...");
          lenis?.scrollTo(".home-class", {
            offset: 0, 
            duration: 1.2, 
          });
        }}
        // icon={<Home size={19} strokeWidth={2.3} />} // Uncomment to add an icon
      >
        Home
      </FunkyButton>

      <FunkyButton
        variant="blue"
        className="w-full h-full"
        onClick={() => {
          console.log("Scrolling to About...");
          lenis?.scrollTo(".why-section-class", {
            offset: 380, 
            duration: 1.2, 
          });
        }}
      >
        About
      </FunkyButton>

      <FunkyButton
        variant="blue"
        className="w-full h-full"
        onClick={() => {
          console.log("Scrolling to Events...");
          lenis?.scrollTo(".events-class", {
            offset: 0, 
            duration: 1.2, 
          });
        }}
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
