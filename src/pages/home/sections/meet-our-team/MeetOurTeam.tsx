import React from "react";
import Card from "./Card";
import {coreTeam , webDevTeam , web3Team , designTeam , mlTeam} from './teamMember'

const TeamSection = ({ title, members }) => (
  <div className="mb-16">
    <h2 className="text-3xl sm:text-4xl font-bold text-[#00DB96] mb-8 text-center">
      {title}
    </h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto px-4">
      {members.map((member, index) => (
        <Card key={index} {...member} />
      ))}
    </div>
  </div>
);

const MeetOurTeam = () => {
  

  return (
    <div className="min-h-screen bg-[#131313] py-12 sm:py-16">
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