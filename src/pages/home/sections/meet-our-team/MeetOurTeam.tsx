import React from "react";
import Card from "./Card";
import {
  coreTeam,
  webDevTeam,
  web3Team,
  designTeam,
  mlTeam,
} from "./teamMember";

const TeamSection = ({ title, members }) => (
  <div className="m-16 border-2 border-red-500">
    <div className="text-3xl sm:text-4xl font-bold text-[#00DB96] mb-8 text-center border-2 border-green-500 h-auto">
      {title}
    </div>
    <div className="flex flex-wrap justify-center gap-4 max-w-7xl mx-auto px-4">
      {members.map((member, index) => (
        <div
          key={index}

          className="w-full sm:w-[calc(50%-0.5rem)] lg:w-[calc(25%-0.75rem)]"
        >
          <Card {...member} />
        </div>
      ))}
    </div>
  </div>
);

const MeetOurTeam = () => {
  return (
    <div className="min-h-screen bg-[#131313] py-12 sm:py-16 gap-8 flex flex-col items-center">
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white text-center mb-12 sm:mb-16 px-4">
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