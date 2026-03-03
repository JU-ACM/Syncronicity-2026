'use client'

import React, { useEffect, useRef } from 'react'
import Cityscape from './Cityscape'
import '../../../../index.css'
import infinity from '../../../../assets/about/infinity-icon.svg'
import bulb from '../../../../assets/about/bulb-icon.svg'
// import TapeTransition from '../../../../../components/TapeTransition'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import ImageTrail from './ImageTrail'

gsap.registerPlugin(ScrollTrigger)

const LogoSquare = () => (
  <div className="w-24 h-24 md:w-28 md:h-28 rounded-2xl bg-white/10 border border-white/20 backdrop-blur-sm flex items-center justify-center transition-transform duration-500 hover:scale-110 hover:bg-white/20">
    <div className="w-10 h-10 rounded-lg bg-white/30" />
  </div>
)

const About: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const sectionRefs = [
    useRef<HTMLElement | null>(null),
    useRef<HTMLElement | null>(null),
    useRef<HTMLElement | null>(null),
    useRef<HTMLElement | null>(null),
  ]

  const images = [
    'https://images.unsplash.com/photo-1543270122-869908274728?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://plus.unsplash.com/premium_photo-1733892954383-02cb3adf0709?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1727434032792-c7ef921ae086?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1531686264889-56fdcabd163f?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  ]

  useEffect(() => {
    if (!containerRef.current) return
    const refs = sectionRefs.map((r) => r.current)
    if (refs.some((r) => !r)) return

    const ctx = gsap.context(() => {
      gsap.set(refs.slice(1), { opacity: 0, y: 30, visibility: 'hidden' })

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: '+=400%',
          scrub: 1,
          pin: true,
          pinSpacing: true,
        },
      })

      refs.forEach((section, i) => {
        if (i === refs.length - 1) return

        const current = section
        const next = refs[i + 1]

        tl.to(current, {
          opacity: 0,
          y: -30,
          duration: 1,
          ease: 'power2.inIn'
        }, i * 3)

        tl.fromTo(next,
          { opacity: 0, y: 30, visibility: 'visible' },
          {
            opacity: 1,
            y: 0,
            duration: 1.2,
            ease: 'power2.out'
          },
          (i * 3) + 0.5
        )

        tl.to({}, { duration: 1.5 })
      })
    }, containerRef)

    return () => ctx.revert()
  }, [])

  const sponsors = [
    {
      title: 'Diamond Sponsors',
      subtitle: 'Our Visionaries',
      count: 2,
      layout: 'row' as const,
      gradient: 'from-[#70D2FF] via-white to-[#C2E9FB]'
    },
    {
      title: 'Platinum Sponsors',
      subtitle: 'Our Champions',
      count: 4,
      layout: 'row' as const,
      gradient: 'from-[#757F9A] via-[#D7DDE8] to-[#757F9A]'
    },
    {
      title: 'Gold Sponsors',
      subtitle: 'Our Supporters',
      count: 4,
      layout: 'row' as const,
      gradient: 'from-[#BF953F] via-[#FCF6BA] to-[#B38728]'
    },
    {
      title: 'Community Partners',
      subtitle: 'Our Community',
      count: 6,
      layout: 'grid' as const,
      gradient: 'from-white via-white/70 to-white/40'
    },
  ]

  return (
    <>
      <div className="relative w-full min-h-[150vh] bg-[#131313]">
        <div className="absolute top-0 h-full w-full z-[1] pointer-events-auto">
          <ImageTrail items={images} />
        </div>
        <Cityscape />

        <div
          ref={containerRef}
          className="relative h-screen w-full bg-[#131313]"
        >
          {sponsors.map((sponsor, i) => (
            <section
              key={i}
              ref={sectionRefs[i]}
              className="content-container absolute inset-0 flex flex-col justify-between items-center h-screen"
            >
              {/* Responsive width for mobile vs desktop */}
              <div className="h-[70%] w-[90%] md:w-[60%] flex flex-col justify-between items-center mt-[15vh]">
                <div className="text-section w-full flex flex-col items-center justify-between gap-6 py-4">
                  <div className="flex flex-col items-center gap-3 text-center">
                    <p className="text-xs uppercase tracking-[0.3em] text-white/50 font-light">
                      {sponsor.subtitle}
                    </p>
                    <h1 className={`text-lg sm:text-xl md:text-3xl lg:text-5xl font-unbounded font-bold text-center bg-gradient-to-r ${sponsor.gradient} bg-clip-text text-transparent drop-shadow-sm`}>
                      {sponsor.title}
                    </h1>
                  </div>

                  {sponsor.layout === 'row' ? (
                    <div className="flex flex-row items-center justify-center gap-4 md:gap-6 flex-wrap mt-4">
                      {Array.from({ length: sponsor.count }).map((_, j) => (
                        <LogoSquare key={j} />
                      ))}
                    </div>
                  ) : (
                    /* Fixed: grid-cols-2 for mobile, grid-cols-4 for desktop */
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4 overflow-y-auto md:overflow-visible max-h-[40vh] md:max-h-none">
                      {Array.from({ length: sponsor.count }).map((_, j) => (
                        <LogoSquare key={j} />
                      ))}
                    </div>
                  )}
                </div>

                <div className="text-section h-[15%] w-[30%] flex-col items-center justify-center text-center hidden md:flex">
                  <img className="h-[50%]" src={infinity} alt="infinity" />
                  <div className="h-[50%] w-[80%] flex items-center justify-center gap-2 whitespace-nowrap">
                    <img className="h-[50%]" src={bulb} alt="bulb" />
                    <p className="text-sm font-bold text-white">Pro tip</p>
                    <p className="text-sm font-light text-white">Move your mouse</p>
                  </div>
                </div>
              </div>
            </section>
          ))}
        </div>
      </div>
    </>
  )
}

export default About