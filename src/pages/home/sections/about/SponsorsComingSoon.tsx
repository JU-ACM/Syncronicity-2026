import React from 'react'
import { motion } from 'framer-motion'
import type { Variants } from 'framer-motion'

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1]

const fadeUp: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number = 0) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: EASE, delay: i * 0.1 },
    }),
}

const SponsorsComingSoon: React.FC = () => {
    return (
        <div className="sponsors-coming-soon-class relative w-full min-h-[60vh] bg-[#131313] flex flex-col items-center justify-center overflow-hidden">

            {/* Ambient glow — breathes in/out */}
            <motion.div
                className="absolute w-[600px] h-[600px] rounded-full pointer-events-none"
                style={{
                    background: 'radial-gradient(circle, rgba(16,160,204,0.12) 0%, transparent 70%)',
                    filter: 'blur(100px)',
                }}
                animate={{ scale: [1, 1.15, 1], opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            />

            {/* Subtle grid pattern */}
            <div
                className="absolute inset-0 opacity-[0.03]"
                style={{
                    backgroundImage:
                        'linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)',
                    backgroundSize: '60px 60px',
                }}
            />

            <div className="relative z-10 flex flex-col items-center gap-6 px-4">

                {/* "Our Partners" label */}
                <motion.p
                    className="text-xs uppercase tracking-[0.4em] text-white/40 font-euclid font-light"
                    variants={fadeUp}
                    custom={0}
                    initial="hidden"
                    animate="visible"
                >
                    Our Partners
                </motion.p>

                {/* SPONSORS heading */}
                <motion.h2
                    className="text-4xl sm:text-5xl md:text-7xl font-unbounded font-bold text-center"
                    style={{
                        background: 'linear-gradient(135deg, #70D2FF 0%, #10A0CC 40%, #0d8ab0 70%, #70D2FF 100%)',
                        backgroundSize: '200% 200%',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        animation: 'shimmer 4s ease-in-out infinite',
                    }}
                    variants={fadeUp}
                    custom={1}
                    initial="hidden"
                    animate="visible"
                >
                    SPONSORS
                </motion.h2>

                {/* Coming Soon row */}
                <motion.div
                    className="flex items-center gap-4 mt-2"
                    variants={fadeUp}
                    custom={2}
                    initial="hidden"
                    animate="visible"
                >
                    <motion.div
                        className="h-px w-12 bg-gradient-to-r from-transparent to-[#10A0CC]/50"
                        initial={{ scaleX: 0, originX: 1 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: 0.7, delay: 0.4, ease: EASE }}
                    />
                    <span
                        className="text-sm md:text-base font-euclid font-medium tracking-[0.2em] uppercase"
                        style={{
                            background: 'linear-gradient(90deg, #ffffff 0%, #10A0CC 100%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                        }}
                    >
                        Coming Soon
                    </span>
                    <motion.div
                        className="h-px w-12 bg-gradient-to-l from-transparent to-[#10A0CC]/50"
                        initial={{ scaleX: 0, originX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: 0.7, delay: 0.4, ease: EASE }}
                    />
                </motion.div>

                {/* Subtext */}
                <motion.p
                    className="text-white/30 text-sm font-euclid text-center max-w-md mt-2"
                    variants={fadeUp}
                    custom={3}
                    initial="hidden"
                    animate="visible"
                >
                    We're partnering with industry leaders to make this event unforgettable. Stay tuned!
                </motion.p>

                {/* Animated dots */}
                <motion.div
                    className="flex gap-2 mt-1"
                    variants={fadeUp}
                    custom={4}
                    initial="hidden"
                    animate="visible"
                >
                    {[0, 1, 2].map((i) => (
                        <motion.span
                            key={i}
                            className="w-1.5 h-1.5 rounded-full bg-[#10A0CC]/60"
                            animate={{ opacity: [0.3, 1, 0.3], scale: [0.8, 1.2, 0.8] }}
                            transition={{
                                duration: 1.4,
                                repeat: Infinity,
                                ease: 'easeInOut',
                                delay: i * 0.2,
                            }}
                        />
                    ))}
                </motion.div>
            </div>

            <style>{`
                @keyframes shimmer {
                    0%, 100% { background-position: 0% 50%; }
                    50% { background-position: 100% 50%; }
                }
            `}</style>
        </div>
    )
}

export default SponsorsComingSoon