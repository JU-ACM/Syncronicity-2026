'use client'

import React, { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import type { Variants } from 'framer-motion'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

// ─── Animation helpers ────────────────────────────────────────────────────────
const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1]

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: EASE, delay: i * 0.1 },
  }),
}

// ─── Sponsor data ─────────────────────────────────────────────────────────────

interface Sponsor {
  name: string
  logo: string
  alt: string
}

interface Tier {
  title: string
  subtitle: string
  accentColor: string
  glowColor: string
  gradient: string
  borderColor: string
  shadowColor: string
  layout: 'row' | 'grid'
  sponsors: Sponsor[]
}

const tiers: Tier[] = [
  {
    title: 'Diamond Partner',
    subtitle: 'Our Visionary',
    accentColor: '#70D2FF',
    glowColor: 'rgba(112,210,255,0.12)',
    gradient: 'linear-gradient(135deg, #70D2FF 0%, #fff 50%, #C2E9FB 100%)',
    borderColor: 'rgba(112,210,255,0.25)',
    shadowColor: 'rgba(112,210,255,0.10)',
    layout: 'row',
    sponsors: [
      { name: 'Miro', logo: '/Miro_Logo.jpg', alt: 'Miro' },
      { name: 'MLH', logo: '/mlh.png', alt: 'Major League Hacking' },
    ],
  },
  {
    title: 'Gold Partners',
    subtitle: 'Our Champions',
    accentColor: '#FFD700',
    glowColor: 'rgba(255,215,0,0.10)',
    gradient: 'linear-gradient(135deg, #BF953F 0%, #FCF6BA 40%, #B38728 70%, #FBF5B7 100%)',
    borderColor: 'rgba(255,215,0,0.25)',
    shadowColor: 'rgba(255,215,0,0.08)',
    layout: 'row',
    sponsors: [
      { name: 'Devfolio', logo: '/Devfolio_Logo-White.png', alt: 'Devfolio' },
      { name: 'Rise In', logo: '/RiseIn_Logo.webp', alt: 'Rise In' },
      { name: 'Corsair', logo: '/corsair.png', alt: 'Corsair' },
      { name: 'FlutterFlow', logo: '/flutterflow.png', alt: 'FlutterFlow' },
    ],
  },
  {
    title: 'In-Kind Sponsors',
    subtitle: 'Our Supporters',
    accentColor: '#10A0CC',
    glowColor: 'rgba(16,160,204,0.10)',
    gradient: 'linear-gradient(135deg, #10A0CC 0%, #70D2FF 50%, #0d8ab0 100%)',
    borderColor: 'rgba(16,160,204,0.25)',
    shadowColor: 'rgba(16,160,204,0.08)',
    layout: 'row',
    sponsors: [
      { name: 'Mastra', logo: '/Mastra_Logo_ver1[white].png', alt: 'Mastra' },
      { name: 'Pujo Planner', logo: '/pujoplanner.png', alt: 'Pujo Planner' },
    ],
  },
  {
    title: 'Community Partners',
    subtitle: 'Our Community',
    accentColor: 'rgba(255,255,255,0.7)',
    glowColor: 'rgba(255,255,255,0.05)',
    gradient: 'linear-gradient(135deg, #fff 0%, rgba(255,255,255,0.7) 50%, rgba(255,255,255,0.4) 100%)',
    borderColor: 'rgba(255,255,255,0.15)',
    shadowColor: 'rgba(255,255,255,0.04)',
    layout: 'grid',
    sponsors: [
      { name: 'Citadel', logo: '/commPartner/citadel.webp', alt: 'Citadel' },
      { name: 'GDG', logo: '/commPartner/gdg.jpg', alt: 'GDG' },
      { name: 'Hacktropica', logo: '/commPartner/Hacktropica-logo-2.png', alt: 'Hacktropica' },
      { name: 'Innofusion', logo: '/commPartner/innofusion.png', alt: 'Innofusion' },
      { name: 'RCIIT ACM', logo: '/commPartner/rcciitAcm.png', alt: 'RCIIT ACM' },
    ],
  },
]

// ─── SponsorCard ──────────────────────────────────────────────────────────────

interface SponsorCardProps {
  sponsor: Sponsor
  borderColor: string
  shadowColor: string
  compact?: boolean
}

const SponsorCard: React.FC<SponsorCardProps> = ({
  sponsor,
  borderColor,
  shadowColor,
  compact = false,
}) => (
  <div
    className={`flex items-center justify-center rounded-2xl bg-white/5 backdrop-blur-sm transition-all duration-500 hover:bg-white/10 hover:scale-[1.03] cursor-default ${compact ? 'w-[130px] h-[75px] sm:w-[240px] sm:h-[130px] p-3 sm:p-[20px_28px]' : ''
      }`}
    style={{
      border: `1px solid ${borderColor}`,
      boxShadow: `0 0 40px ${shadowColor}`,
      ...(!compact && { width: '240px', height: '130px', padding: '20px 28px' }),
    }}
  >
    <img
      src={sponsor.logo}
      alt={sponsor.alt}
      style={{
        width: '100%',
        height: '100%',
        objectFit: 'contain',
        display: 'block',
      }}
    />
  </div>
)

// ─── TierSection ──────────────────────────────────────────────────────────────

interface TierSectionProps {
  tier: Tier
  sectionRef: React.RefObject<HTMLElement | null>
}

const TierSection: React.FC<TierSectionProps> = ({ tier, sectionRef }) => (
  <section
    ref={sectionRef}
    className="absolute inset-0 flex flex-col items-center justify-center px-4"
  >
    {/* Ambient glow */}
    <div
      className="absolute w-[500px] h-[500px] rounded-full pointer-events-none"
      style={{
        background: `radial-gradient(circle, ${tier.glowColor} 0%, transparent 70%)`,
        filter: 'blur(80px)',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
      }}
    />

    <div className="relative z-10 flex flex-col items-center gap-5 w-full max-w-4xl">
      {/* Label */}
      <p
        className="text-[10px] uppercase tracking-[0.4em] font-light"
        style={{ color: tier.accentColor, opacity: 0.7 }}
      >
        {tier.subtitle}
      </p>

      {/* Title */}
      <h2
        className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-unbounded font-bold text-center"
        style={{
          background: tier.gradient,
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
        }}
      >
        {tier.title}
      </h2>

      {/* Divider */}
      <div
        className="w-24 h-px mt-1"
        style={{
          background: `linear-gradient(to right, transparent, ${tier.accentColor}60, transparent)`,
        }}
      />

      {/* Sponsor logos */}
      {tier.sponsors.length > 0 ? (
        tier.layout === 'row' ? (
          <div className="flex flex-row flex-wrap items-center justify-center gap-4 md:gap-6 mt-4">
            {tier.sponsors.map((s) => (
              <SponsorCard
                key={s.name}
                sponsor={s}
                borderColor={tier.borderColor}
                shadowColor={tier.shadowColor}
              />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 mt-4 justify-items-center">
            {tier.sponsors.map((s) => (
              <SponsorCard
                key={s.name}
                sponsor={s}
                borderColor={tier.borderColor}
                shadowColor={tier.shadowColor}
                compact
              />
            ))}
          </div>
        )
      ) : null}
    </div>
  </section>
)

// ─── Main component ───────────────────────────────────────────────────────────

const SponsorsSection: React.FC = () => {
  const outerRef = useRef<HTMLDivElement | null>(null)
  const containerRef = useRef<HTMLDivElement | null>(null)

  // Four refs — one per tier
  const sectionRefs = [
    useRef<HTMLElement | null>(null),
    useRef<HTMLElement | null>(null),
    useRef<HTMLElement | null>(null),
    useRef<HTMLElement | null>(null),
  ]

  useEffect(() => {
    if (!containerRef.current) return
    const refs = sectionRefs.map((r) => r.current)
    if (refs.some((r) => !r)) return

    const ctx = gsap.context(() => {
      // Hide all but first
      gsap.set(refs.slice(1), { opacity: 0, y: 40, visibility: 'hidden' })

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: `+=${(tiers.length - 1) * 120}%`,
          scrub: 1.2,
          pin: true,
          pinSpacing: true,
        },
      })

      refs.forEach((section, i) => {
        if (i === refs.length - 1) return

        const next = refs[i + 1]
        const offset = i * 3

        // Fade out current
        tl.to(section, { opacity: 0, y: -40, duration: 1, ease: 'power2.inOut' }, offset)

        // Fade in next
        tl.fromTo(
          next,
          { opacity: 0, y: 40, visibility: 'hidden' },
          { opacity: 1, y: 0, visibility: 'visible', duration: 1.2, ease: 'power2.out' },
          offset + 0.6
        )

        // Linger on each slide
        tl.to({}, { duration: 1.8 })
      })
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <div ref={outerRef} className="relative w-full bg-[#131313]">
      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.15) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* "SPONSORS" hero label — visible above the scroll-pin zone */}
      <motion.div
        className="relative z-10 flex flex-col items-center pt-24 pb-6 gap-3 scale-130"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.p
          className="text-[10px] uppercase tracking-[0.45em] text-white/35 font-light"
          variants={fadeUp}
          custom={0}
        >
          Our Partners
        </motion.p>

        <motion.h1
          className="text-5xl sm:text-6xl md:text-8xl lg:text-[9rem] font-unbounded font-bold text-center leading-none"
          style={{
            background:
              'linear-gradient(135deg, #70D2FF 0%, #10A0CC 40%, #0d8ab0 70%, #70D2FF 100%)',
            backgroundSize: '200% 200%',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            animation: 'shimmer 5s ease-in-out infinite',
          }}
          variants={fadeUp}
          custom={1}
        >
          Sponsors
        </motion.h1>

        {/* Animated dots */}
        <motion.div className="flex gap-2 mt-2" variants={fadeUp} custom={2}>
          {[0, 1, 2].map((i) => (
            <motion.span
              key={i}
              className="w-1.5 h-1.5 rounded-full bg-[#10A0CC]/60"
              animate={{ opacity: [0.3, 1, 0.3], scale: [0.8, 1.2, 0.8] }}
              transition={{ duration: 1.4, repeat: Infinity, ease: 'easeInOut', delay: i * 0.2 }}
            />
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll-pinned tier reveals */}
      <div
        ref={containerRef}
        className="relative h-screen w-full"
      >
        {tiers.map((tier, i) => (
          <TierSection key={tier.title} tier={tier} sectionRef={sectionRefs[i]} />
        ))}
      </div>

      {/* Footer subtext — visible after scroll-pin releases */}
      <div className="relative z-10 flex flex-col items-center py-16 gap-4">
        <div className="w-64 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <p className="text-white/25 text-sm text-center max-w-sm font-light tracking-wide">
          Partnering with industry leaders to make this event unforgettable.
        </p>
      </div>

      <style>{`
        @keyframes shimmer {
          0%, 100% { background-position: 0% 50%; }
          50%       { background-position: 100% 50%; }
        }
      `}</style>
    </div>
  )
}

export default SponsorsSection