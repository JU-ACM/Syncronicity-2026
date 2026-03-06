import { motion } from "framer-motion";
import { useState, type ReactNode } from "react";

type ButtonVariant = "teal" | "purple" | "coral" | "blue" | "blackText" | "custom";

interface FunkyButtonProps {
  children?: ReactNode;
  icon?: ReactNode;
  onClick?: () => void;
  variant?: ButtonVariant;
  fillColor?: string;
  textColor?: string;
  className?: string;
}

const VARIANTS: Record<string, { fill: string; text: string; bg: string }> = {
  teal: { fill: "#0d9488", text: "#0d9488", bg: "bg-white" },
  purple: { fill: "#7c3aed", text: "#7c3aed", bg: "bg-white" },
  coral: { fill: "#f43f5e", text: "#f43f5e", bg: "bg-white" },
  blue: { fill: "#155DFC", text: "#155DFC", bg: "bg-white" },
  blackText: { fill: "#155DFC", text: "#000000", bg: "bg-white" },
};

export default function FunkyButton({
  children,
  icon,
  onClick,
  variant = "teal",
  fillColor,
  textColor,
  className = "",
}: FunkyButtonProps) {
  const [hovered, setHovered] = useState<boolean>(false);

  const colors = VARIANTS[variant] ?? {
    fill: fillColor ?? "#0d9488",
    text: textColor ?? "#0d9488",
    bg: "bg-white/90",
  };

  // Optimization: Pre-calculate layout states based on children
  const hasBoth = Boolean(children && icon);
  const isIconOnly = Boolean(!children && icon);

  // Dynamic Tailwind classes based on content
  const paddingClass = isIconOnly ? "p-3" : "px-6 py-2";
  const gapClass = hasBoth ? "gap-2" : "";
  const directionClass = hasBoth && hovered ? "flex-row-reverse" : "flex-row";

  return (
    <motion.button
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`relative font-medium overflow-hidden flex items-center justify-center rounded-full cursor-pointer select-none ${colors.bg} ${paddingClass} ${gapClass} ${directionClass} ${className}`}
      animate={hovered ? "hover" : "rest"}
      initial="rest"
      whileTap="active"
      variants={{
        rest: { scale: 1 },
        active: { scale: 0.95 },
      }}
      transition={{ type: "spring", stiffness: 420, damping: 22 }}
    >
      {/* ── Sweep fill background ── */}
      <motion.span
        aria-hidden
        className="absolute inset-0 rounded-full origin-left pointer-events-none"
        style={{ backgroundColor: colors.fill }}
        variants={{
          rest: { scaleX: 0 },
          hover: { scaleX: 1 },
          active: { scaleX: 1 },
        }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      />

      {/* ── Label (Children) ── */}
      {children && (
        <motion.span
          layout={hasBoth} // Only animate flex ordering if both elements exist
          className="relative z-10 font-medium font-euclid"
          style={{ color: colors.text }}
          variants={{
            rest: { color: colors.text },
            hover: { color: "#ffffff" },
            active: { color: "#ffffff" },
          }}
          transition={{ duration: 0.25 }}
        >
          {children}
        </motion.span>
      )}

      {/* ── Icon ── */}
      {icon && (
        <motion.span
          layout={hasBoth} // Only animate flex ordering if both elements exist
          className="relative z-10 flex items-center justify-center"
          style={{ color: colors.text }}
          variants={{
            rest: { color: colors.text },
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