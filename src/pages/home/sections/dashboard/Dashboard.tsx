import React from "react";
import herobg from "../../../../assets/dashboard/hero-bg.png";
import heroimg from "../../../../assets/dashboard/hero-img.png";

import ListofLinks from "./ListofLinks";
import Description from "./Description";
import { EventCard } from "./EventCard";
import Navbar from "../../../../../components/Navbar";
import Clouds from "./Clouds";

export const Dashboard: React.FC = () => {
  return (
    <div
      className="
        w-screen
        md:w-full
        min-h-[150vh]
        flex
        flex-col
        items-center
        justify-start
		
        bg-no-repeat
        bg-center
        bg-cover
      "
      style={{
        backgroundImage: `url(${herobg})`,
      }}
    >
      <Navbar />
      <section className="h-screen w-full relative">
        {/* Left Event Card */}
        <EventCard
          className="absolute hidden lg:block left-15 top-60 cursor-pointer"
          title="Synchronicity S2"
          duration="10-hour · on-site"
          eventType="hackathon"
          prizePool="₹23,000 prize pool"
          date="11 April 2025"
          tiltDirection="left"
        />

        <p className="absolute md:top-15 top-30 inset-x-0 font-bounded lg:text-8xl md:text-6xl text-4xl text-white text-center px-12 md:px-0 ">
          Synchronicity
          <br />
          <span className="text-blue-600">Season 2</span>
        </p>

        <ListofLinks className="hidden md:flex lg:left-80 lg:top-80 md:left-40 top-60" />

        <img className="absolute left-1/2 -translate-x-1/2 lg:top-45 md:top-35 top-50 lg:w-120 md:w-100 w-70 object-contain" src={heroimg} alt="robot image" />

        <Description className="lg:right-80 lg:top-79 md:right-40 top-59" />

        {/* Right Event Card */}
        <EventCard
          className="absolute hidden lg:block right-15 top-60 cursor-pointer"
          title="CodeFest 2025"
          duration="24-hour · virtual"
          eventType="coding competition"
          prizePool="₹50,000 prize pool"
          date="25 May 2025"
          tiltDirection="right"
        />
      </section>
      <Clouds />
    </div>
  );
};
