import {Data} from "./problemStatement";
import React from "react";
import Card from "./card";
import herobg from "../../../../assets/dashboard/hero-bg.png";

const ProblemStatement=()=>{
    return (
        <div className="min-h-screen w-full bg-cover bg-center bg-no-repeat px-4 sm:px-6 lg:px-8 py-16 md:py-24 " style={{ backgroundImage: `url(${herobg})` }}>
        <div className="text-center max-w-7xl mx-auto">
            <h1
                className="
                text-3xl sm:text-4xl md:text-6xl lg:text-7xl
                font-black
                leading-[1.05]
                tracking-[-0.01em]
                uppercase
                break-words
                "
                style={{ fontFamily: 'Unbounded, sans-serif' }}
            >
            <span className="text-white">SOLVE </span>
            <span className="text-transparent [-webkit-text-stroke:2px_#10A0CC]">
            REAL-WORLD
            </span>
            <br />
            <span className="text-white">CHALLENGES!!</span>
        </h1>
        </div>
  
        <div className="max-w-5xl mx-auto mt-16 md:mt-24">
          {Data.map((eventSection)=>(
            <div key={eventSection.event} className="mb-12 md:mb-20">
              <h3 className="text-2xl sm:text-3xl md:text-4xl text-[#10A0CC] font-unbounded font-bold mb-4">
                {eventSection.event}
              </h3>
              {eventSection.problems.map((problem)=>(
                <Card
                  key={`${eventSection.event}-${problem.id}`}
                  id={problem.id}
                  title={problem.title}
                  description={problem.description}
                  tags={problem.tags}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default ProblemStatement;