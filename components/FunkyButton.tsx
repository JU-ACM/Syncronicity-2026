import { motion, useAnimation } from "framer-motion";
import { useState, useEffect, useCallback, type ReactNode } from "react";

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
  const [isTouch, setIsTouch] = useState<boolean>(false);
  const rippleControls = useAnimation();

  // Detect touch-primary devices via pointer/hover media queries
  useEffect(() => {
    const mq = window.matchMedia("(hover: none) and (pointer: coarse)");
    setIsTouch(mq.matches);

    const handler = (e: MediaQueryListEvent) => setIsTouch(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

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
  // Only reverse flex direction on non-touch hover
  const directionClass = hasBoth && hovered && !isTouch ? "flex-row-reverse" : "flex-row";

  // Touch tap: expanding circular ripple
  const handleTouchStart = useCallback(() => {
    // 1. Immediately reset the ripple to tiny and visible
    rippleControls.set({ scale: 0, opacity: 0.6 });
    // 2. Animate it growing large and fading out
    rippleControls.start({
      scale: 1,
      opacity: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    });
  }, [rippleControls]);

  return (
    <motion.button
      onClick={onClick}
      onMouseEnter={() => { if (!isTouch) setHovered(true); }}
      onMouseLeave={() => { if (!isTouch) setHovered(false); }}
      onTouchStart={isTouch ? handleTouchStart : undefined}
      className={`relative font-medium overflow-hidden flex items-center justify-center rounded-full cursor-pointer select-none ${colors.bg} ${paddingClass} ${gapClass} ${directionClass} ${className}`}
      initial="rest"
      // Only apply hover variant on non-touch devices
      whileHover={!isTouch ? "hover" : undefined}
      whileTap="active"
      variants={{
        rest: { scale: 1 },
        active: { scale: isTouch ? 0.96 : 0.95 },
      }}
      transition={{ type: "spring", stiffness: 420, damping: 22 }}
    >
      {/* ── Sweep fill background (hover only, non-touch) ── */}
      {!isTouch && (
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
      )}

      {/* ── True Touch Ripple Overlay (touch only) ── */}
      {isTouch && (
        <motion.span
          aria-hidden
          className="absolute z-0 rounded-full pointer-events-none"
          style={{
            backgroundColor: colors.fill,
            width: "200%", // Make it wide enough to cover the pill shape
            aspectRatio: "1/1", // Force it into a perfect circle
          }}
          initial={{
            scale: 0,
            opacity: 0,
            // Center the massive circle perfectly in the button
            left: "50%",
            top: "50%",
            x: "-50%",
            y: "-50%",
          }}
          animate={rippleControls}
        />
      )}

      {/* ── Label (Children) ── */}
      {children && (
        <motion.span
          layout={hasBoth && !isTouch} // Only animate flex ordering if both elements exist and it's not a touch device
          className="relative z-10 font-medium font-euclid"
          variants={{
            rest: { color: colors.text },
            hover: { color: "#ffffff" },
            active: { color: "#ffffff" }, // Turns white when tapped on mobile to contrast against the ripple
          }}
          transition={{ duration: 0.25 }}
        >
          {children}
        </motion.span>
      )}

      {/* ── Icon ── */}
      {icon && (
        <motion.span
          layout={hasBoth && !isTouch}
          className="relative z-10 flex items-center justify-center"
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