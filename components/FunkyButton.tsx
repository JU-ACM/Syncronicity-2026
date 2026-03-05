import { motion } from "framer-motion";
import { useState, type ReactNode } from "react";

type ButtonVariant = "teal" | "purple" | "coral" | "blue" | "custom";

interface FunkyButtonProps {
  children: ReactNode;
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

  return (
    <motion.button
      onClick={onClick}
      onMouseEnter={() => setHovered(true)} 
      onMouseLeave={() => setHovered(false)}
      className={`relative font-medium overflow-hidden flex items-center justify-center gap-2 px-6 py-1.5 rounded-full cursor-pointer select-none ${colors.bg} ${hovered ? "flex-row-reverse" : "flex-row"} ${className}`}
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
        // 2. ADD pointer-events-none HERE
        className="absolute inset-0 rounded-full origin-left pointer-events-none"
        style={{ backgroundColor: colors.fill }}
        variants={{
          rest: { scaleX: 0 },
          hover: { scaleX: 1 },
          active: { scaleX: 1 },
        }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      />

      {/* ── Label ── */}
      <motion.span
        layout // Tells Framer Motion to animate changes to flex ordering
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

      {/* ── Icon: spin + bounce ── */}
      {icon && (
        <motion.span
          layout // Tells Framer Motion to animate changes to flex ordering
          className="relative z-10 flex items-center"
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
