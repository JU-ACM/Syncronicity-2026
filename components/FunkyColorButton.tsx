import { motion } from "framer-motion";
import { useState, type ReactNode } from "react";

interface FunkyColorButtonProps {
  children: ReactNode;
  icon?: ReactNode;
  onClick?: () => void;
  color1?: string; // The resting base background color
  color2?: string; // The funky hover fill color
  textColor?: string; // Color for the text and icon
  className?: string;
}

export default function FunkyColorButton({
  children,
  icon,
  onClick,
  color1 = "#1d4ed8", // Default: Blue
  color2 = "#e11d48", // Default: Coral/Pink
  textColor = "#ffffff",
  className = "",
}: FunkyColorButtonProps) {
  // 1. Bring back the state to track hovering for the flex-direction swap
  const [hovered, setHovered] = useState<boolean>(false);

  return (
    <motion.button
      onClick={onClick}
      onMouseEnter={() => setHovered(true)} 
      onMouseLeave={() => setHovered(false)}
      // 2. Add the dynamic flex-row / flex-row-reverse class based on hover state
      className={`relative flex items-center justify-center gap-4 rounded-full cursor-pointer select-none border-none overflow-hidden ${hovered ? "flex-row-reverse" : "flex-row"} ${className}`}
      style={{ backgroundColor: color1 }}
      initial="rest"
      whileHover="hover"
      whileTap="active"
      variants={{
        rest: { scale: 1 },
        active: { scale: 0.95 }, // Squish on click
      }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
    >
      {/* ── Funky Liquid Fill Background ── */}
      <motion.div
        className="absolute inset-0 z-0 rounded-full pointer-events-none origin-left"
        style={{ backgroundColor: color2 }}
        variants={{
          rest: { scaleX: 0 },
          hover: { scaleX: 1 },
          active: { scaleX: 1 }
        }}
        transition={{ duration: 0.4, type: "spring", bounce: 0.25 }}
      />

      {/* ── Label ── */}
      <motion.span
        layout // 3. Added layout prop back so Framer Motion animates the flex ordering
        className="relative z-10"
        style={{ color: textColor }}
      >
        {children}
      </motion.span>

      {/* ── Icon ── */}
      {icon && (
        <motion.span
          layout // 4. Added layout prop back so it smoothly glides to the other side
          className="relative z-10 flex items-center"
          style={{ color: textColor }}
          variants={{
            rest: { color: textColor },
            hover: { color: "#ffffff" },
            active: { color: "#ffffff" },
          }}
          transition={{ duration: 0.25 }}
        >
          {icon}
        </motion.span>
      )}
    </motion.button>
  );
}