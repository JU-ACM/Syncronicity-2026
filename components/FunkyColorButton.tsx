import { motion } from "framer-motion";
import { useState, type ReactNode } from "react";

interface FunkyColorButtonProps {
  children?: ReactNode; // 1. Made optional so it can be null/undefined
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
  const [hovered, setHovered] = useState<boolean>(false);

  // 2. Optimization: Pre-calculate layout states based on children
  const hasBoth = Boolean(children && icon);
  const isIconOnly = Boolean(!children && icon);

  // 3. Dynamic Tailwind classes based on content
  const paddingClass = isIconOnly ? "p-3" : "px-6 py-2"; // Assuming standard padding for text
  const gapClass = hasBoth ? "gap-4" : "";
  const directionClass = hasBoth && hovered ? "flex-row-reverse" : "flex-row";

  return (
    <motion.button
      onClick={onClick}
      onMouseEnter={() => setHovered(true)} 
      onMouseLeave={() => setHovered(false)}
      className={`relative flex items-center justify-center rounded-full cursor-pointer select-none border-none overflow-hidden ${paddingClass} ${gapClass} ${directionClass} ${className}`}
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
      {children && (
        <motion.span
          layout={hasBoth} // Only animate flex ordering if both elements exist
          className="relative z-10"
          style={{ color: textColor }}
        >
          {children}
        </motion.span>
      )}

      {/* ── Icon ── */}
      {icon && (
        <motion.span
          layout={hasBoth} // Only animate flex ordering if both elements exist
          className="relative z-10 flex items-center justify-center"
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