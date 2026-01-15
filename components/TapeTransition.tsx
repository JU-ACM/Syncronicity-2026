'use client'

import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const TapeTransition: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const tape1Ref = useRef<HTMLImageElement>(null)
  const tape2Ref = useRef<HTMLImageElement>(null)

  useEffect(() => {
    if (!containerRef.current || !tape1Ref.current || !tape2Ref.current) return

    const ctx = gsap.context(() => {
      gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'middle middle',
          end: 'bottom top',
          scrub: true,
        },
      })
        // Tape from top-left
        .fromTo(
          tape1Ref.current,
          { x: '-120%', y: '-120%' },
          { x: '0%', y: '0%', ease: 'expoScale' },
          0
        )
        // Tape from bottom-right
        .fromTo(
          tape2Ref.current,
          { x: '120%', y: '120%' },
          { x: '0%', y: '0%', ease: 'expoScale' },
          0
        )
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[120vh] bg-transparent overflow-x-hidden"
    >
      <img
        ref={tape1Ref}
        src="/tape2.png"
        className="absolute inset-0 w-full pointer-events-none"
        alt=""
      />
      <img
        ref={tape2Ref}
        src="/tape1.png"
        className="absolute inset-0 w-full pointer-events-none"
        alt=""
      />
    </div>
  )
}

export default TapeTransition
