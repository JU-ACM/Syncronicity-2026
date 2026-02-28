import React, { useEffect, useRef, useState } from 'react'
import herobg from '../../../../assets/dashboard/hero-bg.png'
import mascotImg from '../../../../assets/events/events_mascot.png'
// ── Placeholder event data – swap with your real data ──────────────────────
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
    image: 'https://images.unsplash.com/photo-1559060680-36abfac01944?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
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
  {
    id: 5,
    category: 'Competition',
    title: 'Robotics Challenge',
    description: 'Engineer, program, and race your bot through dynamic obstacle courses in this flagship robotics showdown.',
    date: 'MAY 18, 2025',
    location: 'Engineering Block',
    seats: 80,
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&q=80',
    color: '#f97316',
  },
  {
    id: 6,
    category: 'Cultural',
    title: 'Music & Arts Carnival',
    description: 'Live bands, murals, installations, and street food collide in our biggest open-air cultural extravaganza.',
    date: 'JUN 01, 2025',
    location: 'Central Lawn',
    seats: 350,
    image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&q=80',
    color: '#a855f7',
  },
]

const CATEGORIES = ['All', 'Workshop', 'Competition', 'Cultural']

// ── Reveal on scroll ─────────────────────────────────────────────────────────
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
      { threshold: 0.12 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [delay])
}

// ── Event Card ───────────────────────────────────────────────────────────────
const EventCard: React.FC<{ event: (typeof EVENTS)[0]; index: number }> = ({ event, index }) => {
  const cardRef = useRef<HTMLDivElement>(null)
  useReveal(cardRef, index * 70)

  return (
    <div
      ref={cardRef}
      className="group relative overflow-hidden rounded-xl cursor-pointer"
      style={{
        opacity: 0,
        transform: 'translateY(36px)',
        transition: 'opacity 0.55s cubic-bezier(0.16,1,0.3,1), transform 0.55s cubic-bezier(0.16,1,0.3,1)',
      }}
    >
      {/* Full-bleed image */}
      <div className="relative w-full h-52 overflow-hidden rounded-xl">
        <img
          src={event.image}
          alt={event.title}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />

        {/* ── Default: dark band at bottom with title ── */}
        <div
          className="absolute inset-x-0 bottom-0 px-4 pt-10 pb-4 transition-opacity duration-300 group-hover:opacity-0"
          style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.85) 0%, transparent 100%)' }}
        >
          <span
            className="block text-[9px] font-bold uppercase tracking-[0.2em] mb-1"
            style={{ color: event.color }}
          >
            {event.category}
          </span>
          <h3 className="text-white font-bold text-sm leading-snug">
            {event.title}
          </h3>
        </div>

        {/* ── Hover: full overlay with description + learn more ── */}
        <div
          className="absolute inset-0 flex flex-col justify-end px-4 pb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{
            background: 'linear-gradient(to top, rgba(0,0,0,0.93) 0%, rgba(0,0,0,0.6) 50%, rgba(0,0,0,0.15) 100%)',
          }}
        >
          <span
            className="text-[9px] font-bold uppercase tracking-[0.2em] mb-1"
            style={{ color: event.color }}
          >
            {event.category}
          </span>
          <h3 className="text-white font-bold text-sm leading-snug mb-2">
            {event.title}
          </h3>

          {/* Description slides up */}
          <p
            className="text-white/65 text-[11px] leading-relaxed mb-2.5"
            style={{
              transform: 'translateY(6px)',
              transition: 'transform 0.35s ease',
            }}
          >
            {event.description}
          </p>

          {/* Meta */}
          <div className="flex items-center gap-2 text-white/40 text-[10px] mb-3">
            <span>{event.date}</span>
            <span className="w-px h-2.5 bg-white/20" />
            <span>{event.location}</span>
          </div>

          {/* Learn More */}
          <button
            className="self-start flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-widest hover:opacity-75 transition-opacity duration-200"
            style={{ color: event.color }}
            onClick={() => {
              // TODO: navigate(`/events/${event.id}`)
            }}
          >
            Learn More
            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}

const Events : React.FC = () => {
    const [activeCategory, setActiveCategory] = useState('All')
  const headingRef = useRef<HTMLHeadingElement>(null)
  const galleryRef = useRef<HTMLDivElement>(null)
  useReveal(headingRef, 120)
  useReveal(galleryRef as React.RefObject<HTMLElement>, 220)

  const filtered =
    activeCategory === 'All' ? EVENTS : EVENTS.filter((e) => e.category === activeCategory)
  return (
    <div className=' min-h-screen ' style={{
        backgroundImage: `url(${herobg})`,
      }}>
        <div
      className="
        w-screen
        md:w-full
        h-[110vh]
        flex
        flex-col
        items-center
        justify-center
		relative
        bg-no-repeat
        bg-center
        bg-cover
      "
      
    >
        <img src={mascotImg} alt="Mascot" className="h-[70%] w-auto absolute right-0 bottom-0" />
        {/* Noise grain */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E\")",
          backgroundRepeat: 'repeat',
          zIndex: 1,
          opacity: 0.35,
        }}
      />
           {/* Ambient glow */}
      <div
        className="absolute top-10 left-10 w-80 h-80 rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(16,160,204,0.12) 0%, transparent 70%)',
          filter: 'blur(50px)',
          zIndex: 0,
        }}
      />
       <div
        className="relative flex flex-col gap-6 py-10 pl-8 pr-4 h-[90%] w-[75%] mr-[20%]"
        style={{ zIndex: 10,}}
      >
        {/* Header */}
        <div>
          <p className="text-[#10a0cc] text-[10px] font-bold uppercase tracking-[0.35em] mb-2">
            What's Coming Up
          </p>
          <h1
            ref={headingRef}
            className="text-4xl sm:text-5xl font-extrabold leading-none tracking-tight"
            style={{
              opacity: 0,
              transform: 'translateY(28px)',
              transition: 'opacity 0.7s cubic-bezier(0.16,1,0.3,1), transform 0.7s cubic-bezier(0.16,1,0.3,1)',
              fontFamily: 'Unbounded, sans-serif',
            }}
          >
            <span className="text-white">EXCITING </span>
            <span style={{ WebkitTextStroke: '1.5px #10a0cc', color: 'transparent' }}>EVENTS</span>
            <br />
            <span className="text-[#10a0cc]">AWAIT !!</span>
          </h1>
        </div>

        {/* Filter pills */}
        <div className="flex flex-wrap gap-2">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className="text-[10px] font-bold uppercase tracking-widest px-4 py-1.5 rounded-full transition-all duration-300"
              style={
                activeCategory === cat
                  ? { background: '#10a0cc', color: '#fff', boxShadow: '0 0 14px #10a0cc55' }
                  : {
                      background: 'rgba(255,255,255,0.07)',
                      color: 'rgba(255,255,255,0.45)',
                      border: '1px solid rgba(255,255,255,0.1)',
                    }
              }
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Divider */}
        <div
          className="h-px"
          style={{ background: 'linear-gradient(90deg, #10a0cc55, transparent)' }}
        />

        {/* Gallery Grid */}
        <div
          ref={galleryRef}
          className="grid grid-cols-2 sm:grid-cols-3 gap-4"
          style={{
            opacity: 0,
            transform: 'translateY(18px)',
            transition: 'opacity 0.5s ease, transform 0.5s ease',
          }}
        >
          {filtered.map((event, i) => (
            <EventCard key={event.id} event={event} index={i} />
          ))}
        </div>
        
        
      </div>
    </div>
    <div className='h-[20vh]'/>
    </div>

  )
}

export default  Events