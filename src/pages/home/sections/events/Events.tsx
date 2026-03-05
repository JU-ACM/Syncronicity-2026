import React, { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
// import herobg from '../../../../assets/dashboard/hero-bg.png'
import mascotImg from '../../../../assets/events/events_mascot.png'

const EVENTS = [
  {
    id: 1,
    category: 'Workshop',
    title: 'AI & Future Tech Summit',
    description: 'Explore the cutting edge of artificial intelligence with industry leaders and researchers shaping tomorrow.',
    date: 'MAR 15, 2025',
    location: 'Main Hall · Block A',
    seats: 120,
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&q=80',
    color: '#10a0cc',
  },
  {
    id: 2,
    category: 'Competition',
    title: 'Hackathon 2025',
    description: '48 hours. One problem. Unlimited creativity. Build, break, and ship something extraordinary.',
    date: 'APR 02, 2025',
    location: 'Innovation Hub',
    seats: 200,
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600&q=80',
    color: '#f97316',
  },
  {
    id: 3,
    category: 'Cultural',
    title: 'Annual Fest Night',
    description: 'A night of performances, art, and celebration bringing the campus community together under the stars.',
    date: 'APR 20, 2025',
    location: 'Open Amphitheatre',
    seats: 500,
    image: 'https://images.unsplash.com/photo-1559060680-36abfac01944?q=80&w=1374&auto=format&fit=crop',
    color: '#a855f7',
  },
  {
    id: 4,
    category: 'Workshop',
    title: 'Design Thinking Lab',
    description: 'Hands-on sessions to master human-centered design principles with real product challenges.',
    date: 'MAY 05, 2025',
    location: 'Studio B',
    seats: 60,
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80',
    color: '#10a0cc',
  },
]

function useReveal(ref: React.RefObject<HTMLElement | null>, delay = 0) {
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            el.style.opacity = '1'
            el.style.transform = 'translateY(0)'
          }, delay)
          observer.disconnect()
        }
      },
      { threshold: 0.05 } // Lower threshold for better mobile detection
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [delay, ref])
}

const MobileEventCard: React.FC<{
  event: (typeof EVENTS)[0]
  index: number
  navigate: (path: string) => void
}> = ({ event, index, navigate }) => {
  const [tapped, setTapped] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)
  useReveal(cardRef, index * 80)

  return (
    <div
      ref={cardRef}
      className="relative flex-shrink-0 rounded-2xl overflow-hidden cursor-pointer select-none"
      style={{
        width: '72vw',
        maxWidth: '280px',
        aspectRatio: '3 / 5',
        opacity: 0,
        transform: 'translateY(40px)',
        transition: 'opacity 0.6s cubic-bezier(0.16,1,0.3,1), transform 0.6s cubic-bezier(0.16,1,0.3,1)',
        scrollSnapAlign: 'center',
      }}
      onClick={() => setTapped((p) => !p)}
    >
      <img
        src={event.image}
        alt={event.title}
        className="absolute inset-0 w-full h-full object-cover"
        style={{
          transform: tapped ? 'scale(1.06)' : 'scale(1)',
          transition: 'transform 0.5s cubic-bezier(0.16,1,0.3,1)',
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(to top, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0.08) 100%)',
        }}
      />
      <div className="absolute top-3 left-3 z-10">
        <span
          className="text-[9px] font-bold uppercase tracking-[0.22em] px-2.5 py-1 rounded-full"
          style={{
            background: event.color + '22',
            color: event.color,
            border: `1px solid ${event.color}66`,
            backdropFilter: 'blur(6px)',
          }}
        >
          {event.category}
        </span>
      </div>
      <div
        className="absolute top-3 right-3 z-10 flex items-center gap-1 transition-opacity duration-300"
        style={{ opacity: tapped ? 0 : 0.6 }}
      >
        <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
        </svg>
        <span className="text-white text-[9px] font-medium">tap</span>
      </div>
      <div
        className="absolute inset-x-0 bottom-0 px-4 pb-5 z-10 transition-all duration-300"
        style={{ opacity: tapped ? 0 : 1, transform: tapped ? 'translateY(8px)' : 'translateY(0)' }}
      >
        <h3 className="text-white font-bold text-sm leading-snug">{event.title}</h3>
        <div className="flex items-center gap-2 text-white/40 text-[10px] mt-1.5">
          <span>{event.date}</span>
          <span className="w-px h-2 bg-white/25" />
          <span>{event.location}</span>
        </div>
      </div>
      <div
        className="absolute inset-0 flex flex-col justify-end px-4 pb-5 z-10 transition-all duration-350"
        style={{
          opacity: tapped ? 1 : 0,
          transform: tapped ? 'translateY(0)' : 'translateY(10px)',
          background: 'linear-gradient(to top, rgba(0,0,0,0.97) 0%, rgba(0,0,0,0.65) 55%, rgba(0,0,0,0.08) 100%)',
        }}
      >
        <h3 className="text-white font-bold text-sm leading-snug mb-2">{event.title}</h3>
        <p className="text-white/60 text-[11px] leading-relaxed mb-3">{event.description}</p>
        <div className="flex items-center gap-2 text-white/35 text-[10px] mb-4">
          <span>{event.date}</span>
          <span className="w-px h-2 bg-white/20" />
          <span>{event.location}</span>
        </div>
        <button
          className="self-start flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-widest"
          style={{ color: event.color }}
          onClick={(e) => { e.stopPropagation(); navigate(`/event/${event.id}`) }}
        >
          Learn More
          <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </button>
      </div>
      <div
        className="absolute bottom-0 left-0 h-[2px] rounded-full z-20"
        style={{
          background: `linear-gradient(90deg, ${event.color}, transparent)`,
          width: tapped ? '100%' : '0%',
          transition: 'width 0.5s cubic-bezier(0.16,1,0.3,1)',
        }}
      />
    </div>
  )
}

const DesktopEventCard: React.FC<{
  event: (typeof EVENTS)[0]
  index: number
  navigate: (path: string) => void
}> = ({ event, index, navigate }) => {
  const cardRef = useRef<HTMLDivElement>(null)
  useReveal(cardRef, index * 60)

  return (
    <div
      ref={cardRef}
      className="group relative overflow-hidden rounded-2xl cursor-pointer"
      style={{
        opacity: 0,
        transform: 'translateY(40px)',
        transition: 'opacity 0.6s cubic-bezier(0.16,1,0.3,1), transform 0.6s cubic-bezier(0.16,1,0.3,1)',
        aspectRatio: '3 / 5',
      }}
    >
      <img
        src={event.image}
        alt={event.title}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
      />
      <div
        className="absolute inset-0"
        style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.90) 0%, rgba(0,0,0,0.35) 45%, rgba(0,0,0,0.10) 100%)' }}
      />
      <div className="absolute top-3 left-3 z-10">
        <span
          className="text-[9px] font-bold uppercase tracking-[0.22em] px-2.5 py-1 rounded-full"
          style={{
            background: event.color + '22',
            color: event.color,
            border: `1px solid ${event.color}66`,
            backdropFilter: 'blur(6px)',
          }}
        >
          {event.category}
        </span>
      </div>
      <div
        className="absolute inset-x-0 bottom-0 px-4 pb-5 transition-all duration-300 group-hover:opacity-0 group-hover:translate-y-2"
        style={{ zIndex: 10 }}
      >
        <h3 className="text-white font-bold text-sm leading-snug">{event.title}</h3>
        <div className="flex items-center gap-2 text-white/40 text-[10px] mt-1.5">
          <span>{event.date}</span>
          <span className="w-px h-2 bg-white/25" />
          <span>{event.location}</span>
        </div>
      </div>
      <div
        className="absolute inset-0 flex flex-col justify-end px-4 pb-5 opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-350 ease-out"
        style={{
          zIndex: 10,
          background: 'linear-gradient(to top, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.65) 55%, rgba(0,0,0,0.1) 100%)',
        }}
      >
        <h3 className="text-white font-bold text-sm leading-snug mb-2">{event.title}</h3>
        <p className="text-white/60 text-[11px] leading-relaxed mb-3">{event.description}</p>
        <div className="flex items-center gap-2 text-white/35 text-[10px] mb-4">
          <span>{event.date}</span>
          <span className="w-px h-2 bg-white/20" />
          <span>{event.location}</span>
        </div>
        <button
          className="self-start flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-widest transition-opacity duration-200 hover:opacity-70"
          style={{ color: event.color }}
          onClick={() => navigate(`/event/${event.id}`)}
        >
          Learn More
          <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </button>
      </div>
      <div
        className="absolute bottom-0 left-0 h-[2px] w-0 group-hover:w-full rounded-full"
        style={{
          background: `linear-gradient(90deg, ${event.color}, transparent)`,
          transition: 'width 0.5s cubic-bezier(0.16,1,0.3,1)',
          zIndex: 20,
        }}
      />
    </div>
  )
}

const Events: React.FC = () => {
  const navigate = useNavigate()
  const [activeCategory] = useState('All')
  const desktopHeadingRef = useRef<HTMLHeadingElement>(null)
  const mobileHeadingRef = useRef<HTMLHeadingElement>(null)
  const galleryRef = useRef<HTMLDivElement>(null)
  const carouselRef = useRef<HTMLDivElement>(null)
  const [activeIndex, setActiveIndex] = useState(0)

  useReveal(desktopHeadingRef, 120)
  useReveal(mobileHeadingRef, 120)
  useReveal(galleryRef as React.RefObject<HTMLElement>, 220)

  const filtered = activeCategory === 'All' ? EVENTS : EVENTS.filter((e) => e.category === activeCategory)

  useEffect(() => {
    const el = carouselRef.current
    if (!el) return
    const onScroll = () => {
      const cardWidth = el.scrollWidth / filtered.length
      setActiveIndex(Math.round(el.scrollLeft / cardWidth))
    }
    el.addEventListener('scroll', onScroll, { passive: true })
    return () => el.removeEventListener('scroll', onScroll)
  }, [filtered.length])

  return (
    <div className="min-h-screen" >
      {/* MOBILE LAYOUT */}
      <div className="md:hidden flex flex-col min-h-screen bg-no-repeat bg-center bg-cover relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none z-0 "
          style={{
            backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E\")",
            opacity: 0.35,
          }}
        />
        <div
          className="absolute top-0 left-0 w-64 h-64 rounded-full pointer-events-none z-0 "
          style={{ background: 'radial-gradient(circle, rgba(16,160,204,0.15) 0%, transparent 70%)', filter: 'blur(40px)' }}
        />

        <div className="relative z-10 pt-14 pb-4 px-6">
          <p className="text-white/50 text-[9px] font-bold uppercase tracking-[0.35em] mb-3">
            What's Coming Up
          </p>
          <h1
            ref={mobileHeadingRef}
            className="text-4xl font-extrabold leading-none tracking-tight"
            style={{
              opacity: 0,
              transform: 'translateY(28px)',
              transition: 'opacity 0.7s cubic-bezier(0.16,1,0.3,1), transform 0.7s cubic-bezier(0.16,1,0.3,1)',
              fontFamily: 'Unbounded, sans-serif',
            }}
          >
            <span className="text-white">EXCITING </span>
            <span style={{ color: '#10a0cc' }}>EVENTS</span>
            <br />
            <span className='text-white'>AWAIT !!</span>
          </h1>
          <div
            className="h-px mt-5"
            style={{ background: 'linear-gradient(90deg, #10a0cc55, transparent)' }}
          />
        </div>

        <div className="relative z-10 px-6 mb-2 flex items-center justify-between">
          <p className="text-white/30 text-[10px] uppercase tracking-widest">Swipe to explore</p>
          <div className="flex gap-1.5 ">
            {filtered.map((_, i) => (
              <div
                key={i}
                className="rounded-full transition-all duration-300"
                style={{
                  width: i === activeIndex ? '18px' : '5px',
                  height: '5px',
                  background: i === activeIndex ? '#10a0cc' : 'rgba(255,255,255,0.25)',
                }}
              />
            ))}
          </div>
        </div>

        <div
          ref={carouselRef}
          className="relative z-10 flex gap-4 overflow-x-auto pb-8 px-6 items-center overflow-y-hidden"
          style={{
            scrollSnapType: 'x mandatory',
            WebkitOverflowScrolling: 'touch',
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
          }}
        >
          {filtered.map((event, i) => (
            <MobileEventCard key={event.id} event={event} index={i} navigate={navigate} />
          ))}
          <div className="flex-shrink-0 w-4" />
        </div>

        <div className="relative z-0 flex justify-end pointer-events-none mt-auto">
          <img
            src={mascotImg}
            alt="Mascot"
            className="h-48 w-auto opacity-20 select-none"
            style={{ filter: 'blur(1px)' }}
          />
        </div>
      </div>

      {/* DESKTOP LAYOUT */}
      <div className="hidden md:flex w-full h-[110vh] flex-col items-center justify-center relative bg-no-repeat bg-center bg-cover">
        <img
          src={mascotImg}
          alt="Mascot"
          className="h-[75%] w-auto absolute right-0 bottom-0 select-none pointer-events-none"
          style={{ zIndex: 50 }}
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E\")",
            backgroundRepeat: 'repeat',
            zIndex: 1,
            opacity: 0.35,
          }}
        />
        <div
          className="absolute top-10 left-10 w-80 h-80 rounded-full pointer-events-none"
          style={{
            background: 'radial-gradient(circle, rgba(16,160,204,0.12) 0%, transparent 70%)',
            filter: 'blur(50px)',
            zIndex: 0,
          }}
        />
        <div className="relative flex flex-col gap-6 py-10 pl-8 pr-4 h-[90%] w-[75%] mr-[20%]" style={{ zIndex: 10 }}>
          <div>
            <p className="text-white text-[10px] font-bold uppercase tracking-[0.35em] mb-2">
              What's Coming Up
            </p>
            <h1
              ref={desktopHeadingRef}
              className="text-4xl sm:text-5xl font-extrabold leading-none tracking-tight"
              style={{
                opacity: 0,
                transform: 'translateY(28px)',
                transition: 'opacity 0.7s cubic-bezier(0.16,1,0.3,1), transform 0.7s cubic-bezier(0.16,1,0.3,1)',
                fontFamily: 'Unbounded, sans-serif',
              }}
            >
              <span className="text-white">EXCITING </span>
              <span style={{ color: '#10a0cc' }}>EVENTS</span>
              <br />
              <span className="text-white">AWAIT !!</span>
            </h1>
          </div>
          <div className="h-px" style={{ background: 'linear-gradient(90deg, #10a0cc55, transparent)' }} />
          <div
            ref={galleryRef}
            className="grid grid-cols-4 gap-3"
            style={{
              opacity: 0,
              transform: 'translateY(18px)',
              transition: 'opacity 0.5s ease, transform 0.5s ease',
            }}
          >
            {filtered.map((event, i) => (
              <DesktopEventCard key={event.id} event={event} index={i} navigate={navigate} />
            ))}
          </div>
        </div>
      </div>
      <div className="hidden md:block h-[20vh]" />
    </div>
  )
}

export default Events