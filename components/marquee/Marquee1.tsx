import React, { useRef, useState, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger)

// Define the shape of your component props
interface MarqueeProps {
  texts?: string[]
  // Added 'size' to the ElementType to fix any TypeScript warnings for size={50}
  Icon?: React.ElementType<{ color?: string; size?: number }> 
  iconSize?: number
  bgColor?: string
  textColor?: string
  iconColor?: string
}

const Marquee1: React.FC<MarqueeProps> = ({ 
  texts = ["Write your text here"], 
  Icon,
  iconSize,
  bgColor = "bg-[#5043FA]",
  textColor = "text-white",
  iconColor = "white"
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
      xPercent: -10, 
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
        <div key={index} className='flex items-center gap-4 md:gap-8 py-2 shrink-0 mx-2 md:mx-4'>
          <p className={`${textColor} text-[0.8rem] md:text-[1rem] lg:text-[1.5rem] font-unbounded font-medium uppercase text-nowrap mt-0.5`}>
            {text}
          </p>
          {Icon && (
            <div className='mt-1'>
              <Icon color={iconColor} size={iconSize} />
            </div>
          )}
        </div>
      ))}
    </div>
  )

  return (
    <div ref={marqueeRef} className={`${bgColor} flex shrink-0 w-max`}>
      {Array.from({ length: repeatCount }).map((_, index) => (
        <MarqueeItemSet key={index} isFirst={index === 0} />
      ))}
    </div>
  )
}

export default Marquee1