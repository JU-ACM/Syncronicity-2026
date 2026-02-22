import React from 'react';
import herobg from '../../../../assets/dashboard/hero-bg.png';

import ListofLinks from './ListofLinks';
import Description from './Description';
import { EventCard } from './EventCard';
import Navbar from '../../../../../components/Navbar'
import Clouds from './Clouds';
import Robot from './Robot';



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
      <section className="h-screen w-full flex justify-center items-center relative">
        {/* Left Event Card */}
        <EventCard 
				className="relative scale-75 md:scale-100 left-40 md:left-8 top-1/2 -translate-y-1/2 mt-[75%] md:mt-0"
				title="Synchronicity S2"
				duration="10-hour · on-site"
				eventType="hackathon"
				prizePool="₹23,000 prize pool"
				date="11 April 2025"
				tiltDirection="left"
			  />

        {/* Container for title, robot, link, description, and join button */}
        <div className=" w-full lg:w-[55%] h-[80%] flex flex-col items-center z-10 ">
          <div className='h-[40%] w-[100%] font-black font-Bounded text-sm md:text-xl flex items-center  '>
            <h1 className='text-white text-center px-12 md:px-0 '>
              Your Gateway To The Global Computing Community
            </h1>
          </div>
          
          <div className='h-[40%] w-full overflow-y-visible grid grid-rows-2 md:grid-cols-3'>
            <ListofLinks/>
	  		<Robot/>


            <Description/>
          </div>
        </div>

        {/* Right Event Card */}
        <EventCard 
				className="relative scale-75 md:scale-100 right-40 md:right-8 top-1/2 -translate-y-1/2 mt-[75%] md:mt-0"
				title="CodeFest 2025"
				duration="24-hour · virtual"
				eventType="coding competition"
				prizePool="₹50,000 prize pool"
				date="25 May 2025"
				tiltDirection="right"
			  />
      </section>
	  <Clouds/>

    
	  
    </div>
  );
};