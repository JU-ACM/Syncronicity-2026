'use client'

import React, { useEffect, useRef } from 'react'
import Cityscape from './Cityscape'
import '../../../../index.css'
import infinity from '../../../../assets/about/infinity-icon.svg'
import bulb from '../../../../assets/about/bulb-icon.svg'
import TapeTransition from '../../../../../components/TapeTransition'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import  ImageTrail  from './ImageTrail'

gsap.registerPlugin(ScrollTrigger)

const About: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const section1Ref = useRef<HTMLElement | null>(null)
  const section2Ref = useRef<HTMLElement | null>(null)

  const images = [
    'https://images.unsplash.com/photo-1543270122-869908274728?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://plus.unsplash.com/premium_photo-1733892954383-02cb3adf0709?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1727434032792-c7ef921ae086?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1531686264889-56fdcabd163f?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  ]

  useEffect(() => {
    if (!containerRef.current || !section1Ref.current || !section2Ref.current) return

    const ctx = gsap.context(() => {
      gsap.set(section2Ref.current, { opacity: 0 })

      gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 25%',
          end: '+=180%',
          scrub: true,
          pin: true,
        },
      })
        .to(section1Ref.current, { opacity: 0 }, 0)
        .to(section2Ref.current, { opacity: 1 }, 0.3)

    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <>
    <div className=" relative w-full min-h-[150vh] bg-[#131313]">
      <div className="absolute top-0 h-full w-full z-[1] pointer-events-auto">
  <ImageTrail items={images} />
</div>
      <Cityscape />

      {/* PINNED STACK CONTAINER */}
      <div
        ref={containerRef}
        className="relative h-screen w-full bg-[#131313]"
      >
        {/* SECTION 1 */}
        <section
          ref={section1Ref}
          className="content-container absolute inset-0 flex flex-col justify-between items-center h-screen"
        >
          <div className="h-[70%] w-[60%] flex flex-col justify-between items-center">
            <div className="text-section h-[70%] w-full flex flex-col items-center justify-between py-4">
              <h1 className="text-xl sm:text-3xl md:text-5xl text-white font-unbounded font-bold text-center">
                About ACM-JU
              </h1>
              <p className="text-xs sm:text-md md:text-lg text-white w-[90%] md:w-[70%] text-center">
                Jadavpur University ACM Student Chapter, started in 2022, is an auxiliary institution of ACM that aims to solve the difficulties of future in the present with technical proficiency. We have a vision to create a thriving ecosystem of learning and growth, where students from all backgrounds will come together to work on their shared interests and be aided by the vastly connected network of ACM professionals. We emphasize on bringing together ignited minds and contribute towards the scientific development of the computing community through various workshops, webinars, coding competitions and so much more.
              </p>
            </div>

            <div className="text-section h-[15%] w-[30%] flex-col items-center justify-center text-center hidden md:flex ">
              <img className="h-[50%]" src={infinity} />
              <div className="h-[50%] w-[80%] flex items-center justify-center gap-2 whitespace-nowrap">
                <img className="h-[50%]" src={bulb} />
                <p className="text-sm font-bold text-white">Pro tip</p>
                <p className="text-sm font-light text-white">Move your mouse</p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 2 */}
        <section
          ref={section2Ref}
          className="content-container absolute inset-0 flex flex-col items-center justify-center h-screen mt-[-15vh]"
        >
          <div className="h-[70%] w-[60%] flex flex-col justify-between items-center">
            <div className="text-section h-[70%] w-full flex flex-col items-center justify-between py-4">
              <h1 className="text-lg sm:text-xl md:text-3xl lg:text-5xl w-[90%] md:w-[70%] text-white font-unbounded font-bold text-center">
                Why you should join ACM-JU ?
              </h1>
              <p className="text-xs sm:text-md md:text-lg text-white w-[90%] md:w-[70%] text-center">
                You get to be a part of the largest computing society in the world! ACM provides you the tools and resources to help get you there by advancing your career and enriching your knowledge with life-long learning resources. Here at ACM Student Chapter, Jadavpur University, members get to boost their profile by not only participating in, but organizing the numerous events held by ACM JU. ACM JU Members might also get discounted prices while registering for events organized by us!
              </p>
            </div>

            <div className="text-section h-[15%] w-[30%]  flex-col items-center justify-center text-center hidden md:flex">
              <img className="h-[50%]" src={infinity} />
              <div className="h-[50%] w-[80%] flex items-center justify-center gap-2 whitespace-nowrap">
                <img className="h-[50%]" src={bulb} />
                <p className="text-sm font-bold text-white">Pro tip</p>
                <p className="text-sm font-light text-white">Move your mouse</p>
              </div>
            </div>
          </div>
        </section>
      </div>
     
    </div>
    <div className='h-[25vh] w-full'>
        <TapeTransition/>
    </div>
    </>
  )
}

export default About
