'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import type { Variants } from 'framer-motion'
import { ChevronDown, HelpCircle } from 'lucide-react'
import { useLenis } from 'lenis/react'

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1]

export const FAQ_DATA = [
    {
        question: "When should I arrive at the venue?",
        answer: "Participants should arrive at least 30–60 minutes before the opening ceremony to complete check-in, collect badges, and settle down before the event kickoff."
    },
    {
        question: "Will mentors be available during the hackathon?",
        answer: "Yes. Mentors will be available during scheduled mentoring slots and roaming sessions to help teams with technical challenges, product ideas, and overall guidance."
    },
    {
        question: "Will food and refreshments be provided?",
        answer: "Yes. Meals, snacks, and beverages will be provided at scheduled intervals throughout the 24-hour hackathon to keep participants energized."
    },
    {
        question: "How do we submit our project?",
        answer: "Projects must be submitted before the official submission deadline through the designated submission platform, usually including a GitHub repository and a short project description."
    },
    {
        question: "What happens when the 24 hours end?",
        answer: "Once the timer ends, all coding must stop. Teams then move into the submission phase and prepare demos for the judging rounds."
    }
];

// ─── Variants ──────────────────────────────────────────────────────────────────

const sectionFade: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5, staggerChildren: 0.12 } },
}

const fadeUp: Variants = {
    hidden: { opacity: 0, y: 28 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: EASE } },
}

const fadeLeft: Variants = {
    hidden: { opacity: 0, x: -24 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.55, ease: EASE } },
}

const staggerList: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
}

const itemEntry: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: EASE } },
}

// ─── FAQItem ───────────────────────────────────────────────────────────────────

const FAQItem = ({ question, answer, isOpen, onClick }: {
    question: string
    answer: string
    isOpen: boolean
    onClick: () => void
}) => {
    return (
        <motion.div
            variants={itemEntry}
            className={`mb-4 overflow-hidden rounded-2xl border transition-colors duration-300 ${isOpen ? 'bg-white/10 border-white/20' : 'bg-white/5 border-white/10 hover:bg-white/10'
                }`}
            animate={{
                boxShadow: isOpen
                    ? '0 0 0 1px rgba(112,210,255,0.15), 0 8px 32px rgba(112,210,255,0.06)'
                    : '0 0 0 0px transparent',
            }}
            transition={{ duration: 0.3 }}
        >
            <motion.button
                onClick={onClick}
                className="flex w-full items-center justify-between p-5 text-left md:p-6"
                whileTap={{ scale: 0.99 }}
            >
                <span className="text-sm md:text-base font-medium text-white/90 font-unbounded">
                    {question}
                </span>
                <motion.div
                    className={`flex h-8 w-8 items-center justify-center rounded-full bg-white/10 shrink-0 ${isOpen ? 'bg-[#70D2FF]/20' : ''
                        }`}
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.35, ease: EASE }}
                >
                    <ChevronDown className={`h-5 w-5 transition-colors duration-300 ${isOpen ? 'text-[#70D2FF]' : 'text-white/50'}`} />
                </motion.div>
            </motion.button>

            <AnimatePresence initial={false}>
                {isOpen && (
                    <motion.div
                        key="answer"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: EASE }}
                        style={{ overflow: 'hidden' }}
                    >
                        <motion.div
                            className="p-5 pt-0 md:p-6 md:pt-0"
                            initial={{ y: -6 }}
                            animate={{ y: 0 }}
                            exit={{ y: -6 }}
                            transition={{ duration: 0.3, ease: EASE }}
                        >
                            <p className="text-sm font-euclid leading-relaxed text-white/60 font-light">
                                {answer}
                            </p>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    )
}

// ─── FAQ ───────────────────────────────────────────────────────────────────────

const FAQ: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0)
    const lenis = useLenis();

    return (
        <motion.section
            className="faq-class relative w-full bg-[#131313] py-24 px-6 md:px-12 lg:px-24"
            variants={sectionFade}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
        >
            {/* Background Ambient Glow */}
            <motion.div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full pointer-events-none z-0"
                style={{
                    background: 'radial-gradient(circle, #70D2FF 0%, transparent 70%)',
                    filter: 'blur(80px)',
                }}
                animate={{ opacity: [0.15, 0.25, 0.15], scale: [1, 1.1, 1] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            />

            <div className="relative z-10 mx-auto max-w-7xl">
                <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">

                    {/* ── Left Side Header ── */}
                    <motion.div
                        className="lg:col-span-5 flex flex-col justify-center"
                        variants={sectionFade}
                    >
                        <motion.div
                            className="flex items-center gap-2 mb-4 text-[#70D2FF]"
                            variants={fadeLeft}
                        >
                            <motion.div
                                initial={{ rotate: -15, scale: 0.8, opacity: 0 }}
                                whileInView={{ rotate: 0, scale: 1, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, ease: EASE }}
                            >
                                <HelpCircle size={18} />
                            </motion.div>
                            <span className="text-xs uppercase font-euclid tracking-[0.3em]">Support Center</span>
                        </motion.div>

                        <motion.h2
                            className="text-3xl text-white md:text-5xl lg:text-6xl font-unbounded font-bold leading-tight mb-6"
                            variants={fadeUp}
                        >
                            Frequently <br />
                            <span className="bg-linear-to-r from-[#70D2FF] to-white bg-clip-text text-transparent">
                                asked questions
                            </span>
                        </motion.h2>

                        <motion.p
                            className="max-w-md font-euclid text-white/50 text-sm md:text-base font-light leading-relaxed"
                            variants={fadeUp}
                        >
                            Find answers to common inquiries about the event, registration process,
                            and how we support our community of innovators.
                        </motion.p>

                        <motion.button
                            className="mt-12 hidden lg:flex items-center gap-4 py-4 px-6 rounded-2xl border border-white/10 bg-white/5 w-fit"
                            variants={fadeUp}
                            whileHover={{ borderColor: 'rgba(112,210,255,0.25)', backgroundColor: 'rgba(255,255,255,0.08)' }}
                            transition={{ duration: 0.2 }}
                            onClick={() => {
                                lenis?.scrollTo(".footer-class");
                            }}
                        >
                            <motion.div
                                className="w-2 h-2 rounded-full bg-[#70D2FF]"
                                animate={{ scale: [1, 1.4, 1], opacity: [0.7, 1, 0.7] }}
                                transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
                            />
                            <p className="text-xs font-euclid text-white/40">Need more help? Contact our support team</p>
                        </motion.button>
                    </motion.div>

                    {/* ── Right Side Accordion ── */}
                    <motion.div
                        className="lg:col-span-7"
                        variants={staggerList}
                    >
                        {FAQ_DATA.map((item, index) => (
                            <FAQItem
                                key={index}
                                question={item.question}
                                answer={item.answer}
                                isOpen={openIndex === index}
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                            />
                        ))}
                    </motion.div>

                </div>
            </div>
        </motion.section >
    )
}

export default FAQ