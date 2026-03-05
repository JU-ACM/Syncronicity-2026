import React from "react";
import herobg from "../../../../assets/dashboard/hero-bg.png";
import heroimg from "../../../../assets/dashboard/hero-img.png";
import icpcMockFest from "../../../../assets/dashboard/icpc-mockfest-card.jpeg";
import syncS1 from "../../../../assets/dashboard/synchronicity-s1-card.jpeg";
import ListofLinks from "./ListofLinks";
import Description from "./Description";
import { EventCard } from "./EventCard";
import Navbar from "../../../../../components/Navbar";
import FunkyColorButton from "../../../../../components/FunkyColorButton";
import DiscordIcon from "../../../../../components/icons/DiscordIcon";
import DevfolioIcon from "../../../../../components/icons/DevfolioIcon";

export const Dashboard: React.FC = () => {
  return (
    <div
      className="
        hero-class
        w-screen
        md:w-full
        h-220
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
      <section className="h-full w-full relative">
        {/* Left Event Card - Changed from lg:block to xl:block */}
        <EventCard
          className="absolute hidden xl:block left-15 top-60 cursor-pointer"
          imageUrl={syncS1}
          title="Synchronicity S1"
          duration="10-hour · on-site"
          eventType="hackathon"
          prizePool="₹23,000 prize pool"
          date="11 April 2025"
          tiltDirection="left"
        />

        <p className="absolute left-1/2 -translate-x-1/2 md:top-15 top-30 font-bounded lg:text-8xl md:text-6xl text-4xl text-white text-center">
          Synchronicity
          <br />
          <span className="text-blue-600">Season 2</span>
        </p>

        <ListofLinks className="hidden md:flex xl:left-80 xl:top-79 lg:left-30 lg:top-79 md:left-[10vw] top-60" />

        <img
          className="absolute left-1/2 -translate-x-1/2 lg:top-45 md:top-35 top-50 lg:w-120 md:w-100 w-70 object-contain"
          src={heroimg}
          alt="robot image"
        />

        <Description className="xl:right-80 xl:top-79 lg:right-30 lg:top-79 md:right-[10vw] md:translate-x-0 md:left-auto md:top-59 left-1/2 -translate-x-1/2 top-120" />

        <div className="absolute w-full flex flex-col gap-2 md:top-125 top-160 items-center">
          <FunkyColorButton
            icon={<DevfolioIcon size={28} color="white" />}
            color1="#3770ff"
            color2="#00DB96"
            textColor="white"
            className="font-unbounded font-bold w-78 px-8 py-3 lg:translate-x-76 md:translate-x-0 "
          >
            Apply with Devfolio
          </FunkyColorButton>
          <FunkyColorButton
            icon={<DiscordIcon size={28} />}
            color1="#5765F1"
            color2="#00DB96"
            textColor="white"
            onClick={() =>
              window.open(
                "https://discord.gg/zAQB3aFw",
                "_blank",
                "noopener,noreferrer",
              )
            }
            className="font-unbounded font-bold w-78 px-8 py-3 lg:translate-x-76 md:translate-x-0"
          >
            Join Discord
          </FunkyColorButton>
        </div>

        {/* Right Event Card - Changed from lg:block to xl:block */}
        <EventCard
          className="absolute hidden xl:block right-15 top-60 cursor-pointer"
          imageUrl={icpcMockFest}
          title="CodeFest 2025"
          duration="24-hour · virtual"
          eventType="coding competition"
          prizePool="₹50,000 prize pool"
          date="25 May 2025"
          tiltDirection="right"
        />
      </section>
    </div>
  );
};
