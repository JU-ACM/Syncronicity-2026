import { motion, useAnimation } from "framer-motion";
import { useState, useEffect, useCallback, type ReactNode } from "react";

interface FunkyColorButtonProps {
  children?: ReactNode;
  icon?: ReactNode;
  onClick?: () => void;
  color1?: string;
  color2?: string;
  textColor?: string;
  className?: string;
}

export default function FunkyColorButton({
  children,
  icon,
  onClick,
  color1 = "#1d4ed8",
  color2 = "#e11d48",
  textColor = "#ffffff",
  className = "",
}: FunkyColorButtonProps) {
  const [hovered, setHovered] = useState<boolean>(false);
  const [isTouch, setIsTouch] = useState<boolean>(false);
  const rippleControls = useAnimation();

  useEffect(() => {
    const mq = window.matchMedia("(hover: none) and (pointer: coarse)");
    setIsTouch(mq.matches);

    const handler = (e: MediaQueryListEvent) => setIsTouch(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  const hasBoth = Boolean(children && icon);
  const isIconOnly = Boolean(!children && icon);

  const paddingClass = isIconOnly ? "p-3" : "px-6 py-2";
  const gapClass = hasBoth ? "gap-4" : "";
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
      className={`relative flex items-center justify-center rounded-full cursor-pointer select-none border-none overflow-hidden ${paddingClass} ${gapClass} ${directionClass} ${className}`}
      style={{ backgroundColor: color1 }}
      initial="rest"
      whileHover={!isTouch ? "hover" : undefined}
      whileTap="active"
      variants={{
        rest: { scale: 1 },
        active: { scale: isTouch ? 0.96 : 0.95 },
      }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
    >
      {/* ── Funky Liquid Fill Background (hover only, non-touch) ── */}
      {!isTouch && (
        <motion.div
          className="absolute inset-0 z-0 rounded-full pointer-events-none origin-left"
          style={{ backgroundColor: color2 }}
          variants={{
            rest: { scaleX: 0 },
            hover: { scaleX: 1 },
            active: { scaleX: 1 },
          }}
          transition={{ duration: 0.4, type: "spring", bounce: 0.25 }}
        />
      )}

      {/* ── True Touch Ripple Overlay (touch only) ── */}
      {isTouch && (
        <motion.div
          className="absolute z-0 rounded-full pointer-events-none"
          style={{ 
            backgroundColor: color2,
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
            y: "-50%" 
          }}
          animate={rippleControls}
        />
      )}

      {/* ── Label ── */}
      {children && (
        <motion.span
          layout={hasBoth && !isTouch}
          className="relative z-10"
          style={{ color: textColor }}
        >
          {children}
        </motion.span>
      )}

      {/* ── Icon ── */}
      {icon && (
        <motion.span
          layout={hasBoth && !isTouch}
          className="relative z-10 flex items-center justify-center"
          style={{ color: textColor }}
          variants={
            !isTouch
              ? {
                  rest: { color: textColor },
                  hover: { color: "#ffffff" },
                  active: { color: "#ffffff" },
                }
              : undefined
          }
          transition={{ duration: 0.25 }}
        >
          {icon}
        </motion.span>
      )}
    </motion.button>
  );
}