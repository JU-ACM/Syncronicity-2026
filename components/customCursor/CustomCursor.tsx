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
  // NEW: State to track if it's a touch device
  const [isTouchDevice, setIsTouchDevice] = useState<boolean>(false);
  
  const modeRef = useRef<CursorMode>("default");
  const { pathname } = useLocation();

  // Detect touch devices on component mount
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

  useEffect(() => {
    updateMode("default");
  }, [pathname]);

  useEffect(() => {
    // If it's a touch device, we don't even need to attach event listeners
    if (isTouchDevice) return;

    const cursor = cursorRef.current;
    if (!cursor) return;

    const moveCursor = (e: MouseEvent) => {
      cursor.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;

      if (modeRef.current === "grab") return;

      const target = e.target as HTMLElement;
      if (!target) return;

      const isHoverable = target.closest(
        "a, button, input, select, textarea, [role='button'], .cursor-pointer, .hover-target"
      );

      updateMode(isHoverable ? "hover" : "default");
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

    window.addEventListener("mousemove", moveCursor);
    document.addEventListener("mousedown", handleMouseDown);
    document.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("mousedown", handleMouseDown);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isTouchDevice]); // Added isTouchDevice to dependency array

  const renderCursorIcon = (): React.JSX.Element => {
    if (cursorMode === "grab") {
      return <GrabIcon color="white" stroke="black" size={30} className="-translate-x-3" />;
    }
    if (cursorMode === "hover") {
      return <PointerIcon color="white" stroke="black" size={30} className="-translate-x-3" />;
    }
    return <CursorIcon color="#FFF" stroke="#000" size={30} className="-translate-1" />;
  };

  // NEW: Return null (render nothing) if the user is on a touch device
  if (isTouchDevice) return null;

  return (
    <div
      ref={cursorRef}
      className="custom-cursor fixed top-0 left-0 z-9999 pointer-events-none"
    >
      {renderCursorIcon()}
    </div>
  );
};

export default CustomCursor;