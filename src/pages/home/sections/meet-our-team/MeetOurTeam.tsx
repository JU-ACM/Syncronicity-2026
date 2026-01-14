import React from "react";
import Card from "./Card";
import {
  coreTeam,
  webDevTeam,
  web3Team,
  designTeam,
  mlTeam,
} from "./teamMember";

import unboundedFont from "../../../../assets/fonts/Unbounded/Unbounded-VariableFont_wght.ttf";

const TeamSection = ({ title, members, sectionHeight = "auto" }) => (
  <div 
    className="w-full max-w-[1200px] mx-auto mb-20 flex flex-col items-center"
    style={{ minHeight: sectionHeight }}
  >
    {/* Heading: 1200x58, font-size 48px, weight 600, line-height 120% */}
    <div className="w-full h-[58px] flex items-center justify-center mb-10">
      <h2 className="text-[32px] sm:text-[48px] font-semibold leading-[1.2] text-[#00DB96] text-center font-['Unbounded']">
        {title}
      </h2>
    </div>

    {/* Card Container: 1200px width, row height approx 394px */}
    <div className="w-full flex flex-wrap justify-center gap-4 lg:gap-6 px-4">
      {members.map((member, index) => (
        <div
          key={index}
          className="w-full sm:w-[calc(50%-1rem)] lg:w-[calc(25%-1.25rem)] max-h-[394px]"
        >
          <Card {...member} />
        </div>
      ))}
    </div>
  </div>
);

const MeetOurTeam = () => {
  return (
    <div className="min-h-screen bg-[#131313] py-16 flex flex-col items-center overflow-x-hidden">
      {/* Inline Font Declaration using Unbounded.ttf file */}
      <style dangerouslySetInnerHTML={{ __html: `
        @font-face {
          font-family: 'Unbounded';
          src: url('${unboundedFont}') format('truetype');
          font-weight: 100 900;
          font-style: normal;
          font-display: swap;
        }
      `}} />

      <h1 className="text-4xl sm:text-6xl font-bold text-white text-center mb-24 px-4 font-['Unbounded']">
        Meet Our Team
      </h1>

      <TeamSection title="Core Team" members={coreTeam} />
      <TeamSection title="Web Development Team" members={webDevTeam} />
      <TeamSection title="Web3 Team" members={web3Team} />
      <TeamSection title="Design Team" members={designTeam} />
      <TeamSection title="ML Team" members={mlTeam} />
    </div>
  );
};

export default MeetOurTeam;