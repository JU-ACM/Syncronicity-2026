'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, HelpCircle } from 'lucide-react'

const FAQ_DATA = [
    {
        question: "What is the event all about?",
        answer: "Our summit is an all-in-one platform designed to simplify tech exploration, automate networking, and track the latest industry trends in real-time for innovators of all backgrounds."
    },
    {
        question: "How do I participate in the Hackathon?",
        answer: "Simply register through our portal, form a team of 2-4 members, and prepare to build something extraordinary over 48 hours of pure creation."
    },
    {
        question: "Is the venue accessible and secure?",
        answer: "Yes, we prioritize safety and inclusivity. The venue is fully accessible, and our security team ensures a safe environment for all attendees 24/7."
    },
    {
        question: "Can I integrate my projects with other platforms?",
        answer: "Absolutely! We provide open APIs and dedicated support to help you integrate your hacks with common industry accounting and management software."
    }
]

const FAQItem = ({ question, answer, isOpen, onClick }: {
    question: string,
    answer: string,
    isOpen: boolean,
    onClick: () => void
}) => {
    return (
        <div className={`mb-4 overflow-hidden rounded-2xl border transition-all duration-300 ${isOpen ? 'bg-white/10 border-white/20' : 'bg-white/5 border-white/10 hover:bg-white/10'
            }`}>
            <button
                onClick={onClick}
                className="flex w-full items-center justify-between p-5 text-left md:p-6"
            >
                <span className="text-sm md:text-base font-medium text-white/90 font-unbounded">
                    {question}
                </span>
                <div className={`flex h-8 w-8 items-center justify-center rounded-full bg-white/10 transition-transform duration-300 ${isOpen ? 'rotate-180 bg-[#70D2FF]/20' : ''}`}>
                    <ChevronDown className={`h-5 w-5 ${isOpen ? 'text-[#70D2FF]' : 'text-white/50'}`} />
                </div>
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                    >
                        <div className="p-5 pt-0 md:p-6 md:pt-0">
                            <p className="text-sm leading-relaxed text-white/60 font-light">
                                {answer}
                            </p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}

const FAQ: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0)

    return (
        <section className="relative w-full bg-[#131313] py-24 px-6 md:px-12 lg:px-24">
            {/* Background Ambient Glow */}
            <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full pointer-events-none z-0 opacity-20"
                style={{
                    background: 'radial-gradient(circle, #70D2FF 0%, transparent 70%)',
                    filter: 'blur(80px)'
                }}
            />

            <div className="relative z-10 mx-auto max-w-7xl">
                <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">

                    {/* Left Side Header */}
                    <div className="lg:col-span-5 flex flex-col justify-center">
                        <div className="flex items-center gap-2 mb-4 text-[#70D2FF]">
                            <HelpCircle size={18} />
                            <span className="text-xs uppercase tracking-[0.3em] font-light">Support Center</span>
                        </div>

                        <h2 className="text-3xl text-white md:text-5xl lg:text-6xl font-unbounded font-bold leading-tight mb-6">
                            Frequently <br />
                            <span className="bg-gradient-to-r from-[#70D2FF] to-white bg-clip-text text-transparent">
                                asked questions
                            </span>
                        </h2>

                        <p className="max-w-md text-white/50 text-sm md:text-base font-light leading-relaxed">
                            Find answers to common inquiries about the event, registration process,
                            and how we support our community of innovators.
                        </p>

                        {/* Decorative element matching the Bulb/Infinity vibe */}
                        <div className="mt-12 hidden lg:flex items-center gap-4 py-4 px-6 rounded-2xl border border-white/10 bg-white/5 w-fit">
                            <div className="w-2 h-2 rounded-full bg-[#70D2FF] animate-pulse" />
                            <p className="text-xs text-white/40 font-medium">Need more help? Contact our support team</p>
                        </div>
                    </div>

                    {/* Right Side Accordion */}
                    <div className="lg:col-span-7">
                        {FAQ_DATA.map((item, index) => (
                            <FAQItem
                                key={index}
                                question={item.question}
                                answer={item.answer}
                                isOpen={openIndex === index}
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                            />
                        ))}
                    </div>

                </div>
            </div>
        </section>
    )
}

export default FAQ