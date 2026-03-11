import "./CustomCursor.css";

import React, { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import CursorIcon from "../icons/CursorIcon";
import PointerIcon from "../icons/PointerIcon";
import GrabIcon from "../icons/GrabIcon";

type CursorMode = "default" | "hover" | "grab";

const CustomCursor = (): React.JSX.Element | null => {
  const cursorRef = useRef<HTMLDivElement>(null);

  const [cursorMode, setCursorMode] = useState<CursorMode>("default");
  const [isTouchDevice, setIsTouchDevice] = useState<boolean>(false);
  
  const modeRef = useRef<CursorMode>("default");
  const { pathname } = useLocation();

  // 1. Detect touch devices on component mount
  useEffect(() => {
    const checkTouchDevice = () => {
      return (
        window.matchMedia("(pointer: coarse)").matches ||
        "ontouchstart" in window ||
        navigator.maxTouchPoints > 0
      );
    };
    setIsTouchDevice(checkTouchDevice());
  }, []);

  const updateMode = (newMode: CursorMode) => {
    if (modeRef.current !== newMode) {
      modeRef.current = newMode;
      setCursorMode(newMode);
    }
  };

  // 2. Reset cursor mode on route change
  useEffect(() => {
    updateMode("default");
  }, [pathname]);

  // 3. Main Event Listeners for Movement, Hover, and Visibility
  useEffect(() => {
    if (isTouchDevice) return;

    const cursor = cursorRef.current;
    if (!cursor) return;

    let isVisible = false;

    // --- NEW: Window Boundary Logic ---
    const handleMouseLeaveWindow = () => {
      cursor.style.opacity = "0";
      isVisible = false;
    };

    const handleMouseEnterWindow = () => {
      cursor.style.opacity = "1";
      isVisible = true;
    };

    // --- Movement Logic ---
    const moveCursor = (e: MouseEvent) => {
      // Failsafe: If the cursor is moving but currently hidden (e.g., on page load), show it.
      if (!isVisible) {
        cursor.style.opacity = "1";
        isVisible = true;
      }
      cursor.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
    };

    // --- Hover / Click Logic ---
    const handleMouseOver = (e: MouseEvent) => {
      if (modeRef.current === "grab") return;
      const target = e.target as HTMLElement;
      if (!target) return;

      const isHoverable = target.closest(
        "a, button, input, select, textarea, [role='button'], .cursor-pointer, .hover-target"
      );
      updateMode(isHoverable ? "hover" : "default");
    };

    const handleMouseOut = () => {
      if (modeRef.current === "grab") return;
      updateMode("default");
    };

    const handleMouseDown = () => {
      updateMode("grab");
    };

    const handleMouseUp = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target) {
        updateMode("default");
        return;
      }

      const isHoverable = target.closest(
        "a, button, input, select, textarea, [role='button'], .cursor-pointer, .hover-target"
      );
      updateMode(isHoverable ? "hover" : "default");
    };

    // Attach listeners
    window.addEventListener("mousemove", moveCursor, { passive: true });
    
    // Listen for mouse entering and leaving the HTML document
    document.addEventListener("mouseleave", handleMouseLeaveWindow);
    document.addEventListener("mouseenter", handleMouseEnterWindow);

    document.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseout", handleMouseOut);
    document.addEventListener("mousedown", handleMouseDown);
    document.addEventListener("mouseup", handleMouseUp);

    return () => {
      // Cleanup
      window.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("mouseleave", handleMouseLeaveWindow);
      document.removeEventListener("mouseenter", handleMouseEnterWindow);
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseout", handleMouseOut);
      document.removeEventListener("mousedown", handleMouseDown);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isTouchDevice]);

  const renderCursorIcon = (): React.JSX.Element => {
    if (cursorMode === "grab") {
      return <GrabIcon color="white" stroke="black" size={30} className="-translate-x-3" />;
    }
    if (cursorMode === "hover") {
      return <PointerIcon color="white" stroke="black" size={30} className="-translate-x-3" />;
    }
    return <CursorIcon color="#FFF" stroke="#000" size={30} className="-translate-1" />;
  };

  if (isTouchDevice) return null;

  return (
    <div
      ref={cursorRef}
      className="custom-cursor fixed top-0 left-0 z-9999 pointer-events-none"
      style={{ 
        opacity: 0, // Start hidden until the user moves their mouse into the window
      }}
    >
      {renderCursorIcon()}
    </div>
  );
};

export default CustomCursor;