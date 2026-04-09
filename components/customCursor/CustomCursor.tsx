import "./CustomCursor.css";

import React, { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import CursorIcon from "../icons/CursorIcon";
import PointerIcon from "../icons/PointerIcon";
import GrabIcon from "../icons/GrabIcon";

type CursorMode = "default" | "hover" | "grab";

const CustomCursor = (): React.JSX.Element | null => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const modeRef = useRef<CursorMode>("default");
  const [isTouchDevice, setIsTouchDevice] = useState<boolean>(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const checkTouchDevice = () =>
      window.matchMedia("(pointer: coarse)").matches ||
      "ontouchstart" in window ||
      navigator.maxTouchPoints > 0;
    setIsTouchDevice(checkTouchDevice());
  }, []);

  // Directly set data-mode attribute — no React state, no re-render
  const setMode = (newMode: CursorMode) => {
    if (modeRef.current === newMode) return;
    modeRef.current = newMode;
    if (cursorRef.current) {
      cursorRef.current.dataset.mode = newMode;
    }
  };

  useEffect(() => {
    setMode("default");
  }, [pathname]);

  useEffect(() => {
    if (isTouchDevice) return;

    const cursor = cursorRef.current;
    if (!cursor) return;

    let isVisible = false;

    const handleMouseLeaveWindow = () => {
      cursor.style.opacity = "0";
      isVisible = false;
    };

    const handleMouseEnterWindow = () => {
      cursor.style.opacity = "1";
      isVisible = true;
    };

    const moveCursor = (e: MouseEvent) => {
      if (!isVisible) {
        cursor.style.opacity = "1";
        isVisible = true;
      }
      cursor.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
    };

    const handleMouseOver = (e: MouseEvent) => {
      if (modeRef.current === "grab") return;
      const target = e.target as HTMLElement;
      if (!target) return;
      const isHoverable = target.closest(
        "a, button, input, select, textarea, [role='button'], .cursor-pointer, .hover-target"
      );
      setMode(isHoverable ? "hover" : "default");
    };

    const handleMouseOut = () => {
      if (modeRef.current === "grab") return;
      setMode("default");
    };

    const handleMouseDown = () => setMode("grab");

    const handleMouseUp = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target) { setMode("default"); return; }
      const isHoverable = target.closest(
        "a, button, input, select, textarea, [role='button'], .cursor-pointer, .hover-target"
      );
      setMode(isHoverable ? "hover" : "default");
    };

    window.addEventListener("mousemove", moveCursor, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeaveWindow);
    document.addEventListener("mouseenter", handleMouseEnterWindow);
    document.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseout", handleMouseOut);
    document.addEventListener("mousedown", handleMouseDown);
    document.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("mouseleave", handleMouseLeaveWindow);
      document.removeEventListener("mouseenter", handleMouseEnterWindow);
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseout", handleMouseOut);
      document.removeEventListener("mousedown", handleMouseDown);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isTouchDevice]);

  if (isTouchDevice) return null;

  return (
    <div
      ref={cursorRef}
      data-mode="default"
      className="custom-cursor fixed top-0 left-0 z-9999 pointer-events-none"
      style={{ opacity: 0 }}
    >
      <span className="cursor-icon cursor-icon--default">
        <CursorIcon color="#FFF" stroke="#000" size={30} className="-translate-1" />
      </span>
      <span className="cursor-icon cursor-icon--hover">
        <PointerIcon color="white" stroke="black" size={30} className="-translate-x-3" />
      </span>
      <span className="cursor-icon cursor-icon--grab">
        <GrabIcon color="white" stroke="black" size={30} className="-translate-x-3" />
      </span>
    </div>
  );
};

export default CustomCursor;
