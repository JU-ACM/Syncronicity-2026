import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Download, FileText, BadgeDollarSign, BadgeIndianRupee } from "lucide-react";

interface BrochureOption {
    label: string;
    href: string;
    icon: React.ReactNode;
}

const brochureOptions: BrochureOption[] = [
    {
        label: "Information Brochure",
        href: "/brochure.pdf",
        icon: <FileText size={16} />,
    },
    {
        label: "Sponsor Brochure USD",
        href: "https://drive.google.com/file/d/189V-KQUbn4oBQAgzqyQU8OLQ4GOjV0Gb/view?usp=sharing",
        icon: <BadgeDollarSign size={16} />,
    },
    {
        label: "Sponsor Brochure INR",
        href: "https://drive.google.com/file/d/1aZiBrGl6mgFk97i-xBgp1XgAiOzJwWRD/view?usp=sharing",
        icon: <BadgeIndianRupee size={16} />,
    },
];

interface BrochureDropdownProps {
    /** "desktop" for hover-triggered, "mobile" for click-triggered */
    variant?: "desktop" | "mobile";
    children: React.ReactNode;
}

const BrochureDropdown: React.FC<BrochureDropdownProps> = ({
    variant = "desktop",
    children,
}) => {
    const [isOpen, setIsOpen] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);
    const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

    // Close on click outside
    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (
                containerRef.current &&
                !containerRef.current.contains(e.target as Node)
            ) {
                setIsOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const handleMouseEnter = () => {
        if (variant !== "desktop") return;
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
        setIsOpen(true);
    };

    const handleMouseLeave = () => {
        if (variant !== "desktop") return;
        timeoutRef.current = setTimeout(() => setIsOpen(false), 200);
    };

    const handleClick = () => {
        if (variant === "mobile") {
            setIsOpen((prev) => !prev);
        }
    };

    return (
        <div
            ref={containerRef}
            className="relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            {/* Trigger button */}
            <div onClick={handleClick} className="cursor-pointer">
                {children}
            </div>

            {/* Dropdown */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -8, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -8, scale: 0.95 }}
                        transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
                        className={`absolute z-[6000] ${variant === "mobile"
                            ? "left-0 right-0 bottom-full mb-2"
                            : "right-0 mt-2 min-w-[220px]"
                            } bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden`}
                    >
                        {brochureOptions.map((option, index) => (
                            <motion.a
                                key={option.label}
                                href={option.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.05, duration: 0.2 }}
                                className="flex items-center gap-3 px-5 py-3.5 text-sm font-medium text-gray-700 hover:bg-[#155DFC]/8 hover:text-[#155DFC] transition-colors duration-200 first:rounded-t-xl last:rounded-b-xl"
                                onClick={() => setIsOpen(false)}
                            >
                                <span className="text-[#155DFC]/60">{option.icon}</span>
                                <span className="font-euclid">{option.label}</span>
                                <Download size={14} className="ml-auto text-gray-400" />
                            </motion.a>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default BrochureDropdown;
export { BrochureDropdown };
