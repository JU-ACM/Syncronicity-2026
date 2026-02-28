import React, { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
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
  // {
  //   id: 5,
  //   category: 'Competition',
  //   title: 'Robotics Challenge',
  //   description: 'Engineer, program, and race your bot through dynamic obstacle courses in this flagship robotics showdown.',
  //   date: 'MAY 18, 2025',
  //   location: 'Engineering Block',
  //   seats: 80,
  //   image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&q=80',
  //   color: '#f97316',
  // },
  // {
  //   id: 6,
  //   category: 'Cultural',
  //   title: 'Music & Arts Carnival',
  //   description: 'Live bands, murals, installations, and street food collide in our biggest open-air cultural extravaganza.',
  //   date: 'JUN 01, 2025',
  //   location: 'Central Lawn',
  //   seats: 350,
  //   image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&q=80',
  //   color: '#a855f7',
  // },
]

// const CATEGORIES = ['All', 'Workshop', 'Competition', 'Cultural']

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
      { threshold: 0.1 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [delay, ref])
}

// ── Vertical Event Card ──────────────────────────────────────────────────────
const EventCard: React.FC<{ event: (typeof EVENTS)[0]; index: number; navigate: (path: string) => void }> = ({ event, index, navigate }) => {
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
      {/* Full-bleed background image */}
      <img
        src={event.image}
        alt={event.title}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
      />

      {/* Permanent dark vignette — stronger at bottom */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(to top, rgba(0,0,0,0.90) 0%, rgba(0,0,0,0.35) 45%, rgba(0,0,0,0.10) 100%)',
        }}
      />

      {/* Category pill — top left, always visible */}
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

      {/* ── Default bottom content: just title ── */}
      <div
        className="absolute inset-x-0 bottom-0 px-4 pb-5 transition-all duration-300 group-hover:opacity-0 group-hover:translate-y-2"
        style={{ zIndex: 10 }}
      >
        <h3 className="text-white font-bold text-sm leading-snug">
          {event.title}
        </h3>
        <div className="flex items-center gap-2 text-white/40 text-[10px] mt-1.5">
          <span>{event.date}</span>
          <span className="w-px h-2 bg-white/25" />
          <span>{event.location}</span>
        </div>
      </div>

      {/* ── Hover overlay: description + learn more slides up ── */}
      <div
        className="absolute inset-0 flex flex-col justify-end px-4 pb-5 opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-350 ease-out"
        style={{
          zIndex: 10,
          background: 'linear-gradient(to top, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.65) 55%, rgba(0,0,0,0.1) 100%)',
        }}
      >
        <h3 className="text-white font-bold text-sm leading-snug mb-2">
          {event.title}
        </h3>

        <p className="text-white/60 text-[11px] leading-relaxed mb-3">
          {event.description}
        </p>

        <div className="flex items-center gap-2 text-white/35 text-[10px] mb-4">
          <span>{event.date}</span>
          <span className="w-px h-2 bg-white/20" />
          <span>{event.location}</span>
        </div>

        <button
          className="self-start flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-widest transition-opacity duration-200 hover:opacity-70"
          style={{ color: event.color }}
          onClick={() => {
            navigate(`/event/${event.id}`)
          }}
        >
          Learn More
          <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </button>
      </div>

      {/* Accent line at bottom on hover */}
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

// ── Main Events Page ─────────────────────────────────────────────────────────
const Events: React.FC = () => {
  const navigate = useNavigate()
  const [activeCategory] = useState('All')
  const headingRef = useRef<HTMLHeadingElement>(null)
  const galleryRef = useRef<HTMLDivElement>(null)
  useReveal(headingRef, 120)
  useReveal(galleryRef as React.RefObject<HTMLElement>, 220)

  const filtered =
    activeCategory === 'All' ? EVENTS : EVENTS.filter((e) => e.category === activeCategory)

  return (
    <div
      className="min-h-screen"
      style={{ backgroundImage: `url(${herobg})` }}
    >
      <div
        className="w-screen md:w-full h-[110vh] flex flex-col items-center justify-center relative bg-no-repeat bg-center bg-cover"
      >
        {/* Mascot — bottom right, full opacity, above everything */}
        <img
          src={mascotImg}
          alt="Mascot"
          className="h-[75%] w-auto absolute right-0 bottom-0 select-none pointer-events-none"
          style={{ zIndex: 50 }}
        />

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

        {/* ── Content: left 75%, pushed right margin to leave mascot space ── */}
        <div
          className="relative flex flex-col gap-6 py-10 pl-8 pr-4 h-[90%] w-[75%] mr-[20%]"
          style={{ zIndex: 10 }}
        >
          {/* Header */}
          <div>
            <p className="text-white text-shadow-2xl text-shadow-white text-[10px] font-bold uppercase tracking-[0.35em] mb-2">
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
              <span style={{ WebkitTextStroke: '1.5px #fff', color: 'transparent' }}>EVENTS</span>
              <br />
              <span className="text-[#10a0cc] text-shadow-2xs text-shadow-white">AWAIT !!</span>
            </h1>
          </div>

          {/* Filter pills */}
          {/* <div className="flex flex-wrap gap-2">
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
          </div> */}

          {/* Divider */}
          <div
            className="h-px"
            style={{ background: 'linear-gradient(90deg, #10a0cc55, transparent)' }}
          />

          {/* Gallery Grid — vertical portrait cards */}
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
              <EventCard key={event.id} event={event} index={i} navigate={navigate} />
            ))}
          </div>
        </div>
      </div>

      <div className="h-[20vh]" />
    </div>
  )
}

export default Events