import React, { useRef, useState, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger)

// Define the shape of your component props
interface MarqueeProps {
  texts?: string[]
  Icon?: React.ElementType<{ color?: string; size?: number }> 
  iconSize?: number
  bgColor?: string
  textColor?: string
  iconColor?: string
}

const Marquee2: React.FC<MarqueeProps> = ({ 
  texts = ["Interactive Experiences", "Design System", "UI/UX", "Web & App Design"], 
  Icon,
  iconSize,
  bgColor = "bg-white",
  textColor = "text-[#5043FA]",
  iconColor = "#5043FA"
}) => {
  const marqueeRef = useRef<HTMLDivElement>(null)
  const singleSetRef = useRef<HTMLDivElement>(null)
  
  const [repeatCount, setRepeatCount] = useState<number>(4) 

  useEffect(() => {
    const calculateRepetitions = () => {
      if (singleSetRef.current) {
        const singleSetWidth = singleSetRef.current.offsetWidth
        const targetWidth = window.innerWidth * 3 
        
        if (singleSetWidth > 0) {
          const requiredRepeats = Math.ceil(targetWidth / singleSetWidth)
          setRepeatCount(Math.max(requiredRepeats, 2))
        }
      }
    }

    calculateRepetitions()
    
    window.addEventListener('resize', calculateRepetitions)
    return () => window.removeEventListener('resize', calculateRepetitions)
  }, [texts])

  useGSAP(() => {
    if (!marqueeRef.current) return;

    gsap.to(marqueeRef.current, {
      xPercent: 10, // Moves to the right (opposite of Marquee1)
      ease: 'linear',
      scrollTrigger: {
        trigger: marqueeRef.current,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      }
    })
  }, []) 

  const MarqueeItemSet = ({ isFirst }: { isFirst: boolean }) => (
    <div ref={isFirst ? singleSetRef : null} className='flex w-max items-center'>
      {texts.map((text, index) => (
        <div key={index} className='flex items-center gap-8 py-2 shrink-0 mx-4'>
          <p className={`${textColor} text-[1rem] md:text-[1.5rem] lg:text-[2rem] font-unbounded font-medium uppercase text-nowrap mt-0.5`}>
            {text}
          </p>
          {Icon && (
            <div className={`${textColor} mt-1`}>
              <Icon color={iconColor} size={iconSize} />
            </div>
          )}
        </div>
      ))}
    </div>
  )

  return (
    <div ref={marqueeRef} className={`${bgColor} flex shrink-0 w-max right-0`}>
      {Array.from({ length: repeatCount }).map((_, index) => (
        <MarqueeItemSet key={index} isFirst={index === 0} />
      ))}
    </div>
  )
}

export default Marquee2