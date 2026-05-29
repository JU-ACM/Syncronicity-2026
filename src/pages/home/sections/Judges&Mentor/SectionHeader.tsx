"use client";

import { motion } from "framer-motion";

const titleVariants = {
    hidden: { opacity: 0, y: -24 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
    },
};

const subtitleVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { delay: 0.2, duration: 0.5 },
    },
};

const lineVariants = {
    hidden: { scaleX: 0 },
    visible: {
        scaleX: 1,
        transition: { delay: 0.35, duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
    },
};

export default function SectionHeader() {
    return (
        <div className="text-center mb-14">
            <motion.p
                variants={subtitleVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="text-xs font-semibold tracking-[3px] uppercase text-white/40 mb-3"
            >
                Judges &amp; Mentors
            </motion.p>

            <motion.h2
                variants={titleVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-none mb-5"
                style={{ fontFamily: "'Syne', sans-serif" }}
            >
                Meet the People
            </motion.h2>

            {/* Decorative line */}
            <motion.div
                variants={lineVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="mx-auto h-px w-24 bg-gradient-to-r from-purple-500 via-emerald-400 to-transparent origin-left"
            />
        </div>
    );
}