import { useState } from "react";
import { motion } from "framer-motion";
import type { TeamMember } from "./teamData";
import { getPhotoUrl } from "./teamData";

interface TeamCardProps {
  member: TeamMember;
  index: number;
}

const gradients = [
  ["#70D2FF", "#10A0CC"],
  ["#c8dff0", "#a8c8e8"],
  ["#d8e8f8", "#b8d0ee"],
  ["#e8d8f0", "#d0b8e4"],
  ["#d8f0e8", "#b0dcd0"],
];

function getInitials(name: string) {
  return name.split(" ").map((n) => n[0]).slice(0, 2).join("").toUpperCase();
}

export default function TeamCard({ member, index }: TeamCardProps) {
  const [imgLoaded, setImgLoaded] = useState(false);
  const [imgError, setImgError] = useState(false);
  const [grad1, grad2] = gradients[member.id % gradients.length];
  const photoUrl = getPhotoUrl(member.photoId);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.94 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: 0.5,
        delay: (index % 8) * 0.06,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{
        y: -8,
        scale: 1.03,
        borderColor: "rgba(112, 210, 255, 0.4)", // Cyber cyan glow on border
        boxShadow: "0 12px 40px rgba(16, 160, 204, 0.25), 0 1px 3px rgba(0,0,0,0.4)",
        transition: { duration: 0.25, ease: "easeOut" },
      }}
      className="relative flex flex-col cursor-pointer select-none group"
      style={{
        width: "172px",
        height: "230px",
        borderRadius: "22px",
        overflow: "hidden",
        background: "rgba(255, 255, 255, 0.03)", // Premium transparent glass base
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        border: "1px solid rgba(255, 255, 255, 0.08)",
        boxShadow: "0 4px 30px rgba(0,0,0,0.4), inset 0 1px 1px rgba(255,255,255,0.05)",
        transition: "border-color 0.25s ease, box-shadow 0.25s ease",
      }}
    >
      {/* ── Photo area (top ~68%) ─────────────────────── */}
      <div
        className="relative flex items-center justify-center overflow-hidden"
        style={{
          flex: "1 1 0%",
          background: `linear-gradient(160deg, rgba(255,255,255,0.02) 0%, rgba(255,255,255,0.05) 100%)`,
        }}
      >
        {/* Shimmer overlay behind the photo area */}
        <div
          className="absolute inset-0 opacity-20 mix-blend-overlay pointer-events-none transition-opacity duration-300 group-hover:opacity-40"
          style={{
            background: `linear-gradient(135deg, ${grad1} 0%, ${grad2} 100%)`
          }}
        />

        {/* Real photo — fills the area, object-cover */}
        {!imgError && (
          <img
            src={photoUrl}
            alt={member.name}
            onLoad={() => setImgLoaded(true)}
            onError={() => setImgError(true)}
            className="absolute inset-0 w-full h-full transition-transform duration-500 ease-out group-hover:scale-105"
            style={{
              objectFit: "cover",
              objectPosition: "top center",
              opacity: imgLoaded ? 1 : 0,
              transition: "opacity 0.4s ease, transform 0.5s cubic-bezier(0.22, 1, 0.36, 1)",
            }}
          />
        )}

        {/* Fallback initials — shown while loading or on error */}
        {(!imgLoaded || imgError) && (
          <div
            className="relative z-10 flex items-center justify-center rounded-full font-bold text-xl"
            style={{
              width: 70,
              height: 70,
              background: "rgba(255, 255, 255, 0.05)",
              border: "1px solid rgba(255, 255, 255, 0.15)",
              backdropFilter: "blur(8px)",
              fontFamily: "'Syne', sans-serif",
              letterSpacing: "-0.02em",
              color: "#ffffff",
              textShadow: "0 2px 10px rgba(0,0,0,0.5)",
              boxShadow: "0 4px 20px rgba(0,0,0,0.2)",
            }}
          >
            {getInitials(member.name)}
          </div>
        )}
      </div>

      {/* ── Info area (bottom ~32%) ───────────────────── */}
      <div
        className="flex flex-col items-center justify-center px-3 py-3 gap-0.5"
        style={{
          minHeight: "68px",
          background: "rgba(15, 15, 15, 0.6)", // Darker glass floor for legibility
          borderTop: "1px solid rgba(255, 255, 255, 0.05)",
        }}
      >
        <p
          className="text-center font-bold leading-tight w-full truncate transition-colors duration-200 group-hover:text-[#70D2FF]"
          style={{
            fontSize: "13px",
            color: "#ffffff",
            fontFamily: "'Syne', sans-serif",
            letterSpacing: "-0.01em",
          }}
          title={member.name}
        >
          {member.name}
        </p>
        <p
          className="text-center tracking-wider text-white/40 uppercase"
          style={{
            fontSize: "9px",
            fontFamily: "'DM Sans', sans-serif",
            fontWeight: 600,
          }}
        >
          {member.team}
        </p>
      </div>
    </motion.div>
  );
}