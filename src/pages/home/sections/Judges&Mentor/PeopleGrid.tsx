"use client";

import { motion } from "framer-motion";
import type { Person } from "./People.ts";
import PersonCard from "./PersonCard";

interface PeopleGridProps {
    people: Person[];
    label: string;
    accentColor: "purple" | "emerald";
}

const headingVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
    },
};

const accentMap = {
    purple: "bg-purple-500",
    emerald: "bg-emerald-400",
};

export default function PeopleGrid({
    people,
    label,
    accentColor,
}: PeopleGridProps) {
    return (
        <div className="mb-14">
            {/* Section label */}
            <motion.div
                variants={headingVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="flex items-center gap-3 mb-6"
            >
                <div className={`w-1 h-6 rounded-full ${accentMap[accentColor]}`} />
                <h3
                    className="text-2xl font-bold text-white tracking-tight"
                    style={{ fontFamily: "'Syne', sans-serif" }}
                >
                    {label}
                </h3>
                <span className="ml-1 text-sm text-white/30 font-medium">
                    {people.length}
                </span>
            </motion.div>

            {/* Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5 gap-5">
                {people.map((person, i) => (
                    <PersonCard key={person.id} person={person} index={i} />
                ))}
            </div>
        </div>
    );
}