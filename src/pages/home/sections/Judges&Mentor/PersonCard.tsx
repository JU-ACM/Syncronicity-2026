"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { Person } from "./People";

interface PersonCardProps {
    person: Person;
    index: number;
}

function getInitials(name: string): string {
    return name
        .split(" ")
        .map((w) => w[0])
        .join("")
        .substring(0, 2)
        .toUpperCase();
}

function getDriveThumbUrl(photoId: string): string {
    return `/judgesnmentors/${photoId}`;
}

const cardVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            delay: i * 0.07,
            duration: 0.5,
            ease: [0.22, 1, 0.36, 1] as const,
        },
    }),
};

export default function PersonCard({ person, index }: PersonCardProps) {
    const [imgLoaded, setImgLoaded] = useState(false);
    const [imgError, setImgError] = useState(false);

    const isJudge = person.type === "Judge";

    return (
        <motion.div
            custom={index}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            whileHover={{ y: -6, transition: { duration: 0.25, ease: "easeOut" } }}
            className="relative h-[290px] rounded-[18px] overflow-hidden cursor-pointer group"
        >
            {/* Background base */}
            <div className="absolute inset-0 bg-[#1a1a2e]" />

            {/* Initials placeholder */}
            <AnimatePresence>
                {(!imgLoaded || imgError) && (
                    <motion.div
                        initial={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="absolute inset-0 flex items-center justify-center text-6xl font-bold text-white/10 bg-gradient-to-br from-[#1e1e3a] to-[#2d2d5e] select-none"
                        style={{ fontFamily: "'Syne', sans-serif" }}
                    >
                        {getInitials(person.name)}
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Photo */}
            {!imgError && (
                <motion.img
                    src={getDriveThumbUrl(person.photoId)}
                    alt={person.name}
                    onLoad={() => setImgLoaded(true)}
                    onError={() => setImgError(true)}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: imgLoaded ? 1 : 0 }}
                    transition={{ duration: 0.4 }}
                    className="absolute inset-0 w-full h-full object-cover object-top"
                />
            )}

            {/* Hover shimmer overlay */}
            <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-white/5 pointer-events-none"
            />

            {/* Bottom info gradient panel */}
            <div className="absolute bottom-0 left-0 right-0 px-4 pb-4 pt-10"
                style={{
                    background:
                        "linear-gradient(to top, rgba(255,255,255,1) 55%, rgba(255,255,255,0.85) 75%, rgba(255,255,255,0) 100%)",
                }}
            >
                {/* Badge */}
                <span
                    className={`inline-flex items-center gap-1 text-[10px] font-semibold px-2.5 py-0.5 rounded-full uppercase tracking-wide mb-2 ${isJudge
                        ? "bg-purple-100 text-purple-700 border border-purple-300/60"
                        : "bg-emerald-100 text-emerald-700 border border-emerald-300/60"
                        }`}
                >
                    {isJudge ? (
                        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2L3 7l9 5 9-5-9-5z" /><path d="M3 12l9 5 9-5" /><path d="M3 17l9 5 9-5" /></svg>
                    ) : (
                        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M12 16v-4M12 8h.01" /></svg>
                    )}
                    {person.type}
                </span>

                {/* Name */}
                <p className="text-[15px] font-bold text-gray-900 leading-tight mb-0.5"
                    style={{ fontFamily: "'Syne', sans-serif" }}
                >
                    {person.name}
                </p>

                {/* Role @ Company */}
                <p className="text-[11.5px] text-gray-500 leading-tight">
                    {person.role}{" "}
                    <span className="font-medium text-gray-600">@ {person.company}</span>
                </p>
            </div>
        </motion.div>
    );
}