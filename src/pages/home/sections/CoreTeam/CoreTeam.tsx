import { motion } from "framer-motion";
import { teamMembers } from './teamData.ts'
import TeamCard from "./TeamCard.tsx";

export default function TeamSection() {
    return (
        <section
            className="relative w-full min-h-screen flex flex-col items-center py-20 px-6 overflow-hidden"
            style={{ background: "#131313" }}
        >
            {/* ── Heading ──────────────────────────────────── */}
            <div className="relative z-10 text-center mb-16">
                <motion.p
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-xs uppercase tracking-[0.4em] text-white/40 font-light mb-3"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                    The people behind it all
                </motion.p>

                <motion.h2
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
                    className="text-5xl sm:text-6xl md:text-7xl font-bold text-center"
                    style={{
                        fontFamily: "'Unbounded', sans-serif",
                        background:
                            "linear-gradient(135deg, #70D2FF 0%, #10A0CC 40%, #0d8ab0 70%, #70D2FF 100%)",
                        backgroundSize: "200% 200%",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        animation: "shimmer 4s ease-in-out infinite",
                    }}
                >
                    Meet The Team
                </motion.h2>
            </div>

            <style>{`
        @keyframes shimmer {
          0%   { background-position: 0% 50%; }
          50%  { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>

            {/* ── Cards grid ───────────────────────────────── */}
            <div className="relative z-10 flex flex-wrap justify-center gap-5 max-w-6xl w-full">
                {teamMembers.map((member, index) => (
                    <TeamCard key={member.id} member={member} index={index} />
                ))}
            </div>
        </section>
    );
}